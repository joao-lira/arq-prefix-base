import moment from 'moment/min/moment-with-locales';
moment.locale('pt-br');

export default class DateUtils {
  /**
   * Example: 2019-06-14 10:00:00 returns 14/06/2019
   */
  static formatDateWithoutTime(date) {
    return `${new Date(date).toLocaleDateString()}`;
  }

  /**
   *  Example: New Date() returns 2019-07-14
   */
  static formatDateDefault(date) {
    const dateParse = JSON.stringify(
      new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    );
    return dateParse.substring(1, 11);
  }

  /**
   * Example: 2019-06-14 10:00:00 returns 14/06/2019 10:00
   */
  static formatDate(date) {
    return moment(date).format('DD/MM/YYYY HH:mm');
  }

  static formatFromBrazillianDate(date) {
    const brToValidDate = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3');

    return brToValidDate;
  }

  static daysDiffDate(dateStart, dateEnd) {
    const start = moment(dateStart);
    const end = moment(dateEnd);
    return end.diff(start, 'days');
  }

  /**
   * Example: 01/08/2019 10:00:00 return Domingo
   */
  static diaSemana(value) {
    const dia = moment(value, 'DD/MM/YYYY').weekday();
    const semana = [
      'Domingo',
      'Segunda-Feira',
      'Terça-Feira',
      'Quarta-Feira',
      'Quinta-Feira',
      'Sexta-Feira',
      'Sábado',
    ];
    return semana[dia];
  }

  /**
   * Exemple: 2019-10-30
   *
   * Return:
   * 24 de Julho
   */
  static monthDay(date) {
    const diaInit = JSON.stringify(date).substring(9, 11);
    const mesInit = JSON.stringify(date).substring(6, 8);
    let value = '';
    value = `${diaInit} de ${this.mesString(mesInit)}`;
    return value;
  }

  /**
   * Exemple: 2019-06-14 10:00:00, 2019-06-15 10:00:00
   *
   * Return:
   * 1 - 14 a 15 de Junho, 2019
   * 2 - 14 de marco a 14 de junho, 2019
   * 3 - 14 de marco, 2019
   */
  static rangeDate(dateInit, dateEnd) {
    const diaInit = moment(dateInit).format('DD');
    const mesInit = moment(dateInit).format('MM');
    const anoInit = moment(dateInit).format('YYYY');
    const diaEnd = moment(dateEnd).format('DD');
    const mesEnd = moment(dateEnd).format('MM');

    let value = '';

    if (diaInit === diaEnd && mesInit === mesEnd) {
      value = `${diaInit} de ${this.mesString(mesInit)}, ${anoInit}`;
    } else if (diaInit !== diaEnd && mesInit === mesEnd) {
      value = `${diaInit} a ${diaEnd} de ${this.mesString(
        mesInit,
      )}, ${anoInit}`;
    } else {
      value = `${diaInit} de ${this.mesString(mesInit)} a ${this.mesString(
        mesEnd,
      )} de ${this.mesString(mesInit)}, ${anoInit}`;
    }
    return value;
  }

  /**
   * Exemple: 01 return "Janeiro"
   */
  static mesString(value) {
    switch (value) {
      case '01':
        return 'Janeiro';
      case '02':
        return 'Fevereiro';
      case '03':
        return 'Março';
      case '04':
        return 'Abril';
      case '05':
        return 'Maio';
      case '06':
        return 'Junho';
      case '07':
        return 'Julho';
      case '08':
        return 'Agosto';
      case '09':
        return 'Setembro';
      case '10':
        return 'Outubro';
      case '11':
        return 'Novembro';
      case '12':
        return 'Dezembro';

      default:
        return '';
    }
  }

  static getFullYear() {
    const today = new Date();
    return today.getFullYear();
  }

  static getPreviousDayAtSeventeen(date) {
    const yesterday = date.split('-');
    const dataVencimentoFinal = moment([
      yesterday[0],
      yesterday[1] - 1,
      yesterday[2],
    ])
      .subtract(1, 'days')
      .set({
        hour: 19,
        minute: 0,
        second: 0,
        millisecond: 0,
      });

    return dataVencimentoFinal;
  }

  static checkPeriodBoletoDas = dataVencimento => {
    const dateVencimentoFinal = new Date(
      `${dataVencimento[2]}-${dataVencimento[1]}-${dataVencimento[0]}`,
    );
    const todayDay = new Date();
    const diff =
      (dateVencimentoFinal.getTime() - todayDay.getTime()) / (1000 * 3600 * 24);

    if (diff >= 1 && diff <= 10) {
      return Math.floor(diff);
    }
    return false;
  };

  static getNextMondayAtEight() {
    const d = new Date();
    d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7));
    d.setHours(8);
    return d;
  }

  static getTodayDate() {
    const today = moment().format('DD/MM/YYYY');
    return today;
  }

  static formatTimestampToDayName(time) {
    let firstPart = moment
      .unix(time)
      .utc()
      .format('dddd');
    return `${firstPart}`;
  }

  static formatTimestampTo(time) {
    let firstPart = moment
      .unix(time)
      .utc()
      .format('dddd, DD');
    let SecondPart = moment
      .unix(time)
      .utc()
      .format('MMMM | ');
    return `${firstPart} de ${String(SecondPart).toLowerCase()}`;
  }
}
