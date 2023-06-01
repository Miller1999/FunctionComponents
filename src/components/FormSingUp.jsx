import { useState } from "react"
import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import { Switch } from '@mui/material';
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";


function FormSingUp (props) {

    const { handleSubmit } = props
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [prom,setProm] = useState(true)
    const [nov,setNov] = useState(false)
    const [errors,setErrors] = useState({
        name:{
            error: false,
            message:"Deben ser al menos tres caracteres"
        },
        lastName:{
            error: false,
            message: "Deben ser al menos tres caracteres"
        },
    })

    function validarTextos(id,value){
        if(value.length >= 3 && id === "name"){
            return({ name: {error:false,message:""}})
        }
        else{
            return({ name: {error:true,message:"Deben ser al menos tres caracteres"}})
        }
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit({name,lastName,email,prom,nov})
        }}>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : " "}
                onBlur={(e) => {setErrors(validarTextos(e.target.id,e.target.value))
                console.log(e.target.id)}}
            />
            <TextField 
                id="lastName" 
                label="Apellidos" 
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) => {setLastName(e.target.value) 
                    console.log(e)}}

            />
            <TextField 
                id="email" 
                label="Email" 
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormGroup>
                <FormControlLabel 
                    control={
                        <Switch 
                            checked={prom}
                            onChange={(e) => setProm(e.target.checked)}
                        />
                    } 
                    label="Promociones"
                />
                <FormControlLabel 
                    control={
                        <Switch 
                            checked={nov}
                            onChange={(e) => setNov(e.target.checked)}
                        />} 
                    label="Novedades"
                />
            </FormGroup>       
            <Button variant="contained" type="submit">
                Registrarse
            </Button>
        </form>
        )
}

export default FormSingUp