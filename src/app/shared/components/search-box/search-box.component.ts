import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit {
  private debounce: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debounce
      .pipe(
        debounceTime(1000) // Hasta que pasa el tiempo vuelve a emitir
      )
      .subscribe((value) => {
        console.log('debounce value', value);
        this.onDebounce.emit(value);
      });
  }

  onKeyPress(searchTerm: string): void {
    this.debounce.next(searchTerm);
  }
}
