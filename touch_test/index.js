// Register touch event handlers
let touchArea = document.getElementById('touch-area');

touchArea.addEventListener('touchstart', handleStart, false);
touchArea.addEventListener('touchmove', process_touchmove, false);
// touchArea.addEventListener('touchcancel', process_touchcancel, false);
// touchArea.addEventListener('touchend', process_touchend, false);

function process_touchstart(ev) {
    // Use the event's data to call out to the appropriate gesture handlers
    switch (ev.touches.length) {
      case 1: handle_one_touch(ev); break;
      case 2: handle_two_touches(ev); break;
      case 3: handle_three_touches(ev); break;
      default: gesture_not_supported(ev); break;
    }
    print('touch responded');
  }
  // Create touchstart handler
  touchArea.addEventListener('touchstart', function(ev) {
    // Iterate through the touch points that were activated
    // for this element and process each event 'target'
    for (var i=0; i < ev.targetTouches.length; i++) {
      process_target(ev.targetTouches[i].target);
    }
  }, false);
  // touchmove handler
function process_touchmove(ev) {
    // Set call preventDefault()
    ev.preventDefault();
    print('touch responded');
    print(ev);
}

function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");
    var el = document.getElementById("canvas");
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;
  
    for (var i = 0; i < touches.length; i++) {
      console.log("touchstart:" + i + "...");
      ongoingTouches.push(copyTouch(touches[i]));
      var color = colorForTouch(touches[i]);
      ctx.beginPath();
      ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
      ctx.fillStyle = color;
      ctx.fill();
      console.log("touchstart:" + i + ".");
    }
  }