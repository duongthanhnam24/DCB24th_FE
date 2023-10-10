import Image from "next/image";
import loading from "../../../public/img/DCB24TH.png";
import { Loader2 } from "lucide-react";
function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-[500px]">
            <Image src={loading} width={250} height={250} alt="...." />
            <div>
                <Loader2 className="animate-spin" />
            </div>
            <div>Please waiting ...</div>
        </div>
    );
}

export default Loading;
