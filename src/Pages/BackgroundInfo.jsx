import React from 'react';
import { Box, MenuItem, Select, TextField, Typography, Grid, RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, IconButton, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import * as yup from 'yup';
import { Formik, Field, Form } from 'formik';

// Validation schema for background information
const backgroundInfoValidation = yup.object().shape({
    visaRejectionStatus: yup.string().required('Please select your visa rejection status'),
    gapInEducation: yup.string().required('Please select an option for gap in education'),
});

export default function BackgroundInformationForm({ formData, setFormData }) {
    const initialValues = {
        visaRejectionStatus: '',
        gapInEducation: '',
    };

    return (
        <Box display={'flex'} width='100%'>
            <SideBar />
            <Box flexGrow={1}>
                <Header />
                <Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={backgroundInfoValidation}
                        onSubmit={(values) => {
                            setFormData(values);
                        }}
                    >
                        {({ values, handleChange, handleBlur, errors, touched }) => (
                            <Form>
                                <Box m={3}>
                                    <Typography variant="h6">Background Information</Typography>

                                    <Grid container spacing={2}>
                                        {/* Visa Rejection Status */}
                                        <Grid item xs={6}>
                                            <FormControl component="fieldset">
                                                <Typography variant="body1">
                                                    Visa Rejection Status
                                                    <Tooltip title="Select 'Yes' if your visa application has ever been rejected." arrow>
                                                        <IconButton>
                                                            <InfoIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Typography>
                                                <RadioGroup
                                                    name="visaRejectionStatus"
                                                    value={values.visaRejectionStatus}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                >
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>
                                                {touched.visaRejectionStatus && errors.visaRejectionStatus && (
                                                    <Typography color="error">{errors.visaRejectionStatus}</Typography>
                                                )}
                                            </FormControl>
                                        </Grid>

                                        {/* Gap in Education */}
                                        <Grid item xs={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="gapInEducation-label">
                                                    Gap in Education
                                                    <Tooltip title="Select if you had any gap in your education history." arrow>
                                                        <IconButton>
                                                            <InfoIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </InputLabel>
                                                <Select
                                                    labelId="gapInEducation-label"
                                                    name="gapInEducation"
                                                    value={values.gapInEducation}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.gapInEducation && Boolean(errors.gapInEducation)}
                                                >
                                                    <MenuItem value="">Select</MenuItem>
                                                    <MenuItem value="No gap">No gap</MenuItem>
                                                    <MenuItem value="1-2 years">1-2 years</MenuItem>
                                                    <MenuItem value="More than 2 years">More than 2 years</MenuItem>
                                                </Select>
                                                {touched.gapInEducation && errors.gapInEducation && (
                                                    <Typography color="error">{errors.gapInEducation}</Typography>
                                                )}
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    );
}
