import React from "react";
import { IonIcon, IonText } from "@ionic/react";
import {
  link,
  logoIonic,
  notifications,
  notificationsOffCircleOutline,
  notificationsOffOutline,
} from "ionicons/icons";

import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Tabs from "@/components/Tabs";

function Menu() {



  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonAccordionGroup>
            <IonAccordion value="first">
              <IonItem slot="header" color="light">
                <IonLabel>Alcaldía</IonLabel>
              </IonItem>

              <div className="ion-padding" slot="content">
                <a href="/menu-alcaldia-sg">
                  <IonText  style={{ cursor: "pointer" }}>
                    Secretaría de Gobierno
                  </IonText>
                </a>
              </div>

              <div className="ion-padding" slot="content">
                <a href="/menu-alcaldia-se">
                  <IonText  style={{ cursor: "pointer" }}>
                    Secretaría de Educación
                  </IonText>
                </a>
              </div>

              <div className="ion-padding" slot="content">
                <a href="/menu-alcaldia-cyd">
                  <IonText  style={{ cursor: "pointer" }}>
                    Secretaría de Cultura y Deporte
                  </IonText>
                </a>
              </div>
            </IonAccordion>
            <IonAccordion value="second">
              <IonItem slot="header" color="light">
                <IonLabel>Camara de comercio</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Registro Mercantil
              </div>
              <div className="ion-padding" slot="content">
                Asesoría Empresarial
              </div>
              <div className="ion-padding" slot="content">
                Estadísticas y Estudios Económicos
              </div>
            </IonAccordion>
            
            <IonAccordion value="third">
              <IonItem slot="header" color="light">
                <IonLabel>Bomberos</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content"></div>
            </IonAccordion>
            <IonAccordion value="ford">
              <IonItem slot="header" color="light">
                <IonLabel>Policía</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content"></div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonIcon icon={notifications} size="large" slot="end"></IonIcon>
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
