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
    eps: '',
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

  puntajeDiabetesServicio : PuntajeDiabetes = {
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
  // Datos puntaje y resultados Riesgo Cardiovascular
  color : string[]=["verde","amarillo","naranja","rojo","rojoOscuro"];
  resultadoNivelRiesgoCardio : number=0;
  descripcionNivelRiesgoCardio: string ="";




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

  sumarPuntajesResultadoDiabetes(puntajeDiabetes2 :PuntajeDiabetes){
    puntajeDiabetes2.puntajeEdad=this.asignarPuntajeEdad(this.model.edad);
    puntajeDiabetes2.puntajeImc=this.asignarPuntajeImc(this.model.resultadoImc);
    puntajeDiabetes2.puntajePerAbdominal=this.asignarPuntajePerAbdominal(this.datosCardio.perAbdominal,this.model.genero);
    puntajeDiabetes2.puntajeActividadFisica=this.asignarPuntajeActiFisica(this.datosCardio.ejercicioDiario);
    puntajeDiabetes2.puntajeFrutasVerduras=this.asignarPuntajeFrutasVerdu(this.datosCardio.consumoVerduras);
    puntajeDiabetes2.puntajeMedicamentosHipertension=this.asignarPuntajeMedicamentosHiper(this.datosCardio.tomaMedicamentos);
    puntajeDiabetes2.puntajeGlucosaAlto=this.asignarPuntajeGlucosaAlto(this.datosCardio.nivelAzucar);
    puntajeDiabetes2.puntajeFamiliarDiabetes=this.asignarPuntajeFamiliaDiabetico(this.datosCardio.familiarDiabetes);

    puntajeDiabetes2.puntajeDiabetesTotal=this.asignarPuntajeResultadoDiabetes(
    puntajeDiabetes2.puntajeEdad,
    puntajeDiabetes2.puntajeImc,
    puntajeDiabetes2.puntajePerAbdominal,
    puntajeDiabetes2.puntajeActividadFisica,
    puntajeDiabetes2.puntajeFrutasVerduras,
    puntajeDiabetes2.puntajeMedicamentosHipertension,
    puntajeDiabetes2.puntajeGlucosaAlto,
    puntajeDiabetes2.puntajeFamiliarDiabetes);
      
  }


asignarPuntajeResultadoDiabetes(
  edad:number,
  imc: number,
  perAbdom: number,
  actFisica : number,
  frutasYver: number,
  medicamentoHiper: number,
  glucosaAlto: number,
  familiarDiabetes: number
  ){

    let puntajeTotal: number;
    return puntajeTotal= edad+imc+perAbdom+actFisica+frutasYver+medicamentoHiper+glucosaAlto+familiarDiabetes;
    

}



//puntaje edad
asignarPuntajeEdad(edad: number){
  if (edad<45) {
    return 0;
  }
  //// se puede completar en caso de requerir mas edades
  return 0;
}


//puntajeImc
asignarPuntajeImc(imc : number){
  if (imc<25) {
    return 0;
  }else if (imc>=25 && imc<=30) {
    return 1;
    
  } else if(imc>30) {
    return 3;
    
  }else{
    return 0;
  }
}

//puntaje perimetro abdominal
asignarPuntajePerAbdominal(perabdominal : number, genero : string){
  let puntaje: number=0;
  if (genero=='masculino') {
   puntaje =this.puntajeHombre(perabdominal);
    
  } else {
    puntaje=this.puntajeMujer(perabdominal);
  }

  return puntaje;
}

///// puntajes por  genero para perimetro abdominal
puntajeHombre(perabdominal: number){
  let puntaje: number = 0;
  if (perabdominal<94) {
    puntaje = 0;
  }else{
    puntaje=4;
  }
  return puntaje;

}

puntajeMujer(perabdominal: number){
  let puntaje : number=0;
  if (perabdominal<90) {
    puntaje = 0;
  }else{
    puntaje=4;
  }
  return puntaje;

}

//////puntaje actividad fisica
asignarPuntajeActiFisica(actividadFisica: string){
  let puntaje: number=0;
  if (actividadFisica=='si') {
    puntaje=0;
    
  } else {
    puntaje=2;
    
  }

  return puntaje;

}

  //////puntaje Frutas y verduras
  asignarPuntajeFrutasVerdu(frutasVerdu: string){
    let puntaje: number=0;
    if (frutasVerdu=='tdias') {
      puntaje=0;
      
    } else {
      puntaje=1;
      
    }

    return puntaje;

  }

    //////puntaje  Medicamentos para hipertension
asignarPuntajeMedicamentosHiper(puntajeMedicamentosHiper: string){
  let puntaje: number=0;
  if (puntajeMedicamentosHiper=='si') {
    puntaje=2;
    
  } else {
    puntaje=0;
    
  }

  return puntaje;

}

  //////puntaje glucosa alto
  asignarPuntajeGlucosaAlto(glucosa: string){
    let puntaje: number=0;
    if (glucosa=='si') {
      puntaje=5;
      
    } else {
      puntaje=0;
      
    }

    return puntaje;

  }

      //////puntaje familia diabeticos /// mirar plantilla riesgo-cardio html
      asignarPuntajeFamiliaDiabetico(familiarDiabetico: string){
        let puntaje: number=0;
        if (familiarDiabetico=='no') {
          puntaje=0;
          
        } else if(familiarDiabetico=="si opcion padre") {
          puntaje=5;
          
        }else{
          puntaje=3;
        }
    
        return puntaje;
    
      }

        ////////////////////////////////////////////////////////////////////////////////////////////
  // metodos para calcular riesgoCardioVascular

  calcularColorRiesgoCardio(diabetes: string,genero : string,fuma: string){// calcular colores de izquierda a derecha segun el guion

          let color : string[]=["1","2","3","4"];
           if (diabetes=="no" && genero=="masculino" && fuma=="no") {///primera columna

            return color =["naranja","verde","verde","verde"];
 
           } else if(diabetes=="no" && genero=="masculino" && fuma=="si") {///segunda columna ) {
            return color =["rojoOscuro","amarillo","verde","verde"];

           }else if(diabetes=="no" && genero=="femenino" && fuma=="no") {///tercera  columna ) {
            return color =["rojo","verde","verde","verde"];

           }else if(diabetes=="no" && genero=="femenino" && fuma=="si") {///cuarta columna ) {
            return color =["rojoOscuro","amarillo","verde","verde"];

           }else if(diabetes=="si" && genero=="masculino" && fuma=="no") {///quinta columna ) {
            return color =["rojo","verde","verde","verde"];

           }else if(diabetes=="si" && genero=="masculino" && fuma=="si") {///sexta columna ) {
            return color =["rojoOscuro","naranja","verde","verde"];

           }else if(diabetes=="si" && genero=="femenino" && fuma=="no") {///septima columna ) {
            return color =["rojoOscuro","amarillo","verde","verde"];

           }else if(diabetes=="si" && genero=="femenino" && fuma=="si") {///octava columna ) {
            return color =["rojoOscuro","rojo","verde","verde"];
           }else{

            return color =["valor no definido","rvalor no definido","valor no definido","valor no definido"];

           }


  }
  ///calcular porcentaje con pas///////////////////////////7
  calcularPorcentajeRiesgoCardio  (pas : number, color:string[3]){

    if (pas>0 && pas<=120) {
      return  color[3];
      
    }else if(pas>120 && pas<=140){
      return color[2];

    }else if(pas>140 && pas<=160){
      return color[1];

    }else if(pas>160 && pas<=180){
      return color[0];
    }
      else{

        return "demasiado alto"; 
        
      }


    }

}












