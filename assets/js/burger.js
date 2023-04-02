$(".burger, .overlay").click(function () {
    $(".burger").toggleClass("clicked"); //Zeigt Kreut bei Klick auf Burger
    $(".overlay").toggleClass("show"); //Zeigt Overlay bei Klick auf Burger
    $("nav").toggleClass("show"); //Zeigt Menüband bei Klick auf Burger
    $("body").toggleClass("overflow");
  });

$(".main, .main_mobil").click(function () {
    $(".burger").toggleClass("clicked"); //Zeigt Kreut bei Klick auf Burger
    $(".overlay").toggleClass("show"); //Zeigt Overlay bei Klick auf Burger
    $("nav").toggleClass("show"); //Zeigt Menüband bei Klick auf Burger
    $("body").toggleClass("overflow");
});