import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const ListItemLink: React.VFC<ItemProps> = ({ icon, primary, to }) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>(
        function NewLink(itemProps, ref) {
          return <Link to={to} ref={ref} {...itemProps} role={undefined} />;
        }
      ),
    [to]
  );

  return (
    <ListItem
      button
      component={renderLink}
      sx={{
        '&:hover': { backgroundColor: 'rgba(255, 255, 255, .05)' },
      }}
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
};

export default ListItemLink;
