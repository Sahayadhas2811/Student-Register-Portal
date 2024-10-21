import React from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePageHeader = () => {
  const navigate = useNavigate();
  const drawerWidth = 240;

  return (

    <Box display={'flex'}>
         {/* Drawer for sidebar navigation starting below the header */}
        <Box>
        <Drawer
          variant='permanent' 
          anchor='left' 
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              alignItems:'center',
              justifyContent:'space-between'
            }
          }}
        >
            <Box
                sx={{display:'flex',
                    padding:'16px',
                    justifyContent:'center'
                }}
                >
                <Box 
                      component="img" 
                      src="DaltinsLogo.png" 
                      alt="Daltin Logo" 
                      sx={{ width: '150px', 
                        height:'', 
                        mb: '20px' }} 
                />
            </Box>
            <List sx={{cursor:'pointer'}}>
              <ListItem button onClick={()=>navigate('/')}>
                <ListItemText primary="Personal Info" />
              </ListItem>
              <ListItem button onClick={()=>navigate('/AddressPassportInfo')}>
                <ListItemText primary="Address & Passport" />
              </ListItem>
              <ListItem button onClick={()=>navigate('/AcademicInterest')}>
                <ListItemText primary="Academic Interests" />
              </ListItem>
              <ListItem button onClick={()=>navigate('/EducationInfo')}>
                <ListItemText primary="Educational Background" />
              </ListItem>
              <ListItem button onClick={()=>navigate('/BackgroundInfo')}>
                <ListItemText primary="Background Info" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Document Upload" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Final Review & Submission" />
              </ListItem>
          </List>
                <Box sx={{padding:'16px', width:'90%'}}>
                    <Button 
                    variant='contained' 
                    fullWidth
                    >Logout</Button>
                </Box>
        </Drawer>
        </Box>
      </Box>
  );
};

export default HomePageHeader;
