"use client";
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import HeaderAuth from "../../common/headerAuth";
import CertificateTable from "@/components/tables/certificateTable/certificateTable";
import CertificateToOvercomeTable from "@/components/tables/certificateTable/certificateOverComeTable";
import { useRouter } from "next/navigation";
import PageSpinner from "@/components/common/pageSpinner";

export default function Certificates() {
  const [table, setTable] = useState("certificateTable");

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
                    table === "certificateTable" ? "#006400" : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("certificateTable");
                }}
              >
                CTR
              </Button>
              <Button
                className={styles.btn}
                style={{
                  backgroundColor:
                    table === "certificateToOvercomeTable"
                      ? "#006400"
                      : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("certificateToOvercomeTable");
                }}
              >
                A vencer
              </Button>
            </Col>
            <Col>
              {table === "certificateTable" ? (
                <CertificateTable />
              ) : (
                <CertificateToOvercomeTable />
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
