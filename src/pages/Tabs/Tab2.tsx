import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{ width: '100%', height: '100%' }}>
          <iframe
            src='https://storage.googleapis.com/maps-solutions-9czm781ipm/neighborhood-discovery/f7bi/neighborhood-discovery.html'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
