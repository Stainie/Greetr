function greet(name) {
    return function(whattosay) {
        console.log(name + ' ' + whattosay);
    }
}

var greetingObj = greet('Stainie');
greetingObj('batee');

function buildFunctions() {
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
            )
    }
    return arr;
}
            
var buildVar = buildFunctions();
        
buildVar[0]();
