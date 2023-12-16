const question = document.querySelector('.question')
const option_one = document.querySelector('.one')
const option_two = document.querySelector('.two')
const option_three = document.querySelector('.three')
const option_four = document.querySelector('.four')

let magic_number = 0
let correct_answers = 0
let ideal_location = 0
let your_home = 0

const questions = [
    "What's the average walking speed of a Londoner when they're late for the Tube? 🚶",
    "What's the most common word you'll hear a Londoner say at the end of every sentence? 💂",
    "How do Londoners react when it starts raining without an umbrella? 🌧️",
    "What's the primary reason Londoners sunbathe in a park on a Tuesday in March? ☀️",
    "What's a Londoner's reaction when they spot someone standing on the left side of an escalator? 👈",
    "In what situation would a Londoner apologize the most? 🙇‍♂️",
    "How do Londoners feel about waiting for a green man at pedestrian crossings? 🚥",
    "Which accessory is a Londoner most likely to be seen with? 👜",
    "What's a common sound in the London Tube during rush hour? 🚇",
    "What do Londoners believe about the value of their 1-bedroom apartment in the city? 🏠"
]

const option_ones = [
    "Faster than Usain Bolt",
    '"Cheers!"',
    "They gracefully accept the rain's invitation",
    "To catch some rays",
    'They kindly point out the "stand on the right" rule.',
    "Bumping into a person",
    "Patiently wait for the green signal",
    "A stylish hat",
    "The rustling of newspapers",
    "It's a wise investment",
]

const option_twos = [
    "Slower than a snail",
    '"Mate!"',
    "They fashion a makeshift umbrella from a newspaper.",
    "To pretend they're on vacation",
    "They give a disapproving look and walk past on the right.",
    "Bumping into an object",
    "Stroll right across when they see an opening",
    "A rucksack",
    'The "WHEEEEAAAA" of frustrated commuters',
    "It's a bargain"
]

const option_threes = [
    "Like a penguin waddling",
    '"Sorry!"',
    "They pretend it's not raining and continue as if nothing happened.",
    'To compete in the "Best Tan by March" competition',
    "They pretend not to notice, but they're secretly judging.",
    "Bumping into an idea",
    "Make eye contact with the traffic lights to negotiate a deal",
    "A pocket-sized Tube map",
    'The sound of "Mind the Gap" announcements',
    "It's a priceless, unattainable luxury"
]

const option_fours = [
    "A blur of motion",
    '"Innit!"',
    "They summon a rain dance to make it stop.",
    "To show off their ability to defy the weather forecast.",
    "They join them and start a new trend.",
    "Bumping into their own shadow.",
    "They tap dance their way across, regardless of the signal.",
    "A monocle, because why not?",
    "An impromptu jazz performance.",
    "It's a cozy haven for their extensive collection of tea and crumpets.",
]

question.innerHTML = `Question: ${Number(magic_number) + 1}/10 - `
question.innerHTML += questions[magic_number]
option_one.innerHTML = option_ones[magic_number]
option_two.innerHTML = option_twos[magic_number]
option_three.innerHTML = option_threes[magic_number]
option_four.innerHTML = option_fours[magic_number]


option_one.addEventListener('click', () => {
    if(magic_number == 0) {
        correct_answers += 0.5
    }
    if(magic_number == 1) {
        correct_answers += 0.25
    }
    if(magic_number == 9) {
        correct_answers += 0.5
    }
    magic_number++;
    question.innerHTML = `Question: ${Number(magic_number) + 1}/10 - `
    question.innerHTML += questions[magic_number]
    option_one.innerHTML = option_ones[magic_number]
    option_two.innerHTML = option_twos[magic_number]
    option_three.innerHTML = option_threes[magic_number]
    option_four.innerHTML = option_fours[magic_number]
    if(correct_answers == 0) {
        ideal_location = "Antarctica"
        your_home = "./Antarctica.jpg"
    }
    if(correct_answers != 0 && correct_answers <= 3) {
        ideal_location = "Rural Yorkshire"
        your_home = "./Yorkshire.jpg"
    }
    if(correct_answers > 3 && correct_answers <= 6) {
        ideal_location = "Dartford"
        your_home = "./Dartford.jpg"
    }
    if( correct_answers > 6 && correct_answers <= 9) {
        ideal_location = "Kensington"
        your_home = "./Kensington.jpg"
    }
    if(correct_answers == 10) {
        ideal_location = "Buckingham Palace"
        your_home = "Buckingham.jpg"
    }
    if(magic_number > 9) {
        document.body.innerHTML = `<h1>Score: ${Number(correct_answers)/10*100}%</h1><h1>Your ideal location: ${ideal_location}</h1><img src=${your_home} width=300 height=300><br><br><br><br><br><h3><a href="/" style="font-size: x-large; color: black">Retry</a></h3>`
    }
})

