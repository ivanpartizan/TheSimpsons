const quotes = [
  {
    quote: "Just because I don’t care doesn’t mean that I don’t understand.",
    author: "Homer Simpson"
  },
  {
    quote: "My bones are so brittle. But I always drink plenty of…malk?",
    author: "Bart Simpson"
  },
  { quote: "Me fail English? That’s unpossible.", author: "Ralph Wiggum" },
  {
    quote: "La…tex con…dome. Boy, I’d like to live in one of those!",
    author: "Grampa Simpson"
  },
  {
    quote:
      "When a woman says nothing’s wrong, that means everything’s wrong. And when a woman says everything’s wrong, that means everything’s wrong. And when a woman says something’s not funny, you’d better not laugh your ass off.",
    author: "Homer Simpson"
  },
  {
    quote:
      "Ironic, isn’t it, Smithers? This anonymous clan of slack-jawed troglodytes has cost me the election. And yet, if I were to have them killed, I would be the one to go to jail. That’s democracy for you.",
    author: "Mr. Burns"
  },
  {
    quote: "Oh boy. Looks like it’s suicide again for me.",
    author: "Moe the Bartender"
  },
  {
    quote: "I’m trying to be a sensitive father, you unwanted moron!",
    author: "Homer Simpson"
  },
  {
    quote:
      "Talking out of turn…that’s a paddling. Looking out the window…that’s a paddling. Staring at my sandals…that’s a paddling. Paddling the school canoe…ooh, you better believe that’s a paddling.",
    author: "Jasper"
  },
  { quote: "How can I prove we’re live? Penis!", author: "Kent Brockman" },
  { quote: "Now make like my pants, and split.", author: "Comic Book Guy" },
  {
    quote:
      "For the next five minutes, I’m going to party like it’s on sale for $19.99.",
    author: "Apu Nahasapeemapetilon"
  },
  {
    quote:
      "You know, FOX turned into a hardcore sex channel so gradually, I didn’t even notice.",
    author: "Marge Simpson"
  },
  {
    quote:
      "Ahh, there’s nothing better than a cigarette… unless it’s a cigarette lit with a hundred-dollar bill.",
    author: "Krusty the Clown"
  },
  {
    quote:
      "Remember the time he ate my goldfish, and you lied to me and said I never had any goldfish. Then why’d I have the bowl, Bart? Why did I have the bowl?",
    author: "Milhouse Van Houten"
  },
  { quote: "Stupider like a fox!", author: "Homer Simpson" },
  {
    quote:
      "Hey, look at my feet. You like those moccasins? Look in your closet; there’s a pair for you. Don’t like them? Then neither do I! [throws them out the door] Get the hell outta here! Ever see a guy say good-bye to a shoe?",
    author: "Hank Scorpio"
  },
  {
    quote: "Uh, no you’ve got the wrong number. This is 9-1… 2.",
    author: "Chief Wiggum"
  },
  {
    quote: "Yes, but I’d trade it all for a little more.",
    author: "Mr. Burns"
  },
  {
    quote: "What do you mean I can’t take off my sweater? I’m HOT!",
    author: "Drunk Mr. Rogers"
  },
  { quote: "I’m so hungry, I could eat at Arby’s.", author: "Sherri or Terri" },
  {
    quote: "Oh, dear God. Can’t this town go one day without a riot?",
    author: "Mayor Quimby"
  },
  {
    quote:
      "By the time I got to a phone, my discovery had already been reported by Principal Kohoutek. I got back at him, though…him and that little boy of his.",
    author: "Principal Skinner"
  },
  {
    quote:
      "You must love this country more than I love a cold beer on a hot Christmas morning.",
    author: "Homer Simpson"
  },
  { quote: "My cat’s breath smells like cat food.", author: "Ralph Wiggum" },
  {
    quote:
      "I didn’t think it was physically possible, but this both sucks and blows.",
    author: "Bart Simpson"
  },
  {
    quote: "Jesus must be spinning in his grave!",
    author: "Barney Gumble"
  },
  {
    quote:
      "I’ve been called ugly, pug ugly, fugly, pug fugly, but never ugly ugly.",
    author: "Moe the Bartender"
  },
  {
    quote: "You don’t win friends with salad.",
    author: "Homer Simpson"
  },
  {
    quote:
      "If he was going to commit a crime, would he have invited the number one cop in town? Now where did I put my gun? Oh yeah, I set it down when I got a piece of cake.",
    author: "Chief Wiggum"
  },
  {
    quote:
      "Homer, you’re as dumb as a mule and twice as ugly. If a strange man offers you a ride, I say take it!",
    author: "Grampa Simpson"
  },
  {
    quote:
      "Well, if it isn’t my old friend, Mr. McGreg, with a leg for an arm, and an arm for a leg.",
    author: "Dr. Nick Riviera"
  },
  {
    quote: "We’re here! We’re queer! We don’t want any more bears!",
    author: "Townspeople"
  },
  {
    quote: "Shut up, brain, or I’ll stab you with a Q-tip!",
    author: "Homer Simpson"
  },
  {
    quote: "Everything’s coming up Milhouse!",
    author: "Milhouse Van Houten"
  },
  { quote: "I was saying “Boo-urns.”", author: "Hans Moleman" },
  {
    quote: "I can’t promise I’ll try, but I’ll try to try.",
    author: "Bart Simpson"
  },
  {
    quote: "To alcohol! The cause of, and solution to, all of life’s problems.",
    author: "Homer Simpson"
  }
];

