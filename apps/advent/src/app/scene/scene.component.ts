import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spark-fountain-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit {
  @Input('backgroundUrl') backgroundUrl: string;

  constructor() {}

  ngOnInit(): void {}
}
