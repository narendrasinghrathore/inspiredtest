import { IListItem } from './ListItem';

export interface ListItemComponentProps {
  onRemove: (id: any) => void;
  list: IListItem[];
}
