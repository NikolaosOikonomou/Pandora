import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GeneralModuleService } from './general-module.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-general-module',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './general-module.component.html',
  styleUrl: './general-module.component.scss'
})
export class GeneralModuleComponent implements OnInit, AfterViewInit {
  
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['namespace', 'name', 'status'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private generModuleService: GeneralModuleService) { }

  ngOnInit(): void {
    this.generModuleService.getModuleDataListener().subscribe(data => {
      this.dataSource.data = data;
    });
    this.generModuleService.getModuleData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

