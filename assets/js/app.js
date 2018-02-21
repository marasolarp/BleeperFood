
$(document).ready(function() {
  $('.parallax').parallax();
  $('.zoom').hover(function () {
    $(this).addClass('transition');
  }, function () {
    $(this).removeClass('transition');
  });
});  


$('#btn-search').click(function() {
  var inputSearch = $('#search').val();
  $('#search').val('');
  $('#search').empty();
  $('#card-insert').empty();
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
        var nd = '';
        if (reservation === 0) {
          nd = ('No Disponible');
        } else {
          varDisponible; 
          nd = ('Disponible');
        }
        var deli = '';
        if (deliveryOnline === 0) {
          deli = ('No disponible');
        } else {
          deli = ('Disponible');
        }
        
        // Acá pueden ir los append
        $('#card-insert').empty;
        $('#card-insert').append('<div class="col s12 m4 l4 lg4">'+
          '<div class="card">' +
          '<div class="card-image waves-effect waves-block waves-light">' +
          '<img class="activator zoom" src="' + image + '">' +
          '</div>' +
          '<div class="card-content">' +
          '<span class="card-title activator grey-text text-darken-4">' + name + '<i class="material-icons right">more_vert</i></span>' +
          '<p>' + cuisines + '</p>' + '</div>' +
          '<div class="card-reveal  purple lighten-5">' +
          '<span class="card-title grey-text text-darken-4">' + name + '<i class="material-icons right"> close</i></span>' +
          '<ul>' +
          '<li>Dirección: ' + address + '</li>' +
          '<li>Reserva: ' + nd + '</li>' +
          '<li>Delivery: ' + deli + '</li>' +
          '<li>Raiting: ' + rating + '</li>' +
          '<li>Votos: ' + votes + '</li>' +
          '<li>Comentarios: ' + ratingText + '</li>' +
          '</ul></div></div></div>');
        
      }
    }
  });
});
