import EpisodePage from "@/components/homeAuth/episodes";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Trevo - ambiental',
    icons: '/logo.ico'
  };
  

export default function CourseId() {
    return (
        <>  
            <main>   
                <EpisodePage />
            </main>
        </>
    )
}