var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    }
};

var generateLocationMessage = (from, latitude, longitude) => {
    var geoServerUrl = 'https://google.com/maps?q=';
    return {
        from,
        url: `${geoServerUrl}${latitude},${longitude}`,
        createdAt: new Date().getTime()
    }
};


module.exports = {generateMessage, generateLocationMessage};