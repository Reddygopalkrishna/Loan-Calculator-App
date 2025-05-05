import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (state) => () => setOpen(state);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Exchange Rates (LIVE)', path: '/exchange-rates' },
    { label: 'About', path: '/about' },
    { label: 'Error Page', path: '/error' },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
          Loan Calculator
        </Typography>

        {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ThemeToggle />
                <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {drawer}
                </Drawer>
            </Box>
            ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {navItems.map((item) => (
                <Typography
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
                >
                    {item.label}
                </Typography>
                ))}
                <ThemeToggle />
            </Box>
            )}

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
