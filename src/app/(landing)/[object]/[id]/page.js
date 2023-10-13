import DetailItem from "@/components/detailItem/detailItem";
import SliderItem from "@/components/listItem/slideitem";
import Link from "next/link";
import { notFound } from "next/navigation";

// import { useParams } from "next/navigation";
async function Girl({ params }) {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product/${params.id}`, {
        next: { revalidate: 2000 },
    }).then((res) => res.json());
    if (product?.status === 400) {
        notFound();
    }
    return (
        <div className=" mb-52">
            <div className="2xl:container xl:px-9">
                <h1 className="py-6 text-[14px] uppercase smt:px-4 mdt:px-4">
                    <Link href={"/"}>TRANG CHỦ</Link>/
                    <Link href={`/${params.object}`}> TẤT CẢ SẢN PHẨM</Link>/
                    <span className="font-medium text-[#6d3f0a]">{product?.name}</span>
                </h1>
                <DetailItem product={product} />
            </div>
            <div className="border border-b-2 border-solid border-black mt-40"></div>
            <div className="container">
                <SliderItem>Sản Phẩm Bán Chạy</SliderItem>
            </div>
        </div>
    );
}
export default Girl;
