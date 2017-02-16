function clock(){
  var time = new Date();

  var s = time.getSeconds() * 6;
  var m = time.getMinutes() * 6 + s/60;
  var h = time.getHours() * 30 + m/12;

  var rots = "rotate("+s+"deg)";
  var rotm = "rotate("+m+"deg)";
  var roth = "rotate("+h+"deg)";

  $("#seconds").css({"transform": rots});
  $("#minutes").css({"transform": rotm});
  $("#hour").css({"transform": roth});
  $("#hora_atual").text("Horario Atual " + time.getHours() + "hrs : " + time.getMinutes() + "min : " + time.getSeconds() + "s");
}

$(document).ready(function(){
  setInterval(clock, 1000);
});
