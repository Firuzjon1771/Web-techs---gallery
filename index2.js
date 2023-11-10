function closeR() {
    ;
    document.querySelector('.mini_gallery').style.visibility = 'hidden';
  
    document.getElementById('previous').style.visibility = 'hidden';
  
    document.getElementById('next').style.visibility = 'hidden';
  }

  $(document).ready(function () {
    $.getJSON('infoMedia.json', function (elem) {
      var image1 = elem.images[0];
      var image2 = elem.images[1];
      var image3 = elem.images[2];
      var image4 = elem.images[3];
      var image5 = elem.images[4];
      var image6 = elem.images[5];
      var image7 = elem.images[6];
      var image8 = elem.images[7];
      var image9 = elem.images[8];
  
      $('#picture1').attr("src", image1.link);
  
      $('#picture2').attr("src", image2.link);
  
      $('#picture3').attr("src", image3.link);
  
      $('#picture4').attr("src", image4.link);
  
      $('#picture5').attr("src", image5.link);
  
      $('#picture6').attr("src", image6.link);
  
      $('#picture7').attr("src", image7.link);
  
      $('#picture8').attr("src", image8.link);
  
      $('#picture9').attr("src", image9.link);  
  
      var marker1 = new L.marker([image1.GPSx, image1.GPSy]).addTo(map); 
      marker1.on('click', function (e) {
        global_pic = image1;
        OnClickMarker(3, image1.name, image1.link, image1.description, image1.date);
      });
  
      var marker4 = new L.marker([image4.GPSx, image4.GPSy]).addTo(map); // kk
  
      marker4.on('click', function (e) {
        OnClickMarker(0, image4.name, image4.link, image4.description, image4.date);
      });
  
      var marker5 = new L.marker([image5.GPSx, image5.GPSy]).addTo(map); // rakusko
  
      marker5.on('click', function (e) {
        OnClickMarker(0, image5.name, image5.link, image5.description, image5.date);
      });
  
      var marker6 = new L.marker([image6.GPSx, image6.GPSy]).addTo(map); //svk
      marker6.on('click', function (e) {
        OnClickMarker(0, image6.name, image6.link, image6.description, image6.date);
      });
  
      var marker7 = new L.marker([image7.GPSx, image7.GPSy]).addTo(map); //slovinsko 1
      marker7.on('click', function (e) {
        OnClickMarker(0, image7.name, image7.link, image7.description, image7.date);
      });
  
      var marker8 = new L.marker([image8.GPSx, image8.GPSy]).addTo(map);// slovinsko 2
      marker8.on('click', function (e) {
        OnClickMarker(0, image8.name, image8.link, image8.description, image8.date);
      });
  
      var marker9 = new L.marker([image9.GPSx, image9.GPSy]).addTo(map); //ita1 +ita2
      marker9.on('click', function (e) {
        global_pic = image9;
        OnClickMarker(2, image9.name, image9.link, image9.description, image9.date);
      });
  
    });
  
  });
  
  var map = L.map('map').setView([46, 19], 4);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);
  
  
  function OnClickMarker(num, name, src, description, date) {
  
    $('#mini_picture_gallery').attr("src", src);
  
    document.querySelector('.mini_gallery').style.visibility = 'visible';
  
    $('#mini_here').html('Názov: ' + name + '<br>' + description + '<br>' + ' Dátum: ' + date);
  }
  
  checked = 0;
  function trasa(){
    checked+=1;
    if (checked%2==0){
      map.removeControl( routingControl);
    }
    else{
      routingControl = L.Routing.control({
        waypoints: [
            L.latLng(49.13637,20.24386),
            L.latLng(49.1199381392078,20.0622174070856),
            L.latLng(48,19),
            L.latLng(49.26192130100561,19.358549440892727),
            L.latLng(48.37928469626086,16.309034913883224),
            L.latLng(38.57413188772827,68.78532014061362),
            L.latLng(39.252791834984905,68.79373198954129),
            L.latLng(48.15765128413901,17.068740594309254),
            L.latLng(40.30671641903419,70.19377763304483)
        ],
        routeWhileDragging: true
    }).addTo(map);
    
    }
     
  }