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

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor(private readonly fb: FormBuilder, private readonly movieCollectionService: MovieCollectionService) {
    this.form = this.fb.group({
      list: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  public onCreate() {
    if (this.form.valid) {
      this.movieCollectionService.addNewCollection(this.form.value.list);
      this.isVisible = false;
      this.form.value.list = '';
    }
  }

  public close(value: boolean): void {
    this.isVisible = value;
    this.isVisibleChange.emit(value);
  }
}
