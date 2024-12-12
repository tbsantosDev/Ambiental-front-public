import { Metadata } from "next";
import Brigades from "@/components/homeAuth/brigade";


export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Brigade() {
    return <>
        <Brigades />
    </>
}