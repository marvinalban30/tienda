"""Windows desktop entry point for the Django POS application."""
import os
import shutil
import sys
import threading
import time
import urllib.request
from pathlib import Path


def application_root():
    if getattr(sys, "frozen", False):
        return Path(sys._MEIPASS)
    return Path(__file__).resolve().parent


def start_server():
    root = application_root()
    store_dir = root / "store"
    sys.path.insert(0, str(store_dir))
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "store.settings")
    data_dir = Path(os.environ.get("APPDATA", Path.home())) / "TiendaPOS"
    data_dir.mkdir(parents=True, exist_ok=True)
    os.environ.setdefault("TIENDA_DATA_DIR", str(data_dir))
    database = data_dir / "db.sqlite3"
    bundled_database = store_dir / "db.sqlite3"
    if not database.exists() and bundled_database.exists():
        shutil.copy2(bundled_database, database)

    from django.core.management import call_command

    call_command(
        "runserver",
        "127.0.0.1:8000",
        use_reloader=False,
        use_threading=True,
        verbosity=0,
    )


def wait_for_server(url):
    for _ in range(100):
        try:
            urllib.request.urlopen(url, timeout=0.2)
            return
        except (OSError, urllib.error.URLError):
            time.sleep(0.1)
    raise RuntimeError("No se pudo iniciar el servidor local de Tienda POS.")


def main():
    import webview

    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    wait_for_server("http://127.0.0.1:8000/login")
    webview.create_window("Tienda POS", "http://127.0.0.1:8000/login", width=1280, height=800)
    webview.start()


if __name__ == "__main__":
    main()