"use client"
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import HeaderAuth from "../../common/headerAuth"
import BrigadeTable from "@/components/tables/brigadeTrainingTable/brigadeTable";
import BrigadeToOvercomeTable from "@/components/tables/brigadeTrainingTable/brigadeToOvercomeTable";
import PageSpinner from "@/components/common/pageSpinner";
import { useRouter } from "next/navigation";


export default function Brigades() {
  const [table, setTable] = useState("brigadesTable");

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
                style={{backgroundColor: table === "brigadesTable" ? "#006400" : "#4e4e4e"}}
                onClick={() => {
                  setTable("brigadesTable");
                }}
              >
                Trei. Brigada
              </Button>
              <Button
                className={styles.btn}
                style={{backgroundColor: table === "brigadesToOvercomeTable" ? "#006400" : "#4e4e4e"}}
                onClick={() => {
                  setTable("brigadesToOvercomeTable");
                }}
              >
                 A vencer
              </Button>
            </Col>
            <Col>
              {table === "brigadesTable" ? <BrigadeTable />: <BrigadeToOvercomeTable />}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
