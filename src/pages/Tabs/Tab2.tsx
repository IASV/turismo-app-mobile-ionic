import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle size="large">Tab 2</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
