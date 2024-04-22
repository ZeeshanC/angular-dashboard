import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardDataService } from '../dashboard-data.service';
import Chart, { registerables } from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circle-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circle-chart.component.html',
  styleUrl: './circle-chart.component.scss'
})
export class CircleChartComponent implements OnInit, AfterViewInit, OnDestroy {
  circleChart: Chart<'doughnut'> | null = null;
  canvas: HTMLCanvasElement | null = null;

  constructor(private dashboardDataService: DashboardDataService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dashboardDataService.circleChartData$.subscribe((data) => {
      if (this.circleChart) {
        this.circleChart.destroy();
      }
      this.createChart(data);
    });
  }

  createChart(data: number[]) {
    this.canvas = document.getElementById('circleChart') as HTMLCanvasElement;
    if (!this.canvas) return;

    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    Chart.register(...registerables);

    this.circleChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Referral', 'Direct', 'Organic Search'],
        datasets: [
          {
            label: 'Page Views',
            data: data,
            backgroundColor: ['#007BFF', '#28A745', '#DC3545'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: 'bottom',
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    if (this.circleChart) {
      this.circleChart.destroy();
    }
  }
}
