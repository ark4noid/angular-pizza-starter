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
import { CommentListModule } from './comment/components/comment-list.module';

@NgModule({
  declarations: [PrivateComponent, HeaderComponent],
  imports: [
    PrivateRoutingModule,
    HttpClientModule,
    MenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommentListModule
  ],
  providers: [
    APIInterceptorProvider,
    AuthInterceptorProvider
  ]
})
export class PrivateModule {}
