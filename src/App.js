import './App.css';
import FormSingUp from './components/FormSingUp';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";

function App() {
  const handleSubmit = (valores) => {
    console.log("APPJS ", valores)
  }
  return (
    <Container maxWidth="sm">
      <Typography variant='h3' align='center' component="section">Formulario Registro</Typography>
      <FormSingUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
