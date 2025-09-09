import type { FutsalCategory, GeneralNote } from '@/lib/types';

import { primeraDivisionMasculina } from './1-div-masc';
import { segundaDivisionMasculina } from './2-div-masc';
import { segundaDivisionB } from './2-div-b';
import { terceraDivisionNacional } from './3-div-nac';
import { primeraDivisionFemenina } from './1-div-fem';
import { segundaDivisionFemenina } from './2-div-fem';
import { divisionHonorJuvenil } from './div-honor-juv';
import { divisionHonorCadete } from './div-honor-cad';
import { preferenteAutonomicaMasculino } from './pref-aut-masc';
import { primeraAutonomica } from './1-autonomica';
import { terceraAutonomica } from './3-autonomica';
import { ligaAutonomicaJuvenil } from './liga-aut-juv';
import { primeraSegundaJuvenil } from './1-2-juvenil';
import { ligaAutonomicaCadete } from './liga-aut-cad';
import { segundaCadete } from './2-cadete';
import { divisionHonorInfantil } from './div-honor-inf';
import { ligaAutonomicaInfantil } from './liga-aut-inf';
import { segundaInfantil } from './2-infantil';
import { alevinHonorLiga1 } from './alev-honor-liga-1';
import { segundaAlevin } from './2-alevin';
import { benjaminHonorLiga1 } from './benj-honor-liga-1';
import { segundaBenjamin } from './2-benjamin';
import { prebenjaminHonorLiga } from './preben-honor-liga';
import { prebenjamin } from './prebenjamin';
import { prebenjaminMurciaFS } from './preben-murcia-fs';
import { debutantes } from './debutantes';
import { preferenteFemenina } from './pref-fem';
import { juvenilCadeteFemenina } from './juv-cad-fem';
import { infantilFemenina } from './inf-fem';
import { alevinFemenina } from './alev-fem';
import { benjaminFemenina } from './benj-fem';

export const futsalCategories: FutsalCategory[] = [
    primeraDivisionMasculina,
    segundaDivisionMasculina,
    primeraDivisionFemenina,
    segundaDivisionFemenina,
    segundaDivisionB,
    terceraDivisionNacional,
    preferenteAutonomicaMasculino,
    preferenteFemenina,
    primeraAutonomica,
    terceraAutonomica,
    divisionHonorJuvenil,
    ligaAutonomicaJuvenil,
    primeraSegundaJuvenil,
    juvenilCadeteFemenina,
    divisionHonorCadete,
    ligaAutonomicaCadete,
    segundaCadete,
    divisionHonorInfantil,
    ligaAutonomicaInfantil,
    segundaInfantil,
    infantilFemenina,
    alevinHonorLiga1,
    segundaAlevin,
    alevinFemenina,
    benjaminHonorLiga1,
    segundaBenjamin,
    benjaminFemenina,
    prebenjaminHonorLiga,
    prebenjamin,
    prebenjaminMurciaFS,
    debutantes
];

export const ffrmGeneralNotes: GeneralNote[] = [
    {
        title: "Licencias y Jugadores no Registrados (Categorías Regionales)",
        content: `Si un jugador o técnico no aparece en la app, pero el delegado confirma su licencia validada, se permitirá su participación. El árbitro debe reflejarlo en observaciones del acta (indicando nombre, dorsal y responsabilidad del delegado) y crear la licencia manualmente en la app.`
    },
    {
        title: "Licencias de Delegados (Categorías Regionales)",
        content: "Cualquier delegado con ficha en un club puede ejercer sus funciones en cualquier categoría de ese mismo club. Esta norma no aplica a categorías Nacionales (1ª, 2ª, 3ª Div. Masculina, Div. Honor Juvenil, Div. Honor Cadete, 1ª y 2ª Div. Femenina)."
    },
    {
        title: "Licencias de Entrenadores (Categorías Regionales)",
        content: `Regla General: Entrenadores de categorías superiores NO pueden actuar en inferiores (Ej: un técnico de 3ª División no puede entrenar a un equipo Cadete).\nExcepción: En categorías Alevín, Benjamín, Prebenjamín y Debutantes, los entrenadores de categorías superiores SÍ pueden ejercer.`
    },
    {
        title: "Entrenador en Prácticas (Categorías Regionales)",
        content: "Ejerce como 2º entrenador. No puede haber un 2º entrenador y un entrenador en prácticas a la vez. Si no hay 1er entrenador, el 2º o el de prácticas puede dar instrucciones."
    },
    {
        title: "Vestimenta Arbitral (Categorías Regionales)",
        content: `Obligatorio usar camisetas con publicidad de Fibranet.\nOrden de colores: Negro, Amarillo, Azul, Rojo (los dos últimos solo si hay coincidencia).\nMedias: Negras o amarillas con camiseta negra/amarilla. Negras con camiseta azul/roja.\nZapatillas: Blancas (salvo las entregadas por el Comité Nacional).`
    },
    {
        title: "Protocolo General (Categorías Regionales)",
        content: `Saludo Fair Play: Obligatorio antes del inicio del partido.\nControl del Balón: Custodiado por el árbitro principal (o el asistente si lo hubiera). Si solo hay un árbitro, es responsabilidad del delegado local.\nRedacción del Acta: Es obligatorio reflejar todas las tarjetas (amarillas o rojas), indicando motivo y minuto.`
    }
];

export const cartagenaCategories = [];
export const cartagenaGeneralNotes = [];
