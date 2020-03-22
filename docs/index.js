const c = console.log;       

/** variables */
let dni = $("#dni");
let dia = $("#dia");
let mes = $("#mes");
let anio = $("#anio");
let capcha = $("#capcha");
let texto = $("#texto");
/** mensajes */
let msgTrue = $("#msgTrue");
let msgFalse = $("#msgFalse");
let msgDni = $("#msgDni");
let msgDia = $("#msgDia");
let msgMes = $("#msgMes");
let msgAnio = $("#msgAnio");
let msgCapcha = $("#msgCapcha");

const caracteres = "0123456789abcdefABCDEF";
const longitud = 4;

$(document).ready(function(){
        
        setInterval('contador()',1000);
        texto.val(rand_code(caracteres, longitud))
});

$("#consultar").click(function(){
        if(validarCampos()){
                msgFalse.text("");
                msgTrue.text("Succesfull");
                $("#consultar").attr("href", "respuesta.html?dni="+dni.val())
        }else{
                $("#consultar").attr("href", "#")
                msgTrue.text("");
                msgFalse.text("Complete campos!!!");
                
        }
       
});

let validarCampos = () => {
        if(!dni.val() || dni.val().length != 8){
                msgDni.text("Campo requerido (Le faltan: "+(8-dni.val().length)+" dígitos)");
                dni.focus()
                return false;
        } else {
                msgDni.text("");
                // return true;
        }
        
        if(!dia.val()){
                msgDia.text("Campo requerido ");
                dia.focus()
                return false;
        } else {
                msgDia.text("");
                // return true;
        }
        
        if(!mes.val()){
                msgMes.text("Campo requerido ");
                mes.focus()
                return false;
        } else {
                msgMes.text("");
                // return true;
        }
        
        if(!anio.val()){
                msgAnio.text("Campo requerido ");
                anio.focus()
                return false;
        } else if(anio.val().length != 4) {
                msgAnio.text("le faltan: "+(4-anio.val().length))
                anio.focus()
                return false;
        }else{
                msgAnio.text("");
        }
        
        if(!capcha.val()){
                msgCapcha.text("Campo requerido ");
                capcha.focus();
                return false;
        }else if(capcha.val().toUpperCase().trim() != 'NAPO'){
                // msgCapcha.text("");
                msgCapcha.text("Valores no coinciden ");                        
                capcha.val("");
                return false;
        }else{
                msgCapcha.text("");
                // return true;
        }
        return true;
}

$("#generarCodigo").click(function(){
        
        let codigo = rand_code(caracteres, longitud);
        texto.val(codigo);
})  

let cont = 80;
let contador = () =>{
        let contador =  $("#valueCont");
        $("#time").text(cont);
        contador.val(cont);
        if(cont == 0 ){
                alert("Su consulta ha expirado, presione Aceptar para actualizar la página.");
                location.reload();
        }
        cont--;
}


function rand_code(chars, lon){
        code = "";
        for (x=0; x < lon; x++) {
                rand = Math.floor(Math.random()*chars.length);
                code += chars.substr(rand, 1);
        }
        return code;
}
        

  