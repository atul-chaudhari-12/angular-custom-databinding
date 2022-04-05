import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: "server", name: "server 1", content: "content"}];
  
  onServerAdded(serverData: {servername:string, serverContent:string}) {
    this.serverElements.push({
      type: "server",name:serverData.servername, content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: {servername:string, serverContent:string}) {
      this.serverElements.push({
        type: "blueprint",name:blueprintData.servername, content:blueprintData.serverContent
      })
  }
}
