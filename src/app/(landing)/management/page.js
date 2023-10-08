import Link from "next/link";
import TableProduct from "../../../components/table/tableProduct";
import NewAndUpdateProduct from "@/components/table/formManagement";
import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";
import { ToastContainer } from "react-toastify";

function Management() {
    return (
        <div className="container h-min-[500px]">
            <h1 className="py-[15px] text-[14px]">
                <Link href={"/"}>HOME</Link>/ MANAGEMENT
            </h1>
            <div className="flex py-[50px]">
                <div className="w-[20%]">
                    <div>
                        <Link href={"/management"}>Tất cả sản phẩm</Link>
                    </div>
                    <div>
                        <Link href={"/"}>Tất cả đơn order</Link>
                    </div>
                    <div>
                        <Link href={"/"}>Trash</Link>
                    </div>
                </div>
                <div className=" border-l-[1px] border-slate-900"></div>
                <div className="w-[80%] py-6 ml-7 space-y-4">
                    <h1 className="font-bold text-xl text-center">Tất cả sản phẩm</h1>
                    <NewAndUpdateProduct title={"Create some new ohhyaaa"} create>
                        <Button variant="none">
                            <PlusSquare size={100} />
                        </Button>
                    </NewAndUpdateProduct>
                    <TableProduct />
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Management;
