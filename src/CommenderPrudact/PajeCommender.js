import React, { useEffect } from 'react'

import DonnerPrudact from './DooisrComeder/CmmendPrud'
import Description from './Descrioption/Description'
import ProduitsConnexes from './ProduitsConnexes/ProduitsConnexes'
import CardRemise from './Remise/CardRemise'

export default function PajeCommender() {
  useEffect(()=>{
    window.scroll({
      top: 100,
      left: 100,
    })
  })
  return (
    <div className="p-4">
    <DonnerPrudact/>
    <Description/>
    <ProduitsConnexes />
    <CardRemise/>
    </div>
  )
}
