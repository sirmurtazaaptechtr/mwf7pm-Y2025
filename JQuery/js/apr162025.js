$(document).ready(function() {

    $('.box').click(function() {
        $(this).hide();
    });

    $('#showBtn').click(function() {
        $('.box').show();
    });

    $('#hideBtn').click(function() {
        $('.box').hide();
    });
    $("#hideAllBtn").click(function(){
        $("*").hide();
    });
    $("#hideIntro").click(function(){
        $("p.intro").hide();
    });

    $("#hideFirst").click(function(){
        $("ul.list1 li:first-child").hide();
    });

    $("p").dblclick(function(){
        $(this).hide();
    });

    $("div").mouseenter(function(){
        $(this).css("background-color", "yellow");
    });

    $("div").mouseleave(function(){
        $(this).css("background-color", "white");
    });

    $("#panBtn").click(function(){
        $("#myText").slideToggle(3000);
    });
});