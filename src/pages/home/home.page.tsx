import { useState } from 'react'
import { 
    IonContent, IonPage,
    IonFabButton, IonFab, IonIcon,
} from '@ionic/react'
import { callOutline } from 'ionicons/icons'

import AppBarComponent from '../../components/appbar/appbar.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import FiltersComponent from './filters.component'
import MenuComponent from './menu.component'


import './home.page.scss'



const HomePage = () => {
    const [selectedFilter, setSelectedFilter] = useState('all')


    return (
        <IonPage>
            
            <AppBarComponent />

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
                />
                <VSpacerComponent space={7} />


                {/* fab */}
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={callOutline} />
                    </IonFabButton>
                </IonFab>

            </IonContent>
        </IonPage>
    )
}

export default HomePage
