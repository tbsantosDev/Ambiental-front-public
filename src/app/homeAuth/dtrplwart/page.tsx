import { Metadata } from "next";
import DtrpLwart from "@/components/homeAuth/dtrplwart";

export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Dtrplwart() {
    return <>
        <DtrpLwart />
    </>
}