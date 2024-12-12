import { Metadata } from "next";
import Tightnesses from "@/components/homeAuth/tightness";

export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Tightness() {
    return <>
        <Tightnesses />
    </>
}