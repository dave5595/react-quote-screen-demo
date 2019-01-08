import React from 'react';

const TableHeader = ({ columnDefs }) => {
  return(
    <thead>
      <tr>
        {
          columnDefs && columnDefs.map(column => (
            <th key={column.headerName}>
              {column.headerName}
            </th>
          ))
        }
      </tr>
    </thead>
  )
};

export default TableHeader;

