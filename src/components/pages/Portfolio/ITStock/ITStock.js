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
import image1 from "./images/3.PNG";

const CardStyled = styled(Card)({
  borderRadius: "15px",
  boxShadow: "0px 5px 20px 0px rgba(69, 67, 96, 0.1)",
  backgroundColor: "#fff",
  height: "100%",
  "& .MuiTypography-h5": {
    fontWeight: "600",
    fontSize: "22px",
    color: "#212121",
  },
  "& .MuiTypography-body2": {
    color: "grey",
  },
});

const ChipStyled = styled(Chip)({
  backgroundColor: "#eeeeee",
  color: "#757575",
  borderRadius: "5px",
  marginRight: "8px",
});

function ITStock() {
  return (
    <CardStyled
      onClick={() => window.open("/itstock-info", "_blank", "noreferrer")}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image1}
          alt="card image"
        />
        <CardContent>
          <Box sx={{ height: "100px" }}>
            <Typography gutterBottom variant="h5" component="div">
              IT Stock
            </Typography>
            <Box sx={{ height: "60px" }}>
              <Typography variant="body2" color="text.secondary">
                Web application for IT Stock management.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <ChipStyled label="ASP.NET" size="small" />
            <ChipStyled label="C#" size="small" />
          </Box>
        </CardContent>
      </CardActionArea>
    </CardStyled>
  );
}

export default ITStock;
