const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var messageObj = generateMessage('FromUser', 'FromMessage');

    expect(messageObj)
      .toInclude({
        from: 'FromUser',
        text: 'FromMessage'
      });
    expect(messageObj.createdAt).toBeA('number');
  });
});
