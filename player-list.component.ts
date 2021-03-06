import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {PlayerService} from "../player.service";
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectPlayer:any={
    name:"未选择"
  };
  searchResult:Array<any>;
  players:Array<any>=[];
  deleteLast() {
    this.players.pop();
  }
  search(){
    this.searchResult = this.players.filter(item=>{
      let result = String(item[this.searchType]).match(this.searchText)
      if(result){
        return true
      }else{
        return false
      }
    })
  }
  getPlayerClick(ev){
    this.selectPlayer = ev
    console.log(ev);
  }
  saveNewPlayer(){
  this.players.push({
      "id":6,
    "name":"New User",
      "nationality":"中国",
      "match":100,
      "goal":50,
      "club":"AC米兰",
      "title":1
  });
}
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.players.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.players.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.players.sort(function (a,b){
       if (Math.random() > 0.5) {
         return 1;
       }

       if (Math.random() < 0.5) {
         return -1;
       }
       return 0;
    }
    )
  }
  constructor(meta: Meta, title: Title, private playerserv:PlayerService) {
    this.players = this.playerserv.getPlayers()
 
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
  }

  ngOnInit() {}
}
