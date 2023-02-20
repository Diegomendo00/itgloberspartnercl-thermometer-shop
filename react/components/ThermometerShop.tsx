import React from "react"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import { useCssHandles } from "vtex.css-handles"


  const CSS_HANDLES = [
    "thermometer",
    "thermometer__bar",
    "thermometer__text",
    "thermometer__progress"
  ]

const ThermometerShop = () => {

  const handles = useCssHandles(CSS_HANDLES)
  const { thermometer, thermometer__progress, thermometer__text, thermometer__bar} = handles

  const { orderForm: {
    totalizers
  } } = useOrderForm()

  let shopValue = isNaN((totalizers[0]?.value) /100) ? 0 : (totalizers[0]?.value) /100
  let freeShipping: number = 1000000
  let total = ( freeShipping - shopValue)


  return(
    <div>
      <div className={thermometer}>
        <progress value={shopValue} max={freeShipping} className={thermometer__bar}/>
          {
            (shopValue < freeShipping) ?
            <div className={thermometer__progress}>
            <p className={thermometer__text}>Solo te faltan <span > S/ {total.toLocaleString("en-US")} </span> para tu envío gratis</p>
            </div>
             :
            <p className={thermometer__text}>!! Felicitaciones, tu envío es gratis!!</p>
          }
      </div>
    </div>
  )
}
export default ThermometerShop
