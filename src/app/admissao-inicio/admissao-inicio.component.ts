import {Component, OnInit} from '@angular/core';

/**
 * @title Stepper label bottom position
 */
@Component({
  selector: 'app-admissao-inicio',
  templateUrl: './admissao-inicio.component.html',
  styleUrls: ['./admissao-inicio.component.css']
})

export class AdmissaoInicioComponent  implements OnInit {
  pesquisarCpf(){
    const formData = new FormData(document.querySelector('#consultaCpf') as HTMLFormElement);

    var cpf = formData.get('cpf') as string;

    //ponto de consulta na base por CPF / validação de CPF
    
    if (cpf == "111.222.333-44"){
      //se CPF válido
      var mostraErro = document.getElementById('erroCpf')!;
      mostraErro.style.display = 'none';
      var mostraCard = document.getElementById('cardList')!;
      mostraCard.style.display = '';
      var btnNovaAdmissao = document.getElementById('btnNovaAdmissao')!;
      btnNovaAdmissao.style.display = '';
      this.preencheDados(); //responsável por preencher valores do html com o retorno da base.
    } else {
      //se CPF inválido
      var mostraErro = document.getElementById('erroCpf')!;
      mostraErro.style.display = '';
      var mostraCard = document.getElementById('cardList')!;
      mostraCard.style.display = 'none';
      var btnNovaAdmissao = document.getElementById('btnNovaAdmissao')!;
      btnNovaAdmissao.style.display = 'none';
    }
    
    return false;
  }

  preencheDados(){
    document.getElementById('nomePessoa')!.innerHTML = 'Victor Miguel Madeira';
    document.getElementById('iconeSituacaoCpf')!.innerHTML = 'check_circle_outline';
    document.getElementById('iconeSituacaoCpf')!.style.color = 'green';
    document.getElementById('situacaoCpf')!.innerHTML = 'Regular';
    document.getElementById('numeroContaAp')!.innerHTML = '557932-4';
    document.getElementById('numeroContaCo')!.innerHTML = '778461-8';
  }

  breakpoint: number = 4;

  //oferece aos cards a habilidade de redimensionar.
  ngOnInit() {
    this.breakpoint = (window.innerWidth >= 1500) ? 4 : (window.innerWidth >= 1200) ? 3 : (window.innerWidth >= 800) ? 2 : 1;
  }
  
  onResize(event : any) {
    this.breakpoint = (event.target.innerWidth >= 1500) ? 4 : (event.target.innerWidth >= 1200) ? 3 : (event.target.innerWidth >= 800) ? 2 : 1;
  }
}