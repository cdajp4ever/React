import { IPerson } from '../Types'
const NUM_PEOPLE = 5

const firstNames: string[] = [
  'Emma',
  'Noah',
  'Olivia',
  'Liam',
  'Ava',
  'William',
  'Sophia',
  'Mason',
  'Isabella',
  'James',
  'Mia',
  'Benjamin',
  'Charlotte',
  'Jacob',
  'Abigail',
  'Michael',
  'Emily',
  'Elijah',
  'Harper',
  'Ethan',
  'Amelia',
  'Alexander',
  'Evelyn',
  'Oliver',
  'Elizabeth',
  'Daniel',
  'Sofia',
  'Lucas',
  'Madison',
  'Matthew',
  'Avery',
  'Aiden',
  'Ella',
  'Jackson',
  'Scarlett',
  'Logan',
  'Grace',
  'David',
  'Chloe',
  'Joseph',
  'Victoria',
  'Samuel',
  'Riley',
  'Henry',
  'Aria',
  'Owen',
  'Lily',
  'Sebastian',
  'Aubrey',
  'Gabriel',
  'Zoey',
  'Carter',
  'Penelope',
  'Jayden',
  'Lillian',
  'John',
  'Addison',
  'Luke',
  'Layla',
  'Anthony',
  'Natalie',
  'Isaac',
  'Camila',
  'Dylan',
  'Hannah',
  'Wyatt',
  'Brooklyn',
  'Andrew',
  'Zoe',
  'Joshua',
  'Nora',
  'Christopher',
  'Leah',
  'Grayson',
  'Savannah',
  'Jack',
  'Audrey',
  'Julian',
  'Claire',
  'Ryan',
  'Eleanor',
  'Jaxon',
  'Skylar',
  'Levi',
  'Ellie',
  'Nathan',
  'Samantha',
  'Caleb',
  'Stella',
  'Hunter',
  'Paisley',
  'Christian',
  'Violet',
  'Isaiah',
  'Mila',
  'Thomas',
  'Allison',
  'Aaron',
  'Alexa',
  'Lincoln',
]

const lastNames: string[] = [
  'Smith',
  'Jones',
  'Brown',
  'Johnson',
  'Williams',
  'Miller',
  'Taylor',
  'Wilson',
  'Davis',
  'White',
  'Clark',
  'Hall',
  'Thomas',
  'Thompson',
  'Moore',
  'Hill',
  'Walker',
  'Anderson',
  'Wright',
  'Martin',
  'Wood',
  'Allen',
  'Robinson',
  'Lewis',
  'Scott',
  'Young',
  'Jackson',
  'Adams',
  'Tryniski',
  'Green',
  'Evans',
  'King',
  'Baker',
  'John',
  'Harris',
  'Roberts',
  'Campbell',
  'James',
  'Stewart',
  'Lee',
  'County',
  'Turner',
  'Parker',
  'Cook',
  'Mc',
  'Edwards',
  'Morris',
  'Mitchell',
  'Bell',
  'Ward',
  'Watson',
  'Morgan',
  'Davies',
  'Cooper',
  'Phillips',
  'Rogers',
  'Gray',
  'Hughes',
  'Harrison',
  'Carter',
  'Murphy',
]

const colors = [
  'Black',
  'Gray',
  'Orange',
  'Yellow',
  'Blue',
  'Green',
  'Brown',
  'Dark Brown',
  'Purple',
  'Cyan',
  'White',
  'Pink',
  'Red',
]

const genders = ['Male', 'Female', 'Unknown']

// generate a random number between min(0) and max
const rand = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min

// generate a full name
const generateName = () =>
  `${firstNames[rand(firstNames.length - 1)]} ${
    lastNames[rand(lastNames.length - 1)]
  }`

// generate birth year (1950 - 2018)
const generateBirthYear = () => `${rand(2018, 1950)}`

// generate height (140 - 200)
const generateHeight = () => `${rand(200, 140)}`

// generate weight (30 - 300)
const generateWeight = () => `${rand(300, 30)}`

// generate color
const generateColor = () => colors[rand(colors.length - 1)]

// generate Gender
const generateGender = () => genders[rand(genders.length - 1)]

// creates a person object
export const createPerson = () => ({
  name: generateName(),
  gender: generateGender(),
  birthYear: generateBirthYear(),
  height: generateHeight(),
  weight: generateWeight(),
  hairColor: generateColor(),
  eyeColor: generateColor(),
  skinColor: generateColor(),
})

// add keys as a property to val object
const addKeys = (val: IPerson, key: number) => ({ key, ...val })

// create an array of length NUM_PERSON
// [{key: , name: , ...}]
export const people: IPerson[] = Array.from(
  { length: NUM_PEOPLE },
  createPerson
)

export const generatePeople = () => {
  const nupeeps: IPerson[] = Array.from({ length: NUM_PEOPLE }, createPerson)
  return nupeeps
}
