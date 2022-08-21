import React from 'react'

export const BasicCard = ({imgSrc, title}) => {
  return (
    <div className="p-2 col-md-4">

<div class="card rounded-start" style={{borderRadius:"20px"}}>
  <img src={imgSrc} class="card-img-top" alt={title}/>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:"center"}}>{title}</h5>
  </div>
</div>
    </div>
  )
}
