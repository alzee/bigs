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


const labels = ['一月','二月','三月', '四月', '五月', '六月', '七月'];
const data = {
  labels: labels,
  datasets: [
    {
      label: '金额',
      data: [4800,8300,7200,6200,7100,9800,8100],
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
        display: false,
        text: '年交易量'
      }
    }
  },
};

const chart = new Chart(document.getElementById('chart'), config);
chart.height = 300;
