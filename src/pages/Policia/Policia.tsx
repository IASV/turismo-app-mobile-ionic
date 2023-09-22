import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import policias from "../../assets/policias/policia_aguachica.jpg";

export default function Policia() {
  return (
    <IonCard>
      <h1 style={{ textAlign: "center" }}>Policía </h1>
      <center>
        <img alt="Silhouette of mountains" src={policias} />
      </center>
      <IonCardHeader>
        <IonCardTitle>Correo: deces.daguachica@policia.gov.co</IonCardTitle>
        <IonCardSubtitle>Telefono: 3163311305</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Dirección: Cl. 5 #31-51, Aguachica, Cesar{" "}
      </IonCardContent>
    </IonCard>
  );
}
