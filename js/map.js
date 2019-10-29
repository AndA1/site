var map;
  ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
  function init () {
    map = new ymaps.Map("map", 
	{ center: [51.671439, 39.203243], // Координаты центра карты
      zoom: 10 // Zoom
    });
  }