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
import { useEffect, useState } from "react"



interface ComponentProps {
    selectedFilter: string,
    setSelectedFilter: Function,
}
const MenuComponent: React.FC<ComponentProps> = ({ selectedFilter, setSelectedFilter }) => {
    const menu: Array<Food> = [
        {
            id: 1,
            name: 'BBQ Pizza',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f1,
        },
        {
            id: 2,
            name: 'Chicken Hawaiian',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f2,
        },
        {
            id: 3,
            name: 'Beef Pepperoni Plus',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f3,
        },
        {
            id: 4,
            name: 'Veg Feast',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f4,
        },
        {
            id: 5,
            name: 'Veg Tikka',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f4,
        },
        {
            id: 6,
            name: 'Regina',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f4,
        },
        {
            id: 7,
            name: 'Peri-peri Chicken',
            price: 1300,
            type: 'pizza',
            category: 'classic',
            img: f4,
        },
        {
            id: 8,
            name: 'Chicken Macon BBQ.',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f5,
        },
        {
            id: 9,
            name: 'Meat Deluxe',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f6,
        },
        {
            id: 10,
            name: 'BBQ Pizza',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f7,
        },
        {
            id: 11,
            name: 'Beef Pepperoni Plus',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f8,
        },
        {
            id: 12,
            name: 'Roast Veg & Feta',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f8,
        },
        {
            id: 13,
            name: 'Spicy Boerewors',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f8,
        },
        {
            id: 14,
            name: 'Veg Feast',
            price: 1300,
            type: 'pizza',
            category: 'deluxe',
            img: f8,
        },
        {
            id: 15,
            name: '500ml bottle water',
            price: 1300,
            type: 'drinks',
            category: '',
            img: f8,
        },
        {
            id: 16,
            name: '500ml Pet Soda',
            price: 110,
            type: 'drinks',
            category: '',
            img: f8,
        },
        {
            id: 17,
            name: 'Minute maid',
            price: 150,
            type: 'drinks',
            category: '',
            img: f8,
        },
        {
            id: 18,
            name: 'Soda (2ltrs)',
            price: 300,
            type: 'drinks',
            category: '',
            img: f8,
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
