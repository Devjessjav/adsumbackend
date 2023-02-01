const app = require('./app.js');

app.listen(app.get('port'), () => {
    console.log("Servidor ARRIBA", app.get("port"));
})