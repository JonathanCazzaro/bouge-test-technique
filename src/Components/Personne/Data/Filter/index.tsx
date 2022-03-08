import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

const Filter: React.VFC<FilterProps> = ({
  search,
  setSearch,
  gender,
  setGender,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '1rem', width: '40rem' }}>
      <TextField
        id="outlined-basic"
        label="Recherche par nom ou prénom"
        variant="outlined"
        size="small"
        sx={{
          flexBasis: '60%',
          '& .MuiOutlinedInput-input': { backgroundColor: 'white' },
        }}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <FormControl fullWidth size="small" sx={{ flexBasis: '40%' }}>
        <InputLabel id="gender-selector-label">Male / Female</InputLabel>
        <Select
          labelId="gender-selector-label"
          id="gender-selector"
          value={gender}
          sx={{ backgroundColor: 'white' }}
          label="Male / Female"
          onChange={(event) => setGender(event.target.value as Gender)}
        >
          <MenuItem value="">Both</MenuItem>
          <MenuItem value="male">Males only</MenuItem>
          <MenuItem value="female">Females only</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
