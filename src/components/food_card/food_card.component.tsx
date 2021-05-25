import { 
    IonText, IonTitle, IonImg, IonIcon, IonFabButton, 
} from '@ionic/react'
import { cartOutline } from 'ionicons/icons'

import Food from '../../models/food.model'
import VSpacerComponent from '../v_spacer/v_spacer.component'

import './food_card.component.scss'

interface ComponentProps {
    food: Food,
    setSelectedFood: Function,
    addToCart: React.MouseEventHandler<HTMLIonFabButtonElement>,
}
const FoodCardComponent: React.FC<ComponentProps> = ({ food, addToCart, setSelectedFood }) => {
    return (
        <div className="food_card">
            <div className="food_card__image__wrapper">
                <div className="food_card__image_container" onClick={ ()=> setSelectedFood(food) }>
                    <img
                        className="food_card__image"
                        src={food.img}
                    />
                </div>
                <IonFabButton 
                    size="small" 
                    className="food_card__image_button"
                    onClick={addToCart}
                >
                    <IonIcon 
                        icon={cartOutline} 
                        style={{
                            fontSize: '1.1rem'
                        }}
                    />
                </IonFabButton>
            </div>
            <VSpacerComponent space={2} />
            <IonTitle>
                { food.name }
            </IonTitle>
            <IonText>
                { food.price }
            </IonText>
        </div>
    )
}

export default FoodCardComponent
