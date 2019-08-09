import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule, MatDialogModule, MatInputModule, MatTableModule } from '@angular/material';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MatFormFieldModule, MatListModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule} from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { MatTooltipModule} from '@angular/material';
import { RatingModule } from 'ng-starrating';
import { MatTreeModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule, MatCheckboxModule,
    MatNativeDateModule, MatDatepickerModule,
    MatFormFieldModule, MatListModule, MatSidenavModule,
    MatSliderModule, MatSlideToggleModule,
    MatSelectModule, MatOptionModule, MatStepperModule, MatTooltipModule,
    RatingModule, MatTreeModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatNativeDateModule, MatDatepickerModule,
    MatFormFieldModule, MatListModule, MatSidenavModule,
    MatSliderModule, MatSelectModule, MatOptionModule, MatStepperModule, MatTooltipModule,
    RatingModule, MatTreeModule
  ],
})
export class CustomMaterialModule { }
