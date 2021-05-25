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

import {
    Drawer
} from '@material-ui/core'

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
    const [showCart, setShowCart] = useState(false)
    const [showFoodDetails, setShowFoodDetails] = useState(false)
    const [cart, setCart] = useState([] as Array<Food>)
    const [selectedFood, setSelectedFood] = useState(null)


    const addToCart = (food: Food) => {
        // check if food exists
        const matches = cart.filter(f=> f.id == food.id)

        if( matches.length > 0 ) {
            const old_foods: Food[] = cart.filter(f=> f.id != food.id)
            
            const new_food  = {
                ...matches[0],
                quantity: matches[0].quantity + 1,
            } as Food

            setCart([ ...old_foods, new_food ])
        } else {
            setCart([
                ...cart, { ...food, quantity: 1 } as Food
            ])
        }
    }// addFood

    const addQuantity = (food)=> {
        const matches = cart.filter(f=> f.id == food.id)
        const old_foods: Food[] = cart.filter(f=> f.id != food.id)
        
        const new_food  = {
            ...matches[0],
            quantity: matches[0].quantity + 1,
        } as Food

        setCart([ ...old_foods, new_food ])
    }// addQuantity
    const minusQuantity = (food)=> {
        const matches = cart.filter(f=> f.id == food.id)
        const old_foods: Food[] = cart.filter(f=> f.id != food.id)
        
        const new_food  = {
            ...matches[0],
            quantity: matches[0].quantity - 1,
        } as Food

        if( new_food.quantity === 0 ) {
            setCart([ ...old_foods, ])
        } else {
            setCart([ ...old_foods, new_food ])
        }
    }// minusQuantity
    const removeFromCart = (food)=> {
        const new_foods: Food[] = cart.filter(f=> f.id != food.id)
        setCart(new_foods)
    }// removeFromCart

    const toggleShowCart = ()=> {
        console.log('in toggleShowCart ', showCart)
        setShowFoodDetails(false)
        setShowCart(!showCart)
    }// toggleShowCart
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
        <div>
            <AppBarComponent 
                toggleShowCart={toggleShowCart} 
                cart={cart}
            />

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
                        setShowCart(false)
                        setSelectedFood(f)
                        setShowFoodDetails(true)
                    }
                }
                addToCart={addToCart}
            />
            <VSpacerComponent space={7} />


            {/* fab */}
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
                <IonFabButton color="secondary">
                    <IonIcon icon={callOutline} />
                </IonFabButton>
            </IonFab>

            <Drawer 
                open={showCart} 
                anchor="right"
                onClose={
                    ()=> setShowCart(false)
                }
            >
                <CartComponent 
                    selectedFood={selectedFood}
                    setSelectedFood={setSelectedFood}
                    addQuantity={addQuantity}
                    minusQuantity={minusQuantity}
                    removeFromCart={removeFromCart}
                    cart={cart}
                />
            </Drawer>
            <Drawer 
                open={showFoodDetails} 
                anchor="right"
                onClose={
                    ()=> setShowFoodDetails(false)
                }
            >
                <FoodDetailsComponent 
                    selectedFood={selectedFood}
                    setSelectedFood={setSelectedFood}
                />
            </Drawer>
        </div>
    )
}

export default HomePage
