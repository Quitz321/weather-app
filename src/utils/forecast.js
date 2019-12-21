const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5044b9588edb8aab978e62733b7fcef6/' + longitude + ',' + latitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services')
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, 
                body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is ' + Math.round(body.currently.precipProbability*100) + '% chance of '+ body.daily.data[0].precipType
            )
        }
        })
}

module.exports = forecast