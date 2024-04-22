import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class IsoDateToDateFormatPipe implements PipeTransform {
  transform(isoDate: string): string {
    // Parse a string de data ISO 8601 para um objeto Date
    const dateObj = new Date(isoDate);

    // Extraia o dia, mês e ano
    const day = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() + 1; // Os meses em JavaScript são baseados em zero
    const year = dateObj.getUTCFullYear();

    // Formate a data no padrão dd/MM/yyyy
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }
}
