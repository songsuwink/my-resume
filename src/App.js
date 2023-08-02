import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import "./App.css";
import Routers from "./Routers";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  boxShadow: "none",
  backgroundColor: "#F9F9FF !important",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const ListItemTextStyled = styled(ListItemText)({
  "& .MuiTypography-root": { color: "#353353", fontWeight: "600" },
});

function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#F9F9FF",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="h5"
                sx={{ marginLeft: 2, fontWeight: "600", color: "#353353" }}
              >
                My Resume
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding component={Link} to="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: "#353353" }} />
              </ListItemIcon>
              <ListItemTextStyled primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component={Link} to="/about-me">
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon sx={{ color: "#353353" }} />
              </ListItemIcon>
              <ListItemTextStyled primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component={Link} to="/experience">
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon sx={{ color: "#353353" }} />
              </ListItemIcon>
              <ListItemTextStyled primary="Experience" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component={Link} to="/portfolio">
            <ListItemButton>
              <ListItemIcon>
                <AppRegistrationIcon sx={{ color: "#353353" }} />
              </ListItemIcon>
              <ListItemTextStyled primary="Portfolio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component={Link} to="/contact">
            <ListItemButton>
              <ListItemIcon>
                <ChatBubbleIcon sx={{ color: "#353353" }} />
              </ListItemIcon>
              <ListItemTextStyled primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routers />
        <Box sx={{ marginBottom: "100px" }}></Box>
      </Main>
    </Box>
  );
}

export default App;
