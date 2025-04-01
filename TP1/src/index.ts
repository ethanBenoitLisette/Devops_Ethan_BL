// Importation des modules nécessaires
import express, { Request, Response } from 'express';  // Importation d'Express pour gérer les requêtes HTTP et des types Request et Response pour TypeScript.
import dotenv from 'dotenv';  // Importation de dotenv pour gérer les variables d'environnement.

dotenv.config();  // Charge les variables d'environnement à partir d'un fichier `.env` (si présent) pour les utiliser dans le projet.

// Création de l'application Express
const app = express();  // Création de l'application web avec Express.
const PORT = process.env.PING_LISTEN_PORT || 3000;  // Récupère le port d'écoute depuis une variable d'environnement `PING_LISTEN_PORT`. Si non défini, utilise le port 3000 par défaut.

// Définition d'une route GET pour "/ping"
app.get('/ping', (req: Request, res: Response) => {  // Cette fonction est exécutée lorsque la route "/ping" est appelée avec une requête GET.
    res.json(req.headers);  // La réponse est envoyée sous forme de JSON contenant tous les en-têtes de la requête (les informations sur la requête envoyée).
});

// Middleware pour gérer toutes les autres requêtes
app.use((req: Request, res: Response) => {  // Cette fonction est exécutée pour toutes les requêtes qui n'ont pas été traitées précédemment (celles qui ne correspondent à aucune route définie).
    res.status(404).send();  // Si aucune route n'est trouvée, la réponse renvoie un code d'erreur 404 (Page non trouvée) sans contenu.
});

// Démarrage du serveur et écoute sur le port défini
app.listen(PORT, () => {  // Démarre le serveur et le met à l'écoute sur le port spécifié (3000 ou celui défini dans les variables d'environnement).
    console.log(`Server is running on port ${PORT}`);  // Affiche dans la console que le serveur fonctionne et écoute sur le port spécifié.
});
