import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MaterialModule } from '../features/material/material.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormComponent } from './components/form-news/form.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StandarDialogComponent } from './components/standar-dialog/standar-dialog.component';
import { MsgErrorFormDirective } from './directives/msg-error-form.directive';
import { HtmlPipe } from './pipes/html/html.pipe';
import { ImgCarouselPipe } from './pipes/img-carousel.pipe';
import { CardComponent } from './card/card.component';




@NgModule({
  declarations: [
    ContactFormComponent,
    CarouselComponent,
    ImgCarouselPipe,
    MsgErrorFormDirective,
    CkeditorComponent,
    HtmlPipe,
    FormComponent,
    StandarDialogComponent,
    SpinnerComponent,
    CardComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,  
    MaterialModule,
  ],
  exports: [
    CarouselComponent,
    ImgCarouselPipe,
    ContactFormComponent,
    MsgErrorFormDirective,
    CkeditorComponent,
    HtmlPipe,
    FormComponent,     
    StandarDialogComponent,
    MaterialModule,
    SpinnerComponent,
    CardComponent     
  ]
})
export class SharedModule { }
