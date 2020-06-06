import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ApiService } from './services/api/api.service';
import { ClientService } from './services/client/client.service';
import { HttpService } from './services/api/http/http.service';
import { MaterialModule } from './shared/uteis/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ClientModule } from './pages/client/client.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { ModalCreateClientComponent } from './pages/client/components/modal-create-client/modal-create-client.component';

@NgModule({
  entryComponents: [
    ModalCreateClientComponent
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClientModule,
    SharedComponentsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt' },
    ClientService,
    ApiService,
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
