import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sidebarOpen = true;

  metrics = [
    { title: 'Total Units in Yard', subtitle: 'All intermodal units on terminal', value: '2,190' },
    { title: 'Available for Loading', subtitle: 'Units cleared for train assignment', value: '1,558' },
    { title: 'Units on Hold', subtitle: 'Not currently available for loading', value: '632' }
  ];

  tableHeaders = ['DESTINATION', 'KC1', 'AC2', 'KC3', 'RC4', 'KC5', 'ACT', 'KF4', 'WAT', 'KI1', 'KO2', 'RO4', 'KRI', 'KT1', 'KWT', 'UCA', 'UCT', 'URD', 'TOTAL'];
  tableRows = [
    { destination: 'ADD PO', values: [9, 0, 11, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20] },
    { destination: 'ADD PG', values: [0, 10, 336, 5, 146, 0, 0, 77, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 452] },
    { destination: 'ADR PO', values: [4, 0, 7, 0, 3, 1, 1, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 14] },
    { destination: 'ARP MC', values: [0, 0, 117, 0, 1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118] }
  ];

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
