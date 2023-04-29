const server = require("../src/app")
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});





















// const http = require("http");
// // const data = require("./utils/data.js") 
// const {getCharById}=require("./controllers/getCharById")


// http.createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     //Con destructuring
//     const {url} =req
//     if(url.includes("/rickandmorty/character/")) {
//       const id = url.split("/").at(-1)
//       getCharById(res,+id);
//     }
//     // if(url.includes("/rickandmorty/character/")) {
//     //     const id = url.split("/").pop()
//     //     const character = data.find (char => char.id == id)
//     //     if(character) {
//     //       res.writeHead(200,{"Content-type":"application/json"})
//     //         return res.end(JSON.stringify(character))
//     //     }

//     //     else
//     //     {
//     //       res.writeHead(404,{"Content-type":"application/json"})
//     //         return res.end(JSON.stringify({error:"Character not Found"}))
//     //     }
     
//     }



//   // console.log(req.url)
//   //   if(req.url.includes("/rickandmorty/character/")) {
//   //     res.end("Estoy en la ruta")
//   //   }

  
// ).listen(3001,"localhost")