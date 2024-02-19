import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {DataService} from "./shared/data.service";
import {User} from "./shared/user.types";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    BsDropdownModule,
    ReactiveFormsModule
  ],
  standalone: true
})
export class AppComponent {
  protected title = 'Bootstrap App';

  protected modalRef: BsModalRef | undefined;
  protected userForm: FormGroup;

  constructor(private modalService: BsModalService, private dataService: DataService, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.dataService
        .createUser(this.userForm.value as User)
        .subscribe(console.log);

      this.modalRef?.hide();
      this.userForm.reset();

      console.log("user created!");
    }
  }
}
