const controller = require("./controller")

module.exports = function(app){
    app.get('/api/cakes', controller.allCakes)
    app.post('/api/cakes', controller.createCake)
    app.get('/api/cakes/:id', controller.oneCake)
    app.patch('/api/cakes/:id', controller.rateCake)
}