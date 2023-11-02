import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';
import { Region } from '../../models/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    console.log('Desde by country page');
    this.selectedRegion = region;
    this.countryService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
