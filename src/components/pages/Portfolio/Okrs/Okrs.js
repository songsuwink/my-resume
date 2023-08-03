import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import image1 from "./images/okrs1.png";

const CardStyled = styled(Card)({
  borderRadius: "20px",
  boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
  backgroundColor: "#fff",
  padding: "16px",
  height: "100%",
  "& .MuiTypography-h5": {
    fontWeight: "600",
    fontSize: "22px",
    color: "#454360",
  },
  "& .MuiTypography-body2": {
    color: "#8B88B1",
  },
});

const ChipStyled = styled(Chip)({
  backgroundColor: "#eeeeee",
  color: "#757575",
  borderRadius: "10px",
  marginRight: "8px",
});

function Okrs() {
  return (
    <CardStyled
      onClick={() => window.open("/okrs-info", "_blank", "noreferrer")}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image1}
          alt="card image"
        />
        <CardContent sx={{ height: "100%" }}>
          <Typography gutterBottom variant="h5" component="div">
            OKRs
          </Typography>
          <Box sx={{ height: "60px" }}>
            <Typography variant="body2" color="text.secondary">
              Web application for HR management.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <ChipStyled label="React" />
            <ChipStyled label="Javascript" />
          </Box>
        </CardContent>
      </CardActionArea>
    </CardStyled>
  );
}

export default Okrs;
