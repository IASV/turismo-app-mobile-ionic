import React, { useRef, useEffect } from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';


export default function Tab1() {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = ['first', 'third'];
  }, []);

  return (
    <IonAccordionGroup ref={accordionGroup} multiple={true}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>Pizzerias</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Restaurantes</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>

      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Comidas Rapidas</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>

      <IonAccordion value="four">
        <IonItem slot="header" color="light">
          <IonLabel>Heladerias</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>

      <IonAccordion value="five">
        <IonItem slot="header" color="light">
          <IonLabel>Licores & Bebidas</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>


    </IonAccordionGroup>
  );
}
