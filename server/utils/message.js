var moment = require('moment');
var date = moment();

var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: date.valueOf()
    }
};

var generateLocationMessage = (from, latitude, longitude) => {
    var geoServerUrl = 'https://google.com/maps?q=';
    return {
        from,
        url: `${geoServerUrl}${latitude},${longitude}`,
        createdAt: date.valueOf()
    }
};


module.exports = {generateMessage, generateLocationMessage};