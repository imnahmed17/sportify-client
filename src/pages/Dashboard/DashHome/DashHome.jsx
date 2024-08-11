import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Statistics from './Statistics';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import PurchaseHistory from './PurchaseHistory';
import { useLoaderData } from 'react-router-dom';

const DashHome = () => {
    const [axiosSecure] = useAxiosSecure();
    const { totalPayments } = useLoaderData();

    const { data: stats = [] } = useQuery(['dashboard-stats'], async () => {
        const res = await axiosSecure.get('/dashboard-stats');
        return res.data;
    });

    const { data: chartData = [] } = useQuery(['enrollment-stats'], async () => {
        const res = await axiosSecure.get('/enrollment-stats');
        return res.data;
    });

    return (
        <div>
            <div className='mt-12 px-2'>
                <div>
                    <Statistics stats={stats} />
                </div>
                <div className='mt-6 flex flex-col md:flex-row gap-6'>
                    <div className='w-full py-2 shadow rounded-md'>
                        <BarChart data={chartData} />
                    </div>
                    <div className='w-full py-2 shadow rounded-md'>
                        <AreaChart data={chartData} />
                    </div>
                </div>
                <div className='mt-6 flex flex-col-reverse md:flex-row gap-6'>
                    <div className='w-full shadow rounded-md'>
                        <PurchaseHistory totalPayments={totalPayments} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashHome;