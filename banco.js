const ctx = document.getElementById('grafico');

new Chart(ctx, {
type: 'doughnut',

data: {

labels: ['Comida', 'Compras', 'Transporte', 'Outros'],

datasets: [{

data: [400, 300, 150, 100],

backgroundColor: [
'#9333ea',
'#3b82f6',
'#22c55e',
'#ef4444'
]

}]

},

options: {

plugins:{
legend:{
labels:{
color:"white"
}
}
}

}

});
