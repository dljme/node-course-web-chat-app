var expect = require('expect');

var {generateMessage} = require('./message');

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