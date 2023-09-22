import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

export default function SecretariaGobierno() {
  return (
    <IonCard>
      <h1 style={{ textAlign: "center" }}>Secretaría de Gobierno</h1>
      <center>
        <img alt="Silhouette of mountains" src="src\assets\img1.jpg" />
      </center>
      <IonCardHeader>
        <IonCardTitle>Correo: contactenos@aguachica-cesar.gov.co</IonCardTitle>
        <IonCardSubtitle>Telefono: (60)5 565-1771-605</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Dirección: Calle 4 No 10-33 Parque San Roque{" "}
      </IonCardContent>
    </IonCard>
  );
}
