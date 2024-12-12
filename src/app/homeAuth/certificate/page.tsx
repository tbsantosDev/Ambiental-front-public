import { Metadata } from "next";
import Certificates from "@/components/homeAuth/certificate";


export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Certificate() {
    return <>
        <Certificates />
    </>
}