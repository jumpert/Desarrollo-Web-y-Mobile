import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './../app/services/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';

import { UserComponent } from './user/user.component';
import { InstaButtonComponent } from './insta-button/insta-button.component';
import { ImageComponent } from './image/image.component';
import { PostComponent } from './post/post.component';
import { PostScrollComponent } from './post-scroll/post-scroll.component';
import { SearchViewComponent } from './search-view/search-view.component';

import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NavbarDiscoverButtonComponent } from './navbar-discover-button/navbar-discover-button.component';
import { NavbarProfileButtonComponent } from './navbar-profile-button/navbar-profile-button.component';
import { NavbarSearchButtonComponent } from './navbar-search-button/navbar-search-button.component';

import { ChatListComponent } from './chat-list/chat-list.component';
import { UserService } from './services/user.service';
import { ImageService } from './services/image.service';
import { ChatService } from './services/chat.service';

import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

const appRoutes: Routes = [
  { path: 'chats', component: ChatListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ChatComponent,
    UserComponent,
    InstaButtonComponent,
    PostComponent,
    ImageComponent,
    PostScrollComponent,
    NavbarSearchButtonComponent,
    NavbarProfileButtonComponent,
    NavbarDiscoverButtonComponent,
    SearchViewComponent,
    BottomNavbarComponent,
    TopNavbarComponent,
    SearchBarComponent,
    ChatListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    ImageService,
    ChatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
