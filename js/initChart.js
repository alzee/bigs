new CircleProgress('.circle', {
	max: 100,
	value: 68,
	textFormat: 'percent',
});
new CircleProgress('.circle2', {
	max: 100,
	value: 52,
	textFormat: 'percent',
});
new CircleProgress('.circle3', {
	max: 100,
	value: 89,
	textFormat: 'percent',
});


const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = [1,2,3,4,5,6,7];
const data = {
  labels: labels,
  datasets: [
    {
      label: '金额',
      data: [1,2,3,4,5,6,7],
      borderColor: '#36a2eb',
      backgroundColor: '#36a2eb',
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '年交易量'
      }
    }
  },
};

const chart = new Chart(document.getElementById('chart'), config);
chart.height = 300;
