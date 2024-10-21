// import React, { useCallback } from 'react';
// import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useDropzone } from 'react-dropzone';

// const fileTypes = ['image/jpeg', 'image/png', 'application/pdf']; // Allowed file types
// const maxFileSize = 5 * 1024 * 1024; // Max size: 5MB

// export default function DocumentUpload({ formData, setFormData }) {
//     const [uploadedFiles, setUploadedFiles] = React.useState({
//         tenthMarksheet: null,
//         twelfthMarksheet: null,
//         passport: null,
//         englishProficiency: null,
//         sop: null,
//         cv: null,
//         experience: null,
//         bachelorsDegree: null,
//     });

//     const handleDrop = useCallback((acceptedFiles, field) => {
//         const file = acceptedFiles[0];
//         if (file) {
//             setUploadedFiles((prev) => ({
//                 ...prev,
//                 [field]: file,
//             }));
//         }
//     }, []);

//     const removeFile = (field) => {
//         setUploadedFiles((prev) => ({
//             ...prev,
//             [field]: null,
//         }));
//     };

//     // Move useDropzone here to the main component scope
//     const renderDropzone = (label, field) => {
//         const onDrop = (acceptedFiles) => handleDrop(acceptedFiles, field);

//         // Now useDropzone is called within the renderDropzone function
//         const { getRootProps, getInputProps, isDragActive } = useDropzone({
//             onDrop,
//             accept: fileTypes,
//             maxSize: maxFileSize,
//         });

//         return (
//             <Box border="1px dashed #ccc" borderRadius={2} p={2} textAlign="center" {...getRootProps()}>
//                 <input {...getInputProps()} />
//                 {isDragActive ? (
//                     <Typography>Drop the files here ...</Typography>
//                 ) : uploadedFiles[field] ? (
//                     <Box display="flex" justifyContent="space-between" alignItems="center">
//                         <Typography variant="body2">{uploadedFiles[field].name}</Typography>
//                         <IconButton onClick={() => removeFile(field)}>
//                             <DeleteIcon color="error" />
//                         </IconButton>
//                     </Box>
//                 ) : (
//                     <>
//                         <CloudUploadIcon fontSize="large" color="primary" />
//                         <Typography variant="body2">{label}</Typography>
//                         <Typography variant="caption">(Allowed: PDF, JPG, PNG - Max size: 5MB)</Typography>
//                     </>
//                 )}
//             </Box>
//         );
//     };

//     return (
//         <Box display={'flex'} width="100%">
//             <Box flexGrow={1}>
//                 <Typography variant="h6" gutterBottom>
//                     Document Upload
//                 </Typography>

//                 <Grid container spacing={2}>
//                     {/* 10th Marksheet */}
//                     <Grid item xs={6}>
//                         {renderDropzone('Upload 10th Marksheet', 'tenthMarksheet')}
//                     </Grid>

//                     {/* 12th Marksheet */}
//                     <Grid item xs={6}>
//                         {renderDropzone('Upload 12th Marksheet', 'twelfthMarksheet')}
//                     </Grid>

//                     {/* Passport */}
//                     <Grid item xs={6}>
//                         {renderDropzone('Upload Passport', 'passport')}
//                     </Grid>

//                     {/* English Proficiency Test Certificate */}
//                     <Grid item xs={6}>
//                         {renderDropzone('Upload English Proficiency Test Certificate', 'englishProficiency')}
//                     </Grid>

//                     {/* SOP */}
//                     <Grid item xs={6}>
//                         {renderDropzone('Upload SOP', 'sop')}
//                     </Grid>

//                     {/* CV */}
//                     <Grid item xs={6}>
//                         {renderDropzone('Upload CV', 'cv')}
//                     </Grid>

//                     {/* Experience (if applicable) */}
//                     <Grid item xs={6}>
//                         {renderDropzone('Upload Experience Certificate (if applicable)', 'experience')}
//                     </Grid>

//                     {/* Bachelor's Degree */}
//                     <Grid item xs={6}>
//                         {renderDropzone("Upload Bachelor's Degree", 'bachelorsDegree')}
//                     </Grid>
//                 </Grid>

//                 <Box mt={3}>
//                     <Button variant="contained" color="primary" onClick={() => setFormData(uploadedFiles)}>
//                         Submit Documents
//                     </Button>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }
