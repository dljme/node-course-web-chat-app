class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        var userElement = this.users.filter((user) => user.id === id)[0];
        var index = this.users.indexOf(userElement);
        if(index !== -1){
            this.users.splice(index,1);
        }

        return userElement;
    }

    getUser (id) {
        var userElement = this.users.filter((user) => user.id === id)[0];

        return userElement;
    }

    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};