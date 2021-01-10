import { DatosService } from "./../datos.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private datosService: DatosService) {}
  ngOnInit(): void {
    
  }

  copia(){
    this.datosService.copiarBBDD();
  }
}
