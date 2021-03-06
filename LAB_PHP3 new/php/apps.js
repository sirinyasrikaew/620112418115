$(function(){
    // alert();
    $("#menu_member").click(function () { 
        $("a").removeClass("mm-active");
        $(this).addClass("mm-active");
        $(".card-body").load("./views/memberj.php");
     });

});//jQuery Handle/ Ready