const express = require('express')
const app = express()
const port =process.env.PORT||3000

app.use(express.static(__dirname+'/dist/ngproject'))

app.get('/', (req, res) => res.sendfile(path.join(__dirname+'/dist/ngproject')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))