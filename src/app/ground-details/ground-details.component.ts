import { Component, inject, OnInit } from '@angular/core';
import { Ground } from '../ground';
import { GroundService } from '../ground.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonDirective } from '../button.directive';
import { DatePipe, NgStyle } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ground-details',
  standalone: true,
  imports: [ButtonDirective,NgStyle,ConfirmDialogModule,ToastModule],
  templateUrl: './ground-details.component.html',
  styleUrl: './ground-details.component.css',
  providers: [ConfirmationService, MessageService,DatePipe]

})
export class GroundDetailsComponent {
  buttonText:string="Book"
  ground:Ground|undefined;
  groundService:GroundService = inject(GroundService);
  userService:UserService = inject(UserService);
  route:ActivatedRoute = inject(ActivatedRoute);
  date:string|null ;
  groundId:number;
  constructor(private router:Router, private datePipe:DatePipe,private confirmationService: ConfirmationService, private messageService: MessageService){
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    this.date = this.datePipe.transform(tomorrow,"yyyy-MM-dd");
    this.groundId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.groundService.getGroundById(this.groundId).subscribe((ground:any)=>{
      this.ground = ground.data;
      console.log(this.ground);
    })
  }
  onCrossClick(){
    this.router.navigate(['/homePage']);
  }

  confirm1(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: `Are you sure you want to book ${this.ground?.title} for date:${this.date}?`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
            this.userService.bookFutsal(Number(localStorage.getItem("userId")),this.groundId);
            this.messageService.add({ severity: 'success', summary: 'Booking Confirmed', detail: 'Please check your email', life:3000 });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
}
}
