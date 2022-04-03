import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ShareDataService } from 'src/app/service/share-data.service';
import { OperacionComponent } from '../operacion/operacion.component';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements AfterViewInit {
  @ViewChild('suma') op1: OperacionComponent;
  @ViewChild('resta') op2: OperacionComponent;
  @ViewChild('multi') op3: OperacionComponent;
  user: string;
  constructor(private share:ShareDataService) { 
  }

  ngAfterViewInit(): void {
    this.share.currentUser.subscribe(x => this.user = x);
    this.op1.setOperacion("+");
    this.op2.setOperacion("-");
    this.op3.setOperacion("*");
  }

}
