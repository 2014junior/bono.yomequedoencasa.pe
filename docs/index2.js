$(document).ready(function(){
        let params = new URLSearchParams(document.location.search.substring(1));
        let dni = parseInt(params.get("dni"), 10); 
        $("#spanDniRespuesta").text(dni);
})