import React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";


const StyledButton = styled(ButtonBase)({
  position: "relative",
  width: 220,
  height: 80,
  borderRadius: 12,
  overflow: "hidden",
  background: "linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "scale(1.05)",
  },

  "&:hover .overlay": {
    opacity: 0.2,
  },

  "&:hover .text": {
    border: "2px solid white",
  },
});


const Overlay = styled("span")({
  position: "absolute",
  inset: 0,
  backgroundColor: "black",
  opacity: 0.4,
  transition: "0.3s",
});


const ButtonText = styled(Typography)({
  position: "relative",
  color: "white",
  fontWeight: "bold",
  padding: "10px 20px",
});


function StartButton({ text = "Start" }) {
  return (
    <StyledButton>
      <Overlay className="overlay" />
      <ButtonText className="text">{text}</ButtonText>
    </StyledButton>
  );
}

export default StartButton;