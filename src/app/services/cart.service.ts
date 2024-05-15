import { Injectable } from '@angular/core';
import { product } from '../components/models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { productresponse } from '../components/models/productsresponse';
import { response } from '../components/models/response';
import { cartmodel } from '../components/models/cartmodel';

const baseUrl = 'http://localhost:5087/api/v1/';
const bearertoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEwMDAwMSIsIlJvbGUiOiJVc2VyIiwiTmFtZSI6IlVzZXIiLCJqdGkiOiIxZWJjODQ4Ny1jMTA4LTQ2OTktYTBhOS0zZTQyZDRkZDVkZTAiLCJleHAiOjE3MTU4MzM1ODgsImlzcyI6Im15ZWNvbW1lci5jb20iLCJhdWQiOiJteWVjb21tZXIuY29tIn0.2ec6Y11bOBQ0j-aNssFiqKlSiY5gavBpTpnDn4WrxfI";
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data = new Subject<any>();
  constructor(private httpclient: HttpClient) { }

  getProducts(): Observable<productresponse>{
    return this.httpclient.get<any>(baseUrl+ 'Products');
  }

  addToCart(addcartItem: any): Observable<response>{
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${bearertoken}`)
    }
     return this.httpclient.post<any>(baseUrl+ 'Cart', addcartItem, header);
  }

  getCart(): Observable<cartmodel>{
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${bearertoken}`)
    }
    return this.httpclient.get<any>(baseUrl+ 'Cart', header);
  }

  removeCart(productCode: string): Observable<response>{
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${bearertoken}`)
    }
    const url = `${baseUrl}Cart/${productCode}`;
    return this.httpclient.delete<any>(url, header);
  }
}
