










// importing routers
import diagnosesRouter from './routes/diagnosesRoute';
import patientRouter from './routes/patientsRouter';


// importing express
import express from 'express';

// making app
const app = express();
app.use(express.json());

// port
const PORT = 3003;

// get req for testing ping
app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});




// using diagnose router
app.use('/api/diagnoses', diagnosesRouter);

// using patient router
app.use('/api/patient', patientRouter);

// using patient POST
app.use('/api/post', patientRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});























