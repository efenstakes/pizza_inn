import { 
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonIcon,
    IonText,
    IonChip, 
} from "@ionic/react"
import { pizzaOutline, add, remove, cart } from 'ionicons/icons'
import { useState } from "react"
import CartFoodCardComponent from "../../components/cart_food_card/cart_food_card.component"
import VSpacerComponent from "../../components/v_spacer/v_spacer.component"


import Food from "../../models/food.model"


interface ComponentProps {
    selectedFood: Food,
    setSelectedFood: Function,
    cart: Food[],
    addQuantity: Function,
    minusQuantity: Function,
    removeFromCart: Function,
}
const CartComponent:React.FC<ComponentProps> = ({ cart, addQuantity, minusQuantity, removeFromCart, selectedFood, setSelectedFood, }) => {
    
    if( cart.length === 0 ) {
        return (
            <div className="app_drawer">
                <CartEmptyComponent/>
            </div>
        )
    }
    return (
        <div className="app_drawer">
            <div>
            <VSpacerComponent space={3} />
        
            <IonTitle>
                Your Cart
            </IonTitle>

            <VSpacerComponent space={3} />

            {
                cart.map(food=> {
                    return (
                        <CartFoodCardComponent
                            key={food.id}
                            food={food}
                            addQuantity={addQuantity}
                            minusQuantity={minusQuantity}
                            removeFromCart={removeFromCart}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}




const CartEmptyComponent = ()=> {
    return (
        <div className="cart_empty">
            <IonIcon 
                icon={pizzaOutline} 
                style={{
                    fontSize: '2.4rem',
                }}
            />
            <h4> Nothing Selected </h4>
            <IonText>
                Select a food to preview it here.
            </IonText>
        </div>
    )
}

export default CartComponent

