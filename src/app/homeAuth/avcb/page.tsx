import { Metadata } from "next";
import Avcbs from "@/components/homeAuth/avcb";




export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Avcb() {
    return <>
        <Avcbs />
    </>
}