import React from 'react'

export function Footer (prop) {
  const e = prop.element
  return (
    <div className="card-footer text-muted" data-testid='footer-element'>
       <div className='footer-text'>{e}</div>
    </div>
  )
}
