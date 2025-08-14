import { Box, Button, FormControl, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"

import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/Store"
import { addHabit } from "../store/HabitSlice"


const AddHabitForm :React.FC =() => {

    const [name,setName]=useState<string>('')
    const [frequency,setFrequeny]=useState<'daily'|'weekly'>('daily')


    const dispatch=useDispatch <AppDispatch> ()
const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
if(name.trim()){
dispatch(addHabit({name,frequency}))
setName('')

}
}

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{
        display:"flex",
        flexDirection:"column",gap:2,      
      }}>
<TextField label="Habit Name"
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Enter your habit"
fullWidth 
/>

<FormControl>
    <Select value={frequency}
    onChange={(e)=>setFrequeny(e.target.value as 'daily'|'weekly')}
    >
<MenuItem value="daily">Daily</MenuItem>
<MenuItem value="weekly">Weekly</MenuItem>

    </Select>
</FormControl>

<Button type="submit" variant="contained" color="primary">
Add habit
</Button>
      </Box>
    </form>
  )
}

export default AddHabitForm
