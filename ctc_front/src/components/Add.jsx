import React from 'react'

export const Add = ({ children }) => {
  return (
    <div className='row mt-3'>
        <div className='col-md-4 offset-md-4'>
            <div className='d-grid mx-auto'>
                {children}
            </div>
        </div>
    </div>
  )
}
