const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },{
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser(users.users[1].id); // Jen

    expect(users.users.length).toBe(2);
    expect(user.name).toBe('Jen');
    expect(users.users).toNotInclude({name: 'Jen'});
  });

  it('should not remove user', () => {
    var user = users.removeUser('999');

    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser(users.users[0].id);

    expect(user).toInclude({
      id: users.users[0].id,
      name: users.users[0].name,
      room: users.users[0].room
    });
  });

  it('should not find user', () => {
    var user = users.getUser('999');

    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
