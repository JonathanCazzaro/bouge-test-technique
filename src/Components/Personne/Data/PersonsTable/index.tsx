import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import EditModal from './EditModal';

const columns: GridColDef[] = [
  {
    field: 'lastname',
    headerName: 'Nom',
    headerAlign: 'center',
    align: 'center',
    width: 150,
    sortable: false,
  },
  {
    field: 'firstname',
    headerName: 'Prénom',
    headerAlign: 'center',
    align: 'center',
    width: 150,
    sortable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    headerAlign: 'center',
    align: 'center',
    width: 300,
    sortable: false,
    flex: 1,
  },
  {
    field: 'gender',
    headerName: 'Genre',
    headerAlign: 'center',

    align: 'center',
    width: 150,
    sortable: false,
  },
  {
    field: 'edit',
    headerName: '',
    align: 'right',
    sortable: false,
    flex: 1,
    renderCell: (params) => {
      const [isOpen, setIsOpen] = useState(false);
      const currentPerson: Person = params.row;
      return (
        <>
          <Button variant="contained" onClick={() => setIsOpen(true)}>
            Modifier
          </Button>
          <EditModal
            isOpen={isOpen}
            handleClose={() => setIsOpen(false)}
            fullname={`${currentPerson.firstname} ${currentPerson.lastname}`}
          />
        </>
      );
    },
  },
];

const PersonsTable: React.VFC<{ persons: Person[] }> = ({ persons }) => {
  return (
    <div>
      <DataGrid
        columns={columns}
        rows={persons}
        disableColumnMenu
        hideFooter
        sx={{
          height: '20rem',
          marginTop: '2rem',
          textAlign: 'center',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'rgba(0, 0, 0, .1)',
          },
        }}
      />
    </div>
  );
};

export default PersonsTable;
