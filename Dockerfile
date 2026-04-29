FROM node:20-alpine

WORKDIR /app

# Instalar dependencias primero (aprovecha el cache de capas)
COPY ./museo/package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY ./museo/ ./

# El contenedor se mantiene vivo sin iniciar nada automáticamente.
# Para correr la app, ejecuta manualmente dentro del contenedor:
#   npm run dev    → servidor de desarrollo
#   npm run build  → build de producción
CMD ["sh"]