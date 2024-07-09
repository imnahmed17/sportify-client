import ReactApexChart from 'react-apexcharts';

const BarChart = ({ data }) => {
    const state = {
        series: [{
            name: 'Enrolled Students',
            data: data.map((item) => item.value)
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                },
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: data.map((item) => item.className),
                axisBorder: {
                    show: true
                },
            },
            yaxis: {
                axisBorder: {
                    show: true
                },
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
        },
    };

    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type='bar' height={350} />
        </div>
    );
};

export default BarChart;