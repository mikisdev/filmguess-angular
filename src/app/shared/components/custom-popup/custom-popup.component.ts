import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieCollectionService } from '../../../movies/services/movies-collection.service';

@Component({
  selector: 'custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrl: './custom-popup.component.css'
})
export class CustomPopupComponent {
  @Input() public isVisible = false;
  @Output() public isVisibleChange = new EventEmitter<boolean>();

  public close(): void {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
