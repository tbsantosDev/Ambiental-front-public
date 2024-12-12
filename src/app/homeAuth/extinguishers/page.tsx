import { Metadata } from "next";
import Extinguishers from "@/components/homeAuth/extinguisher";



export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Extinguisher() {
    return <>
        <Extinguishers />
    </>
}