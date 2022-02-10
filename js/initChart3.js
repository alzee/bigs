const labels3 = ['茅箭区','张湾区','白浪开发区', '郧西', '丹江口', '竹山', '竹溪'];
const data3 = {
  labels: labels3,
  datasets: [
    {
      label: '预定数',
      data: [92,23,94,85,57,68,89],
      borderColor: '#36a2eb',
      backgroundColor: '#36a2eb',
    },
    {
      label: '下单量',
      data: [98,73,82,92,61,91,81],
      borderColor: '#4bc0c0',
      backgroundColor: '#4bc0c0',
    }
  ]
};

const config3 = {
  type: 'radar',
  data: data3,
  options: {
    responsive: true,
    scales: {
        r: {
            grid: {
                //display: false,
            },
            ticks: {
                display: false,
            }
        },
    },
    plugins: {
      title: {
        display: false,
        text: '区域订单量'
      }
    }
  },
};

const chart3 = new Chart(document.getElementById('chart3'), config3);
chart3.height = 300;
