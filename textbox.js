$(window).on("load", function()
{
    $("input[type=text]").on("focus", function() 
    {
        if ($(this).val() == "") 
        {
            /* placing the place holder at the top left corner */
            $(".placeholder").css("display", "block");
            $(".placeholder").css("transform", "translateY(0)");
            $(".placeholder").css({"top": "6px", "left": "6px"});
            $(".placeholder").css("font-size", "small");
        }
    });

    $(".placeholder").on("click", function() {
        $("input[type=text]").focus();
    });

    $("input[type=text]").on("blur", function() 
    {
        if ($(this).val() == "") 
        {
            /* placing the place holder in the middle left */
            $(".placeholder").css("display", "block");
            $(".placeholder").css({"top": "calc(50% - 1px)", "left": "16px"}); 
            $(".placeholder").css("transform", "translateY(-50%)");
            $(".placeholder").css("font-size", "large");
        }
    });
});