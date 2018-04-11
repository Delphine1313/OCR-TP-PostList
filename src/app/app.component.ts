import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleListPost: string = 'Liste des posts';
  titleSaisiePost: string = 'Saisie d\'un post'; 
 
  //Declaration des variables liées au template lignes 8 et 11 (saisie de post)
  @Input() postTitle:string;
  @Input() postContent:string;

//  posts = [];

  //Initialisation d'un tableau de posts
  posts = [
    {
      title : 'Titre post1',
      content : 'Terrarum pro hae sub prominenti Amano quondam hae Amano lingua lingua sunt missae hae terrarum bello positae bello terrarum in in missae terrarum a vectigales eoo missae factae disparantur vectigales consule duae missae sunt Servilio ob praedonum consule terrarum in.',
      loveIts : 3,
      created_at : new Date('2017-11-18T11:46')
    },
    {
      title : 'Titre post2',
      content : 'Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.',
      loveIts : 0,
      created_at : new Date('2018-03-16T22:15')
    }
  ];

  //Fonction d'ajout du post saisi dans l'appComponent au tableau des posts et vidage des champs de saisie
  addPost(){
    var newPost =      {
      title : this.postTitle,
      content :this.postContent,
      loveIts : 0,
      created_at : new Date()
    };
    this.posts.push(newPost);
    this.postTitle = this.postContent = '';
  }

}

