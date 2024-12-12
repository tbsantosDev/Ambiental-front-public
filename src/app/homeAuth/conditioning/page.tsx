import { Metadata } from "next";
import Conditionings from "@/components/homeAuth/conditionings";

export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Conditioning() {
    return <>
        <Conditionings />
    </>
}