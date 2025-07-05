---
title: "Terminal Docker"
date: 2025-06-15T00:00:00-04:00
draft: false
exercise: Longitud_Tuberia.m
---

En esta guía veremos cómo exponer una terminal que se ejecuta dentro de un contenedor Docker y cómo incrustarla en una página generada con Hugo.

## Ejecutar ttyd en Docker

Utilizaremos la imagen [`tsl0922/ttyd`](https://github.com/tsl0922/ttyd) para publicar la terminal vía HTTP:

```bash
docker run -it --rm -p 8080:8080 tsl0922/ttyd bash
```

Al ejecutar el comando anterior, la terminal estará disponible en `http://localhost:8080`.

## Incrustar la terminal en Hugo

Podemos utilizar el shortcode `terminal` definido en `layouts/shortcodes/terminal.html`:

```markdown
{{< terminal url="http://localhost:8080" height="600" >}}
```

Esto generará un `<iframe>` que mostrará la terminal en la página.

## Terminal desde el encabezado

Además de incrustar la terminal en un artículo, hemos añadido un botón **Terminal** en la barra superior del sitio. Este botón abre una ventana flotante con la terminal expuesta desde Docker utilizando el archivo `Dockerfile` incluido en el repositorio. Para iniciar el contenedor:

```bash
docker build -t my-octave-term .
docker run --rm -p 8080:8080 my-octave-term
```

Luego simplemente pulsa el botón y se mostrará la terminal en cualquier página.

Si quieres probarla directamente desde aquí, utiliza el botón que aparece al principio del post.
