









import { v1 as uuid } from 'uuid';





// importing patientData
import patients from '../data/patients';

// importing patientEntry
import { NonSensitiveDiaryEntry, PatientEntry } from '../types/patientTypes';



const getEntries = (): PatientEntry[] => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {

    
    console.log('inside  api');

    let count = 0;
    const newArray = [];

    while (count < patients.length) {

        const object = {
            id: patients[count].id,
            name: patients[count].name,
            dateOfBirth: patients[count].dateOfBirth,
            gender: patients[count].gender,
            occupation: patients[count].occupation,
        };
        count += 1;

        newArray.push(object);
    }

    return newArray;
  };



// adding patiens
const addPatients = (name: string, dateOfBirth: string, ssn: string, gender: string, occupation: string): PatientEntry => {


    const newPatientEntry = {
        id: uuid(),
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    };

    patients.push(newPatientEntry);

    return newPatientEntry;
};




export default {
    getEntries,
    addPatients,
    getNonSensitiveEntries
};




