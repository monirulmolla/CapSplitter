import {Component, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {Bill} from './bill.model';
import {BillService} from './bill.service';
import {FriendService} from '../friend/friend.service';
@Component({
    selector: 'add-bill-component',
    templateUrl: './add-bill.component.html'

})
export class AddBillComponent {

    bills: Bill[];

    addBillForm:FormGroup;

    paidByYou: boolean = false;

    splitEqually: boolean = false;

    constructor(private billService:BillService, private friendService: FriendService){}

    ngOnInit() {

        this.addBillForm = new FormGroup({
            //TODO create desc and amt form control here
            //Monirul -start
            desc: new FormControl('', [Validators.required]),
            amt: new FormControl('', [Validators.required])
            //Monirul-end
        });
    }

    onPaidByYou () {
        this.paidByYou = true;
    }

    onSplitEqually () {
        this.splitEqually = true;
    }

    onClose() {
        this.addBillForm.reset();
        this.billService.displayAddBill = 'none';
    }

    onSplit() {
        const bill =  new Bill(
            this.addBillForm.value.desc,
            this.addBillForm.value.amt,
            new Date().getTime(),
            this.friendService.selectedFriend.email,
            localStorage.getItem('userName'),
            localStorage.getItem('userId'),
            this.paidByYou,
            this.splitEqually
        );

        this.billService.addBill(bill)
            .subscribe(
                response =>  this.onAddSucces(response),
                error => this.onAddError(error)
        );
        this.onClose();
    }

    onAddSucces(bill: Bill) {
        console.log("AddBillSuccess:::"+JSON.stringify(bill))
        this.billService.setBillList(bill);
        this.onClose();
    }

    onAddError(error) {
        this.onClose();
    }

}