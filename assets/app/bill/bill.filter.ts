import { Pipe, PipeTransform, Injectable } from '@angular/core';
import {Friend} from '../friend/friend.model';
import {Bill} from "./bill.model";


@Pipe({name: 'billfilter', pure: false })
export class BillFilter implements PipeTransform {
    transform(bills: any,selectedFrnd:Friend): any {

        console.log("filerBill:::"+JSON.stringify(bills));
        console.log("filterSelectedFriend:::"+JSON.stringify(selectedFrnd));
        if (bills !== null  && selectedFrnd !== null) {
            //let myBills: Bill[] = bills;
            //let myFrnd: Friend = selectedFrnd;
            //const itemName: string = 'name'
            let selectedBill: Bill[] = [];
            for (const item of bills) {
                if (item.email === selectedFrnd.email) {
                    selectedBill.push(item);
                }
            }
            return selectedBill;
        }
        /*
        let frnd:string=JSON.stringify(selectedFrnd);
        if(frnd !== 'undefined' && selectedFrnd !== null) {
            if (JSON.stringify(bills) !== null && JSON.stringify(bills) !== 'undefined' && JSON.stringify(selectedFrnd) !== null && JSON.stringify(selectedFrnd) !== 'undefined') {
                let myBills: Bill[] = bills;
                let myFrnd: Friend = selectedFrnd;
                const itemName: string = 'name'
                let selectedBill: Bill[] = [];
                for (const item of myBills) {
                    if (item[itemName] === myFrnd[itemName]) {
                        selectedBill.push(item);
                    }
                }
                return selectedBill;
            }
        }*/
        /*
        if(items && items.length){
            //TODO Add filter logic here
        }
        */
        /*
        console.log("filerBill:::"+bills);
        console.log("filterFriends:::"+args);
        if(args !== null && args !== 'undefined') {
            if (bills.length === 0 || args.fName === '') {
                //TODO return filter product here
                return bills;
            }
            const itemName: string = 'fName'
            const resultArray = [];
            for (const item of bills) {
                if (item[itemName].fName.toLowerCase().indexOf(args.fName.toLowerCase()) !== -1) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        }
        return bills;*/
    }
}