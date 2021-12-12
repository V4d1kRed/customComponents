import styled from "@emotion/styled";

export const Button = styled.button({
  minWidth: "100px",
  fontFamily: "inherit",
  appearance: "none",
  border: "0",
  borderRadius: "5px",
  background: "#4676d7",
  color: "#fff",
  padding: "8px 16px",
  fontSize: "1rem",
  cursor: "pointer",
  "&:hover": {
    background: "#1d49aa",
  },
  "&:active": {
    outline: "none",
    boxShadow: "0 0 0 4px #cbd6ee",
  },
  "&:disabled": {
    color: "#666666",
    background: "#cccccc",
  },
});
