import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import Tabs from '@/components/Tabs';
function Menu() {
  return (
    <>
      <IonMenu contentId='main-content'>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          This is the menu content.
        </IonContent>
      </IonMenu>
      <IonPage id='main-content'>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu testing Ivan</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Tabs />
        </IonContent>
      </IonPage>
    </>
  );
}
export default Menu;
