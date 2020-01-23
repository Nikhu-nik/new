import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.page.html',
  styleUrls: ['./adminorders.page.scss'],
})
export class AdminordersPage implements OnInit {
  listData: MatTableDataSource<any>;
  arr;

  displayedColumns: string[] = [ 'name','price','quantity','total'];


  constructor(private rest:RestService) { }

  ngOnInit() {
    this.retrieval();
  }
  retrieval() {
    this.rest.getAllOrder().subscribe((result) => {

      if (result === undefined) {
        console.log(result);


      }
      else {

        // this.listData = new MatTableDataSource(result);
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.listData = this.arr[0].value;
        console.log(this.listData);
 
        this.listData = new MatTableDataSource(this.arr[1].value);


      }

    }, (err) => {
      console.log(err);

    });

  }
}
