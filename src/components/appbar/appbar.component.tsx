import { useHistory } from 'react-router';
import { 
    IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonText,
    IonIcon,
} from '@ionic/react';

import { cartOutline } from 'ionicons/icons'

import './appbar.component.css';


interface ComponentProps {}
const AppBarComponent: React.FC<ComponentProps> = () => {
  const history = useHistory()

  const goToContact =()=> {
    // history.push('/contact')
  }

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

                <IonButton 
                    onClick={goToContact}
                    color="primary" 
                    fill="solid"
                    size="default"
                    strong={true}
                    className="fd_6"
                    style={{
                        '--border-radius': '50px',
                        // borderRadius: '40px',
                        marginRight: '16px',
                        '--padding-start': '18px',
                        '--padding-end': '18px',
                        fontSize: '.7rem',
                    }}>
                    {/* <IonButton shape="rounded"> */}
                        <IonIcon slot="start" icon={cartOutline} />
                </IonButton>
            </IonButtons>

        </IonToolbar>
    </IonHeader>
  );
};

export default AppBarComponent;