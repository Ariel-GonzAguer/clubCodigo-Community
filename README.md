# Revisión de código - Código Club - Community - Evento #1

Este proyecto contiene un ejemplo de revisión de código para el evento inaugural de la comunidad Código Club, de la plataforma Community de CodeCademy. Incluye una función para calcular el precio con descuento aplicado y pruebas unitarias para verificar su correcto funcionamiento.

## Descripción

La función `calcularDescuento` calcula el precio con descuento aplicado basado en el precio original y el porcentaje de descuento. La función maneja varios casos de error, como argumentos no numéricos, precios negativos y descuentos fuera del rango permitido (0-100%).

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Ariel-GonzAguer/revisionCodigo-ClubCodigo-Community.git
   ```
2. Navega al directorio del proyecto:

```sh
cd revisionCodigo-ClubCodigo-Community
```

3. Instala las dependencias:

```sh
npm install
```

## Uso

Puedes ejecutar el archivo codeReview.js para ver un ejemplo de cómo se utiliza la función calcularDescuento:

```sh
node codeReview.js
```

## Pruebas

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

```sh
npm test
```

## Estructura del Proyecto

- codeReview.js: Contiene la implementación de la función calcularDescuento y un ejemplo de uso.
- __tests__/codeReview.test.js: Contiene las pruebas unitarias para la función calcularDescuento.
- jest.config.js: Configuración de Jest para el proyecto.
- package.json: Archivo de configuración del proyecto, incluyendo dependencias y scripts.
- .gitignore: Archivo para ignorar archivos y carpetas no deseadas en el repositorio.
- README.md: Este archivo README 😅
- LICENSE: Licencia del proyecto (MIT).
- Dos imágenes: código a revisar y código revisado.
