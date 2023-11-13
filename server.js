const express = require('express'); 

let app= express(); 

const PORT = 5000 || process.env.PORT;

app.use(express.static('wwwroot'));
app.listen(PORT, function(){
  console.log(`The port is listening on port ${PORT}....`)
});
