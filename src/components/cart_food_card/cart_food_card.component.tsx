import { 
    IonText, IonTitle, IonImg, IonIcon, IonFabButton, 
} from '@ionic/react'
import { add, remove, trashBinOutline, trashOutline, trash } from 'ionicons/icons'

import Food from '../../models/food.model'
import VSpacerComponent from '../v_spacer/v_spacer.component'

import './cart_food_card.component.scss'

interface ComponentProps {
    food: Food,
    addQuantity: Function,
    minusQuantity: Function,
    removeFromCart: Function,
}
const CartFoodCardComponent: React.FC<ComponentProps> = ({ food, addQuantity, minusQuantity, removeFromCart,  }) => {
    return (
        <div className="cart_food_card">
            <div className="cart_food_card__image_container">
                <img
                    className="cart_food_card__image"
                    src={food.img}
                />
            </div>
            <div className="cart_food_card__content">
                <div className="cart_food_card__content__name_n_delete"> 
                    <IonTitle style={{ 
                        margin: 0, 
                        fontSize: '1rem',
                        fontWeight: 'bold' 
                    }}>
                        { food.name }
                    </IonTitle>

                    <div onClick={()=> removeFromCart(food)}>
                        <IonIcon 
                            icon={trash} 
                            color="error"
                            style={{
                                fontSize: '1.2rem'
                            }} 
                        />
                    </div>
                </div>
                
                <VSpacerComponent space={.5} />

                <IonText style={{
                    paddingLeft: '20px',
                    fontSize: '.9rem'
                }}>
                    { food.price }
                </IonText>

                <VSpacerComponent space={.8} />

                <div className="cart_food_card__content__quantity_n_price">
                    <div className="food_details__quantity__buttons">
                        <QtyButton 
                            // onClick={addQuantity}
                            onClick={()=>addQuantity(food)}
                            type="add"
                        />
                        {food.quantity}
                        <QtyButton 
                            onClick={()=> minusQuantity(food)}
                            type="remove"
                        />
                    </div>

                    <p>
                        { food.price*food.quantity }
                    </p>
                </div>

            </div>
        </div>
    )
}



interface QtyButtonProps {
    onClick: React.MouseEventHandler<HTMLDivElement>,
    type: string,
}
const QtyButton: React.FC<QtyButtonProps> = ({ onClick, type })=> {
    return (
        <div onClick={onClick} 
            className="quantity_button"
            style={{
                marginRight: type === 'add' ? '8px' : '0',
                marginLeft: type === 'add' ? '0' : '8px',
            }}>
            <IonIcon 
                icon={
                    type === 'add' ? add : remove
                } 
            />
        </div>
    )
}

export default CartFoodCardComponent
