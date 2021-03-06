import React, { useState, useContext } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, Menu, MenuItem } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../../context/context';
import {v4 as uuidv4} from 'uuid';


import useStyles from './styles';

const initialState= {
    amount:' ',
    category:' ',
    type:'Income',
    date: new Date(),
}
const Form = () => {
    const classes= useStyles();
    
    const [formData, setFormData] = useState(initialState);
    const  { addTransaction, deleteTransaction }= useContext(ExpenseTrackerContext);

    // creating a new fn which will add the transaction in formData with some addons and changes
    const createTransaction=()=>{
        const transaction={...formData, amount: Number(formData.amount), id: uuidv4()}
        console.log("hello!");
            // addTransaction(transaction); 
            console.log(transaction);
            deleteTransaction(uuidv4);
            addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
            setFormData(initialState);
    }
    

    console.log(formData);
    return (
        <Grid container spacing={2}>
       <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
        ...
        </Typography>
       </Grid>
       <Grid item xs={6}>
           <FormControl fullWidth>
               <InputLabel>Type</InputLabel>
               <Select value={formData.type} onChange={(e)=>setFormData({ ...formData, type:e.target.value})}>
                   <MenuItem value="Income">Income</MenuItem>
                   <MenuItem value="Expense">Expense</MenuItem>
               </Select>
           </FormControl>
       </Grid>
       <Grid item xs={6}>
           <FormControl fullWidth>
               <InputLabel>Category</InputLabel>
               <Select value={formData.category} onChange={(e)=>setFormData({...formData, category:e.target.value})}>
                   <MenuItem value="business">Business</MenuItem>
                   <MenuItem value="salary">Salary</MenuItem>
               </Select>
           </FormControl>
       </Grid>
        <Grid item xs={6}>
            <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e)=>setFormData({...formData, amount:e.target.value})}></TextField>
        </Grid>
        <Grid item xs={6}>
            <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e)=>setFormData({...formData, date:e.target.value})}></TextField>
        </Grid>
        <Button className={classes.Button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
       </Grid>
    )
}

export default Form

 // try{
        //     console.log("hello");
        //     addTransaction(transaction);
            
        //     setFormData(initialState);
        //     // re-setting the input fields once the transactions have been added
        // }catch(e){
        //     console.log(e);
        // }