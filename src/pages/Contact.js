import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
       <Box sx={{my:5, ml:10, "& h4 ":{fontWeight:"bold",mb:2}}}>
        <Typography variant="h4">
          Contact With Us
        </Typography>
        <p> If any Query plese Contact with us.</p>
       </Box>
       <Box sx={{m: 3,width:"600px",ml:10,"@media (max-width:600px)":{
        width:'300px'
       }}}>
        <TableContainer component={Paper}>
          <Table arial-aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white',}} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red',pt: 1}} /> +8801843025531

                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  < EmailIcon sx={{color:'blue',pt: 1}} /> shamim@gmail.com

                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  < CallIcon sx={{color:'green',pt: 1}} /> +8801788270042

                </TableCell>
              </TableRow>
            </TableBody>

          </Table>

        </TableContainer>
       </Box>
    </Layout>
  )
}

export default Contact
