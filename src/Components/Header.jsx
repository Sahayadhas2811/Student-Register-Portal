import React from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';

const HomePageHeader = () => {

  return (

    <Box display={'flex'}>
        <Box 
            display={'flex'} 
            flexDirection={'row'} 
            p={2} 
            sx={{ 
              backgroundColor: '#f5f5f5', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width:'100%' 
            }}
        >
        
        {/* Centered header text */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          textAlign="center"
        >
          <Typography variant="h4" gutterBottom>
            🎓 Welcome to Daltin's Student Portal! 🎓
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            We're excited to have you on board! This is your one-stop destination for all things related to your student journey.
          </Typography>
          <Typography variant="body1" gutterBottom>
            🔐 Register for courses in just a few clicks!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our mission is to help you succeed, so if you ever need help, we’re here for you!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Let’s make this academic journey an unforgettable one.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Ready to get started? Click below to begin your registration.
          </Typography>
          {/* Button can be added here if needed */}
        </Box>
        </Box>
      </Box>
  );
};

export default HomePageHeader;
