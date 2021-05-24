import { useHistory } from 'react-router';
import { 
    IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonText,
    IonIcon,
    IonFabButton,
    IonFab,
} from '@ionic/react';

import { cartOutline } from 'ionicons/icons'

import './appbar.component.css';


interface ComponentProps {
    toggleShowCart: React.MouseEventHandler<HTMLIonFabButtonElement>,
}
const AppBarComponent: React.FC<ComponentProps> = ({ toggleShowCart }) => {

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

                <IonFabButton
                    onClick={toggleShowCart}
                    size="small"
                >
                    <IonIcon 
                        icon={cartOutline} 
                        style={{
                            fontSize: '1rem',
                        }}
                    />
                </IonFabButton>
                    
            </IonButtons>

        </IonToolbar>
    </IonHeader>
  );
};

export default AppBarComponent;