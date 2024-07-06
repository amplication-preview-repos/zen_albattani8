import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RawMaterialTitle } from "../rawMaterial/RawMaterialTitle";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
