/**
 * Created by brtdra on 2/14/16.
 */

var albums = {
    'feast-2015': {
        'name': "St Vincent's feast 2015",
        'pictures': [
            'abiders.jpg', 'altar_gospel.jpg',
            'banner.jpg', 'cake.jpg',
            'offertory.jpg', 'parish.jpg',
            'popolo.jpg'
        ]
    }
};

function select_pictures() {
    $('#picture-menu').find('a').click(function (event) {
        var id = $(this).attr('id');
        console.log(id);

        $('#picture-menu').find('a').each(function () {
            $(this).removeClass('active');
        });

        $(this).toggleClass('active');

        var picture_names = albums[id].pictures;

        var $links = $('#links');
        $links.html('');
        for (var pic in picture_names) {
            var path = 'http://localhost:63342/ChurchNew/img/' + id + '/' + picture_names[pic];
            var child = '<a href="' + path + '" data-gallery>';
            child = child.concat('<img src="' + path + '" class="img-thumbnail"/>');
            child = child.concat('</a>');
            $links.append(child);
        }
    });

    $('#feast-2015').trigger('click');
}

$(document).ready(select_pictures);


