import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
const data: any = [
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule
]

@NgModule({
    imports: data,
    exports: data
})

export class MaterialModule { }