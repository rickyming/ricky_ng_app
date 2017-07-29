import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../player.service'

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit,OnDestroy {
  playerId:string="";
  player:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getPlayerSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private playerServ:PlayerService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    if(this.isNew){
    this.playerServ.players.push(this.player)
    }
    this.location.back();
  }
  ngOnInit() {
    this.getPlayerSubscribe = this.route.params.subscribe(params=>{
      this.getPlayer(params['sid']).then(player=>{
      console.log(player)
      this.playerId = player.id;
      this.player = player
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getPlayerSubscribe.unsubscribe();
  }

  getPlayer(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let player = {name:""}
        this.isNew = true;
        resolve(player)
      }
      let player = this.playerServ.players.find(item=>item.id == id)
      if(player){
        resolve(player)
      }else{
        reject("player not found")
      }
    })
    return p
}

}
