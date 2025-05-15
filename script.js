var i = 0;
var txt = 'Juraj Đurčević'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function writeName() {
  if (i < txt.length) {
    document.getElementById("my-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(writeName, speed);
  }
}

writeName();