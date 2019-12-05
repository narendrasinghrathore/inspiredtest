import React, { useState } from 'react';
import './App.css';
import ListItemsComponent from './stateless/ListItems/ListItems';
import ListComponent from './stateless/List/List';
import { IListItem } from './interface/ListItem';

import AddFormComponent from './stateless/AddForm/AddForm';
import Button from '@material-ui/core/Button';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function App() {
  const [list, setList] = useState<IListItem[]>([
    { id: 'sdf234', name: 'Chu' },
    { id: 'csd343242', name: 'Narendra' }
  ]);

  const [displayName, setdisplayName] = useState<IListItem>();
  const [duplicateName, setDuplicateName] = useState(false);

  const submit = (data: { id: any; name: any }) => {
    const newList = [...list, { ...data }];
    setList([...newList]);
  };

  const removeItem = (id: string) => {
    const newList = list.filter((item: IListItem) => item.id !== id);
    setList([...newList]);
  };

  const pickOne = () => {
    if (list.length) {
      const name = list[Math.floor(Math.random() * list.length)];
      if (displayName) {
        if (name.id !== displayName.id) {
          setdisplayName(name);
          setDuplicateName(false);
        } else {
          setdisplayName(undefined);
          setDuplicateName(true);
        }
      } else {
        setDuplicateName(false);
        setdisplayName(name);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ margin: '10px' }}>
          {duplicateName ? (
            <>
              <ErrorOutlineIcon /> We picked duplicate name randomly, click
              again for fresh name!!
            </>
          ) : null}
          {displayName ? `You selected : : ${displayName.name}` : null}
        </div>
        <div style={{ margin: '10px' }}>
          <Button variant="outlined" onClick={pickOne} color="primary">
            Click to pick a random name
          </Button>
        </div>
        <AddFormComponent onSubmit={submit} />
        <ListComponent>
          <ListItemsComponent onRemove={e => removeItem(e)} list={list} />
        </ListComponent>
      </header>
    </div>
  );
}

export default App;
