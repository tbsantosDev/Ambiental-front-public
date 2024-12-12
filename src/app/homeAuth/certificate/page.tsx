import { Metadata } from "next";
import Certificates from "@/components/homeAuth/certificate";


export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Certificate() {
    return <>
        <Certificates />
    </>
}