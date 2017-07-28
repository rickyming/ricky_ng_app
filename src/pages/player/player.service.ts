import { Injectable } from "@angular/core";

@Injectable()
export class PlayerService{
    players: Array < any > = [
      {"id":1,
    "name":"C.罗纳尔多",
      "nationality":"葡萄牙",
      "match":140,
      "goal":105,
      "club":"曼联/皇马",
      "title":4},
      {"id":2,
    "name":"梅西",
      "nationality":"阿根廷",
      "match":115,
      "goal":94,
      "club":"巴塞罗那",
      "title":4},
      {"id":3,
    "name":"劳尔.冈萨雷斯",
      "nationality":"西班牙",
      "match":142,
      "goal":71,   
      "club":"皇家马德里",
      "title":3},
      {"id":4,
    "name":"范尼斯特鲁伊",
      "nationality":"荷兰",
      "match":73,
      "goal":56,
      "club":"曼联/皇马",
      "title":0},
      {"id":5,
    "name":"亨利",
      "nationality":"法国",
      "match":112,
      "goal":50,
      "club":"阿森纳/巴萨",
      "title":2}
  ];

    constructor(){

    }

    getPlayers(){
        return this.players;
    }

}

