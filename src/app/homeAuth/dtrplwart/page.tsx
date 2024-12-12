import { Metadata } from "next";
import DtrpLwart from "@/components/homeAuth/dtrplwart";

export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Dtrplwart() {
    return <>
        <DtrpLwart />
    </>
}