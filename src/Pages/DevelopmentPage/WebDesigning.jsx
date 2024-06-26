
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form from "./Form"
import Webdesigner_logo from "../../assets/Service/logo/web designing.svg"
import Footer2 from '../../Component/Footer2'


const WebDesigning = () => {
    return (
        <>
            <Box>
                <Box className="bg-img" >
                    <Typography className='primary-heading' variant='h1' >Website Designing</Typography>
                </Box>
            </Box>

            <Box className="service_primary_section flex-center" >

                <Box className="flex-center-coulmn padding-top-bottom service_chid"  >
                       

                            <Typography variant='h3' className='service_secondary-heading inner_heading' >
                            Professional Web Design Services
                            </Typography>

                            <Typography variant='h5' className='primary_subheading secvice_child_text' >
                            Web designing is key to creating an attractive and effective online presence. Our web design services focus on making websites that are both beautiful and easy to use. We ensure that our designs work well on all devices, from computers to smartphones. By understanding your brand and goals, we create custom websites that engage visitors and drive results. Our skilled team is dedicated to delivering websites that look great and function perfectly, helping your business succeed online.


                            </Typography>
                           

                       
                    </Box>

            </Box>

            <Service />
            <Form />
            <Footer2/>

        </>
    )
}

export default WebDesigning