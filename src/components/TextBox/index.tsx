import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Career } from '../../data/mockData';


export default function ControllableStates({setTitle,title}:any) {  

  return (
    <div>
      <Autocomplete
        options={title}
        getOptionLabel={(option) => option.name}
        id="disable-close-on-select"
        sx={{ width: 300 }}
        disableCloseOnSelect
        onChange={(event: any, newValue: Career | null) => {
            setTitle(newValue?.id);
          }}
        renderInput={(params) => (
          <TextField {...params} label="Select Your Career" variant="standard" />
        )}
      />
      
    </div>
  );
}

