$(document).ready(function () {
  $('#btn1').click(function () {
    $("p:odd").hide();
  });

  $('#btn2').click(function () {
    $("span.my-span").hide();
  });

  $('#btn3').click(function () {
    $("input[type='email']").hide();
  });

  $('#btn4').click(function () {
    $("input:checked").hide();
  });

  $('#btn5').click(function () {
    $('#my-div div').children().eq(0).hide();
  });
});
