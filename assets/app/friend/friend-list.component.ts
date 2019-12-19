import {Component, OnInit} from '@angular/core';
import {Friend} from './friend.model';
import {FriendService} from './friend.service';
import {AuthService} from '../auth/auth.service';
import {ErrorService} from '../errors/error.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'friend-list-component',
    templateUrl: 'friend-list.component.html'
})
export class FriendListComponent implements OnInit{

    friends: Friend[];

    display = 'none';

    addFriendForm: FormGroup;

    constructor(private friendService: FriendService, private errorService: ErrorService, private authService: AuthService){}

    ngOnInit (){
        this.addFriendForm = new FormGroup({
			//TODO add email, message. lName and fName control here
            //Monirul -start
            email: new FormControl('',  [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            message: new FormControl('', [Validators.required]),
            lName: new FormControl('', [Validators.required]),
            fName: new FormControl('', [Validators.required])
            //Monirul-end
        });

        this.getFriends();

    }

    getFriends() {
        this.friendService.getFriends()
            .subscribe(
                // TODO handle frends response and error here
                //TODO handle Success here,
                data => {
                    //console.log("GetFriends:::"+JSON.stringify(data));
                    this.onGetSucces(data.obj);
                },
                //Monirul-end
                // TODO handle error here
                error =>{
                    this.onGetError(error);
                }
        );
    }

    onGetSucces(friends: Friend[]) {
        console.log("GetFriends"+JSON.stringify(friends))
        console.log("GetFriendsSize"+JSON.stringify(friends.length))
        this.friendService.friends = friends;
        this.friends = this.friendService.getFriendList();
        this.onClose();
    }

    onGetError(error) {
        this.onClose();
    }

    onClose () {
        this.display = 'none';
    }

    onFreindSelect (friend: Friend) {
        console.log("selectedFriend::"+JSON.stringify(friend))
        this.friendService.selectedFriend = friend;

    }

    onAddUser () {
        this.display = 'block';
    }

    onSubmit() {
        const friend = new Friend(
            this.addFriendForm.value.fName,
            this.addFriendForm.value.lName,
            this.addFriendForm.value.email,
            localStorage.getItem('userName'),
            localStorage.getItem('userId'),
            this.addFriendForm.value.message
        );

        this.friendService.addFriend(friend)
            .subscribe(
                friend =>  this.onAddSucces(friend),
                error => this.onAddError(error)
        );
    }

    onAddSucces(friend: Friend) {
        this.friendService.setFriendList(friend);
        this.friends = this.friendService.getFriendList();
        this.onClose();
    }

    onAddError(error) {
        this.onClose();
    }

}