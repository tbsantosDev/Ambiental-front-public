"use client"
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import TightnessTable from "@/components/tables/tightnessTable/tightnessTable";
import TightnessToOvercomeTable from "@/components/tables/tightnessTable/tightnessToOvercomeTable";
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/navigation";
import PageSpinner from "@/components/common/pageSpinner";


export default function Tightnesses() {
  const [table, setTable] = useState("tightnessTable");

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("trevoambiental-token")) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <PageSpinner />;
  }

  if(!table) return <PageSpinner />
  
  return (
    <>
      <main className={styles.main}>
        <HeaderAuth />
        <Container>
          <p className={styles.title}>Escolha uma opção</p>
          <Row className="pt-3 pb-5">
            <Col className={styles.btnColumn} md={2}>
              <Button
                className={styles.btn}
                style={{backgroundColor: table === "tightnessTable" ? "#006400" : "#4e4e4e"}}
                onClick={() => {
                  setTable("tightnessTable");
                }}
              >
                Estanqueidade
              </Button>
              <Button
                className={styles.btn}
                style={{backgroundColor: table === "tightnessToOvercomeTable" ? "#006400" : "#4e4e4e"}}
                onClick={() => {
                  setTable("tightnessToOvercomeTable");
                }}
              >
                 A vencer
              </Button>
            </Col>
            <Col>
              {table === "tightnessTable" ? <TightnessTable />: <TightnessToOvercomeTable />}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
