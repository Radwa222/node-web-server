const express=require('express');
const hbs=require('hbs');

var app = express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partial');
hbs.registerHelper('getDate', ()=>
{
return new Date().getFullYear();
});
app.use(express.static(__dirname+'/public')); 

 ///app.use((req,res,next)=>{
    // res.render('mid.hbs');
 //});

app.get('/', (req,res) =>
{
  res.render('home.hbs',
  {
     
    pageTitle:'HOMEEEEE1' ,
  });
});

app.get('/about', (req,res) =>
{
 res.render('about.hbs' , 
 {
     pageTitle:'ABOUT' ,
 });    
});

app.get('/bad', (req,res) =>
{
 res.send( {
   errormessage:'unable to handle req'
     
 });
});
app.listen(3000);
