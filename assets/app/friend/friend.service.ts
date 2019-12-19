import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter,Output } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Friend } from "./friend.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class FriendService {

    onGetFriendSuccess = new EventEmitter<Friend>();

    public friends: Friend[] = [];

    public selectedFriend: Friend =null;

    constructor(private http: Http, private errorService: ErrorService) {
    }

    getFriendList(): Friend[] {
        return this.friends;
    }

    setFriendList(friend: Friend) {
        this.friends.push(friend);
    }

    getSelectedFriend(){
        return this.selectedFriend;
    }

    addFriend(friend: Friend) {
        const body = JSON.stringify(friend);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/friend' + token, body, {headers: headers}).map(
            //TODO handle response and error here
            friend => this.onAddFriendSuccess(friend))
            .catch(error => {
                    return Observable.throw(error.json());
                }
            //TODO handle response and error here
			);
    }

    onAddFriendSuccess (response) {
        const result = response.json();
        const friend = new Friend(
            result.obj.fName,
            result.obj.lName,
            result.obj.email,
            result.obj.userName,
            result.obj.userId,
            result.obj.message
        );
        return friend;
    }

    getFriends() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('http://localhost:3000/friend'+ token, {headers: headers}).map(
            //TODO handle response and error here
            data => data.json()
            ).catch(error => {
                    return Observable.throw(error.json());
                }
            //TODO handle response and error here
			)
            ;
    }
}