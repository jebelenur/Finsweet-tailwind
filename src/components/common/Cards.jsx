import React from 'react'

const Cards = ({ logo, title, description, className = '' }) => {
  return (
    <div className={`w-[411px] h-[380px] bg-[#FFF5EB] border-b-[16px] border-primary flex flex-col p-20 ${className}`}>
      <div>
        {logo}
      </div>

      <h2 className="font-bold font-robotoCon text-[#161722] text-[32px] pb-2 pt-6">
        {title}
      </h2>

      <p className="text-base font-robotoCon text-[#161722] text-normal max-w-[251px]">
        {description}
      </p>
    </div>
  )
}

export default Cards