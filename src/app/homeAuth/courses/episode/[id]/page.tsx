
import EpisodePlayer from "@/components/homeAuth/episodePlayer";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Trevo - ambiental',
    icons: '/logo.ico'
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