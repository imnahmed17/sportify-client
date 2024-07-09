import ReactApexChart from 'react-apexcharts';

const AreaChart = ({ data }) => {
    const state = {
        series: [{
            name: 'Enrolled Students',
            data: data.map((item) => item.value)
        }],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            markers: {
                size: 5
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
                min: 0
            },
        },
    };
    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type='area' height={350} />
        </div>
    );
};

export default AreaChart;