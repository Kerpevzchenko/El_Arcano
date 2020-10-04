$(document).ready(function(){
    //alert("Esto es Jquery");

    var menuNav = $(".topnav .a").width();
    var NavElem = $(".topnav .a a");

    var posElem = menuNav / NavElem.length;

    NavElem.each(function(){
        $(this).css("width",posElem);

    });

    //alert(menuNav);

});

function openPageInTab(page){
    window.open(page, "_self");
}