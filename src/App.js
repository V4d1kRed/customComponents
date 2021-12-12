import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { InputComponent } from "./components/shared/inputComponent/InputComponent";
import { ButtonComponent } from "./components/shared/buttonComponent/ButtonComponent";
import styled from "@emotion/styled";

export const App = () => {
  const ProfileFormSchema = yup.object({
    firstName: yup
      .string()
      .matches(/^[A-z]{2,15}$/, "Enter a valid first name")
      .required("First name is required"),
    lastName: yup
      .string()
      .matches(/^[A-z]{2,15}$/, "Enter a valid last name")
      .required("Last name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const Form = styled.form({
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
  });

  return (
    <div style={{ padding: "10px" }}>
      <Formik
        validationSchema={ProfileFormSchema}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validateOnBlur
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form>
            <InputComponent
              fullWidth
              requred
              label="First name"
              placeholder="First name"
              type="text"
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              error={touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
            />
            <InputComponent
              fullWidth
              label="Last name"
              placeholder="Last name"
              type="text"
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              error={touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
            />
            <InputComponent
              fullWidth
              label="Email"
              placeholder="Email"
              type="text"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
            <ButtonComponent onClick={handleSubmit} type="submit">
              Submit
            </ButtonComponent>
          </Form>
        )}
      </Formik>
    </div>
  );
};
