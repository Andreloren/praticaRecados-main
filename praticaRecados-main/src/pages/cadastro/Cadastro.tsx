import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Input from "../../Shared/components/inputs/Input";
import Background from "../../Shared/components/background/Background";
import Buttons from "../../Shared/components/botoes/Buttons";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import Swal from "sweetalert2";

const CardSign = styled.div`
  width: 50%;
  background: #2b2b2b;
  padding: 3%;
  -webkit-box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.75);
  color: white;

  Link {
    text-decoration: none;
  }
`;

interface User {
  nome: string;
  email: string;
  senha: string;
  recados: [];
}

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repSenha, setRepSenha] = useState("");
  const [list, setlist] = useState<User[]>([]);
  const navigate = useNavigate();
  
  

  useEffect(() => {
    const storage = localStorage.getItem("dados") || "[]";
    setlist(JSON.parse(storage));
  }, []);

  function Salvar() {
    list.push({
      nome: name,
      email: email,
      senha: senha,
      recados: [],
    });
    localStorage.setItem("dados", JSON.stringify(list));

    Swal.fire({
      title: 'Sucesso!',
      text: 'Muito bom',
      icon: 'success',
      confirmButtonText: 'Confirmar',
      timer: 3000,
    })
   
    navigate("/");
  }
  return (
    <>
      <Background>
        <CardSign>
          <h1>Cadastrar</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Input
                onChange={(e) => setName(e.target.value)}
                id="standard-name-input"
                label="Nome"
                value={name}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                id="standard-email-input"
                label="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                id="standard-password-input"
                label="Password"
                type="password"
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                id="standard-passwordRepeat-input"
                label="Repeat password"
                type="password"
                onChange={(e) => setRepSenha(e.target.value)}
                value={repSenha}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Buttons
                tipoBotao="button"
                onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                  Salvar();
                }}
              >
                Cadastrar
              </Buttons>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Button variant="contained">
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Fazer Login
                </Link>
              </Button>
            </Grid>
          </Grid>
        </CardSign>
      </Background>
    </>
  );
}

export default Cadastro;
function swal(arg0: string, arg1: { buttons: boolean; timer: number; icon: string; }) {
  throw new Error("Function not implemented.");
}

