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
  imports: [ButtonDirective, NgStyle, ConfirmDialogModule, ToastModule],
  templateUrl: './ground-details.component.html',
  styleUrl: './ground-details.component.css',
  providers: [ConfirmationService, MessageService, DatePipe],
})
export class GroundDetailsComponent {
  buttonText: string = 'Book';
  ground: Ground | undefined;
  groundService: GroundService = inject(GroundService);
  userService: UserService = inject(UserService);
  route: ActivatedRoute = inject(ActivatedRoute);
  date: string | null;
  token: string | null | undefined;
  groundId: number;
  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    this.date = this.datePipe.transform(tomorrow, 'yyyy-MM-dd');
    this.groundId = Number(this.route.snapshot.params['id']);
    this.token = localStorage.getItem('token');
  }
  ngOnInit(): void {
    this.groundService.getGroundById(this.groundId).subscribe((ground: any) => {
      this.ground = ground.data;
      console.log(this.ground);
    });
  }
  onCrossClick() {
    this.router.navigate(['/homePage']);
  }

  confirm1(event: Event) {
    if (this.token === null || this.token === undefined) {
      this.messageService.add({
        severity: 'error',
        summary: 'Unauthorized',
        detail: 'Please login first',
        life: 3000,
      });
         // Delay navigation to allow the toast to be visible
         setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
    } else {
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: `Are you sure you want to book ${this.ground?.title} for date:${this.date}?`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon: 'none',
        rejectIcon: 'none',
        rejectButtonStyleClass: 'p-button-text',
        accept: () => {
          this.bookFutsal();
          this.messageService.add({
            severity: 'success',
            summary: 'Booking Confirmed',
            detail: 'Please check your email',
            life: 3000,
          });
        },
        reject: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Cancelled',
            detail: 'Booking cancelled',
            life: 3000,
          });
        },
      });
    }
  }
  bookFutsal() {
    this.userService
      .bookFutsal(Number(localStorage.getItem('userId')), this.groundId)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
