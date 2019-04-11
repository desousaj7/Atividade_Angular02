import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  id: number = 0
  name: string = ""
  text: string = ""
  likes: number = 0

  myPosts = []


  @Output() salvePost = new EventEmitter()

  ngOnInit() {
  }

  salvar(name: string, text: string){
    this.name = name
    this.text = text

    if (name == "" || text == ""){
      alert("Não pode haver campo vazio")
    }else{
      let post = ({name: this.name, text: this.text, likes: this.likes})
      this.myPosts.push(post)
      this.salvePost.emit(post)
      this.id ++
    }
  }

}
