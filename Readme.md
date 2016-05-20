# This application requires the dockerextnode backend

https://github.com/savelee/docker-node-server
Run with `nodemon app.js`

# Create an admin account:

` > curl -H "Content-Type: application/json" -X POST  -d '{ "username" : "admin", "password": "admin" }' http://127.0.0.1:9000/register`

# Visit Sencha client app and login:

1. `sencha app watch`
2. Open your browser, and browse to: http://127.0.0.1:1841
3. Login with your admin account

# Here's the docker-compose.yml

Make a sencha production build first:
`sencha app build`

<pre>
client:
    build: ./client
    restart: always
    ports:
      - "80:80"
    links:
      - server
server:
    build: ./server
    restart: always
    ports:
     - "9000:9000"
    links:
     - mongo
mongo:
  image: mongo
  command: --smallfiles
  restart: always
  ports:
    - "27017:27017"
</pre>
