let app = new Vue({
  el: '#app',
  data: {
    paises: [
      { bandeira: '<img src="bandeiras/argentina.png" />', continente: 'América do Sul' },
      { bandeira: '<img src="bandeiras/brazil.png" />', continente: 'América do Sul' },
      { bandeira: '<img src="bandeiras/china.png" />', continente: 'Ásia' },
      { bandeira: '<img src="bandeiras/uk.png" />', continente: 'Europa' },
      { bandeira: '<img src="bandeiras/usa.png" />', continente: 'América do Norte' }
    ]
  }
});
