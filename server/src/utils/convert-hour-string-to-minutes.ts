// 18:00 -> 1080

// hourString.split: 18:00 -> ["18", "00"]

// .map(Number): ["18", "00"] -> [18, 00]

// a desestruturação do array em const recebe como primeiro elemento da lista o 18 que chamamos de horas e o segundo elemento o 00 que chamamos de minutos

export function convertHourStringToMinutes(hourString: string){
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}