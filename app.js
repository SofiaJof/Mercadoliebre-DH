const express = require ("express");
const app = express ();
const path = require ("path");

app.listen(process.env.PORT, ()=>{
  console.log("Servidor funcionando");
})

/*
app.listen (3030, ()=>{
    console.log("servidor corriendo en el puerto 3030")
});
*/

const publicPath = path.join(__dirname, "./public")
app.use(express.static(publicPath))

app.get("/", (req, res) =>{
  let htmlPath = path.resolve (__dirname, "./view/index.html");
  res.sendFile(htmlPath);
})
    

