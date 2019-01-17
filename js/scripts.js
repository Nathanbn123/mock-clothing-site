$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    var customerInput = $("input#customer").val();
    var addressInput = $("input#address").val();
    var flavor = $("input:radio[name=size1]:checked").val();
    var flavor = $("input:radio[name=size2]:checked").val();
    var flavor = $("input:radio[name=size3]:checked").val();

    $(".customer").text(customerInput);
    $(".address").text(addressInput);

    $("#orderForm").toggle();
    $("#receipt").fadeToggle();

    event.preventDefault();
  });
});
