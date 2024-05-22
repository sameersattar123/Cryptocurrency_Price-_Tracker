import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" />
            <Tab label="List" value="list" />
          </TabList>
        </div>
        <TabPanel value="grid">Grid</TabPanel>
        <TabPanel value="list">List</TabPanel>
      </TabContext>
    </div>
  );
}
