import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule, MatDialogModule, MatInputModule, MatTableModule } from '@angular/material';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MatFormFieldModule, MatListModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
    MatFormFieldModule, MatListModule,

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
    MatFormFieldModule, MatListModule
  ],
})
export class CustomMaterialModule { }
