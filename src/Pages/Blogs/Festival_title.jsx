import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BoxCategories from './BoxCategories';
import Categories_name from './Categories_name';

const Festival_title = ({ Api_url }) => {
  const location = useLocation()
  const { name } = location.state || {};
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Adjust the timeout value as needed (2 seconds in this case)

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
      <Box className="bg-img width1920"  >
        <Typography id='Heading-h2' variant='h2'className='padding-top-bottom' marginTop={"1rem"}  >
          {showLoader ? <CircularProgress  /> : name}
        </Typography>
      </Box>
      {!showLoader && (
        <>
          <BoxCategories Api_url={Api_url} />
         {/* <Box className="width1920 flex-center">
         <Categories_name/>
         </Box> */}

        </>
      )}
    </>
  );
}

export default Festival_title;
