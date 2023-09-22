import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
} from "@ionic/react";

import bomberos from "../../assets/bomberos/bomberos.jpg";

export default function Bomberos() {
  return (
    <IonCard>
      <h1 style={{ textAlign: "center" }}>Bomberos</h1>
      <center>
        <img alt="Silhouette of mountains" src={bomberos} />
      </center>
      <IonCardHeader>
        <IonCardSubtitle>Telefono: 312 6839329</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Dirección: Cll 11 # 11 53, Barrio Progreso
      </IonCardContent>
    </IonCard>
  );
}
