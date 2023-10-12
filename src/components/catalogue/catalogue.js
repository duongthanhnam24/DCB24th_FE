import Link from "next/link";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";

const side = "left";

export function SheetSide({ children }) {
    return (
        // grid grid-cols-2 gap-2
        <div>
            <Sheet key={side}>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent side={side} className="bg-[#6d3f0a]">
                    <SheetHeader>
                        <SheetTitle className="text-white">Catalogue</SheetTitle>
                        <SheetDescription>You can find whatever you want</SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Link className="text-white" href={"/man"}>
                                <SheetClose>Cho Nam</SheetClose>
                            </Link>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Link className="text-white" href={"/woman"}>
                                <SheetClose>Cho Nữ</SheetClose>
                            </Link>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Link className="text-white" href={"/kids"}>
                                <SheetClose>Cho trẻ em</SheetClose>
                            </Link>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
