import { Metadata } from "next";
import EnvironmentalLicense from "@/components/homeAuth/environmental";

export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Environmental() {
    return <>
        <EnvironmentalLicense />
    </>
}