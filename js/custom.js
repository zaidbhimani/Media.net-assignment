$(document).ready(function() {
 
    $(".call_to_action").on("click", function(event) {

        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        var $popupContainer = $(".popup_container");

        if (navigator.userAgent.indexOf("Chrome") != -1 || navigator.userAgent.indexOf("Safari") != -1) {
            $popupContainer.addClass("chrome_safari");
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            $popupContainer.addClass("firefox");
        } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
            $popupContainer.addClass("edge");
        } else {
            $popupContainer.html("Browser Not Supported.");
        }


        $popupContainer.show();
        $popupContainer.animate({
            opacity: 1
        })

        setTimeout(function() {
            $popupContainer.animate({
                opacity: 0
            }, function() {
                $popupContainer.hide();
            });
            // $popupContainer.hide();
        }, 3000);
    });
    // end of call to btn js

    // Init aos
    AOS.init({
         disable: 'mobile',
    })

});
// Ready function ends here