import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  //Declaration du tableau transmis par le template du appComponent (ligne 23)
  @Input() postList;


  
  
  constructor() { }

  ngOnInit() {
  }
}
