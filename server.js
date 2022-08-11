const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const majorScales = {
    'amajor': {
        scale: "amajor",
        notes: ["A", "B", "C♯", "D", "E", "F♯", "G♯", "A"]
    },
    'aflatmajor': {
        scale: "aflatmajor",
        notes: ["A♭", "B♭", "C", "D♭", "E♭", "F", "G", "A♭"]
    },
    'bflatmajor': {
        scale: "bflatmajor",
        notes: ["B♭", "C", "D", "E♭", "F", "G", "A", "B♭"]
    },
    'bmajor': {
        scale: "bmajor",
        notes: ["B♭", "C", "D", "E♭", "F", "G", "A", "B♭"]
    },
    'cmajor': {
        scale: "cmajor",
        notes: ["C", "D", "E", "F", "G", "A", "B", "C"]
    },
    'dmajor': {
        scale: "dmajor",
        notes: ["D" , "E", "F♯", "G", "A", "B", "C♯", "D"]
    },
    'emajor': {
        scale: "emajor",
        notes: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯", "E"]
    },
    'eflatmajor': {
        scale: "eflatmajor",
        notes: ["B♭", "C", "D", "E♭", "F", "G", "A", "B♭"]
    },
    'gmajor': {
        scale: "gmajor",
        notes: ["G", "A", "B", "C", "D", "E", "F♯", "G"]
    },
    'fmajor': {
        scale: "fmajor",
        notes: ["F", "G", "A", "B♭", "C", "D", "E", "F"]
    },
}

app.get('/', (request, response) => { 
    response.send(__dirname + '/index.html')
})

app.get('/api/:scale', (request, response) => {
    const scale = request.params.scale.toLowerCase()
    if(majorScales[scale]){
        response.json(majorScales[scale])
    }
    else {
        response.json(majorScales['invalid'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running!')
})