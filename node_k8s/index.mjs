import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    const msg = 'Version 2: Hello from Node.js! ' + os.hostname()
    console.log(msg)
    res.send(msg)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})