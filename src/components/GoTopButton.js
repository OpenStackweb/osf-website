import React from 'react'

const GoTopButton = ({ onClick }) => {
  return (
    <div className="go-top-button" onClick={onClick}>
      <i className="fa fa-chevron-up" />
    </div>
  )
}

export default GoTopButton
