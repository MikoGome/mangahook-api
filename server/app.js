const ApiKey = require("./middleware/apiKeyMiddleware")
const app = require("express")()
const bodyParser = require("body-parser")
const mangaRouter = require("./routes/mangaRouter")
const mangaListRouter = require("./routes/mangaListRouter")
const mangaSearch = require("./routes/mangaSearch")

app.use(bodyParser.json())
app.options((req, res, next) => {
  // Allow any domain to access your server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(200);
})

require('dotenv').config()

app.use(ApiKey)
app.use("/api/manga", mangaRouter)
app.use("/api/mangaList", mangaListRouter)
app.use("/api/search", mangaSearch)

app.listen(process.env.PORT, ()=>{
    console.log(`Server Start On Port ${process.env.PORT} 🎉✨ `)
})
