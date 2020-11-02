const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
 
app.get("/test", (req,res) => {
 
    let response = {
        message: "Ini End-Point ku",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})
 
// menjalankan server pada port 8000
app.listen(8000, () =>{
    console.log("Server run on port 8000");
})
 
// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar) 
    let tinggi= Number(req.body.tinggi) 
 
    let volume = panjang * lebar * tinggi
    let luaspermukaan = 2 * ((panjang * lebar) + (lebar * tinggi) + (panjang * tinggi))
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        volume: volume,
        luaspermukaan: luaspermukaan
    }
    res.json(response)
})
 
// end-point "/bola" dengan method GET
app.get("/bola/:jari", (req,res) => {
    let jari = (req.params.jari) 
 
    let volume = 4/3 * 3.14 * jari * jari * jari
    let luaspermukaan = 4 * 3.14 * (jari * jari)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari: jari,
        volume: volume,
        luaspermukaan: luaspermukaan
    }
    res.json(response)
})
 
// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi) 
 
    let volume = sisi * sisi * sisi
    let luaspermukaan = 6 * (sisi * sisi)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }
    res.json(response)
})
 
//end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    let jari = Number(req.body.jari) 
    let tinggi = Number(req.body.tinggi) 
 
    let volume = (3.14 * jari * jari) * tinggi
    let luaspermukaan = 2* ((3.14 * jari * jari) * tinggi) + (3.14 * (jari * 2)) * tinggi
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari: jari,
        tinggi: tinggi,
        volume: volume,
        luaspermukaan: luaspermukaan
    }
    res.json(response)
})
