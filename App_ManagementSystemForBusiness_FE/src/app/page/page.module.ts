/*
 * Copyright (c) 2023 Phạm Tiến Dũng.
 * License: MIT
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { PageRoutingModule } from './page-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent, LoginComponent, SignUpComponent],
  imports: [CommonModule, PageRoutingModule],
})
export class PageModule {}
