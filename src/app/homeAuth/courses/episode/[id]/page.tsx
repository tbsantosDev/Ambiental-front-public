
import EpisodePlayer from "@/components/homeAuth/episodePlayer";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Sua Empresa - ambiental',
    icons: '/seuicon.ico'
  };
  

export default function CourseId() {
    return (
        <>  
            <main>   
                <EpisodePlayer />
            </main>
        </>
    )
}