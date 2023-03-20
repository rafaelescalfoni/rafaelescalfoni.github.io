function adicionaPartials() {
  var includes = $("[data-include]");

  $.each(includes, function () {
    var file = "partials/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
}

$(function () {
  adicionaPartials();
});
