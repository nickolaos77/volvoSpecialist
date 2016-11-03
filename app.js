var express      = require('express'),
    app          = express(),   
    PORT         = process.env.PORT || 3000;    
var handlebars      = require('express-handlebars').create({
        defaultLayout: 'main',
        helpers:{
            section:function(name,options){
                if(!this._sections) this._sections ={};
                this._sections[name] = options.fn(this);
                return null;
            }
        }
    });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req,res){  //see https://github.com/request/request#custom-http-headers
    res.render('home');
});
app.use(express.static(__dirname+ '/public'));
app.listen(PORT, function(){
    console.log('Express listening on port '+ PORT + '!');
});