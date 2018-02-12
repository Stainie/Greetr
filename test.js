var g = G$('John', 'Doe');


$("#login").click(function() {
    var loginGrteetr = G$("John", "Doe");
    
    $("#longdiv").hide();
    
    loginGrteetr.setlang($("#lang").val()).HTMLGreting($("#greeting"), true).log();
});