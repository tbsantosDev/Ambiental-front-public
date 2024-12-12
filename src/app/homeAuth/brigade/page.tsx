import { Metadata } from "next";
import Brigades from "@/components/homeAuth/brigade";


export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Brigade() {
    return <>
        <Brigades />
    </>
}