import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieCollectionService } from '../../../movies/services/movies-collection.service';

@Component({
  selector: 'custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrl: './custom-popup.component.css'
})
export class CustomPopupComponent {
  public form: FormGroup;

  @Input() public isVisible = false;
  @Output() public isVisibleChange = new EventEmitter<boolean>();

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
      this.isVisibleChange.emit(this.isVisible);
    }
  }

  public close(): void {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
