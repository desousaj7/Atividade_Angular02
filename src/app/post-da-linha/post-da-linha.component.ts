import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-da-linha',
  templateUrl: './post-da-linha.component.html',
  styleUrls: ['./post-da-linha.component.css']
})
export class PostDaLinhaComponent implements OnInit {

  @Input() post:any

  like(){
    this.post.likes++
  }
  ngOnInit() {
    
  }

}
