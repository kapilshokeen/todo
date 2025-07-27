import { HttpClient, HttpParams, type HttpParamsOptions } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private httpClient = inject(HttpClient);

  get<T>(url: string, paramsOptions?: HttpParamsOptions) {
    const params = new HttpParams(paramsOptions);
    return this.httpClient.get<T>(
      url,
      {
        params,
        responseType: "json"
      }
    );
  }

  post<T>(url: string, data: any, paramsOptions?: HttpParamsOptions) {
    const params = new HttpParams(paramsOptions);
    return this.httpClient.post<T>(
      url,
      JSON.stringify(data),
      {
        params,
        responseType: "json"
      }
    );
  }

  patch<T>(url: string, data: any, paramsOptions?: HttpParamsOptions) {
    const params = new HttpParams(paramsOptions);
    return this.httpClient.patch<T>(
      url,
      JSON.stringify(data),
      {
        params,
        responseType: "json"
      }
    );
  }

}
