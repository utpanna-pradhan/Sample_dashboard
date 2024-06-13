const xValues = ["sun","mon","tue","wed","thu","fri","sat"];
const yValues = [0,20,40,60,80,100];

new Chart("myChart", {
  type: "line",
   data: {
    labels: xValues,
    datasets: [{ 
        
      data: [15,43,25,79,69,79,65],
      borderColor: "blue",
      fill: false
    }, { 
        
      data: [25,20,42,15,55,21,45],
      borderColor: "red",
      fill: false
    }, ]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:100}}],
    }
  }
});




/*chart2*/
var ctx = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["sun", "mon", "tue", "wed", "thu", "fri", "Sat"],
    datasets: [{
      label: 'weighted',
      data: [20, 25, 10, 40, 40, 24, 43],
      backgroundColor: "orange"
    }, {
      label: 'won',
      data: [42, 80, 19, 99, 79, 79, 79],
      backgroundColor: "blue"
    }]
  }
});