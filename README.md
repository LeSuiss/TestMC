# Test technique - Recherche utilisateurs GitHub

Implémentation du test technique front en **React + TypeScript + Vite**, avec:
- recherche instantanée sur `GET https://api.github.com/search/users?q={USER}`
- gestion des cas limites (pas de résultat, rate limit GitHub API, saisie rapide)
- mode édition (bonus)
- sélection unitaire / tout sélectionner
- actions de masse: dupliquer et supprimer (front uniquement, reset au changement de recherche)
- structure **Atomic Design** et styles gérés directement via React (pas de librairie CSS)

## Architecture

Le projet suit une structure proche Atomic Design:

- `src/components/atoms`: briques UI de base (`Button`, `Checkbox`, `Input`, `Avatar`, `Badge`)
- `src/components/molecules`: assemblages simples (`SearchInput`, `UserCard`)
- `src/components/organisms`: blocs métiers (`EditToolbar`, `UsersGrid`, `FeedbackState`)
- `src/components/templates`: composition de la page (`GithubUsersSearchTemplate`)
- `src/pages`: orchestration de la logique (`GithubUsersSearchPage`)
- `src/hooks`: hooks techniques (`useDebouncedValue`, `useGithubUsersSearch`, `useVirtualGrid`, etc.)
- `src/api`: accès API GitHub (`githubApi`)
- `src/styles`: tokens + styles globaux injectés via React

## Choix techniques

- **Requête HTTP moderne**: `fetch`
- **Saisie rapide / aller-retour**:
  - debounce (`350ms`)
  - annulation des requêtes obsolètes (`AbortController`)
  - protection contre réponses hors ordre
  - cache mémoire par query
- **Édition locale**:
  - la liste API est mappée en liste affichée locale
  - duplication/suppression ne modifient que l’état front
  - reset de sélection/actions lors de tout changement de recherche

## Commandes

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run test
```

## Docker

Build + run avec Docker Compose:

```bash
docker compose up --build
```

Application disponible sur:

```text
http://localhost:8080
```

Option sans Compose:

```bash
docker build -t testmc .
docker run --rm -p 8080:8080 testmc
```

## Tests

Tests unitaires/intégration via Vitest + Testing Library sur:
- recherche instantanée
- cas sans résultat
- gestion du rate limit
- mode édition avec duplication/suppression
