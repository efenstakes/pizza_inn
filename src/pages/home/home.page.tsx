import { useEffect, useState } from 'react'
import { 
    IonContent, IonPage,
    IonFabButton, IonFab, IonIcon,
    IonMenu,
    IonTitle,
    IonHeader,
    IonSplitPane,
    IonToolbar,
} from '@ionic/react'
import { callOutline } from 'ionicons/icons'

import AppBarComponent from '../../components/appbar/appbar.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import FiltersComponent from './filters.component'
import MenuComponent from './menu.component'
import Food from '../../models/food.model'


import './home.page.scss'
import CartComponent from './cart.component'
import FoodDetailsComponent from './food_details.component'



const HomePage = () => {
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [showCart, setShowCart] = useState(true)
    const [showFoodDetails, setShowFoodDetails] = useState(true)
    const [cart, setCart] = useState([] as Array<Food>)
    const [selectedFood, setSelectedFood] = useState(null)

    // e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>, 
    const addToCart = (food: Food) => {
        // console.log('food ', food)
        // return

        // check if food exists
        const matches = cart.filter(f=> f.id == food.id)

        if( matches.length > 0 ) {
            // console.log('found match')
            
            const old_foods: Food[] = cart.filter(f=> f.id != food.id)
            // console.log('old_foods ', old_foods)
            
            const new_food  = {
                ...matches[0],
                quantity: matches[0].quantity + 1,
            } as Food
            // console.log('new_food ', new_food)

            setCart([ ...old_foods, new_food ])
        } else {
            console.log('no match')
            setCart([
                ...cart, { ...food, quantity: 1 } as Food
            ])
        }
    }// addFood

    const addQuantity = (food)=> {
        const matches = cart.filter(f=> f.id == food.id)

        const old_foods: Food[] = cart.filter(f=> f.id != food.id)
        // console.log('old_foods ', old_foods)
        
        const new_food  = {
            ...matches[0],
            quantity: matches[0].quantity + 1,
        } as Food
        // console.log('new_food ', new_food)

        setCart([ ...old_foods, new_food ])
    }
    const minusQuantity = (food)=> {
        const matches = cart.filter(f=> f.id == food.id)
        
        const old_foods: Food[] = cart.filter(f=> f.id != food.id)
        // console.log('old_foods ', old_foods)
        
        const new_food  = {
            ...matches[0],
            quantity: matches[0].quantity - 1,
        } as Food
        // console.log('new_food ', new_food)

        if( new_food.quantity === 0 ) {
            setCart([ ...old_foods, ])
        } else {
            setCart([ ...old_foods, new_food ])
        }
    }
    const removeFromCart = (food)=> {
        const new_foods: Food[] = cart.filter(f=> f.id != food.id)
        setCart(new_foods)
    }

    const toggleShowCart = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>)=> {
        setShowFoodDetails(true)
        setShowCart(!showCart)
    }
    const toggleShowFoodDetails = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>)=> {
        setShowCart(!showCart)
        setShowFoodDetails(!showFoodDetails)
    }


    useEffect(()=> {
        console.log('selectedFood changed')
        if ( selectedFood != null ) {
            console.log('has food')
            // setShowCart(false)
        } else {
            console.log('no food')
        }
    }, [selectedFood])

    return (
        <>
        <IonPage>
            <IonSplitPane contentId="first" itemType="overlay">
                <IonMenu side="end" menuId="first" disabled={showCart}>
                    <CartComponent 
                        selectedFood={selectedFood}
                        setSelectedFood={setSelectedFood}
                        addQuantity={addQuantity}
                        minusQuantity={minusQuantity}
                        removeFromCart={removeFromCart}
                        cart={cart}
                    />
                </IonMenu>
                <IonMenu side="end" menuId="first" disabled={showFoodDetails}>
                    <FoodDetailsComponent 
                        selectedFood={selectedFood}
                        setSelectedFood={setSelectedFood}
                    />
                </IonMenu>
                <div id="first">
                    <AppBarComponent 
                        toggleShowCart={toggleShowCart} 
                        cart={cart}
                    />

                    <IonContent>

                        <VSpacerComponent space={5} />

                        {/* filters */}
                        <FiltersComponent 
                            selectedFilter={selectedFilter} 
                            setSelectedFilter={setSelectedFilter}
                        />
                        <VSpacerComponent space={7} />


                        {/* menu */}
                        <MenuComponent 
                            selectedFilter={selectedFilter} 
                            setSelectedFilter={setSelectedFilter}
                            setSelectedFood={
                                (f)=> {
                                    // console.log()
                                    setShowCart(true)
                                    setSelectedFood(f)
                                    setShowFoodDetails(false)
                                }
                            }
                            addToCart={addToCart}
                        />
                        <VSpacerComponent space={7} />


                        {/* fab */}
                        <IonFab vertical="bottom" horizontal="center" slot="fixed"
                            style={{
                                transform: 'translateY(-100deg)'
                            }}>
                            <IonFabButton>
                                <IonIcon icon={callOutline} />
                            </IonFabButton>
                        </IonFab>

                    </IonContent>
                </div>

            </IonSplitPane>
        </IonPage>
        </>
    )
}

export default HomePage
