import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import "./dataTable.scss"

const props = {
  columns: [],
  rows: []
}

export default function DataTable(props) {
  const actionColumn = {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (prams) => {
      <div className='action'>
        <Link to="/"><img src="/view.svg" alt=''/></Link>
        <div className='delete'>
          <Link to="/"/>
          <img src="/delete.svg" alt=""/>
        </div>
      </div>
    }
  }
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};