import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "../../Dashboad/Grid/Grid"
import List from "../../Dashboad/List/List"
import "./style.css"

export default function LabTabs({coins}) {
  // console.log(coins)
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
        <TabPanel value="grid">
          <div className="grid-flex">
          {
            coins.map((coin , i) => {
              return (
                <Grid 
                coin={coin}
                key={i}
                />
              )
            })
          }
          </div>
        </TabPanel>
        <TabPanel value="list">
        {
            coins.map((coin , i) => {
              return (
                <List
                coin={coin}
                key={i}
                />
              )
            })
          }
        </TabPanel>
      </TabContext>
    </div>
  );
}
