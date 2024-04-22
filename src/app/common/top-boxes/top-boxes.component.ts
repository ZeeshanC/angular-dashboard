import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../dashboard-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-boxes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-boxes.component.html',
  styleUrl: './top-boxes.component.scss'
})
export class TopBoxesComponent implements OnInit {

  newWins: number = 0;
  newWinsChange: number = 0;
  winRate: number = 0;
  winRateChange: number = 0;
  newMRR: number = 0;
  newMRRChange: number = 0;

  constructor(private dashboardDataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dashboardDataService.newWins$.subscribe((data) => {
      this.newWins = data;
    });

    this.dashboardDataService.newWinsChange$.subscribe((data) => {
      this.newWinsChange = data;
    });

    this.dashboardDataService.winRate$.subscribe((data) => {
      this.winRate = data;
    });

    this.dashboardDataService.winRateChange$.subscribe((data) => {
      this.winRateChange = data;
    });

    this.dashboardDataService.newMRR$.subscribe((data) => {
      this.newMRR = data;
    });

    this.dashboardDataService.newMRRChange$.subscribe((data) => {
      this.newMRRChange = data;
    });
  }

}
