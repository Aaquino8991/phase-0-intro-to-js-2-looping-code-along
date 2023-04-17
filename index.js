// Code your solutions in this file

function writeCards(people = ['Charlie', 'Samip', 'Ali'], string = "birthday") {
  const newArray = []
  for (let i = 0 ; i < people.length; i++) {
    newArray.push(`Thank you, ${people[i]}, for the wonderful ${string} gift!`);
  }
  return newArray;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}