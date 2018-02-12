var person = {
    firstname : 'Jon',
    lastname : 'Doe',
    getFullName : function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function() {
    console.log('Logged ' + this.getFullName());
}


var logPerson = logName.bind(person);
logPerson();