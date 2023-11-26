function bandeira(pais) {
  return '<img src="bandeiras/'+pais+'.png" />';
}

let app = new VTTCue({
  el:'#app',
  data: {
    pais: '',
    argentina: bandeira('argentina'),
    brazil: bandeira('brazil'),
    china: bandeira('china'),
    uk: bandeira('uk'),
    usa: bandeira('usa')
  },
  methods: {
    paises: function() {
      return [
        {bandera: this.argentina, continente: 'América do Sul'},
        {bandera: this.brazil, continente: 'América do Sul'},
        {bandera: this.china, continente: 'Ásia'},
        {bandera: this.uk, continente: 'Europa'},
        {bandera: this.usa, continente: 'América do Norte'}
      ];
    }
  }
});

app.pais = 'brazil';