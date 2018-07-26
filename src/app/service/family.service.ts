import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { URLSearchParams, Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class FamilyService {

  private sUrl: string;

  constructor(private oHttp: Http) {
    this.sUrl = 'http://localhost:4200/api/';
  }

  getGrandmaAll() {
    const oParams = new URLSearchParams();
    return this.oHttp.get(`${this.sUrl}/grandma/all`, { search: oParams })
      .map(res => res.json() || []);
  }

  getMamaById(grandmaId: number) {
    const oParams = new URLSearchParams();
    return this.oHttp.get(`${this.sUrl}/mama/${grandmaId}`, { search: oParams })
      .map(res => res.json() || []);
  }

  getKidById(mamaId: number) {
    const oParams = new URLSearchParams();
    return this.oHttp.get(`${this.sUrl}/kid/${mamaId}`, { search: oParams })
      .map(res => res.json() || []);
  }
}

