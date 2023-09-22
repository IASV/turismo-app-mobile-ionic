import React, { useRef, useEffect } from 'react';
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonPage,
  IonContent,
} from '@ionic/react';

import alemana from '../../assets/droguerias/alemana.jpg';
import curita from '../../assets/droguerias/curita.png';
import paguemenos from '../../assets/droguerias/paguemenos.jpg';

export default function Tab4() {
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
            src='https://storage.googleapis.com/maps-solutions-9czm781ipm/neighborhood-discovery/u2z1/neighborhood-discovery.html'
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
