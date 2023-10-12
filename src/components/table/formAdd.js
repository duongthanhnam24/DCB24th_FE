"use client";
import { createProduct } from "@/service/product";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "react-toastify";

function FormAdd() {
    const [valueForm, setValueForm] = useState({
        name: null,
        price: null,
        type: null,
        size: null,
        Ob: null,
        image: null,
    });
    const [img1, setImg1] = useState({});
    const [img2, setImg2] = useState({});
    const [img3, setImg3] = useState({});
    const [img4, setImg4] = useState({});
    const [sizeCheck, setSizeCheck] = useState([]);

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
    async function handleSubmit() {
        const data = await createProduct(valueForm);
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
                        onChange={(e) => setImg1({ img: e.target.value })}
                        className="border border-solid border-gray-500 rounded-sm w-[250px] px-2 py-1 focus-visible:border-blue-500"
                    />
                    <label className=" font-bold text-base" htmlFor="imgTwo">
                        Image
                    </label>
                    <input
                        id="imgTwo"
                        name="img"
                        onChange={(e) => setImg2({ img: e.target.value })}
                        className="border border-solid border-gray-500 rounded-sm w-[250px] px-2 py-1"
                    />
                    <label className=" font-bold text-base" htmlFor="imgThree">
                        Image
                    </label>
                    <input
                        id="imgThree"
                        name="img"
                        onChange={(e) => setImg3({ img: e.target.value })}
                        className="border border-solid border-gray-500 rounded-sm w-[250px] px-2 py-1"
                    />
                    <label className=" font-bold text-base" htmlFor="imgFour">
                        Image
                    </label>
                    <input
                        id="imgFour"
                        name="img"
                        onChange={(e) => {
                            setImg4({ img: e.target.value });
                        }}
                        className="border border-solid border-gray-500 rounded-sm w-[250px] px-2 py-1"
                    />
                    <label className="text-black font-bold text-base" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        value={valueForm.name}
                        onChange={(e) => getValue(e.target)}
                        className="border border-solid border-gray-500 rounded-sm w-[250px] px-2 py-1"
                    />
                    <label className=" font-bold text-base" htmlFor="price">
                        Price
                    </label>
                    <input
                        id="price"
                        name="price"
                        value={valueForm.price}
                        onChange={(e) => getValue(e.target)}
                        className="border border-solid border-gray-500 rounded-sm w-[250px] px-2 py-1"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex text-base  font-bold space-x-7">
                        <div>
                            <label> Size</label>
                            <input
                                type="checkbox"
                                id="size2"
                                value="size2"
                                onChange={(e) => {
                                    handleCheck(e.target);
                                }}
                            />
                            <label htmlFor="size2"> size2</label>
                            <br />
                            <input
                                type="checkbox"
                                id="size4"
                                value="size4"
                                onChange={(e) => {
                                    handleCheck(e.target);
                                }}
                            />
                            <label htmlFor="size4"> size4</label>
                            <br />
                            <input
                                type="checkbox"
                                id="size6"
                                value="size6"
                                onChange={(e) => handleCheck(e.target)}
                            />
                            <label htmlFor="size6"> size6</label>
                            <br />
                            <input
                                type="checkbox"
                                id="size8"
                                value="size8"
                                onChange={(e) => handleCheck(e.target)}
                            />
                            <label htmlFor="size8"> size8</label>
                            <br />
                            <input
                                type="checkbox"
                                id="size10"
                                value="size10"
                                onChange={(e) => handleCheck(e.target)}
                            />
                            <label htmlFor="size10"> size10</label>
                            <br />
                        </div>

                        <div>
                            <label>Shoes</label>
                            <input
                                type="checkbox"
                                id="us9"
                                value="us9"
                                onChange={(e) => handleCheck(e.target)}
                            />
                            <label htmlFor="us9"> us9</label>
                            <br />
                            <input
                                type="checkbox"
                                id="us10"
                                value="us10"
                                onChange={(e) => handleCheck(e.target)}
                            />
                            <label htmlFor="us10"> us10</label>
                            <br />
                            <input
                                type="checkbox"
                                id="us12"
                                value="us12"
                                onChange={(e) => handleCheck(e.target)}
                            />
                            <label htmlFor="us12"> us12</label>
                            <br />
                            <input
                                type="checkbox"
                                id="us13"
                                value="us13"
                                onChange={(e) => handleCheck(e.target)}
                            />
                            <label htmlFor="us13"> us13</label>
                            <br />
                            <input
                                type="checkbox"
                                id="us14"
                                value="us14"
                                onChange={(e) => handleCheck(e.target)}
                            />
                            <label htmlFor="us14"> us14</label>
                            <br />
                        </div>
                    </div>
                    <label htmlFor="type" className=" font-bold text-base">
                        Type
                    </label>
                    <select
                        name="type"
                        id="type"
                        className="w-[150px] p-2"
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

export default FormAdd;
