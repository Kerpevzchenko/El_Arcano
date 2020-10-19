/*
0 - visitante
1 - Usuario
2 - Reportero
3 - Editor;
*/

var rol = 0;

$(document).ready(function(){
    //alert("Esto es Jquery");



    //Vincula el boton submit para iniciar sesion con la funcion.
    $("#btn-login").on("click", login);

    $("#btn-logout").on("click", logout);

    //Se ejecuta cuando el form hace submit.
    $(".form-login").submit(function(e){
        //Evita que el form del login refresque la pantalla.
        e.preventDefault();


    });

    //Vincula el boton de registro con la funcion de abrir pagina.
    $("#btn-openRegW").on("click",{name:'new-user.html'} ,openPageInTab);

    $("#btn-profileW").on("click",{name:"profile.html"},openPageInTab);

    //Botones del editor para elegir entre las noticias y los reporteros.
    $("#ed-selNews").on("click", function(){
        $("#news-list").css("display","block");
        $("#repo-list").css("display","none");
    });
    $("#ed-selRepo").on("click", function(){
        $("#repo-list").css("display","block");
        $("#news-list").css("display","none");
    });

    $("#btn-addNews").on("click",{name : "Crear_Noticia.html"} ,openPageInTab);

    //Vincula todos los elementos de noticia con la pagina de noticia.
    var newsArray = $(".polaroid a");
    newsArray.each(function(){
        $(this).attr("href", "Noticia.html");
    });


    rol = sessionStorage.getItem("rol");

    switch(rol){
        case '1'://Usuario
            //Oculta los botones de registro e inicio de sesion.
            $("#btn-openModalLog").css("display", "none");
            $("#btn-openRegW").css("display", "none");
            //Muestra el boton de ver perfil.
            $("#btn-profileW").css("display", "inline-block");
            //Muestra el boton de cerrar sesion
            $("#btn-logout").css("display", "inline-block");

            //Oculta los botones de reporteros y noticias y su contenido.
            $("#newsRepo-container").css("display", "none");
            $("#myInfo-container").removeClass("col-lg-3");
            $("#myInfo-container").addClass("col-lg-12");
            $("#myInfo-container #myInfo").css({
                "width": "30%",
                "margin" : "50px auto"
            });

            //Oculta la caja de comentario del editor.
            $("#editComent-container").css("display","none");

            $("#Ed-AgrSecc").css("display", "none");

            $("#btn-addNews").css("display", "none");
            break;

        case '2'://Reportero
            //Oculta los botones de registro e inicio de sesion.
            $("#btn-openModalLog").css("display", "none");
            $("#btn-openRegW").css("display", "none");
            //Muestra el boton de ver perfil.
            $("#btn-profileW").css("display", "inline-block");
            //Muestra el boton de cerrar sesion
            $("#btn-logout").css("display", "inline-block");

            //Oculta los botones de reporteros y noticias y su contenido.
            /*$("#newsRepo-container").css("display", "none");
            $("#myInfo-container").removeClass("col-lg-3");
            $("#myInfo-container").addClass("col-lg-12");
            $("#myInfo-container #myInfo").css({
                "width": "30%",
                "margin": "50px auto"
            });*/

            $("#menuEditor-container").css("display", "none");

            //Oculta la caja de comentario del editor.
            $("#editComent-container").css("display","none");

            $("#Ed-AgrSecc").css("display", "none");
            break;

        case '3'://Editor
            //Oculta los botones de registro e inicio de sesion.
            $("#btn-openModalLog").css("display", "none");
            $("#btn-openRegW").css("display", "none");
            //Muestra el boton de ver perfil.
            $("#btn-profileW").css("display", "inline-block");
            //Muestra el boton de cerrar sesion
            $("#btn-logout").css("display", "inline-block");

            $("#btn-addNews").css("display", "none");
            break;

        case '0'://Visitante
        default:
            //Oculta la caja de comentario del editor.
            $("#editComent-container").css("display","none");

            $("#userComent-container").css("display", "none");

            $("#Ed-AgrSecc").css("display", "none");

            $("#btn-addNews").css("display", "none");

            break;
    }

        //Acomoda los elementos del navbar
        if($("#Ed-AgrSecc").css("display") == "block")
        {
            var menuNav = $(".topnav").width();
            var NavElem = $('.topnav a');
            var posElem = menuNav / NavElem.length;
            NavElem.each(function(){
                $(this).css("width",posElem);
            });
        }
        else
        {
            var menuNav = $(".topnav").width();
            var NavElem = $('.topnav a');
            var posElem = menuNav / (NavElem.length -1 );
            NavElem.each(function(){
                $(this).css("width",posElem);
            });
        }


});

function openPageInTab(event){
    window.open(event.data.name, "_self");
    
}


function login(){
    

    
    var form =$("form[name='loginForm']");
    
    
    switch(form[0].rol.value){
        case 'U':
            sessionStorage.setItem("rol", 1);
            break;

        case 'R':
            sessionStorage.setItem("rol", 2);
            break;

        case 'E':
            sessionStorage.setItem("rol", 3);
            break;

        case 'V':
            sessionStorage.setItem("rol", 0);
            break;
    }

    location.reload();

}

function logout(){
    window.open("index.html","_self");
    sessionStorage.setItem("rol", 0);
    
    $("#btn-logout").css("display", "none");
    
}