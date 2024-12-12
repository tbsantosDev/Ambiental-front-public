import { Metadata } from "next";
import DtrpCtr from "@/components/homeAuth/dtrpctr";

export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Dtrpctr() {
    return <>
        <DtrpCtr />
    </>
}