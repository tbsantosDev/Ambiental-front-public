"use client";
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import EnvironmentalTable from "@/components/tables/environmentalTable/environmentalTable";
import { useEffect, useState } from "react";
import HeaderAuth from "../../common/headerAuth";
import EnvironmentalToOvercomeTable from "@/components/tables/environmentalTable/environmentalOvercomeTable";
import { useRouter } from "next/navigation";
import PageSpinner from "@/components/common/pageSpinner";

export default function EnvironmentalLicense() {
  const [table, setTable] = useState("environmentalTable");

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
                style={{
                  backgroundColor:
                    table === "environmentalTable" ? "#006400" : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("environmentalTable");
                }}
              >
                Licenças
              </Button>
              <Button
                className={styles.btn}
                style={{
                  backgroundColor:
                    table === "EnvironmentalToOvercomeTable"
                      ? "#006400"
                      : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("EnvironmentalToOvercomeTable");
                }}
              >
                A vencer
              </Button>
            </Col>
            <Col>
              {table === "environmentalTable" ? (
                <EnvironmentalTable />
              ) : (
                <EnvironmentalToOvercomeTable />
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
