var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'darwin';
        var text = 'Hello. Testing...';
        var message = generateMessage(from, text);

        expect(message.from).toBe('darwin');
        expect(message.text).toBe('Hello. Testing...');
        // expect(message).toMatchObject({from, text}); //alternate assertion to the 2 above
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'DLJ';
        var url = 'https://google.com/maps?q=1,1';
        var locationMessage = generateLocationMessage(from, 1, 1);

        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe(url);
        //expect(locationMessage).toMatchObject({from, url}); //alternate assertion to the 2 above
        expect(typeof locationMessage.createdAt).toBe('number');
    });
});