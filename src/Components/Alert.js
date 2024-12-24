import React from 'react'
import PropTypes from 'prop-types'

export default function (props) {
    const cap=(text)=>{
        let lower=text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{cap(props.alert.type)}</strong> {props.alert.msg}
    </div>
  )
}
