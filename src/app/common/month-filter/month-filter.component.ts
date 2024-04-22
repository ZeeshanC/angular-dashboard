import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardDataService } from '../dashboard-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-month-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './month-filter.component.html',
  styleUrl: './month-filter.component.scss'
})
export class MonthFilterComponent {

  @Output() monthSelected = new EventEmitter<string>();
  @Input() selectedMonth: string = '';

  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  onSelectChange(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected.emit(this.selectedMonth);
  }
}
