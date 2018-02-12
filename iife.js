var obj = {
    firstname: 'bla',
    lastname: 'bla',
    log: function() {
        var self = this;
        
        this.firstname = 'yoo';
        console.log(self);
        
        var setname = function(newname) {
            self.firstname = newname;
        }
        
        setname('kvooo');
        
        console.log(self);
    }
}

obj.log();


(function(name) {
    var logname = 'neeew';
    
    console.log("yooo: " + logname)
}(obj.firstname))