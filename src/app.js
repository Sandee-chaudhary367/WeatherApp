const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app=express();
const GeoCode=require("./util/Geocode");
const forcast=require("./util/forcast");

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath= path.join(__dirname, '../templates/views');
app.set('view engine', 'hbs');
app.set('views', viewsPath);
console.log(viewsPath);
app.use(express.static(publicDirectoryPath))
app.get("",(req,res)=>{
    res.render("index",{
        text:"Sandeep"
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    GeoCode(req.query.address,(error,data1)=>{
            if(error){
               return res.send({
                   error 
                })
            }
            console.log(data1);
            forcast(data1.latitude,data1.lontitude,(error,data)=>{
                 if(error){
                    res.send({
                       error 
                     });
                 }
                 else{
                    console.log(data1.latitude,data1.lontitude);
                    res.send({
                        mess1:data1.place,
                        mess2:`Temperature : ${data.temperature} degree, feels like ${data.feels} degree`,
                        mess3:`Weather Description : ${data.WeatherDescriptions}`,
                        mess4:`Wind : ${data.wind_speed} km/h, flowing at ${data.wind_angle} degree towards ${data.wind_dir}`,
                        mess5:`UV index : ${data.UV_index}`,
                        mess6:`Visibility : ${data.visibility} km`,
                    })
                 }
            })
               
    });
})

app.listen(300, () => {
    console.log(`Server is up on port 3000.`)
});