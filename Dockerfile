# 1. Utilise une image officielle Node.js comme base
FROM node:18

# 2. Définit le répertoire de travail dans le container
WORKDIR /app

# 3. Copie package.json et package-lock.json pour installer dépendances
COPY package*.json ./

# 4. Installe les dépendances
RUN npm install

# 5. Copie tout le reste des fichiers de ton projet dans le conteneur
COPY . .

# 6. Expose le port 3000 pour la communication externe
EXPOSE 3000

# 7. Commande pour démarrer ton application
CMD ["node", "index.js"]
