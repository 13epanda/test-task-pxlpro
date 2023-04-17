const initMap = () => {
    var myMap = new ymaps.Map('map', {
        center: [56.840646, 60.612180],
        zoom: 15,
        controls: [
            'zoomControl',
        ]
    });

    var myPlacemark = new ymaps.Placemark([56.840646, 60.612180], {
    hintContent: 'Офис 315, PXL PRO'
    },{
    iconLayout: 'default#image',

    iconImageHref: '../img/mobile/map-pin.png',
    iconImageSize: [133, 87],
    iconImageOffset: [-66, -87],
    });

    myMap.geoObjects.add(myPlacemark);

}

export {initMap};