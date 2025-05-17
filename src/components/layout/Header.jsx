import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Tranca Cam
        </Typography>

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