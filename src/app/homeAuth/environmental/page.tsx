import { Metadata } from "next";
import EnvironmentalLicense from "@/components/homeAuth/environmental";

export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Environmental() {
    return <>
        <EnvironmentalLicense />
    </>
}