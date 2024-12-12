"use client";
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import HeaderAuth from "../../common/headerAuth";
import DtrpLwartTable from "@/components/tables/dtrplwartTable/dtrplwartTable";
import DtrpLwartToOvercomeTable from "@/components/tables/dtrplwartTable/dtrplwartToOvercomeTable";
import { useRouter } from "next/navigation";
import PageSpinner from "@/components/common/pageSpinner";

export default function DtrpLwart() {
  const [table, setTable] = useState("dtrplwartTable");

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
                    table === "dtrplwartTable" ? "#006400" : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("dtrplwartTable");
                }}
              >
                DTRP Lwart
              </Button>
              <Button
                className={styles.btn}
                style={{
                  backgroundColor:
                    table === "dtrplwartToOvercomeTable"
                      ? "#006400"
                      : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("dtrplwartToOvercomeTable");
                }}
              >
                A vencer
              </Button>
            </Col>
            <Col>
              {table === "dtrplwartTable" ? (
                <DtrpLwartTable />
              ) : (
                <DtrpLwartToOvercomeTable />
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
