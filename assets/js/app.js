
$(document).ready(function() {
  $('.parallax').parallax();
});  


$('#btn-search').click(function() {
  var inputSearch = $('#search').val();
  $.ajax({
    type: 'GET',
    url: 'https://developers.zomato.com/api/v2.1/search?q=' + inputSearch,
    dataType: 'json',
    headers: { 'user-key': '9ec139d260dbaf5445788e800fdb2d2c' },
    success: function(data) {
      console.log(data);
      for (i = 0; i < data.restaurants.length; i++) {
        var name = data.restaurants[i].restaurant.name;
        var cuisines = data.restaurants[i].restaurant.cuisines;
        var address = data.restaurants[i].restaurant.location.address;
        var image = data.restaurants[i].restaurant.featured_image;
        // Booleano: 0 no tiene reservación, 1 si tiene
        var reservation = data.restaurants[i].restaurant.has_table_booking;
        // Booleano: 0 no tiene delivery, 1 si tiene
        var deliveryOnline = data.restaurants[i].restaurant.has_online_delivery;
        // Rating con votos y un texto
        var rating = data.restaurants[i].restaurant.user_rating.aggregate_rating;
        var votes = data.restaurants[i].restaurant.user_rating.votes;
        var ratingText = data.restaurants[i].restaurant.user_rating.rating_text;

        // Validación para los delivery y reservación
        if (reservation === 0) {
          // No tiene para reservar 
        } else {
          // Tiene reservación 
        }
        if (deliveryOnline === 0) {
          // No tiene delivery 
        } else {
          // Tiene 
        }
        // Acá pueden ir los append
        $('#card-insert').append('<div class="card">' +
          '<div class="card-image waves-effect waves-block waves-light">' +
          '<img class="activator" src="' + image  + '">' +
          '</div>' +
          '<div class="card-content">' +
          '<span class="card-title activator grey-text text-darken-4">' + name + '<i class="material-icons right">more_vert</i></span>' +
          '<p>' + cuisines + '</p>' + '</div>' +
          '<div class="card-reveal">' +
          '<span class="card-title grey-text text-darken-4">' + name + '<i class="material-icons right"> close</i></span>' +
          '<ul>' +
          '<li>Dirección:' + address + '</li>' +
          '<li>Reserva:' + reservation + '</li>' +
          '<li>Delivery:' + deliveryOnline + '</li>' +
          '<li>Raiting:' + rating + '</li>' +
          '<li>Votos:' + votes + '</li>' +
          '<li>Comentarios:' + ratingText + '</li>' +
          '</ul></div></div>')
      }
    }
  });
  
});
