import { Metadata } from "next";
import Avcbs from "@/components/homeAuth/avcb";




export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Avcb() {
    return <>
        <Avcbs />
    </>
}