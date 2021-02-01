export class Entrevistado{

    constructor(  /// declaracion e inicializacion de atributos forma abreviada
     public tipoDoc: string,
     public cedulanum: number,
     public genero: string,
     public telefono: number,
     public estadoCivil: string,
     public nivelEducativo: string,
     public edad: number,
     public estrato: string,
     public regimenSalud: string,
     public eps: string,
     public zonaResidencia: string,
     public direccion: string,
     public estudiaActual: string,
     public trabajaActual: string,
     public tieneHijos: string,
     public cantidadHijos: number,
     public dependenciaPadres:  string,

    //segunda parte tamizaje 
    public peso: number,
    public altura: number,
    public resultadoImc: number,
    public interpretacionImc: string,
    public descripcionImc: string,

    
        //riesgo diabetes y cardio 

        public perAbdominal: number,
        public tensionArterial: number,
        public ejercicioDiario: string,
        
    
        public consumoVerduras: string,
        public tieneHtensionArt: string,
    
        public tomaMedicamentos: string,
        public nivelAzucar: string,
        public familiarDiabetes: string,
        public diabetico: string,
        public fuma: string,

        ////puntaje diabetes ////////////////////////////
        public puntajeEdad : number,
        public puntajeImc : number,
        public puntajePerAbdominal : number,
        public puntajeActividadFisica : number,
        public puntajeFrutasVerduras : number,
        public puntajeMedicamentosHipertension : number,
        public puntajeGlucosaAlto : number,
        public puntajeFamiliarDiabetes: number,
        public puntajeDiabetesTotal: number,

        public nivelRiesgoDiabetes: string,

        ///puntaje cardiovascular ////////////////
        public totalPuntajeRiesgoCardio : string,
        public nivelRiesgoCardio: string,

        ){}


}