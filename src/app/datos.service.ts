import { Platform } from '@ionic/angular';
import { Injectable } from "@angular/core";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy/ngx";

@Injectable({
  providedIn: "root",
})
export class DatosService {
  constructor(private dbcopy: SqliteDbCopy,private platform:Platform) {}
  async copiarBBDD() {
    if(await this.platform.ready()){
      console.log("copia la plataforma está lista");      
    }
    else{
      console.log("copia plataforma no preparada");
      
    }
    console.log("copia, comenzando");

    await this.dbcopy
      .copy("Horario16e.db", 0)
      .then(() => {
        console.log("copia copiada correctamente");
      })
      .catch((error) => {
        console.log("copia fallo al copiar");
        console.log("copia"+JSON.stringify(error))
      });
    console.log("copia, terminando");
  }
}
