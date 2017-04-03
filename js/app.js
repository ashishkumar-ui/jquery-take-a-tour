$(function () {

    $.fn.takeTour = function (options) {

        //
        return this.each(function () {

            //
            var settings = $.extend({
                overlay: ".overlay",
                tourBox: "#tour-box",
                tourPoints: ".tour-point",
                buttons: {
                    close: ".close",
                    next: ".btn-next"
                },
                activeClass: "active",
                topOffset: 50,
                leftOffset: 20,
                fadeSpeed: 500
            }, options);

            // Global DOM vars
            var $overlay = $(settings.overlay);
            var $tourBox = $(settings.tourBox);

            /**
             * @desc Starts the Tour from first Tour Point
             * @param {*} evt Event Object
             */
            function startTour(evt) {
                var $firstTourPoint = $(settings.tourPoints).filter(function (i, el) {
                    return $(el).data("index") === 0;
                });

                //
                evt.preventDefault();

                // Reset Active Tour Point
                $(settings.tourPoints).removeClass(settings.activeClass);
                $firstTourPoint.addClass(settings.activeClass);

                // Show Overlay
                $overlay.fadeIn(settings.fadeSpeed);

                // Show Tour Box
                $tourBox
                    .fadeIn(settings.fadeSpeed)
                    .css({
                        top: $firstTourPoint.offset().top + settings.topOffset,
                        left: $firstTourPoint.offset().left + settings.leftOffset
                    })
                    .find("h1").text($firstTourPoint.data("title"))
                    .end().find("p").text($firstTourPoint.data("desc"));
            }

            /**
             * @desc Ends the Tour with closing the Tour Boxes
             */
            function endTour() {
                $overlay.fadeOut(settings.fadeSpeed);
                $tourBox.fadeOut(settings.fadeSpeed);
            }

            /**
             * @desc Switches to Next Tour Point
             */
            function gotoNextPoint() {
                var $activePoint = $(settings.tourPoints + "." + settings.activeClass).removeClass(settings.activeClass);
                var currentIndex = $activePoint.data("index");
                var nextIndex = currentIndex + 1;
                var $nextPoint = $(settings.tourPoints + "[data-index=" + nextIndex + "]").addClass(settings.activeClass);

                // Check if there is no Next $nextPoint
                if (!$nextPoint.length) {
                    $nextPoint = $(settings.tourPoints + "[data-index=0]").addClass(settings.activeClass);
                }

                // Animate Tour Box to Next Tour-Point
                $tourBox
                    .animate({
                        top: $nextPoint.offset().top + settings.topOffset,
                        left: $nextPoint.offset().left + settings.leftOffset
                    })
                    .find("h1").text($nextPoint.data("title"))
                    .end().find("p").text($nextPoint.data("desc"));

                // Scroll HTML to the Tour Point
                $("html, body").animate({
                    scrollTop: $nextPoint.offset().top
                });
            }

            // Event Bindings
            $(this).click(startTour);
            $(settings.tourBox).on("click", settings.buttons.close, endTour);
            $(settings.tourBox).on("click", settings.buttons.next, gotoNextPoint);
        });
    };

    //
    $("#start-tour").takeTour({
        topOffset: 70,
        leftOffset: 30
    });
});