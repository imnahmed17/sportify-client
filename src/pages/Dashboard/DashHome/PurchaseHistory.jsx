import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PurchaseHistory = ({ totalPayments }) => {
    const [axiosSecure] = useAxiosSecure();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', currentPage, itemsPerPage], 
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?page=${currentPage}&limit=${itemsPerPage}`);
            return res.data;
        }
    });
    
    const totalPages = Math.ceil(totalPayments / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    return (
        <div className="">
            <h3 className="px-4 py-3 font-medium text-lg">Payment History</h3>
            <table className="w-full whitespace-nowrap">
                <thead className="bg-slate-100 text-slate-500">
                    <tr>
                        <th className="px-3.5 py-2.5 font-semibold border-y border-slate-200">
                            Email
                        </th>
                        <th className="px-3.5 py-2.5 font-semibold border-y border-slate-200">
                            Transaction ID
                        </th>
                        <th className="px-3.5 py-2.5 font-semibold border-y border-slate-200">
                            Items
                        </th>
                        <th className="px-3.5 py-2.5 font-semibold border-y border-slate-200">
                            Total Price
                        </th>
                        <th className="px-3.5 py-2.5 font-semibold border-y border-slate-200">
                            Status
                        </th>
                        <th className="px-3.5 py-2.5 font-semibold border-y border-slate-200">
                            Payment Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments?.slice(0, 10).map((item) => <tr key={item._id}>
                            <td className="px-3.5 py-2.5 text-sm border-y border-slate-200">
                                {item.email}
                            </td>
                            <td className="px-3.5 py-2.5 text-sm border-y border-slate-200">
                                {item.transactionId}
                            </td>
                            <td className="px-3.5 py-2.5 text-sm text-center border-y border-slate-200">
                                {item.classNames.join(', ')}
                            </td>
                            <td className="px-3.5 py-2.5 text-sm text-center border-y border-slate-200">
                                ${item.price}
                            </td>
                            <td className="px-3.5 py-2.5 text-sm border-y border-slate-200">
                                {item.status}
                            </td>
                            <td className="px-3.5 py-2.5 text-sm border-y border-slate-200">
                                {item.date}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className="m-5 flex items-center justify-between">
                <div className="flex gap-2">
                    {
                        pageNumbers.map(number => <div
                            key={number}
                            className={`inline-flex items-center justify-center px-3 py-1 transition-all duration-150 ease-linear border rounded border-slate-200 text-slate-500 hover:text-cyan-600 cursor-pointer ${currentPage === number ? 'bg-cyan-50 text-cyan-600' : 'bg-white hover:bg-cyan-50'}`}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number + 1}
                        </div>)
                    }
                </div>
                <h3 className="text-slate-500">Showing <span className="font-bold">{payments.length}</span> of <span className="font-bold">{totalPayments}</span> Results</h3>
            </div>
        </div>
    );
};

export default PurchaseHistory;