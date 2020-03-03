import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

export interface rankItem {rank: number, name: string}

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: "cdk-drag-drop-sorting-example",
  templateUrl: "cdk-drag-drop-sorting-example.html",
  styleUrls: ["cdk-drag-drop-sorting-example.css"]
})
export class CdkDragDropSortingExample implements OnInit {
  movies: rankItem[] = [
    { rank: 9991000, name: "Episode I - The Phantom Menace" },
    { rank: 9992000, name: "Episode II - Attack of the Clones" },
    { rank: 9993000, name: "Episode III - Revenge of the Sith" },
    { rank: 9994000, name: "Episode IV - A New Hope" },
    { rank: 9995000, name: "Episode V - The Empire Strikes Back" },
    { rank: 9996000, name: "Episode VI - Return of the Jedi" },
    { rank: 9997000, name: "Episode VII - The Force Awakens" },
    { rank: 9998000, name: "Episode VIII - The Last Jedi" },
    { rank: 9999000, name: "Episode IX – The Rise of Skywalker" }
  ];
  moviesSorted: rankItem[] = [];

  ngOnInit() { 
    // create a copy of the array with references to the original 
    this.movies.map(x => this.moviesSorted.push(x));
    this.moviesSorted.sort((a, b) => (a.rank > b.rank) ? 1 : -1);
  }	

  drop(event: CdkDragDrop<rankItem[]>) {
    var originItem = this.moviesSorted[event.previousIndex];
    var currentItem = this.moviesSorted[event.currentIndex];
    var previousItem = this.moviesSorted[event.currentIndex-1] || currentItem;    
    var nextItem = this.moviesSorted[event.currentIndex+1] || currentItem;

    // drag item down
    if(event.currentIndex > event.previousIndex )
    {
      const newRank = (nextItem.rank - currentItem.rank) / 2 || 1000;
      originItem.rank = Math.floor(currentItem.rank + newRank);
    }
    // drag item up
    if( event.currentIndex < event.previousIndex ) 
    {
      const newRank = (previousItem.rank - currentItem.rank) / 2 || -1000;
      originItem.rank = Math.floor(currentItem.rank + newRank);
    }
    // drag to same place
    else {
      // do nothing
    }

    this.moviesSorted.sort((a, b) => (a.rank > b.rank) ? 1 : -1);
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
