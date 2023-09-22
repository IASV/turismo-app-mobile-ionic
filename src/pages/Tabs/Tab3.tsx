import React, { useRef, useEffect } from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonImg,
} from "@ionic/react";
import { HotelView } from "./HotelView";

import mfachada from "../../assets/hoteles/Morrocoy/hotelmorrocoy.jpg";
import mrecepcion from "../../assets/hoteles/Morrocoy/hotelmorrocy-recepcion.jpg";
import mhabitacion from "../../assets/hoteles/Morrocoy/hotelmorrocoy-habitacion.png";

import dfachada from "../../assets/hoteles/deLeon/Hoteldeleon.jpg";
import drecepcion from "../../assets/hoteles/deLeon/hoteldeleon-recepcion.jpg";
import dhabitacion from "../../assets/hoteles/deLeon/hoteldeleon-habitacion.jpg";

import efachada from "../../assets/hoteles/Estoraques/hotelestoraque.png";
import erecepcion from "../../assets/hoteles/Estoraques/hotelestoraque-recepcion.png";
import ehabitacion from "../../assets/hoteles/Estoraques/hotelestoraque-habitacion.png";



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
          <HotelView
            title="HOTEL MORROCOY"
            img1={mfachada}
            img2={mrecepcion}
            img3={mhabitacion}
          />
        </div>
      </IonAccordion>

      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>De Leon</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <HotelView
            title="HOTEL D LEON"
            img1={dfachada}
            img2={drecepcion}
            img3={dhabitacion}
          />
        </div>
      </IonAccordion>

      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Los Estoraques</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <HotelView
            title="HOTEL ESTORAQUES"
            img1={efachada}
            img2={erecepcion}
            img3={ehabitacion}
          />
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
