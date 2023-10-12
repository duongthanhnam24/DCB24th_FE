"use client";
import { getAllProduct } from "@/service/product";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Pagination from "../page/Pagination";
import NewAndUpdateProduct from "./formManagement";
import { toast } from "react-toastify";
import { DownloadTableExcel } from "react-export-table-to-excel";

function TableProduct() {
    const tableRef = useRef(null);
    const [dataValue, setDataValue] = useState({});
    const [pageUi, setPageUi] = useState(1);
    const [inputCheck, setInputCheck] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllProduct(pageUi);
                setDataValue(res);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [pageUi]);
    const { page, countProducts, totalPage, Products } = dataValue;
    function handleCheckAll(e) {
        if (e.checked) {
            const idArr = [];
            for (const data of Products) {
                idArr.push(data._id);
            }
            setInputCheck(idArr);
        } else {
            setInputCheck([]);
        }
    }
    function handleCheck(e) {
        if (e.checked) {
            setInputCheck([...inputCheck, e.id]);
        } else {
            let updateSetInput = [];
            for (const input of inputCheck) {
                if (input !== e.id) {
                    updateSetInput.push(input);
                }
            }
            setInputCheck(updateSetInput);
        }
    }
    function handleSubmit() {
        if (inputCheck.length === 0) {
            toast.error("missing something ?", { theme: "dark", position: "top-center" });
        } else {
            toast.success("Wow so easy!", { theme: "dark", position: "top-center" });
            fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product/delete-many-product`, {
                method: "POST",
                body: JSON.stringify(inputCheck),
                headers: {
                    "Content-type": "application/json",
                },
            }).then((res) => res.json);
        }

        window.location.reload();
    }
    return (
        <div className="relative overflow-x-auto shadow-md smt:rounded-lg">
            <Button
                variant="destructive"
                className="  float-right mb-4 smt:float-left smt:mr-2"
                onClick={() => handleSubmit()}
            >
                Delete All
            </Button>
            <DownloadTableExcel
                filename="users table"
                sheet="users"
                currentTableRef={tableRef.current}
            >
                <Button variant="none" className="bg-blue-500 text-white ">
                    Export excel
                </Button>
            </DownloadTableExcel>
            <table
                ref={tableRef}
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto h-[1400px]"
            >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    checked={inputCheck.length === 10}
                                    onChange={(e) => handleCheckAll(e.target)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Number
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Size
                        </th>
                        <th scope="col" className="px-6 py-3">
                            For
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sale
                        </th>
                        <th scope="col" colSpan={2} className="px-6 py-3 ">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Products?.map((dataItem, i) => (
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-cyan-200 dark:hover:bg-gray-600 cursor-pointer "
                            key={i}
                        >
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input
                                        id={dataItem._id}
                                        type="checkbox"
                                        checked={inputCheck.includes(dataItem._id)}
                                        onChange={(e) => handleCheck(e.target)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor={dataItem._id} className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td className="px-6 py-4">{i + 1}</td>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                key={dataItem.name}
                            >
                                {dataItem.name}
                            </th>
                            <td className="px-6 py-4">{dataItem.price}</td>
                            <td className="px-6 py-4">{dataItem.type}</td>
                            <td className="px-6 py-4">
                                {dataItem.size?.map((size, index) => {
                                    return (
                                        <p key={index}>
                                            <span>{size}</span>
                                        </p>
                                    );
                                })}
                            </td>
                            <td className="px-6 py-4">{dataItem.Ob}</td>
                            <td className="px-6 py-4">{dataItem.sale}</td>
                            <td className="py-4 ">
                                <NewAndUpdateProduct
                                    title={"edit"}
                                    update
                                    id={dataItem._id}
                                    product={dataItem}
                                >
                                    <Button
                                        variant="none"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Button>
                                </NewAndUpdateProduct>
                            </td>
                            <td className="py-4 ">
                                <NewAndUpdateProduct title={"Delete"} deleted id={dataItem._id}>
                                    <Button
                                        variant="none"
                                        className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                    >
                                        Delete
                                    </Button>
                                </NewAndUpdateProduct>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                setPageUi={setPageUi}
                pageUi={pageUi}
                page={page}
                totalPage={totalPage}
                countProducts={countProducts}
            />
        </div>
    );
}

export default TableProduct;
