
ymaps.ready(function() {
	var MainMap = new ymaps.Map("MainMap", {
		center:[51.671439, 39.203243],
		zoom: 10,
		type:"yandex#map"
	});
	MainMap.controls.add("typeSelector").add("zoomControl");
});		