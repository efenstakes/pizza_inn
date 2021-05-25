import { useHistory } from 'react-router';
import { 
    IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonText,
    IonIcon,
    IonFabButton,
    IonFab,
} from '@ionic/react';

import { cart, cartOutline } from 'ionicons/icons'

import Food from '../../models/food.model';


import './appbar.component.scss';


interface ComponentProps {
    toggleShowCart: React.MouseEventHandler<HTMLDivElement>, // React.MouseEventHandler<HTMLIonButtonElement>,
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
                    letterSpacing: '1.6px'
                }}
                className="fd_4"
            >
                Pizza <span style={{ color: '#DB2033' }}>Inn</span>
            </IonTitle>

            <IonButtons slot="primary">

                {/* <IonButton
                    onClick={toggleShowCart}
                    color="secondary"
                    fill="solid"
                    shape="round"
                    style={{
                        '--padding-start': '12px',
                        '--padding-end': '12px',
                    }}
                >
                    <IonIcon 
                        icon={cartOutline} 
                        slot="start"
                        style={{
                            fontSize: '1rem',
                        }}
                    />
                    <div className="app_bar_cart_number">
                        {cart.length}
                    </div>
                </IonButton> */}
                <div 
                    className="app_bar_cart" 
                    onClick={toggleShowCart}
                >
                    <IonIcon 
                        icon={cartOutline} 
                        slot="start"
                        style={{
                            fontSize: '1.1rem',
                            fontWeight: 'bold'
                        }}
                    />
                    <div className="app_bar_cart_number">
                        {cart.length}
                    </div>
                </div>
            </IonButtons>

        </IonToolbar>
    </IonHeader>
  );
};

export default AppBarComponent;