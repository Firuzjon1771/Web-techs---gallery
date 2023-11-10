
  maps = L.map('maps').setView([48, 19], 3);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(maps);
  
  x=0;
  y=0;

  marker = L.marker([x,y]).addTo(maps);

  function play(){
   interval = setInterval(function(){next()}, 2000);
  }

  function pause(){
   clearInterval(interval);
  }  
  
  function next(){
   $.getJSON('infoMedia.json', function(jd) { 

      var image = global_pic;

      var i=0;
      var pos=0;

      while(true){
      
         if (image.link==jd.images[i].link){

            if(i+1>9){
               pos = 0;
            }else{
               pos = i+1;
            }    
            var image = jd.images[pos];     
            break;
         }
         i++;
      }

      global_pic=image;

      $('#picture_gallery').attr("src",image.link);
      document.querySelector('.big_pic').style.visibility = 'visible';
   
      $('#here').html('Názov: ' + image.name +'<br>' + image.description +'<br>' + ' Dátum: ' + image.date);
      maps.removeLayer(marker);

      marker = L.marker([image.GPSx,image.GPSy]).addTo(maps);
      
   });
  }

  function previous(){
   $.getJSON('infoMedia.json', function(jd) { 

      var image = global_pic;

      var i=0;
      var pos=0;

      while(true){
      
         if (image.link==jd.images[i].link){
            if(i-1<0){
               pos = 9;
            }else{
               pos = i-1;
            }    
            var image = jd.images[pos];     
            break;
         }
         i++;
      }

      global_pic=image;

      $('#picture_gallery').attr("src",image.link);
      document.querySelector('.big_pic').style.visibility = 'visible';
   
      $('#here').html('Názov: ' + image.name +'<br>' + image.description +'<br>' + ' Dátum: ' + image.date);

      maps.removeLayer(marker);

      marker = L.marker([image.GPSx,image.GPSy]).addTo(maps);
   });
  }

  function closeR(){;
   document.querySelector('.big_pic').style.visibility = 'hidden';
   clearInterval(interval);
  }

  function search(){   

   $.getJSON('infoMedia.json', function(jd) { 

      var text = (document.getElementById('searchMY').value).toLowerCase();

      for (let i = 0; i < 10; i++) {
         var name = jd.images[i].name;
         var description = jd.images[i].description;

         name= name.toLowerCase();
         description = description.toLowerCase();

         let resultName = name.includes(text);
         let resultDescription = description.includes(text);

         if (resultName==true || resultDescription==true){
            document.getElementById('fotky').children[i].style.display = '';
         }else{
            document.getElementById('fotky').children[i].style.display = 'none';
         }

     }    

   });  

  }

$(document).ready(function() {
      $.getJSON('infoMedia.json', function(jd) {
         var image1=jd.images[0];
         var image2=jd.images[1];
         var image3=jd.images[2];
         var image4=jd.images[3];
         var image5=jd.images[4];
         var image6=jd.images[5];
         var image7=jd.images[6];
         var image8=jd.images[7];
         var image9=jd.images[8];
         var image10=jd.images[9];

         $('#picture1').attr("src",image1.link);

         $('#picture2').attr("src",image2.link);

         $('#picture3').attr("src",image3.link);

         $('#picture4').attr("src",image4.link);

         $('#picture5').attr("src",image5.link);

         $('#picture6').attr("src",image6.link);

         $('#picture7').attr("src",image7.link);

         $('#picture8').attr("src",image8.link);

         $('#picture9').attr("src",image9.link);

         $('#picture10').attr("src",image10.link);
      });
   
  });

  function displayImages(vstup){
   $.getJSON('infoMedia.json', function(jd) { 

      var link = document.getElementById(vstup).getAttribute('src');

      var i=0;

      while(true){
      
         if (link==jd.images[i].link){
            var image = jd.images[i];
            break;
         }
         i++;
      }

      global_pic=image;

      $('#picture_gallery').attr("src",link);
      document.querySelector('.big_pic').style.visibility = 'visible';
   
      $('#here').html('Názov: ' + image.name +'<br>' + image.description +'<br>' + ' Dátum: ' + image.date);

      maps.removeLayer(marker);

      marker = L.marker([image.GPSx,image.GPSy]).addTo(maps);
   });
  }


  