import React from 'react'
import bgOne from './image/bgOne.jpg'

export default function FormikTask() {
  return (
    <>
     <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          Create Account
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-50" src={bgOne} alt=""/>
        </div>
      </div>
    </div>
    </>
  )
}
