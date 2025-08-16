# Contributing to SaveBest.org

Thank you for your interest in improving SaveBest.org!

## Scope

This project is a static, front‑end only website hosted on GitHub Pages. There is no server, database, or backend service.

- Do not add server‑side code, webhooks, or backend integrations
- Do not include references to automation platforms (e.g., Zapier) or private endpoints
- Do not commit secrets, API keys, or credentials

## Tech stack

- HTML, CSS, and vanilla JavaScript
- Static assets in `assets/`
- Pages include `index.html` and landing pages under `lp/`

## Local development

You can view the site locally with any static file server, for example:

```bash
# Option 1: Python
python3 -m http.server 8000
# Then open http://localhost:8000

# Option 2: Node (http-server)
npx http-server -p 8000 .
```

## Contribution guidelines

- Keep changes focused and incremental
- Favor accessibility, performance, and mobile responsiveness
- Optimize images and store them under `assets/`
- Avoid introducing dependencies unless strictly necessary for front‑end
- Link out to external services instead of embedding private integrations

## Security and privacy

- Never commit secrets or tokens; only use public, client‑safe keys
- If an external API is required, ensure it is designed for client‑side usage

## Submitting changes

1. Create a new branch
2. Make and test your changes locally
3. Open a pull request describing the change and any visual impact

By contributing, you agree that your contributions will be licensed under the repository’s license.