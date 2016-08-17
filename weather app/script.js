$( ".ara" ).click(function() {
  var city = $('.select option:selected').text();
  console.log(city);

  $.ajax({
    url : 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=bf7204410541c2808973649e5e63aecf',
    method : 'GET'
  }).done(function(data){

    var sehir = $('.title');
    var aciklama = $('.description');
    var derece = $('.degree');
    var icon = $('.ikon');
    var img = $('<img>').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');

    if (sehir) {
       sehir.html('');
       derece.html('');
       icon.html('');
       aciklama.html('');

      sehir.append('Sehir : ' + data.name);
      derece.append('Derece : ' + data.main.temp + ' ℃');
      icon.append(img);
      aciklama.append(+ data.weather[0].description).toUpperCase();
    } else {
      console.log("CITY NOT FOUND!");
    }

    console.log(data);

  }).fail(function(hata){
    console.log(hata);
  });
});
