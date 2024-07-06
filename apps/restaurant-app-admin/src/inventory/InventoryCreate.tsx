import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RawMaterialTitle } from "../rawMaterial/RawMaterialTitle";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="quantity" source="quantity" />
        <ReferenceInput
          source="rawMaterial.id"
          reference="RawMaterial"
          label="RawMaterial"
        >
          <SelectInput optionText={RawMaterialTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
