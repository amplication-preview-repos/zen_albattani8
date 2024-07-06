import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RAWMATERIAL_TITLE_FIELD } from "../rawMaterial/RawMaterialTitle";

export const WastageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
