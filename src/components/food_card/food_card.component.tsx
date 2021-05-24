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
}
const FoodCardComponent: React.FC<ComponentProps> = ({ food, setSelectedFood }) => {
    return (
        <div className="food_card" onClick={ ()=> setSelectedFood(food) }>
            <div className="food_card__image__wrapper">
                <div className="food_card__image_container">
                    <img
                        className="food_card__image"
                        src={food.img}
                    />
                </div>
                <IonFabButton size="small" className="food_card__image_button">
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
