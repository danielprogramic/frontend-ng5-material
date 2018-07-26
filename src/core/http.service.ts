import { Injectable } from '@angular/core';
import { Http, RequestOptions, XHRBackend } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService extends Http {

  constructor(
    backend: XHRBackend,
    options: RequestOptions,
    private router: Router,
   ) {
    super(backend, options);
  }

}
