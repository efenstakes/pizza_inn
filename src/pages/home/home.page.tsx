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



const HomePage = () => {
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [showCart, setShowCart] = useState(true)
    const [cart, setCart] = useState([] as Array<Food>)
    const [selectedFood, setSelectedFood] = useState(null)


    const toggleShowCart = (e: React.MouseEvent<HTMLIonFabButtonElement>)=> setShowCart(!showCart)

    useEffect(()=> {
        console.log('selectedFood changed')
        if ( selectedFood != null ) {
            console.log('has food')
            setShowCart(false)
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
                    />
                </IonMenu>
                <div id="first">
                    <AppBarComponent toggleShowCart={toggleShowCart} />

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
                            setSelectedFood={setSelectedFood}
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
