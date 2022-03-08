import { Box } from '@mui/material';
import React from 'react';
import Filter from './Filter';
import PersonsTable from './PersonsTable';

const Data: React.VFC<PersonneProps> = ({
  search,
  setSearch,
  gender,
  setGender,
  data,
}) => {
  return (
    <Box component="main" sx={{ padding: '3rem 1rem 0' }}>
      <Filter
        search={search}
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
      />
      {data.length > 0 && <PersonsTable persons={data} />}
    </Box>
  );
};

export default Data;
