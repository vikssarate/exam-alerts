# Exam Alerts (Serverless)

Single-page web app (GitHub Pages-ready) that pulls Google News RSS + filters by **Topic** (Notifications, Admit Card, Results, etc.) and **Tag** (MPSC, SSC, UPSC, RRB, SBI, IBPS). De-duplication, time filter, text search, export/import of config, and local notifications while the page is open.

## Deploy
1. Upload all files to a GitHub repo root.
2. Enable GitHub Pages (Settings → Pages → Source = `main` / root).
3. Open `https://<username>.github.io/<repo>/`.
4. Click **Enable Notifications** in the UI.

## Add tags
Use the **Manage** button in the app or edit `TAG_PRESETS` in `index.html`.

## Notes
- True background push needs a server; this app sends notifications only while open/installed (PWA).
- CORS handled via direct fetch + two fallbacks.
