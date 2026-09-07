from pathlib import Path

from PyInstaller.utils.hooks import collect_submodules


ROOT = Path(SPECPATH)
hiddenimports = []
for package in ("core", "inventory", "pos", "purchase", "report"):
    hiddenimports.extend(collect_submodules(package))

datas = [
    (str(ROOT / "store" / "templates"), "store/templates"),
    (str(ROOT / "store" / "core" / "templates"), "core/templates"),
    (str(ROOT / "store" / "inventory" / "templates"), "inventory/templates"),
    (str(ROOT / "store" / "pos" / "templates"), "pos/templates"),
    (str(ROOT / "store" / "purchase" / "templates"), "purchase/templates"),
    (str(ROOT / "store" / "report" / "templates"), "report/templates"),
    (str(ROOT / "store" / "static"), "static"),
    (str(ROOT / "store" / "db.sqlite3"), "store"),
]

a = Analysis(
    [str(ROOT / "desktop.py")],
    pathex=[str(ROOT / "store")],
    binaries=[],
    datas=datas,
    hiddenimports=hiddenimports,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
)
pyz = PYZ(a.pure)
exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name="TiendaPOS",
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=False,
)