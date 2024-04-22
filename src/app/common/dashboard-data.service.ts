import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor() {
    this.circleChartDataSubject.next([100, 200, 300]);
    this.bubbleChartDataSubject.next([
      { x: 1000, y: 200, r: 20 },
      { x: 1500, y: 300, r: 30 },
      { x: 1200, y: 250, r: 25 },
    ]);
    this.barChartDataSubject.next([
      { label: 'Jan-Feb', data: [1000, 1200, 1300] },
      { label: 'Mar-Apr', data: [1100, 1250, 1350] },
      { label: 'May-Jun', data: [1050, 1225, 1325] },
      { label: 'July-Aug', data: [1100, 1225, 1325] },
      { label: 'Sep-Oct', data: [1200, 1225, 1325] },
      { label: 'Nov-Dec', data: [1000, 1225, 1325] },

    ]);
  }

  private selectedMonthSubject = new BehaviorSubject<string>('This Month');
  selectedMonth$ = this.selectedMonthSubject.asObservable();

  private newWinsSubject = new BehaviorSubject<number>(0);
  newWins$ = this.newWinsSubject.asObservable();

  private newWinsChangeSubject = new BehaviorSubject<number>(0);
  newWinsChange$ = this.newWinsChangeSubject.asObservable();

  private winRateSubject = new BehaviorSubject<number>(0);
  winRate$ = this.winRateSubject.asObservable();

  private winRateChangeSubject = new BehaviorSubject<number>(0);
  winRateChange$ = this.winRateChangeSubject.asObservable();

  private newMRRSubject = new BehaviorSubject<number>(0);
  newMRR$ = this.newMRRSubject.asObservable();

  private newMRRChangeSubject = new BehaviorSubject<number>(0);
  newMRRChange$ = this.newMRRChangeSubject.asObservable();

  private circleChartDataSubject = new BehaviorSubject<number[]>([]);
  circleChartData$ = this.circleChartDataSubject.asObservable();

  bubbleChartDataSubject = new BehaviorSubject<any[]>([]);
  bubbleChartData$ = this.bubbleChartDataSubject.asObservable();

  private barChartDataSubject = new BehaviorSubject<any[]>([]);
  barChartData$ = this.barChartDataSubject.asObservable();


  setSelectedMonth(month: string) {
    this.selectedMonthSubject.next(month);
  }

  setNewWins(newWins: number) {
    this.newWinsSubject.next(newWins);
  }

  setNewWinsChange(change: number) {
    this.newWinsChangeSubject.next(change);
  }

  setWinRate(winRate: number) {
    this.winRateSubject.next(winRate);
  }

  setWinRateChange(change: number) {
    this.winRateChangeSubject.next(change);
  }

  setNewMRR(newMRR: number) {
    this.newMRRSubject.next(newMRR);
  }

  setNewMRRChange(change: number) {
    this.newMRRChangeSubject.next(change);
  }

  setCircleChartData(month: string) {
    const newData = this.generateRandomData();
    this.circleChartDataSubject.next(newData);
  }

  setBubbleChartData(month?: any) {
    this.bubbleChartDataSubject.next(month);
  }

  setBarChartData(month: string) {
    const newData = this.generateRandomBarData();
    this.barChartDataSubject.next(newData);
  }

  generateRandomData(): number[] {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 500));
  }

  generateRandomBubbleData(): any[] {
    return Array.from({ length: 3 }, () => ({
      x: Math.floor(Math.random() * 2000),
      y: Math.floor(Math.random() * 400),
      r: Math.floor(Math.random() * 50),
    }));
  }

  generateRandomBarData(): any[] {
    return Array.from({ length: 3 }, () => ({
      label: 'Month',
      data: Array.from({ length: 3 }, () => Math.floor(Math.random() * 2000)),
    }));
  }
}
