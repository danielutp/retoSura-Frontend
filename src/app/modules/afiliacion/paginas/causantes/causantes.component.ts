import { Component, OnInit } from '@angular/core';
import { CausantesService } from '../../servicios/causantes.service';
import { Causante } from '../../interfaces/Causante';

@Component({
  selector: 'app-causantes',
  templateUrl: './causantes.component.html',
  styleUrls: ['./causantes.component.css'],
})
export class CausantesComponent implements OnInit {
  causante: Causante[];

  constructor(private causanteService: CausantesService) {
    this.causante = [];
  }

  ngOnInit(): void {
    this.causanteService.getcausantes().subscribe((ele) => {
      console.log(ele);
      this.causante = ele;
    });
    console.log(this.causante);
  }
}
