import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrimeroFormComponent } from '../primero-form/primero-form.component';

@Component({
  selector: 'app-primero-list',
  templateUrl: './primero-list.component.html',
  styleUrls: ['./primero-list.component.css']
})
export class PrimeroListComponent implements OnInit {

  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  clickAddTodo(){
    const modal = this.modalService.open(PrimeroFormComponent);
    modal.result.then{
      this.handleModalPrimeroFormCLose.bind(this),
      this.handleModalPrimeroFormCLose.bind(this)


    }
  }

  handleModalPrimeroFormCLose(){
    alert('se ha cerrado el modal');
  }

}
