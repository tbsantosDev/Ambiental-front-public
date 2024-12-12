/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import styles from "./styles.module.scss";
import HeaderAuth from "@/components/common/headerAuth";
import { useEffect, useState } from "react";
import trainingService, { CourseType } from "@/services/trainingService";
import PageSpinner from "@/components/common/pageSpinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";

const EpisodePlayer = function () {
  const [course, setCourse] = useState<CourseType>();
  const router = useRouter()
  const searchParams = useSearchParams();
  const episodeOrderParams = useParams() as { id: string };
  const episodeOrder = parseFloat(episodeOrderParams.id);
  const courseId = searchParams.get("courseid") || "";

  const getCourse = async function () {
    if (typeof courseId !== "string") return;
    const res = await trainingService.getEpisodes(courseId);

    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  const handleLastEpisode = () => {
    router.push(`/homeAuth/courses/episode/${episodeOrder - 1}?courseid=${courseId}`)
  }
  const handleNextEpisode = () => {
    router.push(`/homeAuth/courses/episode/${episodeOrder + 1}?courseid=${courseId}`)
  }

  useEffect(() => {
    getCourse();
  }, [courseId]);


  if (course?.Episodes === undefined) return <PageSpinner />;

  return (
    <main>
      <HeaderAuth />
      <Container className="d-flex flex-column align-items-center gap-3 pt-3">
        <p className={styles.episodeTitle}>
          {course?.Episodes[episodeOrder].name}
        </p>
        {typeof window === "undefined" ? null : (
          <ReactPlayer
            className={styles.player}
            url={`${
              process.env.NEXT_PUBLIC_BASEURL
            }/episodes/stream?videoUrl=${
              course?.Episodes[episodeOrder].videoUrl
            }&token=${sessionStorage.getItem("trevoambiental-token")}`}
            controls
          />
        )}
        <div className={styles.episodeButtonDiv}>
            <Button onClick={handleLastEpisode} className={styles.episodeButton} disabled={episodeOrder === 0 ? true: false}>
                <img src="/arrow-left.svg" alt="setaEsquerda" className={styles.arrowImg}/>
            </Button>
            <Button onClick={handleNextEpisode} className={styles.episodeButton} disabled={episodeOrder + 1 === course.Episodes.length ? true: false}>
                <img src="/arrow-right.svg" alt="setaDireita" className={styles.arrowImg}/>
            </Button>
        </div>
        <p className="text-center py-4">
          {course.Episodes[episodeOrder].synopsis}
        </p>
      </Container>
    </main>
  );
};

export default EpisodePlayer;
