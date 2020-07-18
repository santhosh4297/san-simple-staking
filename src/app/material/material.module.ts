import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const matModList = [
  CdkScrollableModule,
  ScrollingModule,
  MatCardModule,
  MatIconModule,
 ];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...matModList],
  exports: [...matModList]
})
export class MaterialModule {}
