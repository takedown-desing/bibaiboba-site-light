# Биба и Боба — сайт агентства, вариант «Light»

Превью дизайна по промту 1 (светлый, шейдер на первом экране, оранжевый акцент). Второй вариант: [bibaiboba-site-space](https://github.com/takedown-desing/bibaiboba-site-space).

- Стек: Astro 7 (статичные страницы) + Tailwind 3.4 + React-островок для шейдера (`shaders`, `lucide`-стиль иконок).
- Контент: markdown-черновики из пайплайна агентства (`src/content/pages/`), формат описан в `drafts/_context/content-format.md` проекта.
- Публикация: GitHub Actions → GitHub Pages. Превью закрыто от индексации (`noindex` + `robots.txt`), пока нет боевого домена.

```bash
npm install
npm run sync     # скопировать свежие черновики из пайплайна (локально)
npm run images   # подобрать фото Pexels (нужен PEXELS_API_KEY)
npm run build
```
