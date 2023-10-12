import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import FormAdd from "./formAdd";
import "react-toastify/dist/ReactToastify.css";
import FormUpdate from "./formUpdate";
import Delete from "./delete";
function NewAndUpdateProduct({ children, title, update, id, product, deleted, create }) {
    return (
        <>
            <Dialog className="w-1/3 ">
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent className="border border-solid border-black max-w-[50rem] bg-[#ccc] smt:max-w-[20rem] smt:h-[500px]  smt:overflow-scroll">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>

                        <DialogDescription>
                            {update && <FormUpdate id={id} product={product} />}
                            {deleted && <Delete id={id} />}
                            {create && <FormAdd />}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default NewAndUpdateProduct;
