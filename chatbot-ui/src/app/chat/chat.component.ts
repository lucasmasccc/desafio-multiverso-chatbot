import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Sentenca } from '../models/Sentenca';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public mensagem: String = '';
  public sentencas = new Array<Sentenca>();
  public context: any;
  public carregando = false;
  public error = false;


  constructor(private chatService: ChatService) {
    this.startAgain();
  }

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  ngOnInit() {
    this.scrollToBottom();
  }

  sendMessage(mensagem) {
    let sentenca = new Sentenca();
    sentenca.texto = mensagem;
    this.sentencas.push(sentenca);
    this.callService(mensagem, this.context);
    this.mensagem = '';
  }

  callService(mensagem, context) {
    this.error = false;
    this.carregando = true;
    this.chatService.submitMessage(mensagem, context).subscribe((response) => {
      setTimeout(()=>{
        console.log(response);
        this.context = response.context;
        let sentenca = new Sentenca();
        let text = '';
        response.output.text.forEach(element => {
          text += ' ' + element;
        });
        sentenca.texto = text;
        sentenca.watson = true;
        this.carregando = false;
        this.sentencas.push(sentenca);        
      }, 2000);
    }, (error) => {
      this.carregando = false;
      this.error = true;
      console.log('error is ', error)
    });
  }

  clearSentences() {
    this.sentencas = [];
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  startAgain(){
    this.callService('', '');
    this.sentencas = [];
  }

}

