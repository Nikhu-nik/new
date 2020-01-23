import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { File } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx'; 
import { CartModalPage } from './pages/cart-modal/cart-modal.page';
import { ChartPipe } from './chart.pipe';
import { ChartsModule } from 'ng2-charts';
import 'chartjs-plugin-zoom';
import { TestoPage } from './testo/testo.page';
import { TestoPageModule } from './testo/testo.module';
import { OrderNowPage } from './order-now/order-now.page';
import { ProductDetailPage } from './product-detail/product-detail.page';


@NgModule({
  declarations: [AppComponent,CartModalPage, ChartPipe,OrderNowPage],
  entryComponents: [CartModalPage,TestoPage,OrderNowPage],
  imports: [
    BrowserModule,HttpClientModule,NgxDatatableModule,
    IonicModule.forRoot(),
    AppRoutingModule,ChartsModule,TestoPageModule,
    BrowserAnimationsModule  
  ],
  providers: [
    StatusBar,
    SplashScreen,ImagePicker,File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
