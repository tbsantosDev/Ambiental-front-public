import { Metadata } from "next";
import Courses from "@/components/homeAuth/courses";


export const metadata: Metadata = {
  title: 'Sua Empresa - ambiental',
  icons: '/seuicon.ico'
};


export default function Course() {
    return <>
        <Courses />
    </>
}