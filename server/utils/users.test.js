var expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'darwin',
            room: 'Room 1'
        },
        {
            id: '2',
            name: 'dlj',
            room: 'Room 2'
        },
        {
            id: '3',
            name: 'win',
            room: 'Room 1'
        }];

    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '111111',
            name: 'Darwin',
            room: 'AAA'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var user = users.removeUser('2');

        expect(user.id).toBe('2');
        expect(users.users.length).toBe(2);
        expect(users.users).not.toContain(user);
    });

    it('should not remove a user', () => {
        var user = users.removeUser('8');

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var user = users.getUser('1');

        expect(user).toEqual(users.users[0]);
        expect(user.id).toBe('1');
    });

    it('should not find user', () => {
        var user = users.getUser('8');

        expect(user).toBeFalsy();
    });

    it('should return names for Room 1', () => {
        var userList = users.getUserList('Room 1');
        expect(userList).toEqual(['darwin', 'win']);
    });

    it('should return names for Room 2', () => {
        var userList = users.getUserList('Room 2');
        expect(userList).toEqual(['dlj']);
    });
});