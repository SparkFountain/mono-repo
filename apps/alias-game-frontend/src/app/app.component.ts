import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat/chat.service';

@Component({
  selector: 'spark-fountain-alias-game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public users: number = 0;
  public message: string = '';
  public messages: string[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });
  }

  addChat() {
    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }
}
