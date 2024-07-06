import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RawMaterialTitle } from "../rawMaterial/RawMaterialTitle";

export const WastageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
