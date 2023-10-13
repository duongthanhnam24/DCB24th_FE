"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeOrder, increasing, decrease } from "@/redux/features/counter/orderSlice";
import { use, useMemo } from "react";

function Cart() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
    const user = useSelector((state) => state.auth.user);
    const resultTotal = useMemo(() => {
        let init = 0;
        for (const orderItem of order.orderItems) {
            let TotalPriceItem = orderItem.amount * orderItem.price;
            init += TotalPriceItem;
        }
        return init;
    }, [order]);
    const changeNumber = (type, id) => {
        switch (type) {
            case "decrease":
                return dispatch(decrease({ productId: id }));
            case "increasing":
                return dispatch(increasing({ productId: id }));
            default:
                break;
        }
    };
    return (
        <div className="md:container min-h-[1000px] smt:px-5 ">
            <h1 className="py-6 text-[14px] uppercase">
                <Link href={"/"}>TRANG CHỦ</Link> / Giỏ Hàng Của Bạn - DCB24th
            </h1>
            <div className="py-[50px] ">
                <h1 className="text-3xl font-bold">Giỏ Hàng</h1>
                <table className="w-full text-sm text-left  dark:text-gray-400 table-auto smt:hidden">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 ">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Price
                            </th>

                            <th scope="col" className="px-6 py-3 ">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Size
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.orderItems.map((item) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600 cursor-pointer my-2"
                                key={item.product}
                            >
                                <td className="px-6 py-4" key={item.product}>
                                    <img
                                        src={item.image}
                                        width={160}
                                        height={240}
                                        alt="product"
                                        className=" rounded-sm object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 font-bold text-base">{item.name}</td>
                                <td className="px-6 py-4">{item.price}đ</td>
                                <td className="px-6 py-4">
                                    <p className="flex space-x-3">
                                        <Minus
                                            onClick={() => changeNumber("decrease", item.product)}
                                        />{" "}
                                        <span className="text-blue-700">{item.amount}</span>{" "}
                                        <Plus
                                            onClick={() => changeNumber("increasing", item.product)}
                                        />
                                    </p>
                                </td>
                                <td className="px-6 py-4">{item.size}</td>

                                <td className="px-6 py-4 font-bold">{item.price * item.amount}đ</td>
                                <td className="px-6 py-4">
                                    <Button
                                        variant="none"
                                        onClick={() =>
                                            dispatch(removeOrder({ productId: item.product }))
                                        }
                                    >
                                        <Trash2 className="text-red-500" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Note</td>
                            <td colSpan={6} className="text-right">
                                Tổng tiền :
                                <span className="font-medium text-2xl"> {resultTotal} đ</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <div className="hidden smt:flex  smt:flex-col">
                    {order.orderItems.map((item) => (
                        <div key={item.product} className=" smt:flex ">
                            <img
                                src={item.image}
                                width={100}
                                alt="product"
                                className=" rounded-sm"
                            />

                            <div className="space-y-2 ml-3">
                                <h2 className=" font-bold text-base">{item.name}</h2>
                                <p className="">{item.price}đ</p>
                                <div className="">
                                    <p className="flex space-x-3">
                                        <Minus
                                            onClick={() => changeNumber("decrease", item.product)}
                                        />{" "}
                                        <span className="text-blue-700">{item.amount}</span>{" "}
                                        <Plus
                                            onClick={() => changeNumber("increasing", item.product)}
                                        />
                                    </p>
                                </div>
                                <div className="flex space-x-3 items-center">
                                    <p className="">{item.size}</p>

                                    <p className=" font-bold">{item.price * item.amount}đ</p>
                                    <div className="">
                                        <Button
                                            variant="none"
                                            onClick={() =>
                                                dispatch(removeOrder({ productId: item.product }))
                                            }
                                        >
                                            <Trash2 className="text-red-500" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div>
                        <p>Note</p>
                        <h2 colSpan={6} className="text-right">
                            Tổng tiền :
                            <span className="font-medium text-2xl"> {resultTotal} đ</span>
                        </h2>
                    </div>
                </div>

                <div className="h-[100px]">
                    <Button
                        variant="none"
                        className="float-right  h-12 bg-[#6d3f0a] text-white hover:bg-[#9b7e5e] mt-5"
                    >
                        <Link href={`/checkouts/${user?._id}`}> Thanh Toán</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
