const ApiKey = require("./middleware/apiKeyMiddleware")
const app = require("express")()
const bodyParser = require("body-parser")
const mangaRouter = require("./routes/mangaRouter")
const mangaListRouter = require("./routes/mangaListRouter")
const mangaSearch = require("./routes/mangaSearch")

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Allow-Control-Origin', '*');
  return next();
});
require('dotenv').config()

app.use(ApiKey)
app.use("/api/manga", mangaRouter)
app.use("/api/mangaList", mangaListRouter)
app.use("/api/search", mangaSearch)

app.listen(process.env.PORT, ()=>{
    console.log(`Server Start On Port ${process.env.PORT} 🎉✨ `)
})
