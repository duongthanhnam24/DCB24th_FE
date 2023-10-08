import axios from "axios";

export const axiosJWT = axios.create();
// export const GetDetailUser = async (id, access_token) => {
//     const res = await fetch(`http://localhost:4000/users/profile/${id}`, {
//         method: "GET",
//         headers: {
//             token: `beares ${access_token}`,
//         },
//     });
//     const data = await res.json();
//     return data;
// };

// export const GetAllUser = async (token) => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/users/all-user`, {
//         method: "GET",
//         headers: {
//             token: `beares ${token}`,
//         },
//     });
//     const data = await res.json();
//     return data;
// };

export const GetDetailUser = async (id, access_token) => {
    try {
        const res = await axiosJWT.get(
            `${process.env.NEXT_PUBLIC_API_APP_URL}/users/profile/${id}`,
            {
                headers: {
                    token: `${access_token}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

// export const refreshToken = async (refresh_token) => {
//     try {
//         const res = await axios.post(`${process.env.NEXT_PUBLIC_API_APP_URL}/refresh`, {
//             headers: {
//                 refresh: `${refresh_token}`,
//             },
//         });
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
export const rf = async (refresh_token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/refresh`, {
        method: "POST",
        headers: {
            refresh: `${refresh_token}`,
        },
    });
    const data = await res.json();
    return data;
};
