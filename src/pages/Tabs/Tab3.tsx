import React, { useRef, useEffect } from 'react';
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonImg,
  IonPage,
  IonContent,
} from '@ionic/react';
import { HotelView } from './HotelView';

import mfachada from '../../assets/hoteles/Morrocoy/hotelmorrocoy.jpg';
import mrecepcion from '../../assets/hoteles/Morrocoy/hotelmorrocy-recepcion.jpg';
import mhabitacion from '../../assets/hoteles/Morrocoy/hotelmorrocoy-habitacion.png';

import dfachada from '../../assets/hoteles/deLeon/Hoteldeleon.jpg';
import drecepcion from '../../assets/hoteles/deLeon/hoteldeleon-recepcion.jpg';
import dhabitacion from '../../assets/hoteles/deLeon/hoteldeleon-habitacion.jpg';

import efachada from '../../assets/hoteles/Estoraques/hotelestoraque.png';
import erecepcion from '../../assets/hoteles/Estoraques/hotelestoraque-recepcion.png';
import ehabitacion from '../../assets/hoteles/Estoraques/hotelestoraque-habitacion.png';

export default function Tab3() {
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
            src='https://storage.googleapis.com/maps-solutions-9czm781ipm/neighborhood-discovery/7hyt/neighborhood-discovery.html'
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
