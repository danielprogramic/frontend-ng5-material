import { Component, OnInit , ViewChild } from '@angular/core';
import { FamilyService } from './service/family.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Test';
  aGrandma = [];
  aMama = [];
  aKid = [];
  constructor(
    private oFamilyService: FamilyService,
  ) {
  }
  ngOnInit() {
    this.oFamilyService.getGrandmaAll().subscribe(oRet => {
      this.aGrandma =  oRet;
    });
  }

  getMama(value) {
    this.oFamilyService.getMamaById(value).subscribe(oRet => {
      this.aMama =  oRet;
    });
  }

  getKid(value) {
    this.oFamilyService.getKidById(value).subscribe(oRet => {
      this.aKid =  oRet;
    });
  }
}
