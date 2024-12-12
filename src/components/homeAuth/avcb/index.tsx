"use client"
import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import HeaderAuth from "../../common/headerAuth"
import AvcbTable from "@/components/tables/avcbTable/avcbTable";
import AvcbToOvercomeTable from "@/components/tables/avcbTable/avcbToOvercomeTable";
import { useRouter } from "next/navigation";
import PageSpinner from "@/components/common/pageSpinner";


export default function Avcbs() {
  const [table, setTable] = useState("avcbTable");
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
                style={{backgroundColor: table === "avcbTable" ? "#006400" : "#4e4e4e"}}
                onClick={() => {
                  setTable("avcbTable");
                }}
              >
                AVCB
              </Button>
              <Button
                className={styles.btn}
                style={{backgroundColor: table === "avcbToOvercomeTable" ? "#006400" : "#4e4e4e"}}
                onClick={() => {
                  setTable("avcbToOvercomeTable");
                }}
              >
                 A vencer
              </Button>
            </Col>
            <Col>
              {table === "avcbTable" ? <AvcbTable />: <AvcbToOvercomeTable />}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
