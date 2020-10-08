$(document).ready(function(){
    //alert("Esto es Jquery");

    //Acomoda los elementos del navbar
    var menuNav = $(".topnav .a").width();
    var NavElem = $(".topnav .a a");

    var posElem = menuNav / NavElem.length;

    NavElem.each(function(){
        $(this).css("width",posElem);
    });

    //Vincula el boton submit para iniciar sesion con la funcion.
    $("#btn-login").on("click", login);

    //Evita que el form del login refresque la pantalla.
    $(".form-login").submit(function(e){
        e.preventDefault();
    });

    //Vincula el boton de registro con la funcion de abrir pagina.
    $("#btn-openRegW").on("click",{name:'new-user.html'} ,openPageInTab);


    $("#btn-profileW").on("click",{name:"profile.html"},openPageInTab);

});

function openPageInTab(event){
    window.open(event.data.name, "_self");
}


function login(){
    alert("Te has logeado");

    //Oculta los botones de registro e inicio de sesion.
    $("#btn-openModalLog").css("display", "none");
    $("#btn-openRegW").css("display", "none");
    //Muestra el boton de ver perfil.
    $("#btn-profileW").css("display", "inline-block");

}