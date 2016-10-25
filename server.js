var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
        ${date}
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

app.get('/test-db',function(req,res){
    //make a select requst
    
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
app.get('/:articleName', function (req, res) {
var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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
