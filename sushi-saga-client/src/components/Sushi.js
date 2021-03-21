import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {img_url, name, price, id} = props.eachSushi
  return (
    <div className="sushi">
      <div className="plate"
           onClick={img_url ===""? null: () => props.eatSushi(id)}>
        <img src={img_url} width="100%" />
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi