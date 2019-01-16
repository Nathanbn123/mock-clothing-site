$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    var customerInput = $("input#customer").val();
    var addressInput = $("input#address").val();

    $(".customer").text(customerInput);
    $(".address").text(addressInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
