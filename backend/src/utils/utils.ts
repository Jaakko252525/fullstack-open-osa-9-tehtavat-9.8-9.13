




















import { PatientEntry } from '../types/patientTypes';

const toNewPatientEntry = (object: unknown): PatientEntry => {


    console.log('inside toNewPatientEntry', object);


    // string tester 
    const isString = (text: unknown): text is string => {
        return typeof text === 'string' || text instanceof String;
      };

    
    // func that tests if name eggsists and is string
    const parseName = (name: unknown): string => {
        if (!name || !isString(name)) {
          throw new Error('Incorrect or missing name');
        }
      
        return name;
      };

    parseName(object.name);
    parseName(object.dateOfBirth);
    parseName(object.ssn);
    parseName(object.gender);
    parseName(object.occupation);



    const newEntry: PatientEntry = {
        name: object.name,
        dateOfBirth: object.dateOfBirth,
        ssn: object.ssn,
        gender: object.gender,
        occupation: object.occupation

    };

    return object;
};

export default toNewPatientEntry;


