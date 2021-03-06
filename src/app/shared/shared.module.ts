import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,
         MatToolbarModule,
         MatFormFieldModule,
         MatInputModule,
         MatButtonModule } from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
