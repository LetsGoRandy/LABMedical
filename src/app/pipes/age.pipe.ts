import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {
  transform(birthDate: string): string {
    // Parse a string de data de nascimento para um objeto Date
    const birthDateObj = new Date(birthDate);

    // Calcule a idade
    const today = new Date();
    const age = today.getFullYear() - birthDateObj.getFullYear();

    // Ajuste a idade com base no mês e dia de nascimento
    if (
      today.getMonth() < birthDateObj.getMonth() ||
      (today.getMonth() === birthDateObj.getMonth() &&
        today.getDate() < birthDateObj.getDate())
    ) {
      // Ainda não chegou ao mês/dia de nascimento deste ano
      return `${age - 1} anos`;
    } else {
      return `${age} anos`;
    }
  }
}