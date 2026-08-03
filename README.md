# Point of Sale (POS) System

## Description
This project is Built with Django.
This project is a Point of Sale (POS) system designed to optimize retail operations. Featuring a user-friendly shopping cart interface and robust reporting capabilities, it allows for efficient transaction processing, inventory tracking, and supplier monitoring. Ideal for small and medium-sized retail businesses.

## Features
- User-friendly shopping cart interface
- Robust reporting capabilities
- Inventory tracking
- Supplier monitoring
- Sales reports generation
- PDF and Excel report exports

## Prerequisites
- Python 3.8+ (recommended: 3.10 for exact reproducibility)
- pip (incluido con Python)
- Pipenv (opcional, se usan instrucciones con Pipenv en este proyecto)

## Dependencias detectadas (Pipfile)
Se encontró un Pipfile en la raíz del proyecto con las siguientes dependencias listadas:
- django
- openpyxl
- xhtml2pdf
- reportlab
- fpdf

El Pipfile requiere python_version = "3.10" (nota: este sistema puede usar una versión diferente de Python; ver la sección "Advertencias").

## Instalación (recomendada: Pipenv, Windows / PowerShell)
1. Clonar el repositorio:
    ```powershell
    git clone https://github.com/username/tienda.git
    cd tienda
    ```
2. Instalar pipenv (usuario):
    ```powershell
    py -3 -m pip install --user pipenv
    ```
3. Crear el entorno e instalar dependencias desde Pipfile:
    ```powershell
    py -3 -m pipenv install
    # Si hay problemas con el lockfile o quieres acelerar:
    py -3 -m pipenv install --skip-lock
    ```

Nota: en este repositorio el archivo manage.py está dentro de la carpeta `store` (ruta: `store\manage.py`).

## Uso / Ejecutar la aplicación (comandos exactos detectados)
1. Aplicar migraciones (desde la raíz del repo):
    ```powershell
    py -3 -m pipenv run python store\manage.py makemigrations
    py -3 -m pipenv run python store\manage.py migrate
    ```
2. (Opcional) Crear superusuario para acceder a /admin:
    ```powershell
    py -3 -m pipenv run python store\manage.py createsuperuser
    ```
3. Ejecutar servidor de desarrollo (se inició con: 0.0.0.0:8000):
    ```powershell
    py -3 -m pipenv run python store\manage.py runserver 0.0.0.0:8000
    ```
4. Abrir en el navegador:
    http://127.0.0.1:8000  (o http://localhost)

## Advertencias y notas detectadas
- El Pipfile pide Python 3.10, pero en el sistema usado para probar estaba Python 3.14.6. Pipenv mostrará una advertencia si la versión del intérprete no coincide con `requires.python_version` del Pipfile. Para reproducibilidad exacta, se recomienda usar Python 3.10 y recrear el entorno:
    ```powershell
    py -3 -m pipenv --rm
    py -3 -m pipenv install --python 3.10
    ```
- En la prueba local se creó el virtualenv en `.venv` dentro del proyecto: `.venv\`.
- Django mostró la advertencia: "The directory './static' in the STATICFILES_DIRS setting does not exist." Si usas archivos estáticos, crea la carpeta `static` o ajusta `STATICFILES_DIRS` en `settings.py`.

## Comandos útiles adicionales
- Parar el servidor (desde PowerShell, usando el PID):
    ```powershell
    Stop-Process -Id <PID>
    ```
  (Si no conoces el PID, usar el Task Manager o `Get-Process python`.)
- Ejecutar con un puerto distinto:
    ```powershell
    py -3 -m pipenv run python store\manage.py runserver 8001
    ```
- Recolectar archivos estáticos (producción):
    ```powershell
    py -3 -m pipenv run python store\manage.py collectstatic --noinput
    ```


## License
This project is licensed under the MIT License.



## License
This project is licensed under the MIT License.

## Screenshoots
![Screenshot_1](https://github.com/Waldo0137/tienda/assets/54595253/f70ea2cf-bba0-4d99-8839-48ae8b0357da)
![Screenshot_2](https://github.com/Waldo0137/tienda/assets/54595253/847032b9-eb67-41de-bf89-e1babf66b076)
![Screenshot_3](https://github.com/Waldo0137/tienda/assets/54595253/a401fd11-148b-4b3c-8a7e-8c2e7e60cbcd)
![Screenshot_4](https://github.com/Waldo0137/tienda/assets/54595253/4f98f4e1-8712-460a-9b2e-7db9d30454f6)
![Screenshot_5](https://github.com/Waldo0137/tienda/assets/54595253/fe5b6a6d-64d6-4cf9-b767-341a07bfb004)
![Screenshot_6](https://github.com/Waldo0137/tienda/assets/54595253/afec0024-346d-4119-b1f9-e3ea3cab28dc)
![Screenshot_7](https://github.com/Waldo0137/tienda/assets/54595253/cee83edb-9cd9-4b09-8a04-6fa2c9adc7d1)
![Screenshot_8](https://github.com/Waldo0137/tienda/assets/54595253/1a36b00a-6055-47bf-893e-84e83c9d7000)
![Screenshot_9](https://github.com/Waldo0137/tienda/assets/54595253/d16453c8-516a-40d8-951c-df6ae83f35df)
![Screenshot_10](https://github.com/Waldo0137/tienda/assets/54595253/3d8ec858-8458-4d66-aa69-0bfb1b2be6e1)
![Screenshot_11](https://github.com/Waldo0137/tienda/assets/54595253/e41b4ffe-6cd1-4da6-8045-522af7abb7f7)
