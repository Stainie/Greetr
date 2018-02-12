;(function(globalObj, jqueryObj) {
    
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }
    
    var supportedLangs = ['en', 'es'];
    
    var greetings = {
        'en' : 'Hello',
        'es' : 'Hola'
    };
    
    var formalGreetings = {
        'en' : "Greetings",
        'es' : "Saluzion"
    };
    
    var logMessages = {
        'en' : "Logged in: ",
        'es' : "Loggedo uno: "
    }
    
    Greetr.prototype = {
        
        getFullName: function() {
            return this.firstname + ' ' + this.lastname;
        },
        
        validate: function() {
           if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid lang";
            }
        },
        
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname;
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.lastname;
        },
        
        greet: function(isFormal) {
            var msg;
            if (isFormal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            return this;
        },
        
        setlang: function(lang) {
            this.language = lang;
            
            this.validate(lang);
            
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + this.getFullName());
            }
            return this;
        },
        
        HTMLGreting: function(selector, formal) {
            if (!$){
                throw "JQuery is not supported";
            }
            
            if (!selector) {
                throw "Missing HTML selector";
            }
            
            var msg;
            
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            
            return this;
        }
        
    }; //ovde se smestaju metode koje ce da se koriste od strane objekata kreiranih preko Greetr (optimizacija secasise)
    
    Greetr.init = function(firstname, lastname, laguage) {  //moze da se def ovde (ispod) zato sto se new(tj var Greetr odozgo) ne poziva dok se ne inicijalizuje Greetr
        var self = this;
        
        self.firstname = firstname || "Soze";   //self(this) se koristi jer je Greetr.init pozvan kao new objekat
        self.lastname = lastname || "Kayze";
        self.language = laguage || "en";
        
        self.validate();
    } 
    
    Greetr.init.prototype = Greetr.prototype; //svi objekti kreirani preko Greetr.init pointuju na Greetr.prototype za svoj prototype chain (imaju pristup Greetr.prototype metodama)
    
    globalObj.Greetr = globalObj.G$ = Greetr;
}(window, $));