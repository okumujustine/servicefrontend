import { Field } from 'formik'
import React from 'react'

export default function InputWithErrorWrapper({error, touched, placeholder, id, name=id, type="text"}) {
    return (
        <div className="mb-3 pt-0">
            <Field type={type} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full" id={id} name={name} placeholder={placeholder} />
            {error && touched ? (
                <div className="text-red-500">{error}</div>
            ) : null}
        </div>
    )
}


export function TextAreaWithErrorWrapper({error, touched, placeholder, id, name=id, type="text"}) {
    return (
        <div className="mb-3 pt-0">
            <Field as="textarea" type={type} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full" id={id} name={name} placeholder={placeholder} />
            {error && touched ? (
                <div className="text-red-500">{error}</div>
            ) : null}
        </div>
    )
}
