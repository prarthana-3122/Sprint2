import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  angularForm = new FormGroup ({
    name: new FormControl()
  });
  constructor(private fb: FormBuilder){ //<----inject FormBuilder
    this.createForm();
  }
  createForm()
  {
    this.angularForm = this.fb.group({
      name:['',Validators.required],
    });
  }
}
