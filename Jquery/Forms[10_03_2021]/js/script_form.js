$(function(){
    $(":input").css("backgroundColor", "orange")
    $(":text").css("backgroundColor", "gray")
    $(":password").css("backgroundColor", "gray")
    $(":radio").parent().css("backgroundColor", "#bbb")
    $(":checkbox").parent().css("backgroundColor", "gray")
    $(":submit").css("backgroundColor", "gray")
    $(":reset").css("backgroundColor", "gray")
    $(":disabled").css("opacity", ".5")
    $(":checkbox:checked").parent().css("backgroundColor", "red")
    $("#txt").val($("option:selected").txt() + "se")

    

}) 