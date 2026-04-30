# museo-React
# Museo de Arte de Chicago — demo en React

Aplicación web que lista obras de la colección pública del **Art Institute of Chicago**, muestra un detalle por obra y permite buscar en el listado, abrir una pieza al azar y alternar **tema claro / oscuro**. Está hecha con **React** y empaquetada con **Vite**.

## Stack

| Tecnología | Uso |
|------------|-----|
| **Vite** | Servidor de desarrollo, HMR y build de producción (`npm run dev`, `npm run build`). |
| **React 19** | UI con componentes y hooks. |
| **React Router DOM v6** | Rutas anidadas: inicio, listado, detalle y página 404; navegación con `<Link>` / `<NavLink>`. |
| **Context API** | Tema global (`ThemeProvider` en `src/context/Themecontext.jsx`): actualiza `data-theme` en `<html>` y los estilos usan variables CSS. |
| **PropTypes** | Validación de props en componentes reutilizables. |

## API del museo (Art Institute of Chicago)

Los datos **no están hardcodeados** en los componentes de listado/detalle: las llamadas HTTP están centralizadas en `src/museoAPI.js`.

- **Base:** `https://api.artic.edu/api/v1/artworks`
- **Documentación oficial:** [API — Art Institute of Chicago](https://api.artic.edu/docs/)
- Es una API **pública** orientada a la colección digital; en esta demo se usa un listado acotado (`limit=12`) y la ficha por `id`. Las imágenes se sirven vía **IIIF** (`iiif/2/{image_id}/...`) según los campos que devuelve cada obra.

En la página de inicio, las obras destacadas usan IDs fijos definidos en `src/pages/Home.jsx` y se consultan en paralelo a la misma API.

## Estructura del proyecto (`museo/`)

```
museo/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx              # Entrada: Router, ThemeProvider, CSS global
    ├── App.jsx               # Definición de rutas
    ├── index.css             # Reset / tipografía base
    ├── museo.css             # Layout, tema, páginas, utilidades
    ├── museoAPI.js           # Cliente fetch hacia api.artic.edu
    ├── components/           # Layout, cards, detalle textual, etc.
    ├── context/              # ThemeProvider + hook useTheme
    └── pages/                # Home, Items, Detalles, NotFound
```

La raíz del **repositorio** (un nivel arriba de `museo/`) incluye `Dockerfile` y `docker-compose.yml` para desarrollo en contenedor.

## Requisitos

- **Node.js** 20+ (recomendado, alineado con la imagen Docker)
- Navegador moderno

## Uso en local (sin Docker)

Desde la carpeta `museo/`:

```bash
npm install
npm run dev
```

Abre la URL que muestre la terminal (por defecto `http://localhost:5173`).

Otros scripts:

- `npm run build` — genera `dist/` para producción  
- `npm run preview` — sirve el build localmente  
- `npm run lint` — ESLint  

## Uso con Docker

El `docker-compose.yml` está en la **raíz del repositorio** (junto al `Dockerfile`). Monta la carpeta `museo/` en `/app` del contenedor y expone los puertos de Vite.

1. En la raíz del repo:

   ```bash
   docker compose up -d --build
   ```

2. Entra al contenedor:

   ```bash
   docker compose exec app sh
   ```

3. Dentro del contenedor, en `/app` (ya es el proyecto Vite):

   ```bash
   npm install    # primera vez o si cambian dependencias
   npm run dev -- --host 0.0.0.0
   ```

   El flag `--host 0.0.0.0` hace que el servidor de Vite escuche en todas las interfaces y sea accesible desde tu máquina en **http://localhost:5173** a través del mapeo de puertos.

Para un build de producción dentro del contenedor: `npm run build` y, si quieres previsualizar: `npm run preview -- --host 0.0.0.0` (puerto **4173** mapeado en el compose).

Para detener: `docker compose down`.

## Rutas principales

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio y galería destacada |
| `/items` | Listado con búsqueda y botón de obra aleatoria (`useNavigate`) |
| `/items/:id` | Detalle (`useParams` + `getArtworkById`) |
| `*` | Página 404 |

El layout común (cabecera, tema, `<Outlet />`) vive en `components/Layout.jsx`.

## Tema claro / oscuro

El botón en la cabecera alterna el tema. Los colores se definen como variables CSS en `museo.css` bajo `:root` / `[data-theme="light"]` y `[data-theme="dark"]`, de modo que la UI sea coherente en ambos modos.

