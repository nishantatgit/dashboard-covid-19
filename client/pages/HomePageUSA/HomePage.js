import React, { useEffect, useState } from 'react';

import Choropleth from '../../components/molecules/Choropleth/Choropleth';
import Dropdown from '../../components/atoms/Dropdown/Dropdown';

export default function HomePage(props) {
  const [data, setData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    const d = { ...window.__NX__ };
    console.log('data usa page -- - ', d);
    setData(d);
  }, []);

  const { usData, usGeoData } = data;
  const dates = usData && Object.keys(usData);
  const dropdownList =
    dates &&
    dates.map((d) => ({
      value: d,
      label: d,
    }));
  console.log('dropdownList ', dropdownList);
  return (
    <div>
      HomePage
      <Dropdown dropdownList={dropdownList}></Dropdown>
    </div>
  );
}
