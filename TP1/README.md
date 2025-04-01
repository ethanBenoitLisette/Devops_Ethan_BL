# Ping API - TypeScript

## Description
Ce projet est une API simple développée en TypeScript avec Express. L'API retourne les en-têtes de la requête HTTP GET sur `/ping` et renvoie une réponse vide avec un code 404 pour toute autre requête.
  
## Install et Exécution

### Prérequis
- Node.js (version 16 ou plus recommandée)
- npm ou yarn

### Install

Clonez le projet et installez les dépendances :
```sh
git clone <repo_url>
cd ping-api-ts
npm install
```

### Config
Définissez la variable d'environnement `PING_LISTEN_PORT` pour choisir le port d'écoute (facultatif) :
```sh
export PING_LISTEN_PORT=4000  # Pour Linux/macOS
set PING_LISTEN_PORT=4000  # Pour Windows
```

### Lancement du serveur
Ajoutez un script de démarrage dans `package.json` :
```json
"scripts": {
  "start": "ts-node src/index.ts"
}
```
Puis, lancez le serveur avec :
```sh
npm start
```
Par défaut, le serveur écoute sur le port 3000 si `PING_LISTEN_PORT` n'est pas défini.

## Test de l'API

### Vérifier la route `/ping`
Utilisez `curl` ou un navigateur pour tester la route :
```sh
curl.exe -i http://localhost:3000/ping
```

### Tester un autre endpoint (renvoie 404)
```sh
curl.exe -i http://localhost:3000/other
```

## Arborescence du projet
```
ping-api-ts/
│-- src/
│   ├── index.ts  # Code principal du serveur
│-- package.json  # Fichier de configuration npm
│-- tsconfig.json  # Configuration TypeScript
│-- .env  # Fichier des variables d'environnement (optionnel)
│-- README.md  # Documentation du projet
```

## Déploiement
Pour un déploiement sur un serveur, utilisez un gestionnaire de processus comme PM2 :
```sh
npm install -g pm2
pm run build
pm start
```

---

## Code Source (index.ts)
```typescript
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PING_LISTEN_PORT || 3000;

app.get('/ping', (req: Request, res: Response) => {
    res.json(req.headers);
});

app.use((req: Request, res: Response) => {
    res.status(404).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```
