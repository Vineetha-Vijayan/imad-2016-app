var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles : {
    
    var articleOne{
    
    title :'Article One |Vineetha Vijayan',
    heading :'Article One',
    date :'Sep9',
        content:
             ` <p>
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
                
                
            </p>`
    
    
    },
    
var articleTwo{
    
      title :'Article Two |Vineetha Vijayan',
    heading :'Article Two',
    date :'Sep 29',
        content:
             ` <p>
                Hi! This is Vineetha Vijayan and this is my second Article. Please go trough thhis 
                Hoping that his will be useful.
                
                
            </p>`
           
    
    
    
    
    
},
var articleThree{  
    
    title :'Article Three |Vineetha Vijayan',
    heading :'Article Three',
    date :'Sep 29',
        content:
             ` <p>
                Hi! This is Vineetha Vijayan and this is my third  Article. Please go trough thhis 
                Hoping that his will be useful.
                
                
            </p>`
           
}
     
    
    
};
function createTemplate(data){
    var title=  data.title;
    var date =  data.date;
    var heading = data.heading;
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
    </html>`
    ;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone', function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/articletwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});
app.get('/articlethree', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
