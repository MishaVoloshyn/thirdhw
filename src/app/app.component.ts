import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { ComputersComponent } from './computers/computers.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { GamingComponent } from './gaming/gaming.component';
import { TabletsComponent } from './tablets/tablets.component';
import { CablesComponent } from './cables/cables.component';
import { PartsComponent } from './parts/parts.component';
import { NetworkComponent } from './network/network.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { OfficeComponent } from './office/office.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NotebooksComponent,ComputersComponent,MonitorsComponent,GamingComponent,TabletsComponent,CablesComponent,PartsComponent,NetworkComponent,HeadphonesComponent,KeyboardsComponent,ElectronicsComponent,OfficeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thirdhw';
}
