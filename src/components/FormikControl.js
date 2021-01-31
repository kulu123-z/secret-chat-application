import React from 'react'
import Input from './Input'
import Select from './Select'
import CheckboxGroup from './CheckboxGroup'
import DatePicker from './DatePicker'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl