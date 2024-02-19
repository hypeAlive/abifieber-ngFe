import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {DataService} from "./shared/data.service";

type UserData = {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    BsDropdownModule
  ],
  standalone: true
})
export class AppComponent {
  protected title = 'Bootstrap App';

  protected modalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService, private dataService: DataService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);

    this.dataService.getUserData().subscribe((data: UserData[]) => {
      console.log(data);
    });
  }
}
