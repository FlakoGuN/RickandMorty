import { Component, Inject, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { filter, take } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

type RequestInfo = {
  next: string;
}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
private query: string = '';
private page: number = 1;
private hideScroll = 200;
private showScroll = 500;

info: RequestInfo = {
  next: "",
};

  constructor(@Inject(DOCUMENT) private document: Document,
    private characterSvc:CharacterService,
    private route:ActivatedRoute,
    private router:Router) { 
      this.urlChange();
    }

  ngOnInit(): void {
    this.getByQuery();
  }
  
  private getByQuery():void {
    this.route.queryParams.pipe(take(1)).subscribe((params:any) => {
      console.log(params);
      this.query = params['q'] || '';
      this.getData();
    
    });
  }

  private getData ():void {
    this.characterSvc
    .searchCharacters(this.query, this.page)
    .pipe (take(1))
    .subscribe((res:any)=> { 
        console.log(res);
        const {info, results} = res;
        this.characters = [...this.characters, ...results];
        this.info = info;
       console.log(this.characters);
      });
  }

private urlChange():void {
  this.router.events
  .pipe(filter((event) => event instanceof NavigationEnd)) 
  .subscribe(() => {
    this.characters = [];
    this.page = 1;
    this.getByQuery();
  });
}

onScrollDown():void {
  if (this.info.next) {
    this.page++;
    this.getData();
  }
}

onScrollTop():void {
  
  this.document.documentElement.scrollTop = 0;
}
}
