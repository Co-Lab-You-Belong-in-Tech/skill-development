import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { career,Career } from '../../data/mockData';


export default function ControllableStates({setTitle}:any) {   
  const defaultProps ={
    options: career,
    getOptionLabel: (option: any) => option.title,
  }

  return (
    <div>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        onChange={(event: any, newValue: Career | null) => {
            setTitle(newValue);
          }}
        renderInput={(params) => (
          <TextField {...params} label="Select On Your Career" variant="standard" />
        )}
      />
      
    </div>
  );
}

