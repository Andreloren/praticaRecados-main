import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "../../Shared/components/inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import Background from "../../Shared/components/background/Background";
import { Button } from "@mui/material";
import Buttons from "../../Shared/components/botoes/Buttons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import React from "react";

const CardLog = styled.div`
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
  email: string;
  senha: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [list, setlist] = useState<User[]>([]);
  const navigate = useNavigate();

  const logar = () => {
    const usuarios: User[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    const procurauser = usuarios.find((item: User) => email === item.email && senha === item.senha)

    if(!procurauser){
      console.log("usuario nao existe");
    }else{
      console.log('logado');
    }


    // list.find((usuarios) => {
    //   return console.log(usuarios.email, usuarios.senha);
    // })

    // useEffect(() => {

    // }, []);

    // navigate("/home");
  };

  return (
    <>
      <Background>
        <CardLog>
          <h1>Logar</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Input 
              id="standard-input" 
              label="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                id="standard-password-input"
                label="Password"
                type="password"
                onChange={(e) => setSenha(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Buttons
                tipoBotao="button"
                onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                  logar();
                }}
              >
                Logar
              </Buttons>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Button variant="contained">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/cadastro"
                >
                  Cadastre-se
                </Link>
              </Button>
            </Grid>
          </Grid>
        </CardLog>
      </Background>
    </>
  );
}
