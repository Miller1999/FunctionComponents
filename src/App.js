import './App.css';
import FormSingUp from './components/FormSingUp';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant='h3' align='center' component="section">Formulario Registro</Typography>
      <FormSingUp/>
    </Container>
  );
}

export default App;
