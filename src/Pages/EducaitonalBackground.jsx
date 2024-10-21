import React, { useState } from 'react';
import { Box, MenuItem, Select, TextField, Typography, Grid, FormControl, InputLabel, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import * as yup from 'yup';
import { FieldArray, Form, Formik, Field } from 'formik';

// Validation schema for each qualification
const qualificationSchema = yup.object().shape({
    qualification: yup.string().required('Qualification is required'),
    institution: yup.string().required('Institution/Board/University is required'),
    percentage: yup.number().required('Percentage is required').min(0).max(100),
    passingYear: yup.number().required('Passing Year is required').min(1900).max(new Date().getFullYear()),
    country: yup.string().required('Country is required'),
});

const initialQualification = {
    qualification: '',
    institution: '',
    percentage: '',
    passingYear: '',
    country: '',
};

const educationValidationSchema = yup.object().shape({
    qualifications: yup.array().of(qualificationSchema),
});

export default function EducationForm({ formData, setFormData }) {
    const initialValues = {
        qualifications: [initialQualification], // Initial qualification field set
    };

    return (
        <Box display={'flex'} width='100%'>
            <SideBar />
            <Box flexGrow={1}>
                <Header />
                <Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={educationValidationSchema}
                        onSubmit={(values) => {
                            setFormData(values);
                        }}
                    >
                        {({ values, handleChange, handleBlur, errors, touched }) => (
                            <Form>
                                <Box m={3}>
                                    <Typography variant="h6">Previous Education Details</Typography>
                                    <FieldArray name="qualifications">
                                        {({ push, remove }) => (
                                            <Box>
                                                {values.qualifications.map((_, index) => (
                                                    <Grid container spacing={2} key={index} alignItems="center">
                                                        <Grid item xs={3}>
                                                            <Field
                                                                as={TextField}
                                                                name={`qualifications[${index}].qualification`}
                                                                label="Qualification"
                                                                fullWidth
                                                                value={values.qualifications[index].qualification}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                error={
                                                                    touched.qualifications &&
                                                                    touched.qualifications[index]?.qualification &&
                                                                    Boolean(errors.qualifications?.[index]?.qualification)
                                                                }
                                                                helperText={
                                                                    touched.qualifications &&
                                                                    touched.qualifications[index]?.qualification &&
                                                                    errors.qualifications?.[index]?.qualification
                                                                }
                                                            />
                                                        </Grid>

                                                        <Grid item xs={3}>
                                                            <Field
                                                                as={TextField}
                                                                name={`qualifications[${index}].institution`}
                                                                label="Institution/Board/University"
                                                                fullWidth
                                                                value={values.qualifications[index].institution}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                error={
                                                                    touched.qualifications &&
                                                                    touched.qualifications[index]?.institution &&
                                                                    Boolean(errors.qualifications?.[index]?.institution)
                                                                }
                                                                helperText={
                                                                    touched.qualifications &&
                                                                    touched.qualifications[index]?.institution &&
                                                                    errors.qualifications?.[index]?.institution
                                                                }
                                                            />
                                                        </Grid>

                                                        <Grid item xs={2}>
                                                            <Field
                                                                as={TextField}
                                                                name={`qualifications[${index}].percentage`}
                                                                label="Percentage"
                                                                type="number"
                                                                fullWidth
                                                                value={values.qualifications[index].percentage}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                error={
                                                                    touched.qualifications &&
                                                                    touched.qualifications[index]?.percentage &&
                                                                    Boolean(errors.qualifications?.[index]?.percentage)
                                                                }
                                                                helperText={
                                                                    touched.qualifications &&
                                                                    touched.qualifications[index]?.percentage &&
                                                                    errors.qualifications?.[index]?.percentage
                                                                }
                                                            />
                                                        </Grid>

                                                        <Grid item xs={2}>
                                                            <Field
                                                                as={TextField}
                                                                name={`qualifications[${index}].passingYear`}
                                                                label="Passing Year"
                                                                type="number"
                                                                fullWidth
                                                                value={values.qualifications[index].passingYear}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                error={
                                                                    touched.qualifications &&
                                                                    touched.qualifications[index]?.passingYear &&
                                                                    Boolean(errors.qualifications?.[index]?.passingYear)
                                                                }
                                                                helperText={
                                                                    touched.qualifications &&
                                                                    touched.qualifications[index]?.passingYear &&
                                                                    errors.qualifications?.[index]?.passingYear
                                                                }
                                                            />
                                                        </Grid>

                                                        <Grid item xs={2}>
                                                            <FormControl fullWidth>
                                                                <InputLabel id={`country-label-${index}`}>Country</InputLabel>
                                                                <Select
                                                                    labelId={`country-label-${index}`}
                                                                    name={`qualifications[${index}].country`}
                                                                    value={values.qualifications[index].country}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    error={
                                                                        touched.qualifications &&
                                                                        touched.qualifications[index]?.country &&
                                                                        Boolean(errors.qualifications?.[index]?.country)
                                                                    }
                                                                >
                                                                    <MenuItem value="">Select</MenuItem>
                                                                    <MenuItem value="USA">USA</MenuItem>
                                                                    <MenuItem value="UK">UK</MenuItem>
                                                                    <MenuItem value="Australia">Australia</MenuItem>
                                                                    <MenuItem value="Canada">Canada</MenuItem>
                                                                    {/* Add more countries as needed */}
                                                                </Select>
                                                                {touched.qualifications &&
                                                                    touched.qualifications[index]?.country &&
                                                                    errors.qualifications?.[index]?.country && (
                                                                        <Typography color="error">
                                                                            {errors.qualifications?.[index]?.country}
                                                                        </Typography>
                                                                    )}
                                                            </FormControl>
                                                        </Grid>

                                                        {/* Remove Button */}
                                                        {index > 0 && (
                                                            <Grid item xs={1}>
                                                                <IconButton
                                                                    aria-label="delete"
                                                                    onClick={() => remove(index)}
                                                                >
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </Grid>
                                                        )}
                                                    </Grid>
                                                ))}

                                                {/* Add Another Qualification Button */}
                                                <Box mt={2}>
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => push(initialQualification)}
                                                    >
                                                        Add Another Qualification
                                                    </Button>
                                                </Box>
                                            </Box>
                                        )}
                                    </FieldArray>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    );
}
