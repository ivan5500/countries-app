import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initValue: string = '';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountry.countries;
    this.initValue = this.countryService.cacheStore.byCountry.term;
  }

  searchByCountry(term: string): void {
    console.log('Desde by country page');
    console.log({ term });
    this.countryService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
