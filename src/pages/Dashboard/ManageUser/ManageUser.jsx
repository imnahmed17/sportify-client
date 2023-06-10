import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { makeAdmin, makeInstructor } from "../../../api/auth";
import UserDataRow from "./UserDataRow";
import toast from "react-hot-toast";

const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
        return res.json(); 
    });

    const handleMakeAdmin = user => {
        makeAdmin(user)
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} is an Admin Now!`);
                }
            })
            .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
            });
    };

    const handleMakeInstructor = user => {
        makeInstructor(user)
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} is an Instructor Now!`);
                }
            })
            .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
            });
    };

    return (
        <>
            <Helmet>
                <title>Sportify | Manage Users</title>
            </Helmet>
            <div className="mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 
                                        text-left text-sm uppercase font-semibold">
                                            #
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 
                                        text-left text-sm uppercase font-semibold">
                                            Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 
                                        text-left text-sm uppercase font-semibold">
                                            Email
                                        </th>
                                        <th scope="col" className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 
                                        text-center text-sm uppercase font-semibold">
                                            Role {users.length}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => <UserDataRow 
                                            key={user._id}
                                            user={user}
                                            index={index} 
                                            handleMakeAdmin={handleMakeAdmin}
                                            handleMakeInstructor={handleMakeInstructor}
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

export default ManageUser;