# carromeu.com

Site pessoal de Camilo Carromeu, gerado com Jekyll e o tema [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio).

- Conteúdo em `_pages/<idioma>/`, `_projects/<idioma>/`, `_data/<idioma>/cv.yml` e `_bibliography/papers.bib`.
- Publicação automática pelo GitHub Actions (`.github/workflows/deploy.yml`) na branch `gh-pages`.
- Desenvolvimento local (Docker/OrbStack, sem Ruby na máquina): `docker compose up --build` e abrir http://localhost:8080. Build único: `docker compose run --rm jekyll bundle exec jekyll build`.
- Analytics: PostHog (só pageviews). Erros: Sentry (Loader Script). Ambos configurados em `_config.yml`.
