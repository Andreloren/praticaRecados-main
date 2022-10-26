import Button from "@mui/material/Button";
import { ButtonHTMLAttributes } from "react";

type buttonType = "submit" | "button" | "reset";

interface ButtonProps {
  tipoBotao: buttonType;
  children: string;
  onClick?: any;
}

export default function Buttons(props: ButtonProps) {
  return (
    <>
      <Button
        sx={{ mt: 2 }}
        type={props.tipoBotao}
        onClick={props.onClick}
        variant="contained"
      >
        {" "}
        {props.children}{" "}
      </Button>
    </>
  );
}
