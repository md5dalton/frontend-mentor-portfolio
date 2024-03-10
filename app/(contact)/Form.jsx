"use client"

import * as Yup from "yup"
import Fieldset from "./Fieldset"
import Button from "@/components/Button"
import { ErrorMessage, Field, Form, Formik } from "formik"

export default () => (
    <Formik
        initialValues = {{
            name: "",
            email: "",
            message: ""
        }}
        validationSchema = {Yup.object({

            name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
    
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
    
            message: Yup.string()
                .required('Required'),
    
        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {

                console.log(values);
     
                setSubmitting(false);
     
            }, 400)
    
        }}
    >
        <Form className="grid gap-4">
            <Fieldset>
                <Field
                    name="name"
                    type="text"
                    className="input"
                    placeholder="NAME"
                />
                <ErrorMessage  name="name" component="p" className="justify-self-end text-xxs text-light-red" />
            </Fieldset>
            <Fieldset>
                <Field
                    name="email"
                    type="email"
                    className="input"
                    placeholder="EMAIL"
                />
                <ErrorMessage  name="email" component="p" className="justify-self-end text-xxs text-light-red" />
            </Fieldset>
            <Fieldset>
                <Field
                    name="message"
                    as="textarea"
                    className="input min-h-28 resize-y"
                    placeholder="MESSAGE"
                />
                <ErrorMessage  name="message" component="p" className="justify-self-end text-xxs text-light-red" />
            </Fieldset>
            <div className="justify-self-end">
                <Button type="submit">send message</Button>
            </div>
        </Form>
    </Formik>
)