$(document).ready(function(){
  $('#clock_button').click( function() {
    $('.clock').toggleClass('hide');
    if ($('#clock_button').text() == "Esconder Relógio") {
      $('#clock_button').text("Mostrar Relógio");
    }
    else{
      $('#clock_button').text("Mostrar Relógio");
    }

  });
});
