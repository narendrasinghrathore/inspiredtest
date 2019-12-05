import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemComponentProps } from '../../interface/ListItemComponent';
import { IListItem } from '../../interface/ListItem';
import { ListItemIcon } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
export default function ListItemsComponent(props: ListItemComponentProps) {
  const { list } = props;
  let listItem: any[] = list.map(({ id, name }: IListItem, index) => (
    <ListItem button key={id}>
      <ListItemIcon>
        <PermIdentityIcon />
      </ListItemIcon>
      <ListItemText
        style={{ marginRight: '30px' }}
        key={index}
        primary={`${name}`}
      />
      <Fab onClick={() => props.onRemove(id)} color="primary" aria-label="add">
        <RemoveIcon />
      </Fab>
    </ListItem>
  ));
  const data =
    listItem.length > 0 ? (
      listItem
    ) : (
      <ListItem button>
        <ListItemIcon>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary={`No names in list, please add`} />
      </ListItem>
    );
  return (
    <>
      <List>{data}</List>
    </>
  );
}
