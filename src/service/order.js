export const createOrder = async (orders, ship, payment, total, id) => {
    const param = await {
        orderItems: orders,
        shippingAddress: ship,
        paymentMethod: payment,
        totalPrice: total,
        user: id,
    };
    console.log(param);
    const data = fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/order/create-order`, {
        method: "POST",
        body: JSON.stringify(param),
        headers: {
            "Content-type": "application/json",
        },
    }).then((res) => res.json());
    return data;
};

export const getAllOrder = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/order/get-order`, {
        method: "GET",
    }).then((res) => res.json());
    return data;
};
