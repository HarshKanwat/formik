import React from "react";
import { Formik,Form,Field,ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from 'yup';

const BookForm = ({ onsubmit}) => {
    const validationschema = yup.object ({
        title: Yup.string().required('Title is required'),
        author: Yup.string().required('Author is required'),
        isbn: Yup.string().required('ISBN is required'),
        publicationdate: Yup.string().required('Publication Date is required')

    });
    return (
        <Formik
          initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div>
              <label>Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div>
              <label>Author</label>
              <Field name="author" type="text" />
              <ErrorMessage name="author" component="div" />
            </div>
            <div>
              <label>ISBN</label>
              <Field name="isbn" type="text" />
              <ErrorMessage name="isbn" component="div" />
            </div>
            <div>
              <label>Publication Date</label>
              <Field name="publicationDate" type="date" />
              <ErrorMessage name="publicationDate" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      );
    };
    
    export default BookForm;