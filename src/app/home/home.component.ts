import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import {
  Http,
  Headers,
  RequestOptions,
  Response
} from '@angular/http'; import 'rxjs/add/operator/map';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { Fotos } from './fotos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  protected album = false;
  protected currentPage = 1;
  protected itemPerPage = 10;
  returnedArray: Fotos[];
  contentArray: any;
  itemsAlbum: string;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    protected http: Http
  ) {}


  resetViewAlbum() {
    this.album = false;
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
    this.itemPerPage = event.itemsPerPage;
    console.log(event);
  }

  changeItemsPerPage(event: PageChangedEvent) {
    console.log(event);
    event.itemsPerPage = this.itemPerPage;
    // this.pageChanged(event);
  }
  protected getHeaders(): RequestOptions {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    return new RequestOptions({
      headers: new Headers(headers)
    });
  }

  public editalbum(entry: any): void {
    this.itemsAlbum = JSON.stringify(entry);
    console.log('items -> itemsAlbum: ', this.itemsAlbum);
    // this.album = true;
  }

  public deletealbum(entry: any): void {
    this. itemsAlbum = JSON.stringify(entry);
    this.album = true;
  }

  prueba(): void {

    this.spinnerService.show();

    this.http.get(`https://jsonplaceholder.typicode.com/photos`, this.getHeaders())
      // .map(d => d.json())

      .subscribe((resp) => {
        this.contentArray = resp.json();
        console.log('respuesta -> contentArray: ', this.contentArray);
        this.returnedArray = this.contentArray.slice(0, this.itemPerPage);
        console.log('returned -> returnedArray: ', this.returnedArray);
        this.spinnerService.hide();
      });

    // for (let key in this.config) {
    //    console.log(key, ' ' this.config[key]);
    // }
    // console.log(this.config);

  }
}
