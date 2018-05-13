var mongoose = require('mongoose');
// connect to db
mongoose.connect('mongodb://nodeProject:nodeProject@ds119060.mlab.com:19060/nodejs-project');
// create schema, this is like a blueprint
var politicsSchema = new mongoose.Schema({
  politician: String
});
// create model or collection
var Politics = mongoose.model('Politic', politicsSchema);
// var data = ['Aregbesola','Tinunbu','Obasanjo','Ambode','Babaginda'];

module.exports = function(app, urlencodedParser){

  app.get('/', (req, res)=>{
    Politics.find({}, (err, data)=>{
      res.render('home', {datas:data});
    });
  });

};
