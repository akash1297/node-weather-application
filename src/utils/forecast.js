const request=require('request')

const forecast = (latitude,longitude,callback)=>{

    const url='http://api.weatherstack.com/current?access_key=9f3f7671b292769ba2733d1a3f0fc52e&query='+latitude+','+longitude
    request({url, json:true},(error, {body})=>{

        if(error){

            console.log('Connection error', undefined)

        }else if(body.error){

            console.log('Location not found', undefined)
        }
        else{
            
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature +' and chances of precipitation are '+ body.current.precip +' %.')
        }
    })
    
}

module.exports= forecast