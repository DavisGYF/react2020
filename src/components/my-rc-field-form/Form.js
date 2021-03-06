import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export default function Form({ children }) {
  const [formInstance] = useForm();
  return (
    <form>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}
