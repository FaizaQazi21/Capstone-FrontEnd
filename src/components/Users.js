import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
//import { makeStyles } from '@material-ui/styles';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import { Paper, Button } from '@mui/material';



export default function BasicTextFields() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[users, setUsers]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/hello/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
    
      }).then(()=>{
        console.log("New User added")
      })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/hello/getusers")
        .then(res=>res.json())
        .then((result)=>{
          setUsers(result);
        }
      )
      },    [])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 className="font-bold">Add User</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1},
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                />
                
                <div class="mt-4">
                    <a
                    class="inline-block px-5 py-3 rounded-lg shadow-lg bg-yellow-500 hover:bg-yellow-600 text-white uppercase tracking-wider font-semibold text-sm"
                    href="#"
                    onClick={handleClick}
                    >
                    Submit
                    </a>
                </div>
                {name}
            </Box>
        </Paper>


        <Paper elevation={3} style={paperStyle}>
            <h1 className="font-bold">Users (reload page to update)</h1>

            {users.map(student=>(
                <Paper elevation={4} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
                Id:{student.id}<br/>
                Name:{student.name}<br/>
                Address:{student.address}

                </Paper>
            ))}

        </Paper>
    </Container>
  );
}