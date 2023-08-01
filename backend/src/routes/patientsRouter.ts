






/* eslint-disable @typescript-eslint/no-unsafe-assignment */






//import toNewPatientEntry from '../utils/utils';

import patientService from '../services/patientService';


// using express
import express from 'express';

// express router
const router = express.Router();

// get reguest and router. For all diagnoses
router.get('', (_req, res) => {

    console.log('inside patients get', patientService.getNonSensitiveEntries());
    
    // data from module diagnoses
    res.send(patientService.getNonSensitiveEntries());
  
  });


// POST endpoint
router.post('/', (req, res) => {

  console.log('inside POST');

  try {

  // this commented code should check if correct datatype but it dont work
  /*
  // checks if solid input
  const newPatientEntry = toNewPatientEntry(req.body);

    // logging newPatientEntry
    console.log('logging newPatientEntry', newPatientEntry);

  console.log('object values', newPatientEntry.name, 'typeof', typeof newPatientEntry.name);
    */


  // body     
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;


  // using patientService addPatient  
  const addedEntry = patientService.addPatients(
     name,
     dateOfBirth,
     ssn,
     gender,
     occupation 
    );

    console.log('Adding this:', addedEntry);
    
    
  res.json(addedEntry);

} catch (error: unknown) {
  let errorMessage = 'Something went wrong in POST.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  res.status(400).send(errorMessage);
}
});



export default router;



  