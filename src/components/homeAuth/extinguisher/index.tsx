"use client";
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import ExtinguisherTable from "@/components/tables/extinguisherTable/extinguisherTable";
import ExtinguisherToOvercomeTable from "@/components/tables/extinguisherTable/extinguisherToOvercomeTable";
import HeaderAuth from "@/components/common/headerAuth";
import { useRouter } from "next/navigation";
import PageSpinner from "@/components/common/pageSpinner";

export default function Extinguishers() {
  const [table, setTable] = useState("extinguisherTable");

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
                    table === "extinguisherTable" ? "#006400" : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("extinguisherTable");
                }}
              >
                Extintores
              </Button>
              <Button
                className={styles.btn}
                style={{
                  backgroundColor:
                    table === "extinguisherToOvercomeTable"
                      ? "#006400"
                      : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("extinguisherToOvercomeTable");
                }}
              >
                A vencer
              </Button>
            </Col>
            <Col>
              {table === "extinguisherTable" ? (
                <ExtinguisherTable />
              ) : (
                <ExtinguisherToOvercomeTable />
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
