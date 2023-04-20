/*
 * Copyright (c) 2023 Phạm Tiến Dũng.
 * License: MIT
 */

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
