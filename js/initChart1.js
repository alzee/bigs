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


const labels1 = ['一月','二月','三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const data1 = {
  labels: labels1,
  datasets: [
    {
      label: '金额',
      data: [4800,8300,7200,6200,7100,9800,8100,8800,8600,9200,8300,9400],
      borderColor: '#36a2eb',
      backgroundColor: '#36a2eb',
    }
  ]
};

const config1 = {
  type: 'bar',
  data: data1,
  options: {
    responsive: true,
    maintainAspectRatio: false,
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

const chart1 = new Chart(document.getElementById('chart1'), config1);
chart1.height = 300;
