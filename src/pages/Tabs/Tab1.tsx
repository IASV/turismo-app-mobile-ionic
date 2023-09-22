import React, { useRef, useEffect } from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";

export default function Tab1() {
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
          <IonLabel>Pizzerias</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content"> 
          <ul>
            <li>M&M PIZZA</li>
            <li>Rustica</li>
            <li>Roma's Pizza</li>
            <li>Pizza Ariel</li>
          </ul>
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Restaurantes</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content"> 
          <ul>
            <li>La Brasa</li>
            <li>La Biela</li>
            <li>El rancho</li>
            <li>Carnivore</li>
          </ul>
        </div>
      </IonAccordion>

      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Comidas Rapidas</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content"> 
          <ul>
            <li>La prima</li>
            <li>La cuñada</li>
            <li>Donde Chuz</li>
            <li>El viejo Hermides</li>
          </ul>
        </div>
      </IonAccordion>

      <IonAccordion value="four">
        <IonItem slot="header" color="light">
          <IonLabel>Heladerias</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content"> 
          <ul>
            <li>Puggin</li>
            <li>Arrecife</li>
            <li>Popsy</li>
            <li>Los de la sexta</li>
          </ul>
        </div>
      </IonAccordion>

      <IonAccordion value="five">
        <IonItem slot="header" color="light">
          <IonLabel>Licores & Bebidas</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content"> 
          <ul>
            <li>Estanco coyote</li>
            <li>EL pingüino</li>
            <li>Estadero la 25</li>
          </ul>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
