import { Component, OnInit } from '@angular/core';
import { Chat } from '../models/chat';
import { Image } from '../models/image';
import { ChatService } from '../services/chat.service';
import { ImageService } from '../services/image.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  msgs: string[] = [];
  chats: Chat[] = [];
  images: Image[] = [];
  constructor(public messageService: MessageService, 
    public chatService: ChatService, public imageService: ImageService) { }

  ngOnInit(): void {
    this.getChat();
    this.getImages();
  }
  getChat(): void {
    this.chatService.getChats()
      .subscribe(chats => this.chats = chats);
  }
  isSender(id: number):boolean {       
    if(id == 1) {
      return true;
    }
     else { 
      return false;
    } 
  }

  getImages(): void {
    this.imageService.getImages()
      .subscribe(images => this.images = images);
  }
  
  mssg: any[] = Object.entries(this.chats);
  //console.log(Object.entries(mssg));
  
  
}
