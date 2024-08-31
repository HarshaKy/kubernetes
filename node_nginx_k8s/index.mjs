import express from 'express'
import fetch from 'node-fetch'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    const msg = 'Hello from Node.js! ' + os.hostname()
    console.log(msg)
    res.send(msg)
})

app.get('/nginx', async (req, res) => {
    const url = 'http://nginx' // This is the service name in the Kubernetes cluster
    const result = await fetch(url)
    const body = await result.text()
    res.send(body)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})