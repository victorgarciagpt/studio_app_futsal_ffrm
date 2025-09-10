import type { Protocol } from '@/lib/types';

import { circularN1 } from './circular-n1';
import { violenciaVerbal } from './violencia-verbal';
import { asistentesRfef } from './asistentes-rfef';

export const protocols: Protocol[] = [
    violenciaVerbal,
    circularN1,
    asistentesRfef,
];
