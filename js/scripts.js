$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    var customerInput = $("input#customer").val();
    var addressInput = $("input#address").val();
    var shirtInput = $("input:radio[name=shirt]:checked").val();
    var cargoInput = $("input:radio[name=cargo]:checked").val();
    var slideInput = $("input:radio[name=slide]:checked").val();

    $(".customer").text(customerInput);
    $(".address").text(addressInput);
    $("#shirt").text(shirtInput);
    $("#cargo").text(cargoInput);
    $("#slide").text(slideInput);


    $("#orderForm").toggle();
    $("#receipt").fadeToggle();

    event.preventDefault();
  });
});
