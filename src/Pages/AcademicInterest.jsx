import React, { useState } from 'react';
import { Box, MenuItem, Select, TextField, Typography, Grid, FormControl, InputLabel, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

const EnglishProficiencyValidation = yup.object().shape({
    interestedCountry: yup.string().required('Select the Interested Country'),
    englishTest: yup.string().required('Select the English Proficiency Test'),
    score: yup.string().when('englishTest', {
        is: (value) => value !== 'None',
        then: yup.string().required('Enter the Test Score'),
        otherwise: yup.string().notRequired(),
    }),
    educationBoardDetails: yup.string().when('englishTest', {
        is: 'None',
        then: yup.string().required('Enter Education Board Details'),
        otherwise: yup.string().notRequired(),
    }),
});

export default function AcademicInterest({ formData, setFormData }) {
    const [showScoreField, setShowScoreField] = useState(false);
    const [showEducationBoard, setShowEducationBoard] = useState(false);

    const initialValues = {
        interestedCountry: '',
        englishTest: '',
        score: '',
        educationBoardDetails: '',
    };

    const handleEnglishTestChange = (event, handleChange) => {
        handleChange(event);
        const value = event.target.value;

        // Show score field if English test is selected other than "None"
        if (value !== 'None') {
            setShowScoreField(true);
            setShowEducationBoard(false);
        } else {
            setShowScoreField(false);
            setShowEducationBoard(true);
        }
    };

    return (
        <Box display={'flex'} width='100%'>
            <SideBar />
            <Box flexGrow={1}>
                <Header />
                <Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={EnglishProficiencyValidation}
                        onSubmit={(values) => {
                            setFormData(values);
                        }}
                    >
                        {({ values, handleChange, handleBlur, errors, touched }) => (
                            <Form>
                                <Box m={3}>
                                    <Accordion defaultExpanded>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography>Interested Country and English Proficiency Test</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container spacing={2}>

                                                {/* Interested Country Dropdown */}
                                                <Grid item xs={4}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="interested-country-label">Interested Country</InputLabel>
                                                        <Select
                                                            labelId="interested-country-label"
                                                            name="interestedCountry"
                                                            value={values.interestedCountry}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={touched.interestedCountry && Boolean(errors.interestedCountry)}
                                                            label="Interested Country"
                                                        >
                                                            <MenuItem value="">Select</MenuItem>
                                                            <MenuItem value="USA">USA</MenuItem>
                                                            <MenuItem value="UK">UK</MenuItem>
                                                            <MenuItem value="Australia">Australia</MenuItem>
                                                            <MenuItem value="Canada">Canada</MenuItem>
                                                            {/* Add more countries as needed */}
                                                        </Select>
                                                        {touched.interestedCountry && errors.interestedCountry && (
                                                            <Typography color="error">{errors.interestedCountry}</Typography>
                                                        )}
                                                    </FormControl>
                                                </Grid>

                                                {/* English Proficiency Test Dropdown */}
                                                <Grid item xs={4}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="english-test-label">English Proficiency Test</InputLabel>
                                                        <Select
                                                            labelId="english-test-label"
                                                            name="englishTest"
                                                            value={values.englishTest}
                                                            onChange={(event) => handleEnglishTestChange(event, handleChange)}
                                                            onBlur={handleBlur}
                                                            error={touched.englishTest && Boolean(errors.englishTest)}
                                                            label="English Proficiency Test"
                                                        >
                                                            <MenuItem value="">Select</MenuItem>
                                                            <MenuItem value="IELTS">IELTS</MenuItem>
                                                            <MenuItem value="TOEFL">TOEFL</MenuItem>
                                                            <MenuItem value="PTE">PTE</MenuItem>
                                                            <MenuItem value="None">None</MenuItem>
                                                        </Select>
                                                        {touched.englishTest && errors.englishTest && (
                                                            <Typography color="error">{errors.englishTest}</Typography>
                                                        )}
                                                    </FormControl>
                                                </Grid>

                                                {/* Conditional Field: Score */}
                                                {showScoreField && (
                                                    <Grid item xs={4}>
                                                        <Field
                                                            margin="dense"
                                                            name="score"
                                                            label="Score"
                                                            as={TextField}
                                                            fullWidth
                                                            value={values.score}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={touched.score && Boolean(errors.score)}
                                                            helperText={touched.score && errors.score}
                                                        />
                                                    </Grid>
                                                )}

                                                {/* Conditional Field: Education Board Details */}
                                                {showEducationBoard && (
                                                    <Grid item xs={4}>
                                                        <Field
                                                            margin="dense"
                                                            name="educationBoardDetails"
                                                            label="Education Board Details"
                                                            as={TextField}
                                                            fullWidth
                                                            value={values.educationBoardDetails}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={touched.educationBoardDetails && Boolean(errors.educationBoardDetails)}
                                                            helperText={touched.educationBoardDetails && errors.educationBoardDetails}
                                                        />
                                                    </Grid>
                                                )}

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
    );
}
