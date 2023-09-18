import React from 'react'

const StatisticCard = ({value, label}) => {
  return (
    <div className=' flex flex-col flex-wrap justify-start items-start xl:mt-10 mt-4 gap-2'>
        <p className="font-bold font-palnquin xl:text-4xl text-3xl">{value}</p>
        <p className="text-slate-gray font-montserrat leading-2">{label}</p>
    </div>
  )
}

export default StatisticCard