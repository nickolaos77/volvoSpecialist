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

app.get('/', function(req,res){  
    res.render('home');
});
app.get('/contact', function(req,res){ 
    res.render('contact');
});

app.get('/about', function(req,res){ 
    res.render('about');
});

app.get('/faq', function(req,res){ 
    res.render('faq');
});

//remove when done
app.get('/stefanou', function(req,res){ 
    res.render('stefanou');
});


app.get('/awards', function(req,res){ 
    res.render('awards');
});
app.use(express.static(__dirname+ '/public'));
app.listen(PORT, function(){
    console.log('Express listening on port '+ PORT + '!');
});