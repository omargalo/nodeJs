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
