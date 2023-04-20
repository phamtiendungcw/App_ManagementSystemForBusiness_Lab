/*
 * Copyright (c) 2023 Phạm Tiến Dũng.
 * License: MIT
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { AdminModule } from '../modules/admin/admin.module';
import { ClientModule } from '../modules/client/client.module';
import { PageModule } from '../page/page.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, AdminModule, ClientModule, PageModule],
})
export class ShareModule {}
