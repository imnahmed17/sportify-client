import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import PaymentDataRow from './PaymentDataRow';

const PaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: payments = [] } = useQuery(['payments'], async () => {
        const res = await axiosSecure.get(`/payments?email=${user?.email}`);
        return res.data;
    });

    return (
        <>
            <Helmet>
                <title>Sportify | Payment History</title>
            </Helmet>
            <h3 className='text-center font-semibold text-3xl'>Payment History</h3>
            <div className="mx-auto px-4 sm:px-8">
                <div className="pb-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            #
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Email
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Transaction Id
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Total Price
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-indigo-800 border-b border-gray-200 text-white 
                                        text-left text-sm uppercase font-semibold">
                                            Payment Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payments.map((item, index) => <PaymentDataRow 
                                            key={item._id}
                                            item={item}
                                            index={index} 
                                        />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentHistory;