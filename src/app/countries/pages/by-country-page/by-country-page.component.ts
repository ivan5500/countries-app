import { Component } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchByCountry(term: string): void {
    console.log('Desde by country page');
    console.log({ term });
    this.countryService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
