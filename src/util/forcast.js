const postmanRequest=require("postman-request");

let Forecast=(latitude,longitude,callback)=>{

    const URL=`http://api.weatherstack.com/current?access_key=bc857b88c410a05df0408187f789196a&query=${latitude},${longitude}&units=m`;

    postmanRequest({url:URL,json:true},(error,response)=>{
        if(error){
            callback("Unable to reach site",undefined);
        }else if(response.body.error){
            callback("Unable to locate your location",undefined);
        }else{
            const data={WeatherDescriptions:response.body.current.weather_descriptions,
                temperature:response.body.current.temperature,
                feels:response.body.current.feelslike,
                wind_speed:response.body.current.wind_speed,
                wind_angle:response.body.current.wind_degree,
                wind_dir:response.body.current.wind_dir,
                UV_index:response.body.current.uv_index,
                visibility:response.body.current.visibility,
            }
             callback(undefined,data);
        }
    });

}

module.exports=Forecast;