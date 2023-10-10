import Link from "next/link";
import errorPage from '../../../public/img/DCB24TH.png'
import Image from "next/image";

function NotFound() {
    return ( <main className="flex flex-col text-center h-[500px] justify-center items-center space-y-2">
        <Image src={errorPage} width={300} height={300} alt="...." />
        <h2 className="text-4xl text-[#ba8446] ">404 | There was a problem.</h2>
        <p>We could not find the page you were looking for.</p>
        <p>Go back to the <Link href={'/'} className="text-sky-400">Home page</Link></p>
    </main> );
}

export default NotFound;