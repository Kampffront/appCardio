

export interface SocioDatos {
    //datos sociodemograficos primera parte
edad: number;
nombre:String;// p1
tipoDoc:String ;
cedulanum:number ; //  p3
genero: String; //variable p4
telefono: number;// p5 variable 3
estadoCivil: String; //p6
nivelEducativo:String; ///p7
estrato:String; //p8
regimenSalud:String; //p9
zonaResidencia:String; //p10
  direccion: String; //p11
  estudiaActual: String; //p12
  trabajaActual: String; //
  tieneHijos: String; //p13
  cantidadHijos: number;
  dependenciaPadres: String; //p14

//segunda parte tamizaje

  peso: number; // pero en kg variable 4
  altura: number; // en mts
  resultadoImc: number; //variable 5
  interpretacionImc: String;
  descripcionImc: String;

  perAbdominal: number; // en cms variable 6 aproximar
  tensionArterial:number; //  aproximar
  ejercicioDiario:String; //variable 7
  consumoVerduras: String; //variable 8
  tieneHtensionArt: String;
  tomaMedicamentos: String; //var 9
 nivelAzucar: String ; //var 10
 familiarDiabetes:String ; //var 11
  diabetico:String; //var 12
  fuma: String; //var 13

}
