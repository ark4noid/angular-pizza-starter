import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private.routing';
import { PrivateComponent } from './private.component';
import { HttpClientModule } from '@angular/common/http';
import { APIInterceptorProvider } from '../core/http/api.interceptor';
import { AuthInterceptorProvider } from './services/http/auth.interceptor';
import { MenuModule } from './menu/menu.module';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LogoutModule } from './logout/logout.module';
import { RetryInterceptorProvider } from './services/http/retry.interceptor';
import { RefreshService } from './services/http/refresh.service';


@NgModule({
  declarations: [PrivateComponent, HeaderComponent],
  imports: [
    PrivateRoutingModule,
    HttpClientModule,
    MenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LogoutModule
  ],
  providers: [
    APIInterceptorProvider,
    AuthInterceptorProvider,
    RetryInterceptorProvider,
    RefreshService
  ]
})
export class PrivateModule {}
