import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"rank":1,
    "name":"C.罗纳尔多",
      "nationality":"葡萄牙",
      "goal":105,
      "match":140,
      "club":"曼联/皇马",
      "title":4},
      {"rank":2,
    "name":"梅西",
      "nationality":"阿根廷",
      "goal":94,
      "match":115,
      "club":"巴塞罗那",
      "title":4},
      {"rank":3,
    "name":"劳尔.冈萨雷斯",
      "nationality":"西班牙",
      "goal":71,
      "match":142,
      "club":"皇家马德里",
      "title":3},
      {"rank":4,
    "name":"范尼斯特鲁伊",
      "nationality":"荷兰",
      "goal":56,
      "match":73,
      "club":"曼联/皇马",
      "title":0},
      {"rank":5,
    "name":"亨利",
      "nationality":"法国",
      "goal":50,
      "match":112,
      "club":"阿森纳/巴萨",
      "title":2}
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
      "rank":6,
    "name":"New User",
      "nationality":"中国",
      "goal":50,
      "match":100,
      "club":"AC米兰",
      "title":1
  })
}
  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(function (a,b) {
      if (a.rank > b.rank){
        return 1;
      } 

      if (a.rank < b.rank){
        return -1;
      }  
      return 0;  
    } 
    )
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(function (a,b) {
      if(a.rank < b.rank) {
        return 1;
      }

      if (a.rank > b.rank) {
        return -1;
      }
      return 0;
    }
    )
  }
  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.users.sort(function (a,b){
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
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
