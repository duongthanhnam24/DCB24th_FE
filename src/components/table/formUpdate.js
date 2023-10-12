"use client";
import { updateProduct } from "@/service/product";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "react-toastify";

const sizeDefault = [
    "size2",
    "size4",
    "size6",
    "size8",
    "size10",
    "us9",
    "us10",
    "us12",
    "us13",
    "us14",
];
function FormUpdate({ id, product }) {
    const [img1, setImg1] = useState(product.image[0]);
    const [img2, setImg2] = useState(product.image[1]);
    const [img3, setImg3] = useState(product.image[2]);
    const [img4, setImg4] = useState(product?.image[3]);
    const [sizeCheck, setSizeCheck] = useState(product.size);
    const [valueForm, setValueForm] = useState({
        name: product.name,
        price: product.price,
        type: product.type,
        size: sizeCheck,
        Ob: product.Ob,
        image: [img1, img2, img3, img4],
    });

    function handleCheck(e) {
        if (e.checked) {
            return setSizeCheck([...sizeCheck, e.id]);
        } else {
            let updateSizeCheck = [];
            for (let i = 0; i < sizeCheck.length; i++) {
                if (sizeCheck[i] !== e.id) {
                    updateSizeCheck.push(sizeCheck[i]);
                }
            }
            // setSizeCheck(sizeCheck.filter((item) => item !== e.id));
            setSizeCheck(updateSizeCheck);
        }
    }
    function getValue(e) {
        setValueForm({
            ...valueForm,
            [e.name]: e.value,
            image: [img1, img2, img3, img4],
            size: sizeCheck,
        });
    }
    console.log(valueForm);
    async function handleSubmit() {
        const data = await updateProduct(id, valueForm);
        if (data.message === "missing something ?") {
            toast.error("missing something ?", { theme: "dark", position: "top-center" });
        } else {
            toast.success("Wow so easy!", { theme: "dark", position: "top-center" });
            window.location.reload();
        }
    }
    return (
        <>
            <form className=" flex justify-around text-black smt:flex-col">
                <div className="flex flex-col space-y-2">
                    <label className=" font-bold text-base" htmlFor="imgOne">
                        Image
                    </label>
                    <input
                        id="imgOne"
                        name="img"
                        value={img1.img}
                        onChange={(e) => setImg1({ img: e.target.value })}
                        className="border border-solid border-slate-950 rounded-sm w-[250px] px-2 py-1"
                    />
                    <label className=" font-bold text-base" htmlFor="imgTwo">
                        Image
                    </label>
                    <input
                        id="imgTwo"
                        name="img"
                        value={img2.img}
                        onChange={(e) => setImg2({ img: e.target.value })}
                        className="border border-solid border-slate-950 rounded-sm w-[250px] px-2 py-1"
                    />
                    <label className=" font-bold text-base" htmlFor="imgThree">
                        Image
                    </label>
                    <input
                        id="imgThree"
                        name="img"
                        value={img3.img}
                        onChange={(e) => setImg3({ img: e.target.value })}
                        className="border border-solid border-slate-950 rounded-sm w-[250px] px-2 py-1"
                    />
                    <label className=" font-bold text-base" htmlFor="imgFour">
                        Image
                    </label>
                    <input
                        id="imgFour"
                        name="img"
                        value={img4?.img}
                        onChange={(e) => {
                            setImg4({ img: e.target.value });
                        }}
                        className="border border-solid border-slate-950 rounded-sm w-[250px] px-2 py-1"
                    />
                    <label className="text-black font-bold text-base" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        value={valueForm.name}
                        onChange={(e) => getValue(e.target)}
                        className="border border-solid border-slate-950 rounded-sm w-[250px] px-2 py-1"
                    />
                    <label className=" font-bold text-base" htmlFor="price">
                        Price
                    </label>
                    <input
                        id="price"
                        name="price"
                        value={valueForm.price}
                        onChange={(e) => getValue(e.target)}
                        className="border border-solid border-slate-950 rounded-sm w-[250px] px-2 py-1"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex text-base font-bold flex-col">
                        <label> Size</label>
                        {sizeDefault.map((size) => (
                            <div className="space-x-3" key={size}>
                                <input
                                    type="checkbox"
                                    id={size}
                                    value={size}
                                    checked={sizeCheck.includes(size)}
                                    onChange={(e) => {
                                        handleCheck(e.target);
                                    }}
                                />
                                <label htmlFor="size2">{size}</label>
                            </div>
                        ))}
                    </div>
                    <label htmlFor="type" className=" font-bold text-base">
                        Type
                    </label>
                    <select
                        name="type"
                        id="type"
                        className="w-[150px] p-2"
                        value={valueForm.type}
                        onChange={(e) => getValue(e.target)}
                    >
                        <option>--Choose type--</option>
                        <option value="shirt">shirt</option>
                        <option value="pants">pants</option>
                        <option value="dress">dress</option>
                        <option value="shoes">shoes</option>
                    </select>
                    <label htmlFor="Ob" className=" font-bold text-base">
                        Object
                    </label>
                    <select
                        name="Ob"
                        id="Ob"
                        className="w-[150px] p-2"
                        value={valueForm.Ob}
                        onChange={(e) => getValue(e.target)}
                    >
                        <option>--Choose Object--</option>
                        <option value="man">man</option>
                        <option value="woman">woman</option>
                        <option value="kids">kids</option>
                    </select>
                </div>
            </form>
            <Button className="float-right" onClick={() => handleSubmit()}>
                Submit
            </Button>
        </>
    );
}

export default FormUpdate;
