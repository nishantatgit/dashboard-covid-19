import React from 'react';
import MaterialTable from 'material-table';
import { useTable, useSortBy } from 'react-table';
import './Table.scss';
export default function Table({ states, values, headers }) {
  console.log('table function getting called ........');
  const colHeaders = headers.map(header => ({
    Header: header,
    accessor: header,
    sortType: 'basic'
  }));

  const columns = React.useMemo(() => colHeaders);
  const data = React.useMemo(() => values);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      manualSortBy: true
    },
    useSortBy
  );

  console.log('values ', values);
  console.log('headers ', headers);
  console.log('column headers', colHeaders);
  return (
    <>
      {console.log('getTableProps', getTableProps())}
      <table {...getTableProps()} className="table">
        <thead>
          {console.log('headerGroups ', headerGroups)}
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
