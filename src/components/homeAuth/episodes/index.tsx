/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import HeaderAuth from "@/components/common/headerAuth";
import trainingService, { CourseType, EpisodeType } from "@/services/trainingService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import PageSpinner from "@/components/common/pageSpinner";
import EpisodeList from "@/components/episodeList";

export default function EpisodePage() {
  const [course, setCourse] = useState<CourseType>();
  const { id } = useParams() as { id: string };

  const getCourse = async function () {
    if (typeof id !== "string") return;
    const res = await trainingService.getEpisodes(id);

    if (res.status === 200) {
      setCourse(res.data);
    } else {
      console.log("Algum erro aconteceu na resposta.");
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  if (course === undefined) {
    return <PageSpinner />;
  }

  return (
    <>
      <main>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "550px",
          }}
        >
          <HeaderAuth />
        </div>
        <Container className={styles.courseInfo}>
          <p className={styles.courseTitle}>{course?.name}</p>
          <p className={styles.courseDescription}>{course?.synopsis}</p>
          <Button
            outline
            className={styles.courseBtn}
            disabled={course?.Episodes?.length === 0 ? true : false}
          >
            ASSITIR AGORA!
            <img
              src="/buttonPlay.svg"
              alt="buttonImg"
              className={styles.buttonImg}
            />
          </Button>
        </Container>
        <Container className={styles.episodeInfo}>
          <p className={styles.episodeDivision}>EPISÓDIOS</p>
          <p className={styles.episodeLength}>
            {course?.Episodes?.length} episódios
          </p>
          {course?.Episodes?.length === 0 ? (
            <p>
              <strong>Não temos treinamento ainda.</strong>
            </p>
          ) : (
            course?.Episodes?.map((episode: EpisodeType) => (
              <EpisodeList key={episode.id} episode={episode} course={course}/>
            ))
          )}
        </Container>
      </main>
    </>
  );
}
