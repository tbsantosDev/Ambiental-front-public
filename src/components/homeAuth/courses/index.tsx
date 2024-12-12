"use client";
import trainingService from "@/services/trainingService";
import styles from "./styles.module.scss";
import useSWR from "swr";
import SlideComponent from "@/components/common/slideComponent";
import { Container } from "reactstrap";
import HeaderAuth from "../../common/headerAuth"
import PageSpinner from '@/components/common/pageSpinner';
import { useRouter } from "next/navigation";

export default function Courses() {
  const router = useRouter()
  const { data, error } = useSWR("/courses", trainingService.all);
  if (error) return error;
  if (!data) return <PageSpinner />;
 

    if (!sessionStorage.getItem("trevoambiental-token")) {
      router.push("/")
    }

  return (
    <main>
      <HeaderAuth />
      <Container>
        <p className={styles.title}>Treinamentos</p>
        <SlideComponent course={data.data} />
      </Container>
    </main>
  );
}
