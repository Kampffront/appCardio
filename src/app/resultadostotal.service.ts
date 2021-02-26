import { Injectable } from '@angular/core';
import { DatosCardio } from './models/datos-cardio';
import { Datosvariables } from './models/datosvariables';
import { Entrevistado } from './models/entrevistado.model';
import { PuntajeDiabetes } from './models/puntajeDiabetes';

@Injectable({
  providedIn: 'root'
})


export class ResultadostotalService {

    arregloEntrevistados: Entrevistado[];
    sigId: number=0;

  constructor() {

//  let arregloEntrevistados= this.getDatosEntrevistado();
  this.arregloEntrevistados= []
    //this.sigId=0;
   }

   public agregarDatosEntrevistado(        
    datosVariables : any,
    datosCardio : any,
    puntajeDiabetes :any,
    resultadoNivelRiesgoCardio: any,
    descripcionNivelRiesgoCardio: any,
    nivelRiesgoDiabetesMuestra : any,
    descripcionDiabetesMuestra : any,
) : void{
     let arregloEntrevistado = new Entrevistado(datosVariables ,
      datosCardio ,
      puntajeDiabetes,
      resultadoNivelRiesgoCardio,
      descripcionNivelRiesgoCardio,
      nivelRiesgoDiabetesMuestra ,
      descripcionDiabetesMuestra );

     this.arregloEntrevistados.push(arregloEntrevistado);
     this.sigId++;
   }

   //public getDatosEntrevistado() : Entrevistado[]{
  //   let localStorageItem = JSON.parse(localStorage.getItem('arregloEntrevistados'));
   //  return localStorageItem == null ? [] : localStorageItem.arregloEntrevistados;
  // }

   private setLocalStorageArreglo (arregloEntrevistados: Entrevistado[]): void {
     localStorage.setItem('arregloEntrevistados', JSON.stringify({arregloEntrevistados: arregloEntrevistados}));
   }


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
  // Datos puntaje y resultados Riesgo Cardiovascular
  colores : string[]=["verde","amarillo","naranja","rojo"];
  resultadoNivelRiesgoCardio : string="";
  descripcionNivelRiesgoCardio: string ="";

    ////////////////////////////////////////////////////////////////////////////////////////////
  // Datos Diabetes

  public PuntajeMuestra : number = 0;
  public nivelRiesgoDiabetesMuestra : string ="";
  public descripcionDiabetesMuestra : string ="";

  getLocalStorageInfo(llave : number){
    let llavecadena: String = llave.toString();
    //this.datosTotal= JSON.parse(localStorage.getItem('1');


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

  
  resultadoInformacionRiesgoDiabetes(puntajeDiabetes: number){

    if (puntajeDiabetes <10) {
      this.nivelRiesgoDiabetesMuestra="Bajo";
      this.descripcionDiabetesMuestra="¡Felicitaciones! Usted tiene un riesgo bajo para desarrollar diabetes. Le sugerimos que controle su peso regularmente, consuma frutas y verduras diariamente y practique al menos 30 minutos de actividad física con intensidad moderada por día,  para así mantener y mejorar su salud. ";
    } else if(puntajeDiabetes>=10 && puntajeDiabetes<=12){
      this.nivelRiesgoDiabetesMuestra="Medio";
      this.descripcionDiabetesMuestra="Usted tiene un riesgo moderado de tener diabetes y prediabetes. Sugerimos que considere aumentar su actividad física, mejorar sus hábitos de alimentación y prestar atención a su peso, para prevenir el desarrollo de diabetes. Los cambios  en su estilo de vida pueden prevenir completamente la diabetes  o al menos retrasar su inicio hasta edades ya muy avanzadas.";
    }else{
      this.nivelRiesgoDiabetesMuestra="Alto";
      this.descripcionDiabetesMuestra="Usted tiene un riesgo alto de tener diabetes y prediabetes. Sugerimos que usted pida una cita a su EPS o su médico para  que le realice una prueba de glicemia en ayuno y reciba  consejo sobre cómo cambiar sus hábitos de vida para mejorar  su salud.";
    }
  

  }

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

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // metodos para calcular riesgoCardioVascular

  asignarColorArreglo(arreglo : string[]){
    return arreglo= this.calcularColorRiesgoCardio(this.datosCardio.diabetico, this.model.genero, this.datosCardio.fuma);

  }

  asignarColorFinal(){
    return this.calcularPorcentajeRiesgoCardio(this.datosCardio.tensionArterial,
      this.colores);

  }

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
  ///calcular porcentaje con pas///////////////////////////7////// 
  calcularPorcentajeRiesgoCardio  (pas : number, color:string[]){
    let colorResuelto=this.asignarColorArreglo(color);

    //se define segun la columna de abajo hacia arriba


    if (pas>0 && pas<=120) {
      return  colorResuelto[3];///color barra inferior 1
      
    }else if(pas>120 && pas<=140){
      return colorResuelto[2];///color barra inferior 2

    }else if(pas>140 && pas<=160){
      return colorResuelto[1];///color barra inferior 3

    }else if(pas>160 && pas<=180){
      return colorResuelto[0];///color barra inferior 4
    }
      else{

        return "demasiado alto"; ///color barra inferior en caso de que sea superior a 180
        
      }


    }

    mostrarRiesgoCardioPorcentaje(colorFinal: string){/////// mostrar informacion final pendiente por modificar porcentajes para calcularlos
      let porcentaje: string="";
    
      if (colorFinal=="verde") {
        return porcentaje="menor de 10%";


      } else if(colorFinal=="amarillo"){
        return porcentaje="de 10% a 20%";
  
      }else if(colorFinal=="naranja"){
        return porcentaje="de 20% a 30%";
  
      }else if(colorFinal=="rojo"){
        return porcentaje="de 30% a 40%";
  
      } else if(colorFinal=="rojoOscuro"){
      return porcentaje="mas de 40%";
      }
      else{

        return "Porcentaje no valido"
      }
}

mostrarRiesgoCardioDescripcion(porcentajeCardio : string){/////// mostrar informacion final descripcion de riesgo cardio
  let descripcionCardio: string="";

  if (porcentajeCardio=="menor de 10%") {
    return descripcionCardio="Riesgo Bajo";


  } else if(porcentajeCardio=="de 10% a 20%"){
    return descripcionCardio="Riesgo Moderado";

  }else if(porcentajeCardio=="de 20% a 30%"){
    return descripcionCardio="Riesgo Alto";

  }else if(porcentajeCardio=="de 30% a 40%"){
    return descripcionCardio="Riesgo Muy Alto";

  } else if(porcentajeCardio=="mas de 40%"){
  return descripcionCardio= "Riesgo Extremadamente Alto";
  }
  else{

    return "descripcion no valida"
  }



}

}












