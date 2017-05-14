$('.selectpicker').on('changed.bs.select', function(e) {
  var temp = $(this).closest('.bootstrap-select');
  temp.addClass("success");
  $('p#warning').text('');
  $('p#warning').removeAttr('id');
  var button = temp.children('button');
  var selectedMonth = button.attr("title");
  $("#month").remove();
  button.prepend('<span id="month">' + selectedMonth + '</span>');
  button.children('span.filter-option').text("Miesiąc");
  if (navigator.userAgent.indexOf("Firefox") > 0) {
    button.children('span.filter-option').css("margin-top", "-24px");
    button.children('span#month').css("margin-left", "0.1em")
  }
});
$('.selectpicker').on('shown.bs.select', function(e) {
  $(this).closest('.bootstrap-select').addClass("error");
  $('p#warning').text('Wybierz miesiąc');
});
//wlacz-wylacz
$('.switch').on('click', function() {
  if ($(this).children().is(':checked')) {
    $(this).addClass('active');
    var button = $('.selectpicker').closest('.bootstrap-select').find('button');
    var html = button.html();
    $('.example').prop('disabled', false);
    $('.example').selectpicker('refresh');
    button.html(html);

  } else {
    $(this).removeClass('active')
    var button = $('.selectpicker').closest('.bootstrap-select').find('button');
    var html = button.html();
    $('select.example').prop('disabled', true);
    $('p#warning').text('');
    $('.bootstrap-select').removeClass('error');
    $('select.example').selectpicker('refresh');
    button.html(html);
  }
});
