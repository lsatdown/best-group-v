(function (window, document, $){
    
    init();
    
    function init() {
        // Apply some styles to tiles
        // Iterate each tile, adding class on specific ones for little lines to appear
        // Note: decided to do this with JS, assuming that in reality the tiles will
        // be loaded in from the template and we wouldn't be able to (easily) add different classes
        var textTiles = document.getElementsByClassName("text-inner");
        for (var i = 0; i < textTiles.length; i++) {
            if (i == 0 || i == 1) {
                textTiles[i].classList.add("with-mark-right");
            } else if (i == 3) {
                textTiles[i].classList.add("with-mark-top");
            }
        }
        
        // Set up simple mobile nav click function
        mobileNav();
    };
    
    function mobileNav() {
        $("#show-nav-btn").on("click", function(e) {
            e.preventDefault();
            $("body").toggleClass("nav-on");
        });
    };
    
})(window, document, jQuery, undefined);