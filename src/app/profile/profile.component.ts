import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  private file = [];
  private file1 = [];
  private file2 = [];

  private hideElement: boolean = true;
  private hideElement1: boolean = true;
  private hideElement2: boolean = true;

    toggleElement(){

        this.file = [
          {song_id: '65', duration:'5:23', song_name:'Song 1', pts:'10'},
          {song_id: '35', duration:'8:10', song_name:'Song 2', pts:'8.3'},
          {song_id: '65', duration:'3:23', song_name:'Song 3', pts:'4.9'},     
        ];
           
        if(this.hideElement){
            this.hideElement = false;
        }else{
            this.hideElement = true;
        }
    }

    toggleElement1(){

        this.file1 = [
        {album: 'Title 1', song_id: '65', duration:'5:23', song_name:'Song 1'},
        {album: 'Title 2', song_id: '35', duration:'8:10', song_name:'Song 2'},
        {album: 'Title 3', song_id: '35', duration:'4:10', song_name:'Song 3'},     
    ];
        if(this.hideElement1){
            this.hideElement1 = false;
        }else{
            this.hideElement1 = true;
        }
    }

    toggleElement2(){

    this.file2 = [
      {title: 'video', autor:'Autor 1', pts:'10'},
      {title: 'video', autor:'Autor 2', pts:'8.3'},
      {title: 'video', autor:'Autor 3', pts:'6'},     
   ];
        if(this.hideElement2){
            this.hideElement2 = false;
        }else{
            this.hideElement2 = true;
        }
    }

}
