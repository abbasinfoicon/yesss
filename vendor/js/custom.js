// -------- Jquery start ------- //
$(function(){

    // ripple btn effect
    $('.ripple').click(function (event) {
        var $btn = $(this),
            $div = $('<div/>'),
            btnOffset = $btn.offset(),
            xPos = event.pageX - btnOffset.left,
            yPos = event.pageY - btnOffset.top;

        $div.addClass('ripple-effect');
        $div
            .css({
                height: $btn.height(),
                width: $btn.height(),
                top: yPos - ($div.height() / 2),
                left: xPos - ($div.width() / 2),
                background: $btn.data("ripple-color") || "rgba(0, 0, 0, 0.05)"
            });
        $btn.append($div);

        window.setTimeout(function () {
            $div.fadeOut('fast');
        }, 600);
    });

    // equalheight
    equalheight = function(container){
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function() {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    $(window).load(function() {
        equalheight('.site-offersAll-bg .caption');
    });


    $(window).resize(function(){
        equalheight('.site-offersAll-bg .caption');
    });

});


