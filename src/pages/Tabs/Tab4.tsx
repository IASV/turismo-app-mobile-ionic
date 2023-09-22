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

import alemana from "../../assets/droguerias/alemana.jpg";
import curita from "../../assets/droguerias/curita.png";
import paguemenos from "../../assets/droguerias/paguemenos.jpg";

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
            <h1 style={{ textAlign: "center" }}>Pague menos</h1>
            <center>
              <img alt="Silhouette of mountains" src={paguemenos} />
            </center>
            <IonCardHeader>
              <IonCardTitle>Cll 5 # 17-90, Aguachica, Colombia, 205010</IonCardTitle>
              <IonCardSubtitle>3172937323</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              lunes a domingo 24/7
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
            <h1 style={{ textAlign: "center" }}>Alemana</h1>
            <center>
              <img alt="Silhouette of mountains" src={alemana} />
            </center>
            <IonCardHeader>
              <IonCardTitle>Cl. 5 #12-03</IonCardTitle>
              <IonCardSubtitle>318 3728787</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              lunes a viernes :7 am - 10 pm <hr />
              sabados y festivos: 7:30 am - 9:30 pm
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
          <h1 style={{ textAlign: "center" }}>La curita plus</h1>
            <center>
              <img alt="Silhouette of mountains" src={curita} />
            </center>
            <IonCardHeader>
              <IonCardTitle>Cll 5 # 22-85, Aguachica, Colombia</IonCardTitle>
              <IonCardSubtitle>321 6289309</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              lunes a viernes :7 am - 10 pm <hr />
              sabados y festivos: 7 am-10 pm
            </IonCardContent>
          </IonCard>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
