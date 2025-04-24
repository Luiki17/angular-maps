import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibHVpa2kxNyIsImEiOiJjbTllNHl6dnMwamdiMnFyNzFoa2VieWxyIn0.XUaKus0Q7y5xi_xQhITfHg';

if(!navigator.geolocation){
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
