import { useEffect, useState } from "react"

import {
    Grid, 
} from '@material-ui/core'

import FoodCardComponent from "../../components/food_card/food_card.component"

import Food from '../../models/food.model'
import menu from '../../data/foods'


interface ComponentProps {
    selectedFilter: string,
    setSelectedFilter: Function,
    setSelectedFood: Function,
    addToCart:  Function, // React.MouseEventHandler<HTMLIonFabButtonElement>,
}
const MenuComponent: React.FC<ComponentProps> = ({ selectedFilter, setSelectedFilter, setSelectedFood, addToCart, }) => {

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
            <Grid container>
                {
                    displayMenu.map((food: Food, index)=> {

                        return (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <FoodCardComponent
                                    food={food}
                                    setSelectedFood={setSelectedFood}
                                    addToCart={
                                        (e)=> {
                                            addToCart(food)
                                        }
                                    }
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default MenuComponent
