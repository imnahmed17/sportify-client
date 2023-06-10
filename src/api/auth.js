import axios from 'axios';

export const saveUser = user => {
    axios.post(`${import.meta.env.VITE_API_URL}/users`, {
        email: user.email,
        name: user.displayName
    })
        .then(data => console.log(data));
};

export const makeAdmin = async user => {
    const response = await axios.patch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`);

    return response.data;
}

export const makeInstructor = async user => {
    const response = await axios.patch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`);

    return response.data;
}