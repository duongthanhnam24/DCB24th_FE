"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Product from "./listDetailProduct";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { DialogDemo } from "../dialog/dialog";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addOrder } from "@/redux/features/counter/orderSlice";

function DetailItem({ product }) {
    const order = useSelector((state) => state.order);
    const [typeBtn, setTypeBtn] = useState(true);

    const [count, setCount] = useState(1);
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    async function handleBuyProduct() {
        let priceString = product.price;
        let numberPrice = parseFloat(priceString.replace(/₫|,/g, ""));
        if (!user) {
            router.push("/signin");
        } else {
            if (typeBtn === true || typeBtn === false) {
                setTypeBtn(false);
            } else {
                dispatch(
                    addOrder({
                        orderItem: {
                            name: product.name,
                            size: typeBtn,
                            amount: count,
                            image: product.image[0].img,
                            price: numberPrice,
                            product: product._id,
                        },
                    })
                );
                router.push("/cart");
            }
        }
    }
    function setStorage() {}
    return (
        <div className="relative flex pt-16 sm:flex-col items-center">
            <Product product={product} />
            <div className="w-1/4 sm:w-screen px-5">
                <div>
                    <h1 className="text-2xl font-bold mb-6 sm:mt-4">{product.name}</h1>
                    <span className="text-base ">Thương Hiệu : DCB24th</span>
                    <h2 className="text-3xl my-10 font-bold">{product.price}</h2>
                </div>
                <ButtonSize product={product} typeBtn={typeBtn} setTypeBtn={setTypeBtn} />
                <div>
                    <DialogDemo />
                </div>
                <div className="flex items-center my-4">
                    <h3 className="mr-10 text-xl">Số Lượng</h3>
                    <Button variant="outline" size="icon" onClick={() => setCount(count - 1)}>
                        <ChevronLeft className="h-7 w-7 font-bold" />
                    </Button>
                    <p className="text-xl mx-5">{count >= 1 ? count : setCount(1)}</p>
                    <Button variant="outline" size="icon" onClick={() => setCount(count + 1)}>
                        <ChevronRight className="h-7 w-7 font-bold" />
                    </Button>
                </div>
                <div className="flex flex-col">
                    <Button
                        variant="outline"
                        className="border border-solid border-black h-12 "
                        onClick={() => {
                            handleBuyProduct();
                            setStorage();
                        }}
                    >
                        Thêm vào Giỏ Hàng
                    </Button>
                    {typeBtn === false && (
                        <span className="text-red-500">Hãy chọn size cho bạn</span>
                    )}
                    <Button
                        className=" h-12 bg-[#6d3f0a] text-white hover:bg-[#9b7e5e] mt-4"
                        variant="none"
                    >
                        Mua Ngay
                    </Button>
                </div>
                <div className="mt-20">
                    <p>
                        <span className="font-bold">Chất liệu: </span>vải voan
                    </p>
                    <p>
                        <span className="font-bold">Kiểu dáng: </span>
                        Kiểu dáng: đầm thiết kế dáng chữ A dài qua gối, tone màu hồng in họa tiết
                        hoa hồng, cổ xẻ đính ngọc
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DetailItem;

function ButtonSize({ product, typeBtn, setTypeBtn }) {
    return (
        <div className="">
            <p className="font-bold my-2">Kích thước {typeBtn}</p>
            {product.size.map((size) => (
                <Button
                    key={size}
                    variant="outline"
                    className="border border-solid border-black mr-3 mt-3 w-[80px] "
                    onClick={() => setTypeBtn(size)}
                    style={typeBtn === size ? { backgroundColor: "#6d3f0a", color: "white" } : null}
                >
                    <span className="">{size}</span>
                </Button>
            ))}
        </div>
    );
}
