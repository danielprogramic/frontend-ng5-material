import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule , MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule  } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }
