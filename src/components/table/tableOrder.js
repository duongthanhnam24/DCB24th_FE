"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Pagination from "../page/Pagination";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { getAllOrder } from "@/service/order";

function TableOrder() {
    const tableRef = useRef(null);
    const [data, setData] = useState();

    const [pageUi, setPageUi] = useState(1);

    useEffect(() => {
        async function getData() {
            const datas = await getAllOrder();
            return setData(datas);
        }
        getData();
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md smt:rounded-lg">
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
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto "
            >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3    text-center">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3   text-center ">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Product
                        </th>
                        <th scope="col" className="px-6 py-3   text-center">
                            Total
                        </th>
                        <th scope="col" className="px-6 py-3  text-center">
                            City
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Addres
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            isPaid
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            isDelivered
                        </th>
                        <th scope="col" colSpan={2} className="px-6 py-3 ">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, i) => {
                        return (
                            <tr key={i}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.shippingAddress.fullName}
                                </th>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.shippingAddress.phone}
                                </th>
                                <th
                                    scope="row"
                                    className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.orderItems.map((order) => {
                                        return (
                                            <>
                                                <span>
                                                    {order.name} x {order.size} x {order.amount}
                                                </span>
                                                <br />
                                            </>
                                        );
                                    })}
                                </th>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.totalPrice}
                                </th>
                                <th
                                    scope="row"
                                    className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.shippingAddress.city}
                                </th>
                                <th
                                    scope="row"
                                    className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.shippingAddress.address}
                                </th>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.isPaid ? "đã Thanh toán" : "chưa thanh toán"}
                                </th>
                                <th
                                    scope="row"
                                    className="text-center  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.isDelivered ? "đã ship" : "chưa ship"}
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* <Pagination
                setPageUi={setPageUi}
                pageUi={pageUi}
                page={page}
                totalPage={totalPage}
                countProducts={countProducts}
            /> */}
        </div>
    );
}

export default TableOrder;
