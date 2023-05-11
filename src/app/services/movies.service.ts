import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryServices {
  async getCountries() {
    try {
      const url = environment.Base_url;

      const resp = await fetch(url, {
        method: 'GET',
        headers: {},
      });

      const data = await resp.json();

      if (data) {
        return data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
