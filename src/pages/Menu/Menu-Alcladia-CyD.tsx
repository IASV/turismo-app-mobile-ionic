import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import imdrec from "../../assets/alcaldias/IMDREC.jpg";

export default function SecretariaCulturayDeporte() {
  return (
    <IonCard>
      <h1 style={{ textAlign: "center" }}>IMDREC</h1>
      <center>
        <img alt="Silhouette of mountains" src={imdrec} />
      </center>
      <IonCardHeader>
        <IonCardTitle>Correo: imdrec@aguachica-cesar.gov.co </IonCardTitle>
        <IonCardSubtitle>Telefono: 310 6727862</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Dirección: Cl. 5 #5-125 a 5-53 </IonCardContent>
    </IonCard>
  );
}
