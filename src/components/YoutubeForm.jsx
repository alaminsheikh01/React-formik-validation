import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
};

// const onSubmit = (values) => {
//   console.log("Form data", values);
// };

// const validate = (values) => {
//   // values.name values.email values.channel
//   // errors.name errors.email errors.channel
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Required";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }

//   if (!values.channel) {
//     errors.channel = "Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
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
          <Field type="text" id="name" name="name" />

          <ErrorMessage name="name" component="div" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="id" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component="div" />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              console.log("Render props", props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
