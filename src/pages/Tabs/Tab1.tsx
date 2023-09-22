import React, { useRef, useEffect } from 'react';
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonPage,
  IonContent,
} from '@ionic/react';

export default function Tab1() {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = ['first', 'third'];
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{ width: '100%', height: '100%' }}>
          <iframe
            src='https://storage.googleapis.com/maps-solutions-9czm781ipm/neighborhood-discovery/1q4y/neighborhood-discovery.html'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </div>
      </IonContent>
    </IonPage>
  );
}
