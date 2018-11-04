import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Sentenca } from '../models/Sentenca';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';




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
  public modalRef: BsModalRef;
  public modalRef2: BsModalRef;
  public closed = false;
  public arrayIntent = [null, null, null, null, null];
  public fechouModal = false;
  config = {
    backdrop: false,
    ignoreBackdropClick: true
  };


  constructor(private chatService: ChatService, private modalService: BsModalService, private router: Router) {
    this.startAgain();
  }

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  @ViewChild('reiGelado') private reiGeladoModel: TemplateRef<any>

  @ViewChild('descongelado') private descongeladoModel: TemplateRef<any>

  ngOnInit() {
    this.scrollToBottom();
    this.openModal();
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
        console.log(response)
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
        this.checkEndGame(response);        
      }, 1000);
    }, (error) => {
      this.carregando = false;
      this.error = true;
      console.log('error is ', error)
    });
  }

  checkEndGame(response: any){
    console.log(response);
    if(response.intents !== [] && response.intents[0] !== undefined){
      if(response.intents[0].intent  === "qualoseunome"){
        this.arrayIntent[0] = true;
      }
      if(response.intents[0].intent  === "QualasuaIdade"){
        this.arrayIntent[1] = true;
      }
      if(response.intents[0].intent  === "CombateExp"){
        this.arrayIntent[2] = true;
      }
      if(response.intents[0].intent === "Resumodoguerreiro"){
        this.arrayIntent[3] = true;
      }
      if(response.intents[0].intent === "HabilidadesEspeciais"){
        this.arrayIntent[4] = true;
      }
    }
    if(this.arrayIntent.every(element => element === true) && !this.fechouModal){
      this.openModalFimDeJogo();
    }  
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
    this.closed = false;
    this.arrayIntent = [null, null, null, null, null];
    this.fechouModal = false;
  }

 
  openModal() {
    this.modalRef = this.modalService.show(this.reiGeladoModel,this.config);
  }

  openModalFimDeJogo(){
    this.modalRef2 = this.modalService.show(this.descongeladoModel);
  }

  closeModalInicial(){
    this.closed = true;
    this.modalRef.hide()
  }

  closeSegundoModal(){
    this.modalRef2.hide();
    this.fechouModal = true;
  }

  fecharModalAbrirLink(){
    this.closeSegundoModal();
    this.router.navigate(['./about']);
  }

}

