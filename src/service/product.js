export const getAllProduct = async (pageUi) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product?page=${pageUi - 1}`);
    const data = res.json();
    return data;
};

export const getBestSeller = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product/get-product/hot`);
};

export const createProduct = async (valueForm) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product/create-product`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(valueForm),
    }).then((res) => res.json());
    return data;
};

export const updateProduct = async (id, valueForm) => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_APP_URL}/product/update-product/${id}`,
        {
            method: "PATCH",
            body: JSON.stringify(valueForm),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }
    ).then((res) => res.json());
    return data;
};

export const deleteSoft = async (id) => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_APP_URL}/product/delete-product/${id}`,
        {
            method: "DELETE",
        }
    ).then((res) => res.json());
    return data;
};
