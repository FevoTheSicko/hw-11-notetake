const { constants } = require("buffer")
const { json } = require("express")
const fs = require('fs')
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let dataobj
        fs.readFile('../Develop/db/db.json', 'utf8', (err, data) => {
            if (err) throw err

            dataobj = JSON.parse(data)
            string = JSON.stringify(dataobj)
            res.json(dataobj)

        })


    })
    app.post('/api/notes', async (req, res) => {
        fs.readFile('../Develop/db/db.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(data)

                obj = JSON.parse(data)
                console.log(obj)
                obj.push(req.body)
                console.log(obj)
                const stringobj = JSON.stringify(obj)
                fs.writeFile('../Develop/db/db.json', stringobj, 'utf8', function (err, data) {
                    if (err) throw err
                    const senddata = JSON.stringify(data)
                    res.json(senddata)
                })
            }
        })
    })




}


