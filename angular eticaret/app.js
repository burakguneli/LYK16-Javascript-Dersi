var main = angular.module('main', []);

 main.controller('liste', function($scope){
   $scope.urunler = [
     {
       isim : 'Tavuk',
       fiyat : '54.49'
     },
     {
       isim : 'Essek',
       fiyat : '25.00'
     },
     {
       isim : 'Tavsan',
       fiyat : '29.00'
     },
     {
       isim : 'Aslan',
       fiyat : '15.00'
     },
     {
       isim : 'Tavuz',
       fiyat : '30.50'
     },
     {
       isim : 'Kopek',
       fiyat : '23.99'
     },
     {
       isim : 'Camis',
       fiyat : '33.00'
     }
   ];

  $scope.sepetim = [
    {
      isim : 'deneme',
      fiyat : '0'
    }
    ];

   $scope.sepeteEkle = function(item){
     $scope.sepetim.push({
       isim : item.isim,
       fiyat : item.fiyat
     });
     console.log('Sepete ' + item.isim + ' eklendi!');
   };

   $scope.sepettenSil = function(item){
    var index = $scope.sepetim.indexOf(item);
    $scope.sepetim.splice(index, 1);
     console.log('Sepetten ' + item.isim + ' silindi!');
   };

   $scope.toplamFiyat = function(){
     var liste = $scope.sepetim.map(function(obj){
       return obj.fiyat;
     });
     return liste.reduce(function(eski, yeni){
       var sonuc = parseInt(eski) + parseInt(yeni);
       return sonuc + 'TL';
     });
   };


 });
