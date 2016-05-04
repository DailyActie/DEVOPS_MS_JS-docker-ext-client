# This application requires the dockerextnode backend

https://github.com/savelee/docker-node-server
Run with +nodemon app.js+

# Create an admin account:

 > curl -H "Content-Type: application/json" -X POST  -d '{ "username" : "admin", "password": "admin" }' http://127.0.0.1:9000/register

# Visit Sencha client app and login:

1. +sencha app watch+
2. Open your browser, and browse to: http://127.0.0.1:1841
3. Login with your admin account
