import $ from 'jquery';
window.$ = window.jQuery = $;
$('#solar-system').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    verticalSwiping: true,
    asNavFor: '#slick-wrapper'
});
$('#slick-wrapper').slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    vertical: true,
    arrows: false,
    infinite: false,
    verticalSwiping: true,
    asNavFor: '#solar-system',

});


import L, { marker } from 'leaflet';

const mymap = L.map('mapid', {
    zoom: 3,
    scrollWheelZoom: false,
});
const myIcon = L.icon({
    iconUrl: './/assets/img/Ship-min.png',
    iconSize: [50, 50]
})
L.tileLayer('https://api.mapbox.com/styles/v1/marinastarostenko/ckkk5ppgn2hqn17nwi4xct672/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyaW5hc3Rhcm9zdGVua28iLCJhIjoiY2trazI5ZXkzMTNocjJ2cGdkZXFkcjcxdyJ9.mXS0xyDzEWvB0O3wIim6bA', {

    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
function moveISS() {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function (data) {
        const lat = data['iss_position']['latitude'];
        const lon = data['iss_position']['longitude'];
        mymap.setView([lat, lon])
        const mark = L.marker([lat, lon], { icon: myIcon }).addTo(mymap);
        setTimeout(function () {
            mymap.removeLayer(mark)
            moveISS()
        }, 5000);
    });
}
moveISS();
$.getJSON('http://api.open-notify.org/astros.json', function (data) {
    console.log(data)
    if (data.message == 'success') {
        $('.people').text(`Now in space ${data.number} people`);
        $.each(data.people, function (i) {
            $('.people__list').append($('<li>').text(data.people[i].name))
        })
    };
})

