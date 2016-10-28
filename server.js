var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config={
    user:'vineetha-vijayan',
    database:'vineetha-vijayan',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD 
    
};

var app = express();
app.use(morgan('combined'));
  var articles={
   'article-one':{
      
      title:'ArticleOne|Vineetha Vijayan',
      heading :'Article-one',
      date:'Sep 30',
      content :`<p>
                Hi! This is Vineetha Vijayan and this is my first Article. Please go trough thhis 
                Hoping that his will be useful.
                
                
            </p>
            
             <p>
                Hi! This is Vineetha Vijayan and this is my first Article. Please go trough thhis 
                Hoping that his will be useful.
                
                
            </p>
             <p>
                Hi! This is Vineetha Vijayan and this is my first Article. Please go trough thhis .
                Hoping that his will be useful.
                
                
            </p> `
  },
   'article-two':{
       title:'ArticleTwo|Vineetha Vijayan',
      heading :'Article-two',
      date:'Sep 30',
      content :`<p>
                Hi! This is Vineetha Vijayan and this is my second Article. Please go trough thhis 
                Hoping that his will be useful.
                
                
            </p> `
   },
   'article-three':{
       title:'ArticleThree|Vineetha Vijayan',
      heading :'Article-three',
      date:'Sep 30',
      content :`<p>
                Hi! This is Vineetha Vijayan and this is my first Article. Please go trough thhis 
                Hoping that his will be useful.
                
                
            </p>
            
             <p>
                Hi! This is Vineetha Vijayan and this is my third Article. Please go trough this 
                Hoping that his will be useful.
                
                
            </p>`
   }
  };
 

function createTemplate(data){
    var title=  data.title;
    var heading = data.heading;
    var date =  data.date;
    var content = data.content;
    
var htmlTemplate=`<html>
    <head>
        <title>
            
            ${title}
        </title>
        <meta name="viewport" content="width-device-width, initial-scale-1" />
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body class="body">
        <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        
        
              <hr/>
    
        
        <div>
            <h2>
                
              ${heading}
            </h2>
            
        </div>
        <div>
        ${date.toDateString()}
        </div>
        <div>
            
    
            
        </div>
        ${content}
        </div>
        
    </body>
    </html>`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool=new Pool(config); 
app.get('/test-db',function(req,res){
    //make a select requst
    
    pool.query('SELECT*FROM test',function(err,result){
        
       if(err) {
           
           res.status(500).send(err.toString());
       }
       else{
           
           res.send(JSON.stringify(result.rows));
       }
    });
    //return response with the result
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
}); 
app.get('/submit-name',function(req,res)
{
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/articles/:articleName', function (req, res) {
//var articleName=req.params.articleName;
pool.query("SELECT * FROM article WHERE title= '" + req.params.articleName + "'", function(err,result){
    if(err) {
           
           res.status(500).send(err.toString());
       }
       else{
           
           if(result.rows.length===0){
               
               res.status(404).send('Article Not Found');
           }
           else{
               var articleData=result.rows[0];
               res.send(createTemplate(articleData));
           }
       }
    });
  //res.send(createTemplate(articles[articleName]));
 //res.send(createTemplate(articleOne));
});





app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
