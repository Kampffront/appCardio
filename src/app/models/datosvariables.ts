export interface Datosvariables {

//  una interfaz para poder traer datos de la base de datos

    edad: number;
    nombre: string;
    tipoDoc: string;
    cedulanum: number;
    genero: string ;
    telefono: number ;
    estadoCivil: string ;
    nivelEducativo: string;
    estrato: string ;
    regimenSalud: string;
    zonaResidencia: string;
    direccion: string;
    estudiaActual: string;
    trabajaActual: string;
    tieneHijos: string;
    cantidadHijos: number;
    dependenciaPadres:  string;
  
  //segunda parte tamizaje
  
    peso: number;
    altura: number;
    resultadoImc: number;
    interpretacionImc: string ;
  
    descripcionImc: string;

    //riesgo diabetes y cardio 

    perAbdominal: number ;
    tensionArterial: number;
    ejercicioDiario: string ;
  
    consumoVerduras: string;
    tieneHtensionArt: string;

    tomaMedicamentos: string;
   nivelAzucar: string;
   familiarDiabetes: string ;
    diabetico: string ;
    fuma: string ;


}
