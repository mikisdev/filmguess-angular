import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieCollectionService } from '../../services/movies-collection.service';

@Component({
  selector: 'popup-create-list',
  templateUrl: './popup-create-list.component.html',
  styleUrl: './popup-create-list.component.css'
})
export class PopupCreateListComponent {
  public form: FormGroup;

  @Input('is-visible') isVisible = false;
  @Output('is-visible-change') isVisibleChange = new EventEmitter<boolean>();
  @Output('on-create') onCreateEmmit = new EventEmitter<void>();

  constructor(private readonly fb: FormBuilder, private readonly movieCollectionService: MovieCollectionService) {
    this.form = this.fb.group({
      list: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  public onCreate() {
    if (this.form.valid) {
      this.movieCollectionService.addNewCollection(this.form.value.list);
      this.isVisible = false;
      this.form.value.list = '';
      this.onCreateEmmit.emit();
    }
  }

  public close(value: boolean): void {
    this.isVisible = value;
    this.isVisibleChange.emit(value);
  }
}
