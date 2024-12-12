import { Metadata } from "next";
import DtrpCtr from "@/components/homeAuth/dtrpctr";

export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Dtrpctr() {
    return <>
        <DtrpCtr />
    </>
}