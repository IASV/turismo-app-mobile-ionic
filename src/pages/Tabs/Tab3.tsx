import React, { useRef, useEffect } from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonImg,
} from "@ionic/react";

export default function Tab3() {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = ["first", "third"];
  }, []);

  return (
    <IonAccordionGroup ref={accordionGroup} multiple={true}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>Morrocoy</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <img src="src\assets\hoteles\hotelmorrocoy.jpg" alt="" />
        </div>
      </IonAccordion>

      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>De Leon</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>

      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Los Estoraques</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>
      
    </IonAccordionGroup>
  );
}
