import { Component, Input } from '@angular/core';

@Component({
    selector: 'super-input',
    templateUrl: 'super-input.html'
})

export class SuperInputComponent {

  @Input() label: string;
  @Input() inputErrors: any;
  @Input() control: any;
  private errors: any;
  private errorMessage: string = '';
  private firstRun: boolean = true;
  
  constructor() {
  }

  ngOnChanges(changes:any): void {
    if (this.firstRun == true)
      this.firstRun = false;
    else {
      this.errors = changes.inputErrors.currentValue;
      if (this.errors && this.control.dirty) {
        if (this.errors.required)
          this.errorMessage = "Este campo es obligatorio";
        if (this.errors.maxlength)
          this.errorMessage = "Número de caracteres no permitido";
        if (this.errors.email)
          this.errorMessage = "Formato de email inválido";
      }
    }
  }

}