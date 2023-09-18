import React from 'react'

const StatisticCard = ({value, label}) => {
  return (
    <div className=' flex flex-col justify-start items-start'>
        <p className="font-bold font-palnquin text-4xl ">{value}</p>
        <p className="text-slate-gray font-montserrat leading-7">{label}</p>
    </div>
  )
}

export default StatisticCard