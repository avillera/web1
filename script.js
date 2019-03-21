$(document).ready(function(){
    var dataURL = 'https://api.instagram.com/v1/self/media/recent';
    var photoData;

    var getData = function(url) {
        $.ajax({
            url: url,
            dataType: 'jsonp',
            data: {
                access_token: '12042426036.a2bf60a.e2a1cadf513f4704ac1f38a618e34f59',
                count: 12
            }
        })
        .done(function(data){
            photoData = data;
            console.dir(photoData);
        })
        .fail(function() {
            $('#gallery').text(textStatus);
        })
    }
    getData(dataURL);
});



