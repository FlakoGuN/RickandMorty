import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { CharacterService } from '../character.service';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { Character } from '../character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
character$: Observable<Character> | undefined;

  constructor(private route:ActivatedRoute,
              private characterSrv:CharacterService,
              private location:Location,
              private router:Router) { }

  ngOnInit(): void {

    this.route.params.pipe(take(1)).subscribe((params:any) => { 
      const id = params['id'];
    this.character$ = this.characterSrv.getDetails(id);
  });
}

goBack():void {
  this.router.navigate(['/home']);
}
}
