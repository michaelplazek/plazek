import React from "react";
import { FormField, TextInput } from "grommet";

const SearchBar = ({ label, placeholder, onChange }) => {
  return (
    <FormField label={label}>
      <TextInput placeholder={placeholder} onChange={onChange} />
    </FormField>
  );
};

export default SearchBar;
