/**
 * Created by brtdra on 2/14/16.
 */

function select_pictures() {
    $('#picture-menu').find('a').click(function () {
        var id = $(this).attr('id');
        console.log(id);

        $('#picture-menu').find('a').each(function () {
            $(this).removeClass('active');
        });

        $(this).toggleClass('active');

        switch (id) {
            case "feast-2015":
                break;
        }
    });
}

$(document).ready(select_pictures);


