/**
 * Created by zezhang on 2017/4/25.
 */
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations:  [],
  exports: [
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule
  ]
})
export class SharedModule { }
