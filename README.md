# MigueMoreiraIT — Homepage

Sitio principal de mi marca personal, [MigueMoreiraIT](https://miguemoreirait.com) — Lic. en Tecnología de la Información orientado a ciberseguridad.

## Sobre el proyecto

Landing de una sola página con:
- Presentación profesional y credenciales
- Habilidades técnicas
- Servicios (Revisión de Perfil Técnico, Asesoría 1:1, Charla de Concientización para pymes)
- Trabajos realizados (en construcción)
- Preguntas frecuentes
- Formulario de contacto

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Fuentes: Instrument Serif, Geist, JetBrains Mono

## Estructura

```
app/          # rutas y layout principal
components/   # componentes de UI (nav, hero, tarjetas, secciones)
lib/data/     # contenido separado del diseño (servicios, trabajos, FAQs, nav)
public/       # assets estáticos, incluye el logo oficial (SVG)
```

El contenido de servicios y trabajos vive en `lib/data/` para poder actualizarse sin tocar los componentes visuales.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Deploy

Desplegado en [Vercel](https://vercel.com/), con deploy automático en cada push a `main`.

## Marca

El sistema de marca (paleta, tipografía, logo y reglas de uso) sigue el Brandbook oficial de MigueMoreiraIT. El logo se usa siempre como asset SVG fijo (`public/logos/`), nunca regenerado desde código.

---

**Miguel A. Moreira** — [@miguemoreirait](https://instagram.com/miguemoreirait) · miguemoreirait@gmail.com
