import * as React from 'react';
import {
  Admin,
  Resource,
  EditGuesser
} from 'react-admin';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import Dashboard from './Dashboard';

import {UserList} from './users';
import {PostList, PostCreate, PostEdit} from './posts';

import jsonServerProvider from 'ra-data-json-server';



const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    <Resource name="users" list={UserList} icon={UserIcon}/>
  </Admin>
)

export default App;