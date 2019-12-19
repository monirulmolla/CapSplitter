import {Component, OnInit} from '@angular/core';
import {BillService} from './bill.service';
import {FriendService} from '../friend/friend.service';
import { Bill } from './bill.model';
import { BillFilter } from './bill.filter';
@Component({
    selector: 'bill-list-component',
    templateUrl: './bill-list.component.html'

})
export class BillListComponent implements OnInit {

    bills: Bill[]=[];

    constructor(private billService: BillService, private friendService: FriendService){}

    ngOnInit() {
        this.friendService.onGetFriendSuccess
            .subscribe(
            () => {
                this.getBills();
            }
        );
        this.getBills();
    }

    getBills() {
        this.billService.getBills()
            .subscribe(
                response =>  this.onGetSucces(response),
                error => this.onGetError(error)
        );
    }

    onGetSucces(bills: any) {
        //TODO get bill list from service
        //this.billService.bills = bills;
        //this.bills =
        // this.bills=this.billService.getBillList();
        if(bills.obj !== null && bills.obj !== 'undefined'){
            console.log("billsSuccess"+JSON.stringify(bills.obj));
            let myBills:Bill[] = bills.obj;
            this.billService.bills = myBills;
            this.bills=this.billService.getBillList();
        }
    }

    onGetError(error) {
    }
}