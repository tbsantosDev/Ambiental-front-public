import { Metadata } from "next";
import Extinguishers from "@/components/homeAuth/extinguisher";



export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Extinguisher() {
    return <>
        <Extinguishers />
    </>
}