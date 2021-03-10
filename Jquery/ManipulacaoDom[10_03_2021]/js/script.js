$(function() {
    $("#txt").val("Texto alterado com Jquery");
    $(".email").val("Texto alterado com Jquery pela classe");

    // $("p:not(.destaque), li").css("opacity", ".75");
    // $("p, li").css("color", "#999");
    // $(".container > ul > li").css("color", "black");
    // $(".destaque + p").addClass("destaque");
    
    // BEST
    // $("p").addClass("FORMAT_P_1"); // TOPIZERA
    
    $(".destaque ~ p").addClass("destaque");
    $("li:first").css("color", "green");
    $("li:first-child").css("color", "green");
    $("li:last").css("color", "green");
    $("li:last-child").css("color", "green");
    $("p:gt(2)").css({
        // gt >
        // lt <
        // eq Equals
        "color" : "orange",
        fontSize: "22px"
    });
    $("a[title]").css("color", "red")
    $("a:not([title])").hide();
    $("li:odd").css("backgroundColor", "#ccc")
    $("li:even").css("backgroundColor", "#000").css("color", "#fff")
    $("p:contains(afo 6)").css("color", "green")
    $("p:contains(afo 7)").css("color", "red")
    $("p:has(i)").css("color", "blue")
    $("p:empty").text("este paragrafo estava vazio")
    $("p:hidden").css("oculto")

})