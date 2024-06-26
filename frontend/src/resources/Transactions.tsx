//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const TransactionsTitle = () => {
  const record = useRecordContext();
  return (
    <span>Transactions {record ? `"${record.TransactionNumbers}"` : ''}</span>
  );
};

export const TransactionsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="TransactionNumbers" />
      <ReferenceField source="SenderName" reference="Clients" />
      <ReferenceField source="PictureOfSender" reference="Clients" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const TransactionsEdit = () => (
  <Edit title={<TransactionsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="TransactionNumbers" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="SenderName" reference="Clients" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="PictureOfSender" reference="Clients" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const TransactionsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="TransactionNumbers" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="SenderName" reference="Clients" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="PictureOfSender" reference="Clients" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput
    source="SenderName"
    label="SenderName"
    reference="Clients"
    alwaysOn
  />,
  <ReferenceInput
    source="PictureOfSender"
    label="PictureOfSender"
    reference="Clients"
    alwaysOn
  />,
];
