# RON3IA Console

Interfaz SPA construida con **React + Vite + TypeScript + TailwindCSS**.

## Requisitos
- Node.js 20+
- npm 10+

## Scripts
- `npm run dev` → servidor de desarrollo
- `npm run build` → build de producción (`tsc -b && vite build`)
- `npm run preview` → previsualizar build
- `npm run lint` → ESLint
- `npm run type-check` → TypeScript check
- `npm run check` → lint + build

## Ejecutar local
```bash
npm ci
npm run dev
```

Abrir: `http://localhost:5173/`

## Troubleshooting (pantalla en blanco)
Si ves `ERR_CONNECTION_REFUSED`, el problema no es React: el servidor no está arriba o el puerto no está accesible.

Verifica:
```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

## Deploy (GitHub Pages)
Este repo incluye workflow en `.github/workflows/deploy-pages.yml`.

- Hace `npm ci`, `npm run lint`, `npm run build`.
- Publica `dist/` en GitHub Pages.

Para customizar el `base` de Vite usa variable:
- `VITE_BASE_PATH=/ron3ia-console/` (o la ruta que corresponda)

Por defecto usa `./`, útil para hosting estático portable.
