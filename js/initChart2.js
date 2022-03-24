fetch('https://mysteelapi.steelphone.com/tpl/zhanting_data.html?indexCodes=SS_0000156821&startTime=2021-01-01')
    .then(response => response.text())
    .then(data => {
        data = data.replace('callback(', '');
        data = data.replace(');', '');
        data = JSON.parse(data);
        let labels2 = data.xAxis;
        // let data2 = data.datas[0].yAxis;
        let data2 =  {
            labels: data.xAxis,
            datasets: [
                {
                    label: 'test',
                    data: data.datas[0].yAxis,
                    borderColor: '#05309c',
                    backgroundColor: '#05309c',
                    fill: true
                }
            ]
        };

        const config2 = {
            type: 'line',
            data: data2,
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: false,
                        text: (ctx) => '区域交易分析'
                    },
                    tooltip: {
                        mode: 'index'
                    },
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: ''
                        }
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: ''
                        }
                    }
                }
            }
        };
        // console.log(data);
        const chart2 = new Chart(document.getElementById('chart2'), config2);
        //chart2.height = 300;
    });
