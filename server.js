const http= require("http");
const app= require("./app");
const service= require("./service/service");
const port = service.normalizePort(process.env.PORT || '3000');
const mongoose= require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_DB_URL
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.log('Connexion à MongoDB échouée !'+err));

const server= http.createServer(app)
app.set("port", port);

const address= server.address();

const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    
server.on('error', service.errorHandler);
server.on('listening', () => {
    console.log('Listening on ' + bind);
});
  
server.listen(port);

