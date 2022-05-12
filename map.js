function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 24.953, lng: 121.204 },
      zoom: 12,
      mapId: "5941979bf7e351c9",
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
    });
    var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
    const marker = new google.maps.Marker({
      position: { lat: 24.9508776, lng: 120.28997719696468 },
      map: map,
      animation: google.maps.Animation.DROP,
      icon: "./icon/mapICON.png",
    });
  }
  