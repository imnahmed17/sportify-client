import { FaBan } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

const ClassDataRow = ({ classData, index, setSingleClassData, setTemp }) => {
    const approved = () => {
        setSingleClassData(classData);
        setTemp(1);
    };

    const denied = () => {
        setSingleClassData(classData);
        setTemp(2);
    };

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap font-semibold">{index + 1}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div>
                    <img alt="profile" src={classData?.image} className="object-cover rounded h-10 w-16" />
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.className}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.instructorName}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.instructorEmail}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.availableSeats}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.price}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{classData?.status}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex gap-2">
                    <label htmlFor="my-modal-3" onClick={approved} className="btn bg-green-900 hover:bg-green-300" 
                    disabled={classData?.status !== 'pending'}><GoVerified color="white" size={20} /></label>
                    <label htmlFor="my-modal-3" onClick={denied} className="btn btn-error bg-red-600" disabled={classData?.status !== 'pending'}><FaBan color="white" size={20} /></label>
                </div>
            </td>
        </tr>
    );
};

export default ClassDataRow;