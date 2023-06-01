
import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import { Switch } from '@mui/material';
import {FormGroup} from "@mui/material";
import {FormControlLabel} from "@mui/material";


function FormSingUp () {
    return (
        <form>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField 
                id="lastName" 
                label="Apellidos" 
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField 
                id="email" 
                label="Email" 
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked/>} label="Promociones"/>
                <FormControlLabel control={<Switch defaultChecked/>} label="Novedades"/>
            </FormGroup>       
            <Button variant="contained">
                Registrarse
            </Button>
        </form>
        )
}

export default FormSingUp