import {
    IonCard,
  } from "@ionic/react";

  type Props = {
    img1: string
    img2: string
    img3: string
    title: string
  }

  export const HotelView: React.FC<Props> = ({title,img1, img2, img3}) => {
    return (
      <IonCard>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <center>
          <img alt="Silhouette of mountains" src={img1} />
        </center>

        <h1 style={{ textAlign: "center" }}>Recepción</h1>
        <center>
          <img alt="Silhouette of mountains" src={img2} />
        </center>

        <h1 style={{ textAlign: "center" }}>Habitaciones</h1>
        <center>
          <img alt="Silhouette of mountains" src={img3} />
        </center>
        
      </IonCard>
    );
  }
  