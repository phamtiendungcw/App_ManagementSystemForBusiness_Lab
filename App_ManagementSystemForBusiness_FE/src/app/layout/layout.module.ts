/*
 * Copyright (c) 2023 Phạm Tiến Dũng.
 * License: MIT
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
