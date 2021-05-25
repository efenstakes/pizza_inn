import { 
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonIcon,
    IonText,
    IonChip, 
} from "@ionic/react"
import { pizzaOutline, add, remove } from 'ionicons/icons'
import { useState } from "react"
import VSpacerComponent from "../../components/v_spacer/v_spacer.component"


import Food from "../../models/food.model"


interface ComponentProps {
    selectedFood: Food,
    setSelectedFood: Function,
}
const FoodDetailsComponent:React.FC<ComponentProps> = ({ selectedFood, setSelectedFood, }) => {
    return (
        <div className="app_drawer">
            {
                selectedFood &&
                    <DetailsComponent food={selectedFood} />
            }
            {
                selectedFood == null &&
                    <NoDetailsComponent />
            }
        </div>
    )
}




const NoDetailsComponent = ()=> {
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


interface DetailsComponentProps {
    food: Food,
}
const DetailsComponent: React.FC<DetailsComponentProps> = ({ food })=> {
    const sizes = [
        'small', 'medium', 'large', 'mega'
    ]
    const [selectedSize, setSelectedSize] = useState('medium')
    const [quantity, setQuantity] = useState(1)
    

    const addQuantity = ()=> setQuantity(quantity+1)
    const minusQuantity = ()=> quantity > 1 && setQuantity(quantity-1)

    return (
        <div className="food_details">

            <VSpacerComponent space={6} />
           
            {/* image */}
            <div className="food_details__image_holder_center">
                <div className="food_details__image_holder">
                    <img 
                        src={food.img}
                        className="food_details__image"
                    />
                </div>
            </div>

            <VSpacerComponent space={2} />

            {/* name */}
            <IonTitle className="food_details__name">
                { food.name }
                <span className="food_details__name_2">
                    Pizza
                </span>
            </IonTitle>

            <VSpacerComponent space={1} />

            {/* type */}
            <div className="food_details__type">
                <IonChip
                    className="app_chip"
                    style={{
                        color: 'white',
                        fontWeight: '700',
                        backgroundColor: '#F89A1C',
                        textTransform: 'capitalize',
                    }}
                >
                    {food.type}
                </IonChip>     
            </div>

            <VSpacerComponent space={3} />

            {/* size */}
            <h5 style={{
                fontSize: '.9rem',
                fontWeight: 'bold',
            }}>
                SIZE
            </h5>
            <div className="food_details__sizes">
                {
                    sizes.map(size=> {

                        return (
                            <IonChip
                                className=""
                                style={{
                                    color: size === selectedSize ? 'white' : '#F89A1C',
                                    backgroundColor: size === selectedSize ? '#F89A1C' : 'white',
                                    border: size === selectedSize ? 'none' : '1px solid #F89A1C',
                                    textTransform: 'capitalize',
                                }}
                                onClick={
                                    ()=> setSelectedSize(size)
                                }
                            >
                                {size}
                            </IonChip>
                        )
                    })
                }            
            </div>

            <VSpacerComponent space={3} />

            {/* quantity */}
            <h5 style={{
                fontSize: '.9rem',
                fontWeight: 'bold',
            }}>
                SIZE
            </h5>
            <div className="food_details__quantity">

                <div className="food_details__quantity__buttons">
                    <QtyButton 
                        onClick={addQuantity}
                        type="add"
                    />
                    {quantity}
                    <QtyButton 
                        onClick={minusQuantity}
                        type="remove"
                    />
                </div>

                <p>
                    { food.price*quantity }
                </p>
            </div>


            {/* toppings */}


            {/* place order */}

           
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


export default FoodDetailsComponent

