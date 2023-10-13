"use client";
import useSWR from "swr";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Loading from "@/app/(landing)/loading";

function SliderItem({ children, newItem, bestItem }) {
    let classControl = {};
    if (bestItem) {
        classControl.BtnBack = "bestItemBack";
        classControl.BtnNext = "bestItemNext";
    } else if (newItem) {
        classControl.BtnBack = "newItemBack";
        classControl.BtnNext = "newItemNext";
    }
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API_APP_URL}/product/get-product/hot?sort=${
            newItem ? "desc" : ""
        }`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );
    // const [product, setProduct] = useState();
    // useEffect(() => {
    //     fetch("http://localhost:4000/product/")
    //         .then((res) => res.json())
    //         .then((res) => setProduct(res));
    // }, []);
    if (isLoading) return <Loading />;
    return (
        <div className="mt-10 ">
            <h2 className="text-center text-4xl font-pacifico font-bold smt:">{children}</h2>
            <div className="flex items-center">
                <button className={`${classControl.BtnBack} bg-[#6d3f0a] text-white smt:ml-2`}>
                    <ChevronLeft />
                </button>
                <Swiper
                    className="mt-10 "
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={4}
                    spaceBetween={20}
                    breakpoints={{
                        375: { slidesPerView: 1, spaceBetween: 0 },
                        740: { slidesPerView: 2, spaceBetween: 20 },
                        1000: { slidesPerView: 3, spaceBetween: 20 },

                        1275: { slidesPerView: 4 },
                    }}
                    navigation={{
                        prevEl: `.${classControl.BtnBack}`,
                        nextEl: `.${classControl.BtnNext}`,
                    }}
                    rewind={true}
                    loop={true}
                >
                    {data?.map((item) => {
                        return (
                            <SwiperSlide
                                key={item._id}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Link href={`/${item.Ob}/${item._id}`}>
                                    <div className="wrapper ">
                                        <img
                                            src={item.image[0].img}
                                            alt="..."
                                            className="rounded-xl box-sd  w-[321px] h-[481px] smt:w-[277px] smt:h-[426px] object-cover "
                                        />

                                        <div className="text-center ">
                                            <h3 className="m-3 text-gray-500 cursor-pointer text-base hover:text-black ">
                                                {item.name}
                                            </h3>
                                            <p className="mt-4 font-bold">{item.price}</p>
                                        </div>
                                        <div className="middle">
                                            <Button className="bg-[#6d3f0a] text-white hover:bg-[#9b7e5e]">
                                                Xem Thêm
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <button className={`${classControl.BtnNext} bg-[#6d3f0a] text-white smt:mr-2`}>
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}

export default SliderItem;
