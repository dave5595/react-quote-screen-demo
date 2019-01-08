import React from 'react';
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import Highlighter from '../Highlighter';

const TableBody = ({ rowData, columnDefs }) => {

  return(
    <tbody>
    {
      rowData.map(row =>(
        <TableRow key={row.symbol}>
          {
            columnDefs
              .map(col => col.field)
              .map((field) => {
                  return (
                    <TableCell key={field}>
                      <Highlighter>
                        { row[field] }
                      </Highlighter>
                    </TableCell>
                  )
                })
          }
        </TableRow>
      ))
    }

    </tbody>
  );
};

export default TableBody;