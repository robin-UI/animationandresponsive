// import styled from '@emotion/styled'
import { Box, Button, IconButton, Paper, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const cursoleArray = [
    {
        id: 1,
        name: "Anusree",
        prof: "HR Manager @ Vikncodes",
        disc: "“viknbooks is a game-changer for managing my business. It streamlines everything. It made my Business tasks so much easier, and I highly recommend it!”",
        imge: "/curosole/Rectangle 2.png"
    },
    {
        id: 2,
        name: "Rashid",
        prof: "FullStack Developer @ Vikncodes",
        disc: "“viknbooks is a game-changer for managing my business. It streamlines everything. It made my Business tasks so much easier, and I highly recommend it!”",
        imge: "/curosole/Rectangle 3.png"
    },    
    {
        id: 3,
        name: "Nashid",
        prof: "Python Developer @ Vikncodes",
        disc: "“viknbooks is a game-changer for managing my business. It streamlines everything. It made my Business tasks so much easier, and I highly recommend it!”",
        imge: "/curosole/Rectangle 4.png"
    },
]

const Curosole = () => {
  const [viewPoint, setviewPoint] = useState(cursoleArray[0])
  return (
    <>
      <OuterBox 
        sx={{ padding: {
          xs: '24.80px',
          sm: '50.79px',
          md: '67.72px',
          lg: '84.66px',
          xl: '100.00px'
        }}}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: '34px'}}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <ItalicTypo sx={{ fontSize: {
                      xs: '6.00px',
                      sm: '8.63px',
                      md: '11.51px',
                      lg: '14.39px',
                      xl: '17.00px'
                      }
                    }}>
                {/* “viknbooks is a game-changer for managing my business. It streamlines everything. It made my Business tasks so much easier, and I highly recommend it!” */}
                {viewPoint.disc}
                </ItalicTypo>

                <NameTypo 
                    sx={{ 
                     fontSize: {
                      xs: '4.46px',
                      sm: '9.14px',
                      md: '12.19px',
                      lg: '15.24px',
                      xl: '18.00px'
                    } 
                }}>
                    {viewPoint.name}
                </NameTypo>
                <ProfTypo 
                  sx={{ fontSize: {
                      xs: '6.00px',
                      sm: '8.63px',
                      md: '11.51px',
                      lg: '14.39px',
                      xl: '17.00px'
                      }
                    }}>{viewPoint.prof}</ProfTypo>
            </Box>

            <Box sx={{ position: "relative"}}>
                <Box sx={{display: "flex", justifyContent: "space-between", gap: "27px"}}>
                    <ViewPoint 
                      sx={{ 
                        backgroundImage: `url("${viewPoint?.imge}")`, 
                        width: {
                          xs: "83px",  
                          sm: "170px", 
                          md: "227px", 
                          lg: "283px", 
                          xl: "335px"  
                        },
                        height: {
                          xs: "101px", 
                          sm: "208px", 
                          md: "277px", 
                          lg: "346px", 
                          xl: "409px"   
                        },
                        }}
                    >
                        <PlayButton 
                          sx={{
                            width: { xs: '10px', sm: '20px', md: '27px', lg: '34px', xl: '40px' },
                            height: { xs: '10px', sm: '20px', md: '27px', lg: '34px', xl: '40px' }
                           }} 
                           children={<img src='/Assets/Polygon 2.svg' />} 
                        />
                    </ViewPoint>
                    {cursoleArray.map((e, i) => (
                        viewPoint.id !== e.id && 
                        <ListImage 
                          key={i}
                          sx = {{ 
                            backgroundImage: `url("${e.imge}")`,
                            width: { xs: '65px', sm: '133px', md: '177px', lg: '222px', xl: '262px' },
                            height: { xs: '79px', sm: '163px', md: '217px', lg: '271px', xl: '320px' }
                           }} 
                          onClick={() => setviewPoint(e)} 
                        />
                    ))}
                </Box>
                <Box sx={{ position: "absolute", bottom: "0px", right: "0px", display: "inline-flex", justifyContent: "space-between", alignItems: "center", gap: "2px" }} >
                    {cursoleArray.map((e, i) => (
                        <DotButton key={i} children = {
                            i + 1 === viewPoint.id 
                            ? <FiberManualRecordIcon key={i} sx={{ fontSize: {
                                xs: '7.44px',
                                sm: '15.24px',
                                md: '20.32px',
                                lg: '25.40px',
                                xl: '30.00px'
                              } }} />
                            : <DotButton onClick={() => setviewPoint(e)} children={<RadioButtonUncheckedIcon sx={{ fontSize: {
                                xs: '6.00px',
                                sm: '9.14px',
                                md: '12.19px',
                                lg: '15.24px',
                                xl: '18.00px'
                              }}} />}/>
                        }/>
                    ))}
                    {/* <DotButton children={<RadioButtonUncheckedIcon sx={{ fontSize: "18px"}} />}/>
                    <DotButton children={<RadioButtonUncheckedIcon sx={{ fontSize: "18px"}} />}/> */}
                </Box>
            </Box>
        </Box>
      </OuterBox>
    </>
  )
}

export default Curosole

const OuterBox = styled(Box)(() => ({
    width: "100%", 
    // padding: "100px",
    backgroundColor: "white"
})) 

const ItalicTypo = styled(Typography)(() => ({
    fontStyle: "italic",
    color:"#555555",
    fontWeight: "400",
    // fontSize: "17px",
    marginBottom: "44px"
}))

const NameTypo = styled(Typography)(() => ({
    fontWeight: "bold",
    color:"black",
    lineHeight: "28px",
    // fontSize: "18px"
}))

const ProfTypo = styled(Typography)(() => ({
    fontWeight: "400",
    color:"black",
    fontSize: "17px",
    lineHeight: "28px",
}))

const ViewPoint = styled(Paper)(() => ({
    borderRadius: "10px",
    // height: "409px",
    // width: "335px",
    // marginRight: "27px",
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    position: "relative"
}))

const ListImage = styled(Paper)(() => ({
    borderRadius: "10px",
    // height: "320px",
    // width: "262px",
    // marginRight: "27px",
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    transition: "0.3s",
    ":hover": {
        scale: "1.009",
    }
}))

const DotButton = styled(IconButton)(()=> ({
    padding: "0px",
    color: "black"
}))

const PlayButton = styled(IconButton)(()=> ({
    border: "0.6px solid white",
    width: "40px",
    height: "40px",
    position: "absolute",
    left:   "10px",
    bottom: "10px"
}))