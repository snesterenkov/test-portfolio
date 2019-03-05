import {NgModule} from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ProjectComponent} from './project/project.component';
import {WebProjectComponent} from './web-project/web-project.component';
import {NzModalModule} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImageLoaderService} from './services/image-loader.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
    ProjectComponent,
    WebProjectComponent,
  ],
  imports: [
    MainRoutingModule,
    NgZorroAntdModule,
    NzModalModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ImageLoaderService,
  ],
  bootstrap: []
})
export class MainModule { }
