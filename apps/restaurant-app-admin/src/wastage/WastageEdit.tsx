import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RawMaterialTitle } from "../rawMaterial/RawMaterialTitle";

export const WastageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
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
