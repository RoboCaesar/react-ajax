//Include the necessary frameworks for server routing.
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler() //Need to figure out what this is...

app.prepare()
.then(() => {
    const server = express()

    server.get('/sayhello', (req, res) => {
        return res.sendStatus(200);
    });

    server.get('/returnobject', (req, res) => {
        let myObject = [4, 8, 15, 16, 23, 42];
        return res.send(myObject)
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})