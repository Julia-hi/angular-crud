import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Importar AG Grid modules
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { enableProdMode } from '@angular/core';

// Registrar módulos de AG Grid (obligatorio en v34+)
ModuleRegistry.registerModules([AllCommunityModule]);


if ((window as any).ENABLE_PROD_MODE) {
    enableProdMode();
}
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));