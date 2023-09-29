import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
       <Box sx={{
        my:15,
        textAlign:"center",
        p:2,

        "& h4 ":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify",

        },
        "@media(max-width:600px)":{
          mt:0,
          "& h4 ":{
            fontSize: "1.3rem",
          },

        },
       }}>
        <Typography variant='h4'>
          Welcome to My Restaurant
        </Typography>
        <p>
        RFC Restuarant is the first fast food chain in Nawabgonj. If you're looking for
         fresh Chinese foods like burgers, pizza, shakes, fries, and deserts, head towards RFC!
        </p>
        <br />
        <p>
        RFC is open every morning, like 10 a.m., and closes at night at 11:30 p.m.
         Our vision is to satisfy customers demands at a reasonable price. We maintain high-quality ingredients in our restaurant.



        </p>
       </Box>
    </Layout>
  )
}

export default About
