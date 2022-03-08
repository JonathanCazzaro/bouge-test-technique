import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const PageTitle: React.VFC<{ title: string }> = ({ title }) => (
  <AppBar
    position="static"
    sx={{
      backgroundColor: 'white',
      boxShadow: 'none',
      color: 'text.primary',
      borderBottom: '1px solid black',
    }}
  >
    <Toolbar>
      <Typography variant="h5" fontWeight="medium" noWrap component="div">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default PageTitle;
