$(".nav a").on("click", function() {
  $(".nav").find(".active").removeClass("active");

  //Sets active underline to the user name when you click on the image
  if ($(this).parent().attr('id') == "user-image") {
    $(".nav").find("#user-name").addClass("active");
  } else {
    $(this).parent().addClass("active");
  }
});

$("#info-panel .btn-group button").on("click", function() {
  $("#info-panel .btn-group").find(".active-info-btn").removeClass("active-info-btn");
  $(this).addClass("active-info-btn");
});