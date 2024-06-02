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
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <div>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
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
          <table className='table-list'>
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
        </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
