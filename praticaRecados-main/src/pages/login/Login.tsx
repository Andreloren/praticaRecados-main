import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "../../Shared/components/inputs/Input";
import { Link } from "react-router-dom";
import Background from "../../Shared/components/background/Background";
import { Button } from "@mui/material";
import Buttons from "../../Shared/components/botoes/Buttons";
import styled from "styled-components";

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

export default function Login() {
  return (
    <>
      <Background>
        <CardLog>
          <h1>Logar</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Input id="standard-input" label="E-mail" />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                id="standard-password-input"
                label="Password"
                type="password"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Button>Logar</Button>
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
