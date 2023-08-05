# App Mailer

## Sendgrid
omar.garcia@omargl.net

## Mailinator
omar@mailinator.com

## Create mailer
npm init -y

npm i -S express dotenv @sendgrid/mail

### Dependencias
- dotenv -> nos permite tener variables de entorno (.env)
- @sendgrid/mail -> API para enviar correos

### package.json (module)
{
  "name": "15_mailer",
  "version": "1.0.0",
  "description": "mailer app",
  "main": "index.js",
  "type": "module",
  ...
  }

### index.js

### Sendgrid
Email API
Integration guide
API key name: mailer
Copy generated key and paste it inside .env
SGKEY=paste generated key and save de file
FROM=registered mail
