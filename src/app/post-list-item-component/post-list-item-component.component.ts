import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  //Declaration du post transmis par le template du postListComponent (ligne 3)
  @Input() post;
  
  constructor() { }

  // function d'incrémentation de l'attribut loveIts du post
  loveIt(aimeOuPas) {
    this.post.loveIts += aimeOuPas;
  }  

  ngOnInit() {
  }

}
