import { Box } from '@mui/material';
import './infinite.css'
import React from "react";

const Clients = () => {
  return (
    <Box sx={{ backgroundColor: "white"}}>
      <div className="wrapper mb12">
        <div className="itemLeft item1"></div>
        <div className="itemLeft item2"></div>
        <div className="itemLeft item3"></div>
        <div className="itemLeft item4"></div>
        <div className="itemLeft item5"></div>
        <div className="itemLeft item6"></div>
        <div className="itemLeft item7"></div>
        <div className="itemLeft item8"></div>
      </div>
      <div className="wrapper">
        <div className="itemRight item1"></div>
        <div className="itemRight item2"></div>
        <div className="itemRight item3"></div>
        <div className="itemRight item4"></div>
        <div className="itemRight item5"></div>
        <div className="itemRight item6"></div>
        <div className="itemRight item7"></div>
        <div className="itemRight item8"></div>
      </div>
    </Box>
  );
};

export default Clients;
