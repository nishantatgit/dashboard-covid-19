import MaterialTable from 'material-table';

import React, { useState } from 'react';

export default function Table({ states, values, headers, options = {} }) {
  const defaultOptions = {
    padding: 'dense',
    pageSize: 15,
    headerStyle: {
      backgroundColor: '#01579b',
      color: '#FFF'
    },
    paging: false,
    draggable: false
  };

  const updatedOptions = { ...defaultOptions, ...options };
  const colHeaders = headers.map(header => ({
    title: header,
    field: header
  }));
  return (
    <section className="table-container">
      <MaterialTable
        columns={colHeaders}
        data={values}
        title="Statewise disease spread"
        options={updatedOptions}
      ></MaterialTable>
    </section>
  );
}
