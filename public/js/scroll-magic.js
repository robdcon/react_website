(function($) {
 
    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
 
})(jQuery);

$("section").each(function() {
 
    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
    .addTo(ctrl);
 
});