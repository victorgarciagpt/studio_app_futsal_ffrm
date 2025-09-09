import type { Document } from '@/lib/types';

import { metodologia } from './metodologia-y-consideraciones';
import { clasificacionIncidentes } from './clasificacion-incidentes';
import { amonestacionesJugadores } from './amonestaciones-jugadores';
import { expulsionesJugadores } from './expulsiones-jugadores';
import { otrasIncidenciasJugadores } from './otras-incidencias-jugadores';
import { amonestacionesTecnicos } from './amonestaciones-tecnicos';
import { expulsionesTecnicos } from './expulsiones-tecnicos';
import { otrasIncidenciasTecnicos } from './otras-incidencias-tecnicos';
import { publico } from './publico';
import { deficienciasInstalaciones } from './deficiencias-instalaciones';
import { otrasIncidencias } from './otras-incidencias';
import { anexos } from './anexos';

export const manuals: Document[] = [
  metodologia,
  clasificacionIncidentes,
  amonestacionesJugadores,
  expulsionesJugadores,
  otrasIncidenciasJugadores,
  amonestacionesTecnicos,
  expulsionesTecnicos,
  otrasIncidenciasTecnicos,
  publico,
  deficienciasInstalaciones,
  otrasIncidencias,
  anexos,
];
