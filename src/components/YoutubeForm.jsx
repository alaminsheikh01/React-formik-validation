import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  // values.name values.email values.channel
  // errors.name errors.email errors.channel
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

function YoutubeForm() {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   // validate,
  //   validationSchema,
  // });

  // console.log("form values", formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.name}

            // {...formik.getFieldProps("name")}
          />
          {/* {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null} */}
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field
            type="email"
            id="id"
            name="email"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.email}

            // {...formik.getFieldProps("email")}
          />
          {/* {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null} */}
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.channel}
            // if we use just a line then it will be happen same as before.
            // {...formik.getFieldProps("channel")}
          />
          {/* {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null} */}
          <ErrorMessage name="channel" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
