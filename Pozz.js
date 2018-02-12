(function Pozz(globalObj, jquery) {
    var Pozz = function(firstname, lastname, language) {
        return new Pozz.init(firstname, lastname, language);
    }
    
    var supportedLanguages = ['en', 'po'];
    
    var formalGreetings = {
        'en' : 'Good Day',
        'po' : 'Kurwa'
    };
    
    var informalgreetings = {
        'en' : 'Yo',
        'po' : 'Pizdec'
    };
    
    Pozz.prototype = {
        
        validateLanguage : function() {
          if (supportedLanguages.indexOf(this.language) === -1) {
              throw 'Language does not exist';
          }
            
        },
        
        getFullName : function() {
            return this.firstname + ' ' + this.lastname;
        },
        
        greet : function() {
            return informalgreetings[this.language] + ' ' + this.firstname;
        },
        
        greetFormal : function() {
            return formalGreetings[this.language] + ' ' + this.lastname;
        },
        
        setLanguage : function(language) { 
            this.language = language;
            this.validateLanguage();
            
            return this;
        },
        
        greet : function(formal) {
            var msg;
            if (formal) {
                msg = this.greetFormal();
            }
            else {
                msg = this.greet();
            }
            
            return this;
        },
        
        log : function() {
            if (!console) {
                throw 'There is nowhere to write';
            }
            console.log(this.language + ' ' + this.getFullName());
            
            return this;
        },
        
        logHTML : function(writeTo, formal) {
            var msg;
            if (formal) {
                msg = this.greetFormal();
            }
            else {
                msg = this.greet();
            }
            
            $(writeTo).html(msg);
            
            return this;
        }
    };
        
    Pozz.init = function(firstname, lastname, language) {
        var self = this;
        
        if (!$) {
            throw 'Jquery not supported';
        }
        
        self.firstname = firstname || 'Stanko';
        self.lastname = lastname || 'Kostic';
        self.language = language || 'en';
        
        self.validateLanguage();
        
    }
    
    Pozz.init.prototype = Pozz.prototype;
    globalObj.Pozz = globalObj.P$ = Pozz;

}(window, $));