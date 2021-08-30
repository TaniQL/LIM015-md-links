# Md-links

## Índice

- [1. Preámbulo](#1-preámbulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Diagrama de flujo](#3-diagrama-de-flujo)
- [4. Guía de uso](#4-guía-de-uso)
---

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio.

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

## 2. Resumen del proyecto

Mdlinks es una libreria creada a partir de NodeJS, la cual leer y analiza archivos (o directorios) que están en formato Markdown(.md). Además, permite obtener estadísticas y validar el estado del link (si esta roto o es válido).

## 3. Diagrama de flujo

![alt text](img/JS_API.png)
![alt text](img/CLI.png)

## 4. Guía de uso

## Instalación

Instala la librería con npm:

` npm `


Instala la librería con github:

` npm github `


## Utilizarlo como librería


```const mdlinks = require('tql-mdlinks'); ```

Exporta la función mdLinks(<path>,<options>) este retorna una promesa, donde se resuelve un array de objetos, en caso de fallar devolverá el error.

Parámetros:
- path: (string) Ruta absoluta o relativa al archivo o directorio de donde se invoca.
- options: (objeto) con las siguiente propiedad:
   * validate: (bool) que determina si se desea validar los links encontrados.
      - false: retorna un array de objetos con  3 propiedades.
    ```[
       {
        href, //(string) link
        path, //(string) ruta absoluta
        text, //(string) texto
      }
    ]```
      - validate: retorna un array de objetos con 5 propiedades.
    ```[
       {
        href, //(string) link
        path, //(string) ruta absoluta
        text, //(string) texto
        status, ///(int) estado del link
        message, ///(string) estado del link
      }
    ]```
