import React from "react";
import {useForm, useStep} from "react-hooks-helper";

import RegisterFormFirst from "./RegisterFormFirst";
import RegisterFormSecond from "./RegisterFormSecond";


// import "./styles.css";

const steps = [
  { id: "RegisterFormFirst" },
  { id: "RegisterFormSecond" }
];

const defaultData = {
  firstName: "Enter First Name *",
  lastName: "Enter Last Name *",
};

const MergeRegister = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "RegisterFormFirst":
      return <RegisterFormFirst {...props} />;
    case "RegisterFormSecond":
      return <RegisterFormSecond {...props} />;
    default:
      return null;
  }
};

export default MergeRegister;
