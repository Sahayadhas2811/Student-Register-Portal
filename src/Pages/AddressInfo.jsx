import React from 'react';
import { Box, MenuItem, Select, TextField, Typography, Grid, FormControl, InputLabel, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

const AddressPassportValidation = yup.object().shape({
    nativeCountry: yup.string().required('Select the Native Country'),
    nativeState: yup.string().required('Select the Native State'),
    nativeCity: yup.string().required('Select the Native City'),
    postalCode: yup.string().required('Enter the Postal Code').min(5).max(10),
    passportNo: yup.string().required('Enter your Passport Number').min(6),
    passportExpiry: yup.date().required('Select the Passport Expiry Date'),
});

export default function AddressPassportInfo({ formData, setFormData }) {

    const initialValues = {
        nativeCountry: '',
        nativeState: '',
        nativeCity: '',
        postalCode: '',
        passportNo: '',
        passportExpiry: '',
    }

    return (
        <Box display={'flex'} width='100%'>
            <SideBar />
            <Box flexGrow={1}>
                <Header />
                <Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={AddressPassportValidation}
                        onSubmit={(values) => {
                            setFormData(values)
                        }}
                    >
                        {({ values, handleChange, handleBlur, errors, touched }) => (
                            <Form>
                                <Box m={3}>

                                    {/* Address Information */}
                                    <Accordion defaultExpanded>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography>Address Information</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container spacing={2}>
                                                {/* Native Country Dropdown */}
                                                <Grid item xs={4}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="native-country-label">Native Country</InputLabel>
                                                        <Select
                                                            labelId="native-country-label"
                                                            name='nativeCountry'
                                                            value={values.nativeCountry}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={touched.nativeCountry && Boolean(errors.nativeCountry)}
                                                            label='Native Country'
                                                        >
                                                            <MenuItem value=''>Select</MenuItem>
                                                            <MenuItem value='India'>India</MenuItem>
                                                            <MenuItem value='USA'>USA</MenuItem>
                                                            {/* Add more countries as needed */}
                                                        </Select>
                                                        {touched.nativeCountry && errors.nativeCountry && (
                                                            <Typography color="error">{errors.nativeCountry}</Typography>
                                                        )}
                                                    </FormControl>
                                                </Grid>

                                                {/* Native State Dropdown */}
                                                <Grid item xs={4}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="native-state-label">Native State</InputLabel>
                                                        <Select
                                                            labelId="native-state-label"
                                                            name='nativeState'
                                                            value={values.nativeState}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={touched.nativeState && Boolean(errors.nativeState)}
                                                            label='Native State'
                                                        >
                                                            <MenuItem value=''>Select</MenuItem>
                                                            <MenuItem value='Tamil Nadu'>Tamil Nadu</MenuItem>
                                                            <MenuItem value='California'>California</MenuItem>
                                                            {/* Add more states as needed */}
                                                        </Select>
                                                        {touched.nativeState && errors.nativeState && (
                                                            <Typography color="error">{errors.nativeState}</Typography>
                                                        )}
                                                    </FormControl>
                                                </Grid>

                                                {/* Native City Dropdown */}
                                                <Grid item xs={4}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="native-city-label">Native City</InputLabel>
                                                        <Select
                                                            labelId="native-city-label"
                                                            name='nativeCity'
                                                            value={values.nativeCity}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={touched.nativeCity && Boolean(errors.nativeCity)}
                                                            label='Native City'
                                                        >
                                                            <MenuItem value=''>Select</MenuItem>
                                                            <MenuItem value='Chennai'>Chennai</MenuItem>
                                                            <MenuItem value='Los Angeles'>Los Angeles</MenuItem>
                                                            {/* Add more cities as needed */}
                                                        </Select>
                                                        {touched.nativeCity && errors.nativeCity && (
                                                            <Typography color="error">{errors.nativeCity}</Typography>
                                                        )}
                                                    </FormControl>
                                                </Grid>

                                                {/* Postal Code */}
                                                <Grid item xs={4}>
                                                    <Field
                                                        margin='dense'
                                                        name='postalCode'
                                                        label='Postal Code'
                                                        as={TextField}
                                                        fullWidth
                                                        value={values.postalCode}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.postalCode && Boolean(errors.postalCode)}
                                                        helperText={touched.postalCode && errors.postalCode}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>

                                    {/* Passport Information */}
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography>Passport Information</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container spacing={2}>
                                                {/* Passport No. */}
                                                <Grid item xs={4}>
                                                    <Field
                                                        margin='dense'
                                                        name='passportNo'
                                                        label='Passport No.'
                                                        as={TextField}
                                                        fullWidth
                                                        value={values.passportNo}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.passportNo && Boolean(errors.passportNo)}
                                                        helperText={touched.passportNo && errors.passportNo}
                                                    />
                                                </Grid>

                                                {/* Passport Expiry (Date Picker) */}
                                                <Grid item xs={4}>
                                                    <Field
                                                        margin='dense'
                                                        name='passportExpiry'
                                                        label='Passport Expiry'
                                                        as={TextField}
                                                        type='date'
                                                        fullWidth
                                                        InputLabelProps={{ shrink: true }}
                                                        value={values.passportExpiry}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={touched.passportExpiry && Boolean(errors.passportExpiry)}
                                                        helperText={touched.passportExpiry && errors.passportExpiry}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>

                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    )
}
