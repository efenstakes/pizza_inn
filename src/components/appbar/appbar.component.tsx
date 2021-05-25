import { useHistory } from 'react-router';
import { 
    IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonText,
    IonIcon,
    IonFabButton,
    IonFab,
} from '@ionic/react';

import { cart, cartOutline } from 'ionicons/icons'

import Food from '../../models/food.model';


import './appbar.component.css';


interface ComponentProps {
    toggleShowCart: React.MouseEventHandler<HTMLIonButtonElement>,
    cart: Food[],
}
const AppBarComponent: React.FC<ComponentProps> = ({ toggleShowCart, cart }) => {

  return (
    <IonHeader translucent={false} className="appbar"
        style={{ 
            border: 'none',
            boxShadow: 'none',
            outline: 'none',
        }}
    >
        <IonToolbar 
            style={{ 
                border: 'none',
                boxShadow: 'none',
                outline: 'none',
            }}
        >

            <IonTitle color="primary" 
                style={{
                    fontWeight: 700,
                    fontFamily: 'Wendy One',
                    letterSpacing: '1px'
                }}
                className="fd_4"
            >
                Pizza <span style={{ color: '#DB2033' }}>Inn</span>
            </IonTitle>

            <IonButtons slot="primary">

                {/* <IonFabButton
                    onClick={toggleShowCart}
                    size="small"
                >
                    <IonIcon 
                        icon={cartOutline} 
                        style={{
                            fontSize: '1rem',
                        }}
                    />
                </IonFabButton> */}
                <IonButton
                    onClick={toggleShowCart}
                    color="secondary"
                    fill="solid"
                    shape="round"
                >
                    <IonIcon 
                        icon={cartOutline} 
                        slot="start"
                        style={{
                            fontSize: '1rem',
                        }}
                    />
                    {cart.length}
                </IonButton>
            </IonButtons>

        </IonToolbar>
    </IonHeader>
  );
};

export default AppBarComponent;