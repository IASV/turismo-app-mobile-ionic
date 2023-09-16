import React, { useRef, useEffect } from "react";
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
} from "@ionic/react";

export default function Tab4() {
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
          <IonLabel>Pague menos</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Calle 20 #4a-33</IonCardTitle>
              <IonCardSubtitle>+57 3145342702</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              lunes a viernes :8am - 8pm <hr />
              sabados y festivos: 10am-5pm
            </IonCardContent>
          </IonCard>
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Alemana</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Calle 20 #4a-33</IonCardTitle>
              <IonCardSubtitle>+57 3145342702</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              lunes a viernes :8am - 8pm <hr />
              sabados y festivos: 10am-5pm
            </IonCardContent>
          </IonCard>
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>La Curita</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Calle 20 #4a-33</IonCardTitle>
              <IonCardSubtitle>+57 3145342702</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              lunes a viernes :8am - 8pm <hr />
              sabados y festivos: 10am-5pm
            </IonCardContent>
          </IonCard>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
