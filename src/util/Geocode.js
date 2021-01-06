const postmenRequest=require("postman-request");

let Geocode=(address,callback)=>{

let GEOURL=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2FuZGVlY2hhdWRoYXJ5MzY3IiwiYSI6ImNramVleTdidDEwOWQyc256Ymx1cjN4dHcifQ.oQA4_3jPI84-SJxDukEmLA&limit=1`;

postmenRequest({ url:GEOURL,json:true},(error,response)=>{ 
    if(error){
        callback("Unable to reach site",undefined);
    }else if(response.body.features.length===0){
        callback("Unable to locate your location",undefined);
    }else{
        const data={lontitude:response.body.features[0].center[0],
            latitude:response.body.features[0].center[1],
            place:response.body.features[0].place_name
            }
            callback(undefined,data)}
});

}

module.exports=Geocode;