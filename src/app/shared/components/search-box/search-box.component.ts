import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debounce: Subject<string> = new Subject<string>();
  private suscription?: Subscription;

  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue: string = '';

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.suscription = this.debounce
      .pipe(
        debounceTime(300) // Hasta que pasa el tiempo vuelve a emitir
      )
      .subscribe((value) => {
        console.log('debounce value', value);
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }

  onKeyPress(searchTerm: string): void {
    this.debounce.next(searchTerm);
  }
}
