"use client";
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import HeaderAuth from "../../common/headerAuth";
import DtrpCtrTable from "@/components/tables/dtrpctrTable/dtrpctrTable";
import DtrpCtrToOvercomeTable from "@/components/tables/dtrpctrTable/dtrpctrToOvercomeTable";
import { useRouter } from "next/navigation";
import PageSpinner from "@/components/common/pageSpinner";

export default function DtrpCtr() {
  const [table, setTable] = useState("dtrpctrTable");

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
                    table === "dtrpctrTable" ? "#006400" : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("dtrpctrTable");
                }}
              >
                DTRP CTR
              </Button>
              <Button
                className={styles.btn}
                style={{
                  backgroundColor:
                    table === "dtrpctrToOvercomeTable" ? "#006400" : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("dtrpctrToOvercomeTable");
                }}
              >
                A vencer
              </Button>
            </Col>
            <Col>
              {table === "dtrpctrTable" ? (
                <DtrpCtrTable />
              ) : (
                <DtrpCtrToOvercomeTable />
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
