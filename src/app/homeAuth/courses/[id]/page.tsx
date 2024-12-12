import EpisodePage from "@/components/homeAuth/episodes";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Sua Empresa - ambiental',
    icons: '/seuicon.ico'
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