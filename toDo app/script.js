$.ajax({
  url : 'http://jsonplaceholder.typicode.com/todos?userId=1',
  method : 'GET'
}).done(function(data){

  var yer = $('.biten');
  var yer1 = $('.bitmeyen');

  data.forEach(function(eleman){
    var id = $('<li>' + eleman.id + '</li>');
    var title = $('<li>' + eleman.title + '</li>');
    var completed = $('<li>' + eleman.completed + '</li>');

    if(eleman.completed){
      yer.append('<p>Bu ID : ' + eleman.id + '</p>');
      yer.append('<p>Bu title : ' + eleman.title + '</p>');
      yer.append('<p>Bu completed : ' + eleman.completed + '</p>');
    } else {
      yer1.append('<p>Bu ID : ' + eleman.id + '</p>');
      yer1.append('<p>Bu title : ' + eleman.title + '</p>');
      yer1.append('<p>Bu completed : ' + eleman.completed + '</p>');
    }
  });



}).fail(function(hata){
  console.log(hata);
});
