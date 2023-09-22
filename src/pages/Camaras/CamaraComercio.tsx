import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import camara from "../../assets/camaras/camara-comercio.jpg";

export default function CamaraComercio() {
  return (
    <IonCard>
      <h1 style={{ textAlign: "center" }}>Cámara de comercio </h1>
      <center>
        <img alt="Silhouette of mountains" src={camara} />
      </center>
      <IonCardHeader>
        <IonCardTitle>Correo: ccaguachica@camaraaguachica.org.co </IonCardTitle>
        <IonCardSubtitle>Telefono: +57- 316 0233043</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Dirección: Carrera 14 # 6 – 74 Barrio Olaya Herrera{" "}
      </IonCardContent>
    </IonCard>
  );
}
