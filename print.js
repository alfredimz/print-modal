
$('#imprime').on('click', function () {
  if ($('.modal').is(':visible')) {
      $('.contenido').css('display', 'none');
      window.print();
      $('.contenido').css('display', 'block');
  } else {
      window.print();
  }
});
