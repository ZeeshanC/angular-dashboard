import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboardDataService } from '../dashboard-data.service';

@Component({
  selector: 'app-bubble-chart',
  standalone: true,
  imports: [],
  templateUrl: './bubble-chart.component.html',
  styleUrl: './bubble-chart.component.scss'
})
export class BubbleChartComponent implements OnInit, AfterViewInit, OnDestroy {
  bubbleChart: Chart<'bubble'> | null = null;
  canvas: HTMLCanvasElement | null = null;

  constructor(private dashboardDataService: DashboardDataService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dashboardDataService.bubbleChartDataSubject.subscribe((data) => {
      if (this.bubbleChart) {
        this.bubbleChart.destroy();
      }
      this.createChart(data);
    });
  }

  createChart(data: any[]) {
    this.canvas = document.getElementById('bubbleChart') as HTMLCanvasElement;
    if (!this.canvas) return;

    this.canvas.width = 600;
    this.canvas.height = 600;

    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    Chart.register(...registerables);

    this.bubbleChart = new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: data,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'MRR ($)',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Country',
            },
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    if (this.bubbleChart) {
      this.bubbleChart.destroy();
    }
  }
}
