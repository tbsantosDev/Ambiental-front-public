"use client";
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import HeaderAuth from "../../common/headerAuth";
import ConditioningTable from "@/components/tables/conditioningTable/conditioningTable";
import ConditioningToOvercomeTable from "@/components/tables/conditioningTable/conditioningOvercomeTable";
import { useRouter } from "next/navigation";
import PageSpinner from "@/components/common/pageSpinner";

export default function Conditionings() {
  const [table, setTable] = useState("conditioningsTable");

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
                    table === "conditioningsTable" ? "#006400" : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("conditioningsTable");
                }}
              >
                Condicionantes
              </Button>
              <Button
                className={styles.btn}
                style={{
                  backgroundColor:
                    table === "conditioningsToOvercomeTable"
                      ? "#006400"
                      : "#4e4e4e",
                }}
                onClick={() => {
                  setTable("conditioningsToOvercomeTable");
                }}
              >
                A vencer
              </Button>
            </Col>
            <Col>
              {table === "conditioningsTable" ? (
                <ConditioningTable />
              ) : (
                <ConditioningToOvercomeTable />
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
