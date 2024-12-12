/* eslint-disable @next/next/no-img-element */
"use client";
import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import userService from "@/services/userService";

Modal.setAppElement("body");

export default function HeaderAuth() {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("")

  useEffect(() => {
    userService.fetchCurrent().then((user) => {
      setFirstName(user.name)
    })
  }, [])

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    router.push("/");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.main}>
        <Container className={styles.nav}>
          <div className="d-flex align-items-center">
            <Button style={{backgroundColor: "#006400", border: "none"}} onClick={handleShow}>
              Menu
            </Button>

            <Offcanvas
              className={styles.offcanvas}
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Escolha uma opção.</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={styles.offBody}>
                <Link href="/homeAuth/environmental">
                <Button className={styles.offButton}>
                  Licenças ambientais
                </Button>
                </Link>
                <Link href="/homeAuth/conditioning">
                <Button className={styles.offButton}>Condicionantes</Button>
                </Link>
                <Link href="/homeAuth/dtrplwart">
                <Button className={styles.offButton}>DTRP LWART</Button>
                </Link>
                <Link href="/homeAuth/dtrpctr">
                <Button className={styles.offButton}>DTRP CTR</Button>
                </Link>
                <Link href="/homeAuth/tightness">
                <Button className={styles.offButton}>Estanqueidade</Button>
                </Link>
                <Link href="/homeAuth/brigade">
                <Button className={styles.offButton}>
                  Brigada de incêndio
                </Button>
                </Link>
                <Link href="/homeAuth/extinguishers">
                <Button className={styles.offButton}>Extintores</Button>
                </Link>
                <Link href="/homeAuth/avcb">
                <Button className={styles.offButton}>AVCB</Button>
                </Link>
                <Link href="/homeAuth/certificate">
                <Button className={styles.offButton}>
                  Certificado de Regularidade
                </Button>
                </Link>
                <Link href="/homeAuth/courses">
                <Button className={styles.offButton}>Treinamentos</Button>
                </Link>
                
              </Offcanvas.Body>
            </Offcanvas>
            <Link href="/homeAuth">
              <img
                src="/Fotologin.png"
                alt="logoTrevo"
                className={styles.imgLogoNav}
              />
            </Link>
          </div>

          <div className="d-flex align-items-center">
            {/* <Form>
              <Input
                name="search"
                type="search"
                placeholder="Pesquisar"
                className={styles.input}
              />
            </Form>
            <img
              src="/headerAuth/iconsearch.svg"
              alt="pesquisar"
              className={styles.searchImg}
            /> */}
            <p className={styles.userProfile} onClick={handleOpenModal}>
              {firstName.slice(0, 1)}
            </p>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            shouldCloseOnEsc={true}
            className={styles.modal}
            overlayClassName={styles.overlayModal}
          >
            <Link
              style={{ textDecoration: "none" }}
              className={styles.modalLink}
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_BASEURL}/admin`}
              passHref={true}
            >
              Administração
            </Link>
            <p className={styles.modalLink} onClick={handleLogout}>
              Sair
            </p>
          </Modal>
        </Container>
      </div>
    </>
  );
}
