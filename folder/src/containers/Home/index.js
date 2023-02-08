import React from 'react'
import Layout from '../../Components/Layout'
import {Toolbar,Typography,Box,Container} from '@mui/material'

const Home = () => {
  return (
    <>
      <Layout>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant='subtitle1'>
          <Container>
          {/* <h2>Hello world</h2> */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
          fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
          dolores sunt inventore perferendis, aut sapiente modi nesciunt.
          </Container>
        </Typography>
      </Box>
      </Layout>

      
    </>
  )
}

export default Home