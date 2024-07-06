import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RAWMATERIAL_TITLE_FIELD } from "./RawMaterialTitle";

export const RawMaterialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="unit" source="unit" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Inventory"
          target="rawMaterialId"
          label="Inventories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="quantity" source="quantity" />
            <ReferenceField
              label="RawMaterial"
              source="rawmaterial.id"
              reference="RawMaterial"
            >
              <TextField source={RAWMATERIAL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Wastage"
          target="rawMaterialId"
          label="Wastages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="quantity" source="quantity" />
            <ReferenceField
              label="RawMaterial"
              source="rawmaterial.id"
              reference="RawMaterial"
            >
              <TextField source={RAWMATERIAL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
