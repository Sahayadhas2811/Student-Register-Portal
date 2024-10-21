import React from 'react';
import { Box, MenuItem, Select, TextField, Typography, Grid, FormControl, InputLabel } from '@mui/material';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

const PersonalInfoValidation = yup.object().shape({
    title: yup.string().oneOf(['Mr.', 'Mrs.'], 'Select one').required('Select the correct one'),
    firstName: yup.string().required('First Name is required').min(2),
    middleName: yup.string(),
    lastName: yup.string(),
    mobileNumber: yup.string().required('Mobile Number is required').min(10).max(10),
    emergencyContactNumber: yup.string().min(10).max(10).required('Enter the Emergency Contact Number'),
    emailId: yup.string().required('Enter your Email ID').email('Enter a valid email'),
    maritalStatus: yup.string().oneOf(['Single', 'Married', 'Divorced'], 'Select one').required('Status is required'),
    gender: yup.string().oneOf(['Male', 'Female'], 'Select one').required('Gender is required'),
    dateOfBirth: yup.date().required('Select the Date of Birth')
});

export default function PersonalInfo({ formData, setFormData }) {

    const initialValues = {
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        mobileNumber: '',
        emergencyContactNumber: '',
        emailId: '',
        maritalStatus: '',
        gender: '',
        dateOfBirth: '',
    }

    return (
        <Box display={'flex'} width='100%'>
            <SideBar />
            <Box flexGrow={1}>
                <Header />
                <Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={PersonalInfoValidation}
                        onSubmit={(values) => {
                            setFormData(values)
                        }}
                    >
                        {({ values, handleChange, handleBlur, errors, touched }) => (
                            <Form>
                                <Box m={3}>
                                    <Grid container spacing={2}>
                                        {/* Title */}
                                        <Grid item xs={4}>
                                            <FormControl fullWidth>
                                                <InputLabel id="title-label">Title</InputLabel>
                                                <Select
                                                    labelId="title-label"
                                                    name='title'
                                                    value={values.title}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.title && Boolean(errors.title)}
                                                    label='Title'
                                                    sx={{mt: 1}}
                                                >
                                                    <MenuItem value=''>Select</MenuItem>
                                                    <MenuItem value='Mr.'>Mr.</MenuItem>
                                                    <MenuItem value='Mrs.'>Mrs.</MenuItem>
                                                </Select>
                                                {touched.title && errors.title && (
                                                    <Typography color="error">{errors.title}</Typography>
                                                )}
                                            </FormControl>
                                        </Grid>

                                        {/* First Name */}
                                        <Grid item xs={4}>
                                            <Field
                                                margin='dense'
                                                as={TextField}
                                                name='firstName'
                                                label='First Name'
                                                fullWidth
                                                value={values.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.firstName && Boolean(errors.firstName)}
                                                helperText={touched.firstName && errors.firstName}
                                            />
                                        </Grid>

                                        {/* Middle Name */}
                                        <Grid item xs={4}>
                                            <Field
                                                margin='dense'
                                                name='middleName'
                                                label='Middle Name'
                                                as={TextField}
                                                fullWidth
                                                value={values.middleName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.middleName && Boolean(errors.middleName)}
                                                helperText={touched.middleName && errors.middleName}
                                            />
                                        </Grid>

                                        {/* Last Name */}
                                        <Grid item xs={4}>
                                            <Field
                                                margin='dense'
                                                name='lastName'
                                                label='Last Name'
                                                as={TextField}
                                                fullWidth
                                                value={values.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.lastName && Boolean(errors.lastName)}
                                                helperText={touched.lastName && errors.lastName}
                                            />
                                        </Grid>

                                        {/* Mobile Number */}
                                        <Grid item xs={4}>
                                            <Field
                                                margin='dense'
                                                name='mobileNumber'
                                                label='Mobile Number'
                                                as={TextField}
                                                fullWidth
                                                value={values.mobileNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.mobileNumber && Boolean(errors.mobileNumber)}
                                                helperText={touched.mobileNumber && errors.mobileNumber}
                                            />
                                        </Grid>

                                        {/* Emergency Contact Number */}
                                        <Grid item xs={4}>
                                            <Field
                                                margin='dense'
                                                name='emergencyContactNumber'
                                                label='Emergency Contact Number'
                                                as={TextField}
                                                fullWidth
                                                value={values.emergencyContactNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.emergencyContactNumber && Boolean(errors.emergencyContactNumber)}
                                                helperText={touched.emergencyContactNumber && errors.emergencyContactNumber}
                                            />
                                        </Grid>

                                        {/* Email ID */}
                                        <Grid item xs={4}>
                                            <Field
                                                margin='dense'
                                                name='emailId'
                                                label='Email ID'
                                                as={TextField}
                                                fullWidth
                                                value={values.emailId}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.emailId && Boolean(errors.emailId)}
                                                helperText={touched.emailId && errors.emailId}
                                            />
                                        </Grid>

                                        {/* Marital Status */}
                                        <Grid item xs={4}>
                                            <FormControl fullWidth>
                                                <InputLabel id="marital-status-label">Marital Status</InputLabel>
                                                <Select
                                                    labelId="marital-status-label"
                                                    name='maritalStatus'
                                                    value={values.maritalStatus}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.maritalStatus && Boolean(errors.maritalStatus)}
                                                    label='Marital Status'
                                                    sx={{mt: 1}}
                                                >
                                                    <MenuItem value=''>Select</MenuItem>
                                                    <MenuItem value='Single'>Single</MenuItem>
                                                    <MenuItem value='Married'>Married</MenuItem>
                                                    <MenuItem value='Divorced'>Divorced</MenuItem>
                                                </Select>
                                                {touched.maritalStatus && errors.maritalStatus && (
                                                    <Typography color="error">{errors.maritalStatus}</Typography>
                                                )}
                                            </FormControl>
                                        </Grid>

                                        {/* Gender */}
                                        <Grid item xs={4}>
                                            <FormControl fullWidth>
                                                <InputLabel id="gender-label">Gender</InputLabel>
                                                <Select
                                                    labelId="gender-label"
                                                    name='gender'
                                                    value={values.gender}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.gender && Boolean(errors.gender)}
                                                    label='Gender'
                                                    sx={{mt: 1}}
                                                >
                                                    <MenuItem value=''>Select</MenuItem>
                                                    <MenuItem value='Male'>Male</MenuItem>
                                                    <MenuItem value='Female'>Female</MenuItem>
                                                </Select>
                                                {touched.gender && errors.gender && (
                                                    <Typography color="error">{errors.gender}</Typography>
                                                )}
                                            </FormControl>
                                        </Grid>

                                        {/* Date of Birth */}
                                        <Grid item xs={4}>
                                            <Field
                                                margin='dense'
                                                name='dateOfBirth'
                                                label='Date of Birth'
                                                as={TextField}
                                                type='date'
                                                fullWidth
                                                InputLabelProps={{ shrink: true }}
                                                value={values.dateOfBirth}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                                                helperText={touched.dateOfBirth && errors.dateOfBirth}
                                            />
                                        </Grid>

                                    </Grid>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    )
}
