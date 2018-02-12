$("#btnPozz").click(function() {
    var pozdravljac = P$('Bate', 'Bateee');
    
    $("#divPozz").hide();
    
    pozdravljac.setLanguage($("#selectPozz").val()).logHTML($("#headerPozz"), $);
});