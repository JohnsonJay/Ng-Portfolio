import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProjectsListComponent } from './components/admin-projects-list/admin-projects-list.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AdminSkillsListComponent } from './components/admin-skills-list/admin-skills-list.component';
import { AdminToolsListComponent } from './components/admin-tools-list/admin-tools-list.component';
import { AdminAboutMeComponent } from './components/admin-about-me/admin-about-me.component';
import { ModalComponent } from './components/form-modal/modal.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';


@NgModule({
  declarations: [
    AdminComponent,
    AuthPageComponent,
    AdminPageComponent,
    HeaderComponent,
    AdminProjectsListComponent,
    AdminSkillsListComponent,
    AdminToolsListComponent,
    AdminAboutMeComponent,
    ModalComponent,
    MessagesPageComponent,
    AdminMessagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
