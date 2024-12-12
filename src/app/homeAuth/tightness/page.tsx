import { Metadata } from "next";
import Tightnesses from "@/components/homeAuth/tightness";

export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Tightness() {
    return <>
        <Tightnesses />
    </>
}