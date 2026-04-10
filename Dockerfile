
FROM nginx:alpine

# Page de présentation à la racine
COPY web/index.html /usr/share/nginx/html/index.html

# Jeu construit dans /game/
COPY dist/ /usr/share/nginx/html/game/

EXPOSE 80