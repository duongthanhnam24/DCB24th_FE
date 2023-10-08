import { useSwiper } from "swiper/react";
import { Button } from "../ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

function SlideBtn() {
    const swiper = useSwiper();
    return (
        <div className="flex justify-center">
            <Button size="icon" className="p-3 mr-4" onClick={() => swiper.slidePrev()}>
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button size="icon" className="p-3 ml-4" onClick={() => swiper.slideNext()}>
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
}

export default SlideBtn;
