import { Metadata } from "next";
import Conditionings from "@/components/homeAuth/conditionings";

export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Conditioning() {
    return <>
        <Conditionings />
    </>
}