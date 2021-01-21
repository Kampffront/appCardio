import { Injectable } from '@angular/core';
import { DatosCardio } from './models/datos-cardio';
import { Datosvariables } from './models/datosvariables';
import { PuntajeDiabetes } from './models/puntajeDiabetes';

@Injectable({
  providedIn: 'root'
})


export class ResultadostotalService {

  constructor() { }

  //datos socio economicos , informacion agregada.
  model: Datosvariables = {
    edad: 0,
    nombre: '',
    tipoDoc: '',
    cedulanum: 0,
    genero: '',
    telefono: 0,
    estadoCivil: '',
    nivelEducativo: '',
    estrato: '',
    regimenSalud: '',
    zonaResidencia: '',
    direccion: '',
    estudiaActual: '',
    trabajaActual: '',
    tieneHijos: '',
    cantidadHijos: 0,
    dependenciaPadres: '',

    //segunda parte tamizaje

    peso: 0,
    altura: 0,
    resultadoImc: 0,
    interpretacionImc: '',

    descripcionImc: ''

  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  //datos cardio y demas, parte 2 , informacion agregada.
  datosCardio: DatosCardio = {
    perAbdominal: 0,
    tensionArterial: 0,
    ejercicioDiario: "",

    consumoVerduras: "",
    tieneHtensionArt: "",

    tomaMedicamentos: "",
    nivelAzucar: "",
    familiarDiabetes: "",
    diabetico: "",
    fuma: "",
    
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  //datos puntaje parte 2 , informacion agregada.

  puntajeDiabetes : PuntajeDiabetes = {
    puntajeEdad : 0,
    puntajeImc :0,
    puntajePerAbdominal :0,
    puntajeActividadFisica :0,
    puntajeFrutasVerduras :0,
    puntajeMedicamentosHipertension :0,
    puntajeGlucosaAlto :0,
    puntajeFamiliarDiabetes:0,
    puntajeDiabetesTotal:0
  }
////////////////////////////////////////////////////////////////////////////////////////////
  // metodos para calcular imc y puntaje imc
  
  numbercalcularImc(peso: number, altura: number){

    let resultado: number;
    resultado = peso/ Math.pow(altura,2);

 return resultado;
 

   }

   determinarRiesgoSobrePeso (imc :number){

 
     if (imc < 18.5) {

       return "peso bajo";
     } else if (imc >= 18.5 && imc <= 24.9) {
       
       return "peso normal";
     } else if (imc >= 25 && imc <= 29.9) {
      
       return "sobre peso";
     } else if (imc >= 30 && imc <= 34.9) {
       
       return "Obesidad clase 1";
     } else if (imc >= 35 && imc <= 39.9) {
       
       return "Obesidad clase 2";
     } else if (imc >= 40) {
       
       return "Obesidad clase 3";
     }
     return "no definido";

   }

  determinarDescripcionImc (interpretacionImc : string){
    let descripcionImc : string="";
    let descripcionImcObesidad: string ="Usted sufre de obesidad, lo cual indica un rango de peso no saludable y una acumulación excesiva de grasa en el cuerpo. Tenga en cuenta que la obesidad está relacionada con enfermedades como la diabetes, la hipertensión, el infarto, la trombosis, la artritis y algunos tipos de cánceres como el cáncer de mama y el cáncer de colon. Le recomendamos hacer ejercicio de forma regular e incluir en su alimentación diaria alimentos naturales y frescos como las frutas y las verduras; disminuya el consumo de sal, azúcares, grasas saturadas y grasas trans, que generalmente están presentes en los alimentos procesados y ultraprocesados. Visite a su médico para recibir la orientación  profesional correspondiente."; 
    if (interpretacionImc== "peso bajo") {
        return descripcionImc=  "Usted tiene bajo peso. Son diversas las causas de bajo peso y  por eso le sugerimos que visite a su médico para recibir la  orientación profesional correspondiente."; 
              
    } else if(interpretacionImc== "peso normal"){
      return  descripcionImc = "Usted tiene un peso normal. Controle su peso mensualmente, haga ejercicio de manera regular e incluya el consumo de frutas y  verduras en su alimentación diaria y disminuya el consumo de  sal, azúcares, grasas saturadas y grasas trans.";
      
    }else if(interpretacionImc== "sobre peso"){
      return descripcionImc = "Usted tiene sobrepeso. Esto indica un peso no saludable y una acumulación excesiva de grasa en el cuerpo. Tenga en cuenta que el sobrepeso está relacionado con enfermedades como la diabetes, la hipertensión, el infarto, la trombosis, la artritis y algunos tipos de cánceres como el cáncer de mama y el cáncer de colon. Le recomendamos hacer ejercicio de manera regular e incluir alimentos naturales y frescos como las frutas y las verduras en su alimentación diaria; disminuya el consumo de sal, azúcares, grasas saturadas y grasas trans. Visite a su  médico para recibir la orientación profesional correspondiente";

    }else if(interpretacionImc== "Obesidad clase 1"){
      return descripcionImcObesidad;
   
    }else if(interpretacionImc== "Obesidad clase 2"){
      return descripcionImcObesidad;

    }else if(interpretacionImc== "Obesidad clase 3"){
      return descripcionImcObesidad;
    }
    return " no definido";

  }




  ////////////////////////////////////////////////////////////////////////////////////////////
  // metodos para calcular diabetes y puntaje
}


