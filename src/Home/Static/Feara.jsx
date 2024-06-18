import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import WaveImages from "../../Components/WaveImages";

const Feara = () => {
  return (
  <>
    <div style={{ marginBottom: "46px" }}>
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#081945",
        borderRadius: "50px",
        height: "calc(100vh - 50px)",
        m: 3,
        p: 4,
        px: 12
      }}
    >
      <Box sx={{ width: "50%"}}>
        <img src="/Assets/fearaLogo.png" alt="" style={{ marginBottom: "27px" }} />
        <Typography sx={{ fontSize: "53px", fontWeight: "600", color: "white", marginBottom: "11px" }}>Sales App</Typography>
        <Typography sx={{ fontSize: "23px", fontWeight: "400", color: "#96A6DC", marginBottom: "42px" }}>Simplify, Organize, and Accelerate Your Financial Operations with ViknBooks.</Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "white", marginBottom: "19px", textTransform: "uppercase" }}>Download App</Typography>

        <Box sx={{display: "flex", alignItems: "flex-start", gap: 1}}>
            <Button sx={{ height: "48px", width: "162px", backgroundImage: `url("/Assets/googlePlay.png")`}}></Button>
            <Button sx={{ height: "48px", width: "162px", backgroundImage: `url("/Assets/appStore.png")`}}></Button>
        </Box>
      </Box>
      <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative"}}>
        <div style={{ position: "absolute", top: "20px", left: "10px", backgroundColor: "rgba(176,146,67,0.79)", borderRadius: "999px", height: "278px", width: "278px", filter: "blur(104px)" }}></div>
        <div style={{ position: "absolute", top: "233px", left: "141px", backgroundColor: "#8F2EA7", borderRadius: "999px", height: "278px", width: "278px", filter: "blur(104px)" }}></div>
        <div style={{ position: "absolute", top: "40px", left: "261px", backgroundColor: "#4883C8", borderRadius: "999px", height: "278px", width: "278px", filter: "blur(104px)" }}></div>
        <img style={{ height: "475px", zIndex: "50"}} src="/Assets/fearaBg.png" alt="" />
        <div style={{ position: "absolute", top: "239px", left: "391px", zIndex: "100"}}><WaveImages image={"/Assets/Ellipse 8.png"} color={"#4E98E8"} rotate={0} /></div>
        <div style={{ position: "absolute", top: "168px", left: "135px", zIndex: "100"}}><WaveImages image={"/Assets/Ellipse 8 (1).png"} color={"#4E98E8"} rotate={58}/></div>
        <div style={{ position: "absolute", top: "34px", left: "387px", zIndex: "100"}}><WaveImages image={"/Assets/Ellipse 9.png"} color={"#4E98E8"} rotate={105} /></div>
      </Box>
    </Paper>
    </div>

    <div style={{ marginBottom: "46px" }}>
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#01050D",
        borderRadius: "50px",
        height: "calc(100vh - 50px)",
        m: 3,
        p: 4,
        px: 12
      }}
    >
      <Box sx={{ width: "50%"}}>
        <img src="/Assets/fearaLogo.png" alt="" style={{ marginBottom: "27px" }} />
        <Typography sx={{ fontSize: "53px", fontWeight: "600", color: "white", marginBottom: "11px" }}>Restaurant POS</Typography>
        <Typography sx={{ fontSize: "23px", fontWeight: "400", color: "#96A6DC", marginBottom: "42px" }}>Simplify, Organize, and Accelerate Your Financial Operations with ViknBooks.</Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "white", marginBottom: "19px", textTransform: "uppercase" }}>Download App</Typography>

        <Box sx={{display: "flex", alignItems: "flex-start", gap: 1}}>
            <Button sx={{ height: "48px", width: "162px", backgroundImage: `url("/Assets/googlePlay.png")`}}></Button>
            <Button sx={{ height: "48px", width: "162px", backgroundImage: `url("/Assets/appStore.png")`}}></Button>
        </Box>
      </Box>
      <Box sx={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative"}}>
        <div style={{ position: "absolute", top: "20px", left: "10px", backgroundColor: "rgba(176,146,67,0.6)", borderRadius: "999px", height: "278px", width: "278px", filter: "blur(104px)" }}></div>
        <div style={{ position: "absolute", top: "251px", left: "-7px", backgroundColor: "#8F2EA7", borderRadius: "999px", height: "278px", width: "278px", filter: "blur(104px)" }}></div>
        <div style={{ position: "absolute", top: "131px", left: "355px", backgroundColor: "rgba(108,176,255,0.6)", borderRadius: "999px", height: "278px", width: "278px", filter: "blur(104px)" }}></div>

        <img style={{ height: "475px", zIndex: "50"}} src="/Assets/Group 4650.png" alt="" />
        <div style={{ position: "absolute", top: "359px", left: "463px", zIndex: "100"}}><WaveImages image={"/Assets/Ellipse 8.png"} color={"#FF7A00"} bgColor={"#FF7A00"} rotate={0}/></div>
        <div style={{ position: "absolute", top: "291px", left: "-13px", zIndex: "100"}}><WaveImages image={"/Assets/Ellipse 8 (1).png"} color={"#FF7A00"} bgColor={"#FF7A00"} rotate={45}/></div>
        <div style={{ position: "absolute", top: "73px", left: "64px", zIndex: "100"}}><WaveImages image={"/Assets/Ellipse 9.png"} color={"#FF7A00"} bgColor={"#FF7A00"} rotate={95}/></div>
      </Box>
    </Paper>
    </div>
    </>
  );
};

export default Feara;
