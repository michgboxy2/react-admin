import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, Create, Filter } from 'react-admin';

const PostTitle = ({record}) => {
return <span>Post {record ? `"${record.title}"` : ''}</span>
}

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);



export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);


export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);




export const PostList = props => (
    <List filters={<PostFilter/>} {...props}>     
        <Datagrid>
        <TextField source="id" />
            <ReferenceField source="userId" reference="users"><TextField source="name" /></ReferenceField>
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);