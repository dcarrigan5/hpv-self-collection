window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script10 = function()
{
  if (typeof gtag === 'function') {
  gtag('event', 'hpv_module1_launch', {
    'event_category': 'elearning module',
    'event_label': 'module 1 launch'
  });
} else {
  console.log('gtag not defined at time of trigger');
}
}

window.Script11 = function()
{
  var player = GetPlayer();
player.SetVar("characterState", "Normal"); // Reset at start
}

window.Script12 = function()
{
  function blinkCharacter() {
    var minTime = 2000; // Minimum interval (2 sec)
    var maxTime = 4000; // Maximum interval (4 sec)

    var blinkTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;

    var player = GetPlayer(); // Get Storyline player

    console.log("Blinking..."); // Debugging message
    player.SetVar("characterState", "Blinking");

    // Wait 200ms before switching back to "Normal"
    setTimeout(function () {
        console.log("Back to Normal");
        player.SetVar("characterState", "Normal");
    }, 200);

    // Schedule the next blink at a random time
    setTimeout(blinkCharacter, blinkTime);
}

// Start blinking loop
blinkCharacter();

}

window.Script13 = function()
{
  const script1 = document.createElement('script');
script1.src = "https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js";
script1.async = false;

script1.onload = function() {

//paste your code from confetti.js here

const end = Date.now() + 15 * 300;

// go Gophers!
const colors = ["#7a0019", "#ffcc33"];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();

};

document.body.appendChild(script1);
}

window.Script14 = function()
{
  if (typeof gtag === 'function') {
  gtag('event', 'hpv_module1_complete', {
    'event_category': 'eLearning Module',
    'event_label': 'Module 1 complete'
  });
} else {
  console.log('gtag not defined at time of trigger');
}
}

window.Script15 = function()
{
  var player = GetPlayer();
player.SetVar("characterState", "Normal"); // Reset at start
}

window.Script16 = function()
{
  function blinkCharacter() {
    var minTime = 2000; // Minimum interval (2 sec)
    var maxTime = 4000; // Maximum interval (4 sec)

    var blinkTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;

    var player = GetPlayer(); // Get Storyline player

    console.log("Blinking..."); // Debugging message
    player.SetVar("characterState", "Blinking");

    // Wait 200ms before switching back to "Normal"
    setTimeout(function () {
        console.log("Back to Normal");
        player.SetVar("characterState", "Normal");
    }, 200);

    // Schedule the next blink at a random time
    setTimeout(blinkCharacter, blinkTime);
}

// Start blinking loop
blinkCharacter();

}

};
