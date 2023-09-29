import React from 'react'
import { MenuList } from '../data/data'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
          
            {MenuList.map ((menu) => (
              <Card sx={{maxWidth:"350px",display:"flex",m:2}}>
                <CardActionArea>
                  <CardMedia  
                  sx={{minHeight:'400px'}} 
                  component={'img'}
                  src={menu.Image}
                  alt={menu.name}
                  
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom component={"div"}>
                     {menu.name}
                    </Typography>
                    <Typography variant="body2">
                      {menu.Description}
                    </Typography>
                    <Typography variant='h5' color="red" fontWeight="bold">
                      {menu.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            ))
          }
        </Box>
    </Layout>
  )
}

export default Menu
