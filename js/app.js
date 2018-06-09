$(function(){

  init();

  //
  // $(".move").each(function(){
  //   var minX = $("#album").offset().top;
  //   var maxX = $("#album").height() + minX;
  //   var minY = $("#album").offset().left;
  //   var maxY = $("#album").width() + minY;
  //   var height = $(this).height();
  //   var width = $(this).width();
  //   var top = random(minX, maxX, height);
  //   var left = random(minY, maxY, width);
  //   $(this).animate({
	// 		top: top,
	// 		left: left
	// 	}, 500);
  //   console.log(top, left);
  // });

  $(window,document).resize(function() {
    reproporciona();
  }); reproporciona();

  // randon beetween x and y - size
  function random(x, y, size){
    return (Math.floor(Math.random() * y) + x)
  }

  function reproporciona(){
    // $(".lang").css("margin-left", $("#menu").innerWidth()/2-150)
    $("body").css("height", $(document).height()-240)
  }

})

function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}
//
function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}
