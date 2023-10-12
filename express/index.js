const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8080

app.use(cors())

app.get("/api", (req, res) => {

    console.log(req.query)
    
    res.json({message: "hei"})
})


app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
})


