/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./styles.module.scss";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import loginService from "@/services/loginService";
import ToastComponent from "../common/toast";

const Login = () => {
  const router = useRouter();
  const [toastColor, setToastColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if(sessionStorage.getItem("trevoambiental-token")) {
      router.push("/homeAuth")
    }
  }, [])

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password };

    const { status } = await loginService.login(params);

    if (status === 200) {
      router.push("/homeAuth");
    } else {
      setToastColor("bg-danger");
      setToastIsOpen(true);
      setToastMessage("Email ou senha incorretos!");
      setTimeout(() => {
        setToastIsOpen(false)
      }, 1000 * 3);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <Container className={styles.container}>
          <Row>
            <Col className="d-flex flex-column justify-content-center" md>
              <div className={styles.img}>
              <img className={styles.formImg} src="/Fotologin.png" alt="logoTrevo"/>
              </div>
              
            </Col>
            <Col className="d-flex flex-column justify-content-center" md>
              <p className={styles.formTitle}>Bem-vindo(a) de volta!</p>
              <Form onSubmit={handleLogin} className={styles.form}>
                <p className="text-center">
                  <strong>Bem-vindo(a) ao sistema Ambiental</strong>
                </p>
                <FormGroup>
                  <Label className={styles.label} for="email">EMAIL:</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Qual o seu email?"
                    required
                    className={styles.input}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className={styles.label} for="password">SENHA:</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    required
                    className={styles.input}
                  />
                </FormGroup>
                <Button type="submit" outline className={styles.formBtn}>
                  Entrar
                </Button>
              </Form>
            </Col>
          </Row>
          <ToastComponent
            color="bg-danger"
            isOpen={toastIsOpen}
            message={toastMessage}
          />
        </Container>
      </main>
    </>
  );
};

export default Login;

