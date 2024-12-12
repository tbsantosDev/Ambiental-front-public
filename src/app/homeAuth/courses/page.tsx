import { Metadata } from "next";
import Courses from "@/components/homeAuth/courses";


export const metadata: Metadata = {
  title: 'Trevo - ambiental',
  icons: '/logo.ico'
};


export default function Course() {
    return <>
        <Courses />
    </>
}