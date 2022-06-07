import { Formik } from "formik";
import React from "react";
import SimpleButton from "../components/Buttons/SimpleButton";
import SimpleInputField from "../components/InputFields/SimpleInputField";

const Login = () => {
  const authHandler = (values, setSubmitting) => {
    console.log("values:", JSON.stringify(values));
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen overflow-hidden flex-col flex items-center justify-center bg-custom-dark text-custom-white">
      <h1 className="text-3xl font-semibold mb-12">Sign in.</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          authHandler(values, setSubmitting);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex-col flex items-center justify-center">
              <SimpleInputField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="Username"
                type="text"
                name="username"
                required
              />
              <SimpleInputField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="* * * * *"
                type="password"
                name="password"
                required
              />
              <SimpleButton type="submit" disabled={isSubmitting}>
                Sign in
              </SimpleButton>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
