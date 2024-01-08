import { format,formatDistance } from 'date-fns';
import es from 'date-fns/locale/es';

export const obtenerFechaHora = fecha => {
  return fecha ? format(new Date(fecha), 'dd/MM/yyyy kk:mm') + ' ' + 'hs' : ''
}
export const obtenerFecha = fecha => {
  return fecha ? format(new Date(fecha), 'dd/MM/yyyy') : ''
}
export const obtenerFechaTiempo = fecha => {
  return fecha ? formatDistance(new Date(fecha), new Date(), { addSuffix: true, locale: es }) : ''
}
