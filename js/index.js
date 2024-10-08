$(".openNav").click(function () {
  $("#Menu").animate({ width: "250px" }, 50);
  $("#home-content").animate({ marginLeft: "250px" }, 50);
});

$(".closeMenu").click(function () {
  $("#Menu").animate({ width: "0px" }, 50);
  $("#home-content").animate({ marginLeft: "0px" }, 50);
});

$("#Menu a").click(function () {
  var sectionLink = $(this).attr("href");

  var sectionPosition = $(sectionLink).offset().top;

  $("html , body").animate({ scrollTop: sectionPosition }, 500);
});

$("#slideDown .toggle").click(function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

window.onload = function () {
  startCountDown("10 october 2021 9:56:00");
};

function startCountDown(countTo) {
  let targetTime = new Date(countTo);
  targetTime = targetTime.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = targetTime - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    startCountDown(countTo);
  }, 1000);
}

var maxLength = 100;
$("textarea").keyup(function () {
  var length = $(this).val().length;
  var remainingChars = maxLength - length;
  if (remainingChars <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(remainingChars);
  }
});
