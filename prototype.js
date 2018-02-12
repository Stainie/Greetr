var person = {
    firstname : 'Default',
    lastname : 'Default',
    greet : function() {
        return 'Hi, ' + this.firstname;
    }
}

var john = Object.create(person);
john.firstname = "JOhn";
john.lastname = 'Doe';
john.nickname = 'Johnny'

john.getNickname = function() {
    return "Yo, " + this.nickname;
}
console.log(john.getNickname());