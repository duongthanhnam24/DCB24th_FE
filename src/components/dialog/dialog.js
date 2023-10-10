import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

let arrSize = [
    {
        size: "SIZE",
        small: "S-02",
        medium: "S-04",
        large: "S-06",
        extra: "S-08",
        doubleExtra: "S-10",
        tripExtra: "S-12",
    },
    {
        size: "VAI",
        small: "35",
        medium: "36",
        large: "37",
        extra: "38",
        doubleExtra: "39",
        tripExtra: "40",
    },
    {
        size: "NGỰC",
        small: "82",
        medium: "86",
        large: "90",
        extra: "84",
        doubleExtra: "98",
        tripExtra: "102",
    },
    {
        size: "EO",
        small: "66",
        medium: "70",
        large: "75",
        extra: "80",
        doubleExtra: "84",
        tripExtra: "88",
    },
    {
        size: "MÔNG",
        small: "86",
        medium: "90",
        large: "94",
        extra: "98",
        doubleExtra: "102",
        tripExtra: "106",
    },
    {
        size: "CÂN NẶNG",
        small: "45-50",
        medium: "51-55",
        large: "56-60",
        extra: "61-64",
        doubleExtra: "65-68",
        tripExtra: "69-70",
    },
    {
        size: "CHIỀU CAO",
        small: "150-160",
        medium: "155-160",
        large: "155-160",
        extra: "160-165",
        doubleExtra: "160-165",
        tripExtra: "165-170",
    },
];

export function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" style={{ color: "#7c071a" }} className="mt-10 text-xl pl-0">
                    Hướng dẫn chọn size
                </Button>
            </DialogTrigger>
            <DialogContent className="" style={{ maxWidth: "1035px" }}>
                <div>
                    <h1 className="text-center text-2xl">Choose Your Size</h1>
                    <div className="mt-10">
                        {arrSize.map((value) => (
                            <div
                                key={value.size}
                                className="flex justify-around border-b-2 border-solid border-black"
                            >
                                <h2>{value.size}</h2>
                                <p>
                                    {value.small}
                                    {"(cm)"}
                                </p>
                                <p>
                                    {value.medium}
                                    {"(cm)"}
                                </p>
                                <p>
                                    {value.large}
                                    {"(cm)"}
                                </p>
                                <p>
                                    {value.extra}
                                    {"(cm)"}
                                </p>
                                <p>
                                    {value.doubleExtra}
                                    {"(cm)"}
                                </p>
                                <p>
                                    {value.tripExtra}
                                    {"(cm)"}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <h3 className="font-bold">
                            Bạn vẫn còn có những mắc thắc và băn khoăn cần được giải đáp?
                        </h3>
                        <p>
                            Hãy liên hệ ngay với bộ phận Bán hàng online của DCB24th <br />
                            <span style={{ color: "#3498db" }}>03898616xx</span>
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
