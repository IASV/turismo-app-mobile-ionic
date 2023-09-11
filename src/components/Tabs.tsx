import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { businessSharp, earth, earthOutline, ellipse, medical, medicalOutline, medicalSharp, restaurantOutline, restaurantSharp, square, triangle } from 'ionicons/icons';
import Tab1 from '@/pages/Tabs/Tab1';
import Tab2 from '@/pages/Tabs/Tab2';
import Tab3 from '@/pages/Tabs/Tab3';
import Tab4 from '@/pages/Tabs/Tab4';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

function Tabs() {
  return (
    <>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path='/tab1'>
              <Tab1 />
            </Route>
            <Route exact path='/tab2'>
              <Tab2 />
            </Route>
            <Route path='/tab3'>
              <Tab3 />
            </Route>
            <Route path='/tab4'>
              <Tab4 />
            </Route>
            <Route exact path='/'>
              <Redirect to='/tab1' />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton tab='tab1' href='/tab1'>
              <IonIcon aria-hidden='true' icon={restaurantSharp} />
              <IonLabel>Comidas</IonLabel>
            </IonTabButton>
            <IonTabButton tab='tab2' href='/tab2'>
              <IonIcon aria-hidden='true' icon={earth} />
              <IonLabel>Turismo</IonLabel>
            </IonTabButton>
            <IonTabButton tab='tab3' href='/tab3'>
              <IonIcon aria-hidden='true' icon={businessSharp} />
              <IonLabel>Hoteles</IonLabel>
            </IonTabButton>
            <IonTabButton tab='tab4' href='/tab4'>
              <IonIcon aria-hidden='true' icon={medicalSharp} />
              <IonLabel>Drogueria</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      ;
    </>
  );
}

export default Tabs;
