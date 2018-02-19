




























$('#btn-search').click(function () {
    $('#card-insert').append('<div class="card">' +
        '<div class="card-image waves-effect waves-block waves-light">' +
        '<img class="activator" src="' + image + '">' +
        '</div>' +
        '<div class="card-content">' +
        '<span class="card-title activator grey-text text-darken-4">' + nombre + '<i class="material-icons right">more_vert</i></span>' +
        '<p>' + cuisines + '</p>' + '</div>' +
        '<div class="card-reveal">' +
        '<span class="card-title grey-text text-darken-4">' + nombre + '<i class="material-icons right"> close</i></span>' +
        '<ul>' +
        '<li>Dirección:' + addres + '</li>' +
        '<li>Reserva:' + reservation + '</li>' +
        '<li>Delivery:' + deliveryOnline + '</li>' +
        '<li>Raiting:' + rating + '</li>' +
        '<li>Votos:' + votes + '</li>' +
        '<li>Comentarios:' + ratingText + '</li>' +
        '</ul><div></div>')

});