import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedMonth: string = 'This Month';

  constructor(private dashboardDataService: DashboardDataService) {}

  ngOnInit(): void {
    this.updateData();
  }

  updateData() {
    switch (this.selectedMonth) {
      case 'This Month':
        this.dashboardDataService.setSelectedMonth('This Month');
        this.dashboardDataService.setNewWins(100);
        this.dashboardDataService.setNewWinsChange(20);
        this.dashboardDataService.setWinRate(75);
        this.dashboardDataService.setWinRateChange(-5);
        this.dashboardDataService.setNewMRR(15000);
        this.dashboardDataService.setNewMRRChange(10);

        const circleChartDataThisMonth = [300, 500, 200];
        const circleString = JSON.stringify(circleChartDataThisMonth)
        this.dashboardDataService.setCircleChartData(circleString);

        const bubbleChartDataThisMonth = [
          {
            label: 'USA',
            data: [{ x: 2000, y: 200, r: 20 }, { x: 4000, y: 500, r: 20 }, { x: 6000, y: 800, r: 20 }],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
          {
            label: 'Australia',
            data: [{ x: 3000, y: 150, r: 20 }, { x: 5000, y: 300, r: 20 }, { x: 7000, y: 450, r: 20 }],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'Canada',
            data: [{ x: 2500, y: 100, r: 20 }, { x: 4500, y: 200, r: 20 }, { x: 6500, y: 300, r: 20 }],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
          },
          {
            label: 'UK',
            data: [{ x: 2800, y: 250, r: 20 }, { x: 4800, y: 400, r: 20 }, { x: 6800, y: 550, r: 20 }],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ];
        this.dashboardDataService.setBubbleChartData(bubbleChartDataThisMonth);

        const barChartDataThisMonth = [
          {
            label: 'January',
            data: [2000, 4000, 6000, 8000, 10000, 12000],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
          {
            label: 'February',
            data: [2700, 4700, 6700, 8700, 10700, 12700],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'March',
            data: [3200, 5200, 7200, 9200, 11200, 13200],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
          },
        ];
        const barchartstring = JSON.stringify(barChartDataThisMonth)
        this.dashboardDataService.setBarChartData(barchartstring);

        break;

      case 'Last Month':
        this.dashboardDataService.setSelectedMonth('Last Month');
        this.dashboardDataService.setNewWins(120);
        this.dashboardDataService.setNewWinsChange(-10);
        this.dashboardDataService.setWinRate(70);
        this.dashboardDataService.setWinRateChange(10);
        this.dashboardDataService.setNewMRR(14000);
        this.dashboardDataService.setNewMRRChange(-5);

        const circleChartDataLastMonth = [250, 450, 300];
        const circleStringL = JSON.stringify(circleChartDataLastMonth)
        this.dashboardDataService.setCircleChartData(circleStringL);

        const bubbleChartDataLastMonth = [
          {
            label: 'USA',
            data: [{ x: 1800, y: 180, r: 20 }, { x: 3800, y: 480, r: 20 }, { x: 5800, y: 780, r: 20 }],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
          {
            label: 'Australia',
            data: [{ x: 2800, y: 130, r: 20 }, { x: 4800, y: 280, r: 20 }, { x: 6800, y: 430, r: 20 }],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'Canada',
            data: [{ x: 2200, y: 90, r: 20 }, { x: 4200, y: 190, r: 20 }, { x: 6200, y: 290, r: 20 }],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
          },
          {
            label: 'UK',
            data: [{ x: 2500, y: 230, r: 20 }, { x: 4500, y: 380, r: 20 }, { x: 6500, y: 530, r: 20 }],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ];
        this.dashboardDataService.setBubbleChartData(bubbleChartDataLastMonth);

        const barChartDataLastMonth = [
          {
            label: 'January',
            data: [1800, 3800, 5800, 7800, 9800, 11800],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
          {
            label: 'February',
            data: [2400, 4400, 6400, 8400, 10400, 12400],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'March',
            data: [3100, 5100, 7100, 9100, 11100, 13100],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
          },
        ];
        const barchartl = JSON.stringify(barChartDataLastMonth)
        this.dashboardDataService.setBarChartData(barchartl);

        break;

      case 'Next Month':
        this.dashboardDataService.setSelectedMonth('Next Month');
        this.dashboardDataService.setNewWins(80);
        this.dashboardDataService.setNewWinsChange(5);
        this.dashboardDataService.setWinRate(80);
        this.dashboardDataService.setWinRateChange(15);
        this.dashboardDataService.setNewMRR(16000);
        this.dashboardDataService.setNewMRRChange(15);

        const circleChartDataNextMonth = [400, 600, 250];
        const circleN = JSON.stringify(circleChartDataNextMonth)
        this.dashboardDataService.setCircleChartData(circleN);

        const bubbleChartDataNextMonth = [
          {
            label: 'USA',
            data: [{ x: 2200, y: 220, r: 20 }, { x: 4200, y: 520, r: 20 }, { x: 6200, y: 720, r: 20 }],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
          {
            label: 'Australia',
            data: [{ x: 3500, y: 180, r: 20 }, { x: 5500, y: 330, r: 20 }, { x: 7500, y: 480, r: 20 }],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'Canada',
            data: [{ x: 2800, y: 120, r: 20 }, { x: 4800, y: 220, r: 20 }, { x: 6800, y: 320, r: 20 }],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
          },
          {
            label: 'UK',
            data: [{ x: 3200, y: 280 }, { x: 5200, y: 430 }, { x: 7200, y: 580 }],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ];
        this.dashboardDataService.setBubbleChartData(bubbleChartDataNextMonth);

        const barChartDataNextMonth = [
          {
            label: 'January',
            data: [2200, 4200, 6200, 8200, 10200, 12200],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
          {
            label: 'February',
            data: [2900, 4900, 6900, 8900, 10900, 12900],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'March',
            data: [3600, 5600, 7600, 9600, 11600, 13600],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
          },
        ];
        const barN = JSON.stringify(barChartDataNextMonth)
        this.dashboardDataService.setBarChartData(barN);

        break;

      default:
        break;
    }
  }
  onMonthFilterChange(month: string) {
    this.selectedMonth = month;
    this.updateData();
  }
}
