const controller = require('../controllers/indexControllers.js')

app.get('/',controller.index);

app.get('/muscular',controller.muscular);

app.get('/muscular/superiores',controller.superiores);

app.get('/muscular/superiores/cutaneos',controller.cutaneos);

