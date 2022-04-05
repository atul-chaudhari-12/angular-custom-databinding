import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srCreated') ServerCreated = new EventEmitter<{servername:string, serverContent:string}>()
  @Output('bpCreated') BlueprintCreated = new EventEmitter<{servername:string, serverContent:string}>()

  serverName: string = "";
  serverContent: string = ""
  onAddServer() {
    this.ServerCreated.emit({servername: this.serverName, serverContent: this.serverContent})   
  }

  onAddBlueprint() {
    this.BlueprintCreated.emit({servername: this.serverName, serverContent: this.serverContent})    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
