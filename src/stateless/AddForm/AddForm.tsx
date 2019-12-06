import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import uuid from 'uuid';
export default function AddFormComponent(props: any) {
  const [name, setName] = useState('');

  const handleClick = (e: any) => {
    e.preventDefault();
    if (name.length > 0) {
      props.onSubmit({ id: uuid.v4(), name });
      setName('');
    }
  };

  return (
    <>
      <form onSubmit={e => handleClick(e)}>
        <TextField
          style={{
            margin: '10px'
          }}
          id="outlined-basic"
          label="Name"
          value={name}
          name="name"
          onChange={e => setName(e.target.value)}
          variant="outlined"
        />
        <Button type="submit" variant="outlined">
          Add
        </Button>
      </form>
    </>
  );
}
