const request=require('request')
const geocode = (address, callback) =>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYWthc2hwYW5kZXkxMjMiLCJhIjoiY2tkd216Y2lvMGl1bTJzcWl2dXdhdzFsMCJ9.VNUo23_dXS58fJ9iGfhymA&limit=1'

    request({url, json: true}, (error, {body})=>{
        if(error)
        {
            callback('Connection error', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find the location. Try new way', undefined)
        } else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports=geocode