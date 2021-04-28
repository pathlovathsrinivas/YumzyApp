import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../_service/authentication-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderDetails: any;
  customerInfo: any;
  orderInfo: any;
  restaurantStatus: any;
  orderDataSource: any = [];

  constructor(private router: Router,
    private authenticationService: AuthenticationServiceService) { }
  orderid = 'da325a38-4a6c-4783-8ba8-d3c35e0dbaa0';
  ngOnInit(): void {
    this.getOrderDetails(this.orderid);
  }
  getOrderDetails(orderid) {
    this.authenticationService.getOrderDetails(orderid).subscribe(data => {
      if (data) {
        this.orderDetails = data.data;
        this.customerInfo = this.orderDetails.customerStatus;
        this.orderInfo = this.orderDetails.orderDetails;
        this.orderDataSource = this.orderInfo;
        this.restaurantStatus = this.orderDetails.restaurantStatus;

      }
    })
  }
}
