$(document).ready(function() {
    
    function displayPreview(url) {
        if(url === "" || typeof url === "undefined") {
            $(".preview img").hide();    
        } else {
            /*
            $(".preview img").hide();
            $(".preview img").show("slow");    
            $(".preview img").attr("src",url);
            */
            $(".preview img").fadeOut("slow", function() {
                $(".preview img").attr("src",url);
                $(".preview img").fadeIn("slow");
            });
                
            
        }
    }

    displayPreview( );
    
    $(".thumimg img").on("click", function(event) {
        var src = $(this).attr("src");
        displayPreview(src);
    });

    // $(".thumimg img").click(function() {

    // });

    // $(".thumimg img").bind("click", function() {

    // });
});