option_two.addEventListener('click', () => {
    if(magic_number == 3 || magic_number == 7) {
        correct_answers++;
    }
    if(magic_number == 2) {
        correct_answers += 0.25
    }
    if(magic_number == 4) {
        correct_answers += 0.25
    }
    if(magic_number == 6) {
        correct_answers += 0.25
    }
    if(magic_number == 8) {
        correct_answers += 0.5
    }
    if(magic_number == 9) {
        correct_answers += 0.5
    }
    magic_number++;
    question.innerHTML = `Question: ${Number(magic_number) + 1}/10 - `
    question.innerHTML += questions[magic_number]
    option_one.innerHTML = option_ones[magic_number]
    option_two.innerHTML = option_twos[magic_number]
    option_three.innerHTML = option_threes[magic_number]
    option_four.innerHTML = option_fours[magic_number]
    if(correct_answers == 0) {
        ideal_location = "Antarctica"
        your_home = "./Antarctica.jpg"
    }
    if(correct_answers != 0 && correct_answers <= 3) {
        ideal_location = "Rural Yorkshire"
        your_home = "./Yorkshire.jpg"
    }
    if(correct_answers > 3 && correct_answers <= 6) {
        ideal_location = "Dartford"
        your_home = "./Dartford.jpg"
    }
    if( correct_answers > 6 && correct_answers <= 9) {
        ideal_location = "Kensington"
        your_home = "./Kensington.jpg"
    }
    if(correct_answers == 10) {
        ideal_location = "Buckingham Palace"
        your_home = "Buckingham.jpg"
    }
    if(magic_number > 9) {
        document.body.innerHTML = `<h1>Score: ${Number(correct_answers)/10*100}%</h1><h1>Your ideal location: ${ideal_location}</h1><img src=${your_home} width=300 height=300><br><br><br><br><br><h3><a href="/" style="font-size: x-large; color: black">Retry</a></h3>`
    }
})

option_three.addEventListener('click', () => {
    if(magic_number == 2 || magic_number == 4 || magic_number == 6 || magic_number == 9) {
        correct_answers++;
    }
    if(magic_number == 1) {
        correct_answers += 0.25
    }
    if(magic_number == 3) {
        correct_answers += 0.25
    }
    if(magic_number == 5) {
        correct_answers += 0.5
    }
    if(magic_number == 7) {
        correct_answers += 0.5
    }
    magic_number++;
    question.innerHTML = `Question: ${Number(magic_number) + 1}/10 - `
    question.innerHTML += questions[magic_number]
    option_one.innerHTML = option_ones[magic_number]
    option_two.innerHTML = option_twos[magic_number]
    option_three.innerHTML = option_threes[magic_number]
    option_four.innerHTML = option_fours[magic_number]
    if(correct_answers == 0) {
        ideal_location = "Antarctica"
        your_home = "./Antarctica.jpg"
    }
    if(correct_answers != 0 && correct_answers <= 3) {
        ideal_location = "Rural Yorkshire"
        your_home = "./Yorkshire.jpg"
    }
    if(correct_answers > 3 && correct_answers <= 6) {
        ideal_location = "Dartford"
        your_home = "./Dartford.jpg"
    }
    if( correct_answers > 6 && correct_answers <= 9) {
        ideal_location = "Kensington"
        your_home = "./Kensington.jpg"
    }
    if(correct_answers == 10) {
        ideal_location = "Buckingham Palace"
        your_home = "Buckingham.jpg"
    }
    if(magic_number > 9) {
        document.body.innerHTML = `<h1>Score: ${Number(correct_answers)/10*100}%</h1><h1>Your ideal location: ${ideal_location}</h1><img src=${your_home} width=300 height=300><br><br><br><br><br><h3><a href="/" style="font-size: x-large; color: black">Retry</a></h3>`
    }
})

option_four.addEventListener('click', () => {
    if(magic_number == 0 || magic_number == 1 || magic_number == 5 || magic_number == 8) {
        correct_answers++;
    }
    if(magic_number == 3) {
        correct_answers += 0.25
    }
    if(magic_number == 4) {
        correct_answers += 0.25
    }
    if(magic_number == 6) {
        correct_answers += 0.25
    }
    magic_number++;
    question.innerHTML = `Question: ${Number(magic_number) + 1}/10 - `
    question.innerHTML += questions[magic_number]
    option_one.innerHTML = option_ones[magic_number]
    option_two.innerHTML = option_twos[magic_number]
    option_three.innerHTML = option_threes[magic_number]
    option_four.innerHTML = option_fours[magic_number]
    if(correct_answers == 0) {
        ideal_location = "Antarctica"
        your_home = "./Antarctica.jpg"
    }
    if(correct_answers != 0 && correct_answers <= 3) {
        ideal_location = "Rural Yorkshire"
        your_home = "./Yorkshire.jpg"
    }
    if(correct_answers > 3 && correct_answers <= 6) {
        ideal_location = "Dartford"
        your_home = "./Dartford.jpg"
    }
    if( correct_answers > 6 && correct_answers <= 9) {
        ideal_location = "Kensington"
        your_home = "./Kensington.jpg"
    }
    if(correct_answers == 10) {
        ideal_location = "Buckingham Palace"
        your_home = "Buckingham.jpg"
    }
    if(magic_number > 9) {
        document.body.innerHTML = `<h1>Score: ${Number(correct_answers)/10*100}%</h1><h1>Your ideal location: ${ideal_location}</h1><img src=${your_home} width=300 height=300><br><br><br><br><br><h3><a href="/" style="font-size: x-large; color: black">Retry</a></h3>`
    }
})