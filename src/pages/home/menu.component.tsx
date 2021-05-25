import { useEffect, useState } from "react"
import { IonCol, IonGrid, IonRow } from "@ionic/react"

import FoodCardComponent from "../../components/food_card/food_card.component"

import Food from '../../models/food.model'

// images
import f1 from '../../assets/images/1.jpg'
import f2 from '../../assets/images/2.jpg'
import f3 from '../../assets/images/3.jpg'
import f4 from '../../assets/images/4.jpg'
import f5 from '../../assets/images/5.jpg'
import f6 from '../../assets/images/6.jpg'
import f7 from '../../assets/images/7.jpg'
import f8 from '../../assets/images/8.jpg'
import f9 from '../../assets/images/9.jpg'
import f10 from '../../assets/images/10.jpg'
import f11 from '../../assets/images/11.jpg'
import f12 from '../../assets/images/12.jpg'
import f13 from '../../assets/images/14.jpg'
import f14 from '../../assets/images/14.jpg'
import f15 from '../../assets/images/15.jpg'
import f16 from '../../assets/images/16.jpg'
import f17 from '../../assets/images/17.jpg'
import f18 from '../../assets/images/18.jpg'
import f19 from '../../assets/images/19.jpg'
import f20 from '../../assets/images/20.jpg'
import f21 from '../../assets/images/21.jpg'
import f22 from '../../assets/images/22.jpg'
import f23 from '../../assets/images/23.jpg'
import f24 from '../../assets/images/24.jpg'
import f25 from '../../assets/images/25.jpg'
import f26 from '../../assets/images/26.jpg'
import f27 from '../../assets/images/27.jpg'
import f28 from '../../assets/images/28.jpg'
import f29 from '../../assets/images/29.jpg'
import f30 from '../../assets/images/30.jpg'
import f31 from '../../assets/images/31.jpg'
import f32 from '../../assets/images/32.jpg'



interface ComponentProps {
    selectedFilter: string,
    setSelectedFilter: Function,
    setSelectedFood: Function,
    addToCart:  Function, // React.MouseEventHandler<HTMLIonFabButtonElement>,
}
const MenuComponent: React.FC<ComponentProps> = ({ selectedFilter, setSelectedFilter, setSelectedFood, addToCart, }) => {
    const menu: Array<Food> = [
        {
            id: 1,
            name: 'BBQ Pizza',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f1,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Chicken Hawaiian',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f2,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Beef Pepperoni Plus',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f3,
            quantity: 1,
        },
        {
            id: 4,
            name: 'Veg Feast',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f4,
            quantity: 1,
        },
        {
            id: 5,
            name: 'Veg Tikka',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f5,
            quantity: 1,
        },
        {
            id: 6,
            name: 'Regina',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f6,
            quantity: 1,
        },
        {
            id: 7,
            name: 'Peri-peri Chicken',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f7,
            quantity: 1,
        },
        {
            id: 8,
            name: 'Chicken Macon BBQ.',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f8,
            quantity: 1,
        },
        {
            id: 9,
            name: 'Meat Deluxe',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f9,
            quantity: 1,
        },
        {
            id: 10,
            name: 'BBQ Pizza',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f24,
            quantity: 1,
        },
        {
            id: 11,
            name: 'Beef Pepperoni Plus',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f23,
            quantity: 1,
        },
        {
            id: 12,
            name: 'Roast Veg & Feta',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f22,
            quantity: 1,
        },
        {
            id: 13,
            name: 'Spicy Boerewors',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f21,
            quantity: 1,
        },
        {
            id: 14,
            name: 'Veg Feast',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f20,
            quantity: 1,
        },
        {
            id: 15,
            name: '500ml bottle water',
            price: 1300,
            type: 'drinks',
            category: '',
            img: f10,
            quantity: 1,
        },
        {
            id: 16,
            name: '500ml Pet Soda',
            price: 10,
            type: 'drinks',
            category: '',
            img: f11,
            quantity: 1,
        },
        {
            id: 17,
            name: 'Minute maid',
            price: 150,
            type: 'drinks',
            category: '',
            img: f12,
            quantity: 1,
        },
        {
            id: 18,
            name: 'Soda (2ltrs)',
            price: 300,
            type: 'drinks',
            category: '',
            img: f13,
            quantity: 1,
        },
        
    ]
    const [displayMenu, setDisplayMenu] = useState([] as Array<Food>)

    useEffect(()=> {
        if( selectedFilter === 'all' ) {
            setDisplayMenu(menu)
            return
        }

        if( selectedFilter === 'deluxe' ) {
            const dp = menu.filter((fd)=> {
                return fd.category === selectedFilter
            })
            setDisplayMenu(dp)
            return
        }
        if( selectedFilter === 'classic' ) {
            const cp = menu.filter((fd)=> {
                return fd.category === selectedFilter
            })
            setDisplayMenu(cp)
            return
        }

        const drinks = menu.filter((fd)=> {
            return fd.type === 'drinks'
        })
        setDisplayMenu(drinks)        
    }, [ selectedFilter ])

    return (
        <div>
            <IonGrid>
                <IonRow>

                    {
                        displayMenu.map((food: Food, index)=> {

                            return (
                                <IonCol sizeXs="12" sizeSm="6" sizeMd="4" sizeLg="3"  key={index}>
                                    <FoodCardComponent
                                        food={food}
                                        setSelectedFood={setSelectedFood}
                                        addToCart={
                                            (e)=> {
                                                addToCart(food)
                                            }
                                        }
                                    />
                                </IonCol>
                            )
                        })
                    }
                    
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default MenuComponent