const btn = document.getElementById("button");
const picture = document.getElementById("picture");

const getQuote = () => {
  const number = Math.floor(Math.random() * quotes.length);
  const quote = quotes[number];
  console.log(quote);

  output.innerHTML = `<div class='overlay'><h1>${quote.quote}</h1> <h2>${quote.author}</h2></div>`;

  let author = quote.author;
  switch (author) {
    case "Homer Simpson":
      picture.innerHTML = `<img src='Homer.png'>`;
      break;
    case "Bart Simpson":
      picture.innerHTML = `<img src='Bart.png'>`;
      break;
    case "Hans Moleman":
      picture.innerHTML = `<img src='Hans.png'>`;
      break;
    case "Milhouse Van Houten":
      picture.innerHTML = `<img src='Milhouse.png'>`;
      break;
    case "Dr. Nick Riviera":
      picture.innerHTML = `<img src='Nick.png'>`;
      break;
    case "Grampa Simpson":
      picture.innerHTML = `<img src='Abraham.png'>`;
      break;
    case "Chief Wiggum":
      picture.innerHTML = `<img src='Wiggum.png'>`;
      break;
    case "Moe the Bartender":
      picture.innerHTML = `<img src='Moe.png'>`;
      break;
    case "Barney Gumble":
      picture.innerHTML = `<img src='Wiggum.png'>`;
      break;
    case "Barney Gumble":
      picture.innerHTML = `<img src='Barney.png'>`;
      break;
    case "Ralph Wiggum":
      picture.innerHTML = `<img src='Ralph.png'>`;
      break;
    case "Principal Skinner":
      picture.innerHTML = `<img src='Skinner.png'>`;
      break;
    case "Mayor Quimby":
      picture.innerHTML = `<img src='Quimby.png'>`;
      break;
    case "Sherri or Terri":
      picture.innerHTML = `<img src='SherriTerri.png'>`;
      break;
    case "Mr. Burns":
      picture.innerHTML = `<img src='MrBurns.png'>`;
      break;
    case "Krusty the Clown":
      picture.innerHTML = `<img src='Krusty.png'>`;
      break;
    case "Marge Simpson":
      picture.innerHTML = `<img src='Marge.png'>`;
      break;
    case "Apu Nahasapeemapetilon":
      picture.innerHTML = `<img src='Apu.png'>`;
      break;
    case "Comic Book Guy":
      picture.innerHTML = `<img src='Comic.png'>`;
      break;
    case "Kent Brockman":
      picture.innerHTML = `<img src='Kent.png'>`;
      break;
    default:
      picture.innerHTML = `<img src='Springfield.png'>`;
      break;
  }
};

btn.addEventListener("click", getQuote);
