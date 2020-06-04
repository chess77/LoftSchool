var parallax = (function () {
    var bg = document.getElementById("herobg");
    var stars = document.getElementById("stars");
    var hands = document.getElementById("hands");
    var user = document.getElementById("hero");
    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + "%";
            var transformString = "translate3d(0," + strafe + ", 0)";
            var style = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        init: function (wScroll) {
            this.move(hands, wScroll, 30);
            this.move(stars, wScroll, 20);
            this.move(user, wScroll, 10);
        },
    };
})();

window.onscroll = function () {
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
};
