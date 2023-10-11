"use client";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { UserSquare2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { createOrder } from "@/service/order";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reset } from "@/redux/features/counter/orderSlice";

function Checkouts({ params }) {
    const dispath = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const order = useSelector((state) => state.order);
    const [ship, setShip] = useState({
        fullName: "",
        address: "",
        city: "",
        phone: "",
    });
    const [payment, setPayment] = useState("");
    const resultTotal = useMemo(() => {
        let init = 0;
        for (const orderItem of order.orderItems) {
            let TotalPriceItem = orderItem.amount * orderItem.price;
            init += TotalPriceItem;
        }
        return init;
    }, [order]);

    function handleSetShipping(e) {
        setShip({
            ...ship,
            [e.name]: e.value,
        });
    }
    async function handleSubmit() {
        const data = await createOrder(order.orderItems, ship, payment, resultTotal, params.id);
        if (data.message) {
            toast.error("Bạn quên điền thứ gì đó ?", { theme: "dark", position: "top-center" });
        } else {
            toast.success("Đặt Hàng Thành Công", { theme: "dark", position: "top-center" });
            dispath(reset());
        }
    }
    return (
        <div className="container min-h-[800px]">
            <h1 className="py-6 text-[14px] uppercase">
                <Link className="text-blue-500" href={"/cart"}>
                    Giỏ Hàng
                </Link>{" "}
                / Thanh Toán
            </h1>
            <div className="flex flex-row space-x-10">
                <div className="w-[60%] space-y-3">
                    <h2 className="text-xl">Thông tin Thanh Toán</h2>
                    <div className="w-1/2 flex space-x-2">
                        <UserSquare2 size={65} className="" />
                        <div className="grid grid-cols-1 grid-row-2">
                            <p className=" row-span-1">{user?.email}</p>
                            <Button
                                variant="link"
                                className="text-blue-500 row-span-1 p-0 h-[25px]"
                                onClick={() => localStorage.clear()}
                            >
                                Logout
                            </Button>
                        </div>
                    </div>
                    <form className="space-y-3">
                        <Input
                            placeholder="Name"
                            name="fullName"
                            onChange={(e) => handleSetShipping(e.target)}
                            className="border border-solid border-gray-400 focus-visible:border-[2px] focus-visible:border-blue-500"
                        />
                        <Input
                            placeholder="Phone"
                            name="phone"
                            onChange={(e) => handleSetShipping(e.target)}
                            className="border border-solid border-gray-400 focus-visible:border-[2px] focus-visible:border-blue-500"
                        />
                        <Input
                            placeholder="City"
                            name="city"
                            onChange={(e) => handleSetShipping(e.target)}
                            className="border border-solid border-gray-400 focus-visible:border-[2px] focus-visible:border-blue-500"
                        />
                        <Input
                            placeholder="Address"
                            name="address"
                            onChange={(e) => handleSetShipping(e.target)}
                            className="border border-solid border-gray-400 focus-visible:border-[2px] focus-visible:border-blue-500"
                        />
                    </form>
                </div>
                <div className="w-[40%] space-y-3">
                    <div>
                        {order.orderItems.map((item) => (
                            <div
                                key={item.product}
                                className="w-1/2 flex border-b-[1px] border-solid border-gray-400 "
                            >
                                <img src={item.image} width={50} height={100} alt="..." />
                                <div className="flex flex-col">
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-gray-500">{item.size}</p>
                                    <p className="text-gray-500">{item.amount}</p>
                                </div>
                                <div className="flex justify-center items-center ml-10">
                                    {item.amount * item.price}đ
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3>
                        Tổng Tiền : <span className="float-right font-bold">{resultTotal} đ</span>
                    </h3>
                </div>
            </div>
            <div className="space-y-4 mt-4">
                <h2 className="text-xl">Đơn vị Vận Chuyển</h2>
                <form className="space-y-3">
                    <input type="radio" id="Fast" name="deliver" />
                    <label htmlFor="Fast">
                        <span className="text-yellow-600">Fast</span> Giao hàng tiết kiệm
                    </label>
                    <br />
                    <input type="radio" id="Go" name="deliver" />
                    <label htmlFor="Go">
                        <span className="text-yellow-600">Go JEK</span> Giao hàng tiết kiệm
                    </label>
                </form>
                <h2 className="text-xl">Phương Thức Thanh Toán</h2>
                <form className="space-y-3">
                    <input
                        type="radio"
                        id="faceToFace"
                        name="Payment"
                        value="Thanh Toán khi nhận"
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    <label htmlFor="faceToFace">Thanh toán khi nhận hàng</label>
                    <br />
                    <input
                        type="radio"
                        id="paypal"
                        name="Payment"
                        value="Payment"
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    <label htmlFor="paypal">Paypal</label>
                </form>
                <div className="h-[100px]">
                    <Button
                        variant="none"
                        onClick={() => handleSubmit()}
                        className="float-right  h-12 bg-[#6d3f0a] text-white hover:bg-[#9b7e5e] mt-5"
                    >
                        Xác Nhận
                    </Button>
                </div>
            </div>
            <h1>HOẶC</h1>

            <ToastContainer />
        </div>
    );
}

export default Checkouts;