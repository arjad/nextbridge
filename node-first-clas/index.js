const express = require('express')
const app = express()

app.use(express.json());

const movies = [
    { 
        id:1,
        title:'movie First',
        body:'Movie Body'
    },
    
    {
        id:2,
        title:'movie Second',
        body:'Movie Body'
    },
    
    {
        id:3,
        title:'movie Third',
        body:'Movie Body'
    }
]
app.get('/movies/:movieId/:authorId', function (req, res) 
{   
    res.send(movies.find(movie=> movie.id == req.params.movieId));
})

app.get('/movies', function (req, res) {
    res.send(movies);
  })

  app.post('/movies', function (req, res) {
     console.log(req.body);
    movies.push({ id: movies.length + 1,title: req.body.title,body: req.body.body});    
    res.send(movies[movies.length-1]);
  })

  app.put('/movies/:movieId', function (req, res) {
    
    const movieIndex = movies.findIndex(movie => movie.id == req.params.movieId);
    console.log(movieIndex) 
    if(movieIndex !== -1) {
        
    movies[movieIndex].title = req.body.title;
    movies[movieIndex].body = req.body.body;    
    res.send(movies[movieIndex]);
   } else {
     res.send({
       message:"Movie not exist"
     })
   }
 })

 app.delete('/movies/:movieId', function (req, res) {
    
  const movieIndex = movies.findIndex(movie => movie.id == req.params.movieId);
  console.log(movieIndex) 
  if(movieIndex !== -1) {
 
  movies.splice(movieIndex,1)
    
  res.send({
    message:'Movie deleted successfully'
  });
 } else {
   res.send({
     message:"Movie not exist"
   })
 }
})
app.get('/', function (req, res) {
    res.send('Hello World')
  })



app.listen(3001,()=>console.log('Successfully'))