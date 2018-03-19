jQuery(document).ready(function($) {
    $.get('/json/products.json', function(data) {
        data.forEach(function (product) {
            $('#products').append('\
                    <div class="col-md-4">\
                        <div class="thumbnail">\
                          <img src="' + product.image + '" alt="' + product.name + '" class="img-fluid">\
                          <div class="caption">\
                            <h3>' + product.name + '</h3>\
                            <p>' + product.description + '</p>\
                            <p>\
                                <a href="#" class="btn btn-primary add" data-name="' + product.name + '" role="button">add</a>\
                                <a href="#" class="btn btn-primary show" data-detail=\'' + JSON.stringify(product) + '\' role="button">show</a>\
                            </p>\
                          </div>\
                        </div>\
                    </div>\
                ');
        })
    });

    $(document).on('click', '.add', function(event) {
        event.preventDefault();
        alert('selected ' + $(this).data('name'))
        /* Act on the event */
    });

    $(document).on('click', '.show', function(event) {
        event.preventDefault();
        var product = $(this).data('detail')
        $('#detail-modal-header').html('Thông tin sản phẩm ' + product.name)
        $('#detail-modal-body').html('\
                <div class="media">\
                  <img class="mr-3" src="' + product.image + '" alt="' + product.name + '">\
                  <div class="media-body">\
                    <h5 class="mt-0">' + product.name + '</h5>\
                    ' + product.description + '\
                  </div>\
                </div>\
            ')
        $('#detail-modal').modal('show')
        /* Act on the event */
    });
});
