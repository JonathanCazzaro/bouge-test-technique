import { Drawer, List, Toolbar, Typography } from '@mui/material';
import { HomeOutlined, BarChartOutlined } from '@mui/icons-material';
import React from 'react';
import ListItemLink from './ListItemLink';

const Nav: React.VFC = () => (
  <Drawer
    sx={{
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        backgroundColor: '#141936',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar sx={{ backgroundColor: '#111630' }}>
      <Typography
        variant="body2"
        fontWeight="bold"
        color="white"
        noWrap
        component="h1"
      >
        DASHBOARD BOUGE
      </Typography>
    </Toolbar>
    <List sx={{ color: 'white' }}>
      <ListItemLink
        to="/"
        primary="Home"
        icon={<HomeOutlined htmlColor="white" />}
      />
      <ListItemLink
        to="/personne"
        primary="Personne"
        icon={<BarChartOutlined htmlColor="white" />}
      />
    </List>
  </Drawer>
);

export default Nav;
