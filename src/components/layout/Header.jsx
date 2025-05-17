import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from '../../assets/logo.png'
import logon from '../../assets/logon.png'
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Inicio", href: "#inicio" },
    { text: "Servicios", href: "#servicios" },
    { text: "Galería", href: "#galeria" },
    { text: "Contacto", href: "#contacto" },
  ];

  return (
    <AppBar position="absolute" sx={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar>
        {/* Logo y nombre */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            gap: 1,
          }}
        >
          <Box
            component="img"
            src={logo} // Reemplazá con la ruta real o URL del logo
            alt="Logo Tranca Cam"
            sx={{ height: 100 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              display: { xs: "none", sm: "block" }, // Ocultar en pantallas muy chicas si querés
            }}
          >
            
          </Typography>
        </Box>

        {/* Botón de menú para pantallas pequeñas */}
        <IconButton
          color="inherit"
          edge="start"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        {/* Menú principal para pantallas grandes */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {menuItems.map((item, index) => (
            <Button key={index} color="inherit" href={item.href}>
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* Drawer (Menú lateral) */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
            component="img"
            src={logon} // Reemplazá con la ruta real o URL del logo
            alt="Logo Tranca Cam"
            sx={{ height: 230 }}
          />
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component="a" href={item.href}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
