import React from 'react'

function Certificate({ correctPercentage:score, fannomi }) {
  const finish = JSON.parse(localStorage.getItem('finish'))
  const userdata = JSON.parse(localStorage.getItem('myArray'))

  const name = userdata?.firstname
  const surname = userdata?.lastname
  const group = userdata.group

  const data = {
    finish,
    name,
    group,
    score,
    fannomi
  }


  return (
    <div>
      <button className='gradinet px-6 py-2 mt-6  text-white font-bol rounded-sm'>Sersifikatni Yuklab olish</button>
    </div>
  )
}

export default Certificate