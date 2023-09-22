import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import educacion from "../../assets/alcaldias/secretaria-educacion.png";

export default function SecretariaEducacion() {
  return (
    <IonCard>
      <h1 style={{ textAlign: "center" }}>SECRETARÍA DE EDUCACIÓN</h1>
      <center>
        <img alt="Silhouette of mountains" src={educacion} />
      </center>
      <IonCardHeader>
        <IonCardTitle>Correo: educacion@cesar.gov.co </IonCardTitle>
        <IonCardSubtitle>Telefono: (095) 574 82 30 - Ext. 402</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Dirección: Carrera 14 # 13B- 80 barrio </IonCardContent>
    </IonCard>
  );
}
