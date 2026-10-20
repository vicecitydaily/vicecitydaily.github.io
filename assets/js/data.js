// Vice City Daily — story and feature data.
// All stories are fiction. Add a new story by appending an object to ARTICLES.
window.VCD = window.VCD || {};

VCD.SECTIONS = [
  { id: "local", name: "Local" },
  { id: "nightlife", name: "Nightlife" },
  { id: "business", name: "Business" },
  { id: "sports", name: "Sports" },
  { id: "weather", name: "Weather" },
  { id: "opinion", name: "Opinion" }
];

VCD.ARTICLES = [
  {
    id: "neon-blackout-ocean-drive",
    section: "local",
    lead: true,
    title: "Neon Blackout Plunges Ocean Drive Into Darkness for Three Hours",
    dek: "A blown transformer behind the Pastel Palms Hotel left the city's most photographed strip without its signature glow — and tourists without a backdrop.",
    author: "Rita Delgado",
    minutes: 5,
    art: { icon: "🌃", from: "#ff2a6d", to: "#2a0845" },
    body: [
      "For three hours on Monday night, Ocean Drive went dark. Not the dark of a quiet beach town, but a complete blackout: hotel signs, storefronts and the pink-and-teal tubing along the boardwalk all switched off at once.",
      "Vice City Power & Light traced the outage to a transformer behind the Pastel Palms Hotel, which crews said had been \"running hotter than a Hialeah parking lot\" for most of the summer. Power came back at 12:47 a.m.",
      "\"People were holding up their phones like it was a concert,\" said Marisol Vega, who runs a juice stand near 9th Street. \"Honestly, it was kind of beautiful. You could see stars over the water for once.\"",
      "Not everyone shared the romance. Several restaurants closed early, and a roller-skate rental shop reported losing what its owner called \"the whole late-night crowd.\"",
      "City Commissioner Dale Okafor said he will push for a review of the strip's aging electrical lines at next week's commission meeting. \"Ocean Drive is our postcard,\" he said. \"Postcards don't go dark.\""
    ]
  },
  {
    id: "starfish-island-bridge-repairs",
    section: "local",
    title: "Starfish Island Bridge Repairs Pushed to Spring",
    dek: "Residents of the island's mansions will keep using the single-lane detour through the holiday season.",
    author: "Theo Marchetti",
    minutes: 3,
    art: { icon: "🌉", from: "#05d9e8", to: "#1b1464" },
    body: [
      "Repairs to the east span of the Starfish Island bridge will not finish until April, the Department of Transportation said Tuesday, citing a shortage of the steel the job needs.",
      "The single-lane detour, controlled by a temporary signal, has added up to twenty minutes to commutes at rush hour. Residents have complained about delivery trucks idling on the causeway.",
      "The department said it will extend detour signal hours and add a traffic officer on weekends starting next month."
    ]
  },
  {
    id: "little-havana-domino-championship",
    section: "local",
    title: "Little Havana's Domino Championship Draws Record Crowd",
    dek: "Eighty-four-year-old Ernesto Ruiz takes the title for the fourth time, then announces he is \"not retiring, just resting.\"",
    author: "Ana Fuentes",
    minutes: 4,
    art: { icon: "🁢", from: "#f9c80e", to: "#ff2a6d" },
    body: [
      "Under the banyan trees of Máximo Park, more than six hundred spectators crowded around folding tables on Saturday for the 31st annual Little Havana Domino Championship.",
      "Ernesto Ruiz, a retired cigar roller, won the final in four straight games. It is his fourth title, and his first since 2019.",
      "\"The young players are fast,\" Ruiz said, accepting a trophy shaped like a double-six tile. \"But fast is not the same as patient.\""
    ]
  },
  {
    id: "malibu-club-reopens",
    section: "nightlife",
    title: "The Coral Room Reopens With a Wall of 400 Vintage Televisions",
    dek: "After an eighteen-month renovation, Vice Point's best-known dance club is back, and it is louder than ever.",
    author: "Jules Navarro",
    minutes: 4,
    art: { icon: "📺", from: "#b537f2", to: "#ff2a6d" },
    body: [
      "The line stretched past three blocks on Friday as The Coral Room opened its doors for the first time since a kitchen fire closed it last spring.",
      "The new centerpiece is a wall of four hundred restored tube televisions, synchronized to the DJ booth. The owners say it took six months to source the sets from estate sales across the state.",
      "Cover is twenty dollars before 11 p.m. The dress code, according to a hand-painted sign at the door, is \"pastel or perish.\""
    ]
  },
  {
    id: "synth-week-lineup",
    section: "nightlife",
    title: "Synth Week Announces Lineup: Twelve Nights, Nine Venues",
    dek: "The festival returns to Washington Beach with a free opening concert on the sand.",
    author: "Jules Navarro",
    minutes: 3,
    art: { icon: "🎹", from: "#05d9e8", to: "#b537f2" },
    body: [
      "Synth Week, the city's festival of electronic music, will run from November 7 to 18, organizers announced Wednesday.",
      "The opening night concert on Washington Beach is free and open to the public. Organizers expect fifteen thousand attendees and ask visitors to take the trolley instead of driving.",
      "Passes for the full week go on sale Friday at noon."
    ]
  },
  {
    id: "rooftop-roller-disco",
    section: "nightlife",
    title: "A Roller Disco on a Parking Garage Roof Is the Summer's Unlikely Hit",
    dek: "Every Thursday, the top deck of the Downtown municipal garage turns into a rink.",
    author: "Kenji Alvarez",
    minutes: 3,
    art: { icon: "🛼", from: "#ff6c11", to: "#ff2a6d" },
    body: [
      "It started as a one-night experiment by the city parks department. Ten Thursdays later, the rooftop roller disco on the Downtown garage regularly sells out its five hundred skate rentals.",
      "\"You get the skyline, the sunset, and a guy in a sequined jacket teaching you to skate backwards,\" said regular attendee Priya Shah. \"What else do you need?\"",
      "The parks department says the event will continue through October, weather permitting."
    ]
  },
  {
    id: "port-shipping-record",
    section: "business",
    title: "Port of Vice City Posts Its Busiest Quarter on Record",
    dek: "Container traffic is up 14 percent, driven by fresh produce from the Caribbean.",
    author: "Morgan Feld",
    minutes: 4,
    art: { icon: "🚢", from: "#05d9e8", to: "#0d0221" },
    body: [
      "The Port of Vice City handled more containers between July and September than in any quarter since records began, the port authority reported Thursday.",
      "Officials credited new refrigerated berths, which opened in March, for most of the growth. Fresh fruit and flowers made up nearly a third of imports by weight.",
      "Dockworkers' union leaders said the surge has meant steady overtime, but warned that the port needs more staff before the winter season."
    ]
  },
  {
    id: "ice-cream-empire",
    section: "business",
    title: "How a Single Ice Cream Truck Became a 40-Truck Fleet",
    dek: "Cherry Popper Treats started in 2011 with one secondhand van and a cooler of homemade sorbet.",
    author: "Morgan Feld",
    minutes: 6,
    art: { icon: "🍦", from: "#ffb3d9", to: "#ff2a6d" },
    body: [
      "Delia Washington bought her first ice cream truck at a police auction for $3,400. It had no working freezer and a speaker that only played one song.",
      "Fifteen years later, her company runs forty trucks across the city, a storefront on Ocean Beach and a factory in Little Haiti that makes eighteen flavors.",
      "\"I kept the song,\" she said. \"People hear it from four blocks away and they know.\""
    ]
  },
  {
    id: "real-estate-cooling",
    section: "business",
    title: "Waterfront Condo Prices Dip for the First Time in Six Years",
    dek: "Analysts say rising insurance costs are giving buyers second thoughts.",
    author: "Sam Whitlock",
    minutes: 4,
    art: { icon: "🏙️", from: "#f9c80e", to: "#6a0572" },
    body: [
      "The median price of a waterfront condominium in Vice City fell 3.2 percent in the third quarter, according to the Vice City Board of Realtors.",
      "Brokers pointed to insurance premiums, which have nearly doubled for some coastal buildings since 2023.",
      "Inland neighborhoods, by contrast, continued to see modest gains."
    ]
  },
  {
    id: "sharks-playoff-run",
    section: "sports",
    title: "Vice City Sharks Clinch First Playoff Berth Since 2017",
    dek: "A last-second field goal against Liberty City sends the stadium into a frenzy.",
    author: "Marcus Bell",
    minutes: 4,
    art: { icon: "🏈", from: "#05d9e8", to: "#ff6c11" },
    body: [
      "Kicker Danny Ortega's 47-yard field goal with no time left gave the Vice City Sharks a 23–20 win over Liberty City on Sunday and sealed the team's first playoff spot in nine seasons.",
      "Fans poured onto the field after the kick, and security staff spent twenty minutes clearing the turf before the teams could shake hands.",
      "\"I didn't look,\" Ortega said. \"I just heard the noise.\""
    ]
  },
  {
    id: "jai-alai-comeback",
    section: "sports",
    title: "Jai Alai Is Back, and the Fronton Is Packed",
    dek: "The world's fastest ball sport returns to Vice City after a decade away.",
    author: "Marcus Bell",
    minutes: 3,
    art: { icon: "🎾", from: "#ff2a6d", to: "#f9c80e" },
    body: [
      "The restored Vice City Fronton held its first jai alai match in ten years on Saturday, drawing a sellout crowd of 3,200.",
      "Balls in jai alai can travel faster than 150 miles per hour. Many in the crowd were seeing the sport for the first time.",
      "Matches will run Wednesday through Sunday evenings."
    ]
  },
  {
    id: "marathon-heat",
    section: "sports",
    title: "Marathon Moves Start Time to 5 a.m. to Beat the Heat",
    dek: "Organizers say the change follows last year's record number of heat-related withdrawals.",
    author: "Leah Kim",
    minutes: 2,
    art: { icon: "🏃", from: "#ff6c11", to: "#f9c80e" },
    body: [
      "The Vice City Marathon will begin at 5 a.m. this January, an hour earlier than in previous years.",
      "Last year, 212 runners withdrew because of heat exhaustion, the most in the race's history. Organizers will also add four extra water stations along the causeway."
    ]
  },
  {
    id: "hurricane-season-wrapup",
    section: "weather",
    title: "Quiet Hurricane Season Winds Down, but Forecasters Urge Caution",
    dek: "No storms made landfall near Vice City this year. Officials say that is no reason to throw out the plywood.",
    author: "Dr. Celia Moreno",
    minutes: 3,
    art: { icon: "🌀", from: "#05d9e8", to: "#2a0845" },
    body: [
      "With six weeks left in the Atlantic hurricane season, no named storm has come within two hundred miles of Vice City, the National Weather Service office said Monday.",
      "Forecasters stressed that late-season storms are rare but not unheard of, and urged residents to keep emergency kits stocked through November 30."
    ]
  },
  {
    id: "king-tide-flooding",
    section: "weather",
    title: "King Tides Expected to Flood Low Streets This Weekend",
    dek: "The city is placing temporary pumps in Ocean Beach and Little Haiti.",
    author: "Dr. Celia Moreno",
    minutes: 2,
    art: { icon: "🌊", from: "#1b1464", to: "#05d9e8" },
    body: [
      "Seasonal king tides could push seawater into streets in low-lying parts of the city on Saturday and Sunday mornings, the city's public works department warned.",
      "Drivers should avoid standing water, which may contain salt that damages cars. High tide peaks around 9:40 a.m. both days."
    ]
  },
  {
    id: "opinion-bring-back-trolleys",
    section: "opinion",
    title: "Opinion: Bring Back the Beach Trolleys, Every Single One",
    dek: "The city ran forty trolleys in 1986. Today it runs six. That is not progress.",
    author: "Editorial Board",
    minutes: 4,
    art: { icon: "🚋", from: "#f9c80e", to: "#05d9e8" },
    body: [
      "Ask anyone who grew up here what they miss, and the trolleys come up within minutes. Open-air, painted mint and coral, running every eight minutes from Downtown to the north beaches.",
      "Today, six trolleys cover the same route, and wait times run past forty minutes. Meanwhile, the beachfront is choked with cars hunting for parking that does not exist.",
      "The city has the money in its transit reserve. It has the right-of-way. What it lacks is the will. This board urges the commission to restore full trolley service by next summer."
    ]
  },
  {
    id: "opinion-letters-pink-flamingos",
    section: "opinion",
    title: "Letters: On Plastic Flamingos, Parking and Our Neighbors",
    dek: "Readers weigh in on the great lawn-ornament debate in Vice Point.",
    author: "Readers",
    minutes: 3,
    art: { icon: "🦩", from: "#ffb3d9", to: "#b537f2" },
    body: [
      "To the editor: My homeowners' association wants to ban plastic flamingos. I have had the same two since 1984. They have survived four hurricanes and one divorce. They are staying. — G. Pruitt, Vice Point",
      "To the editor: Thank you for your coverage of the parking crisis on Washington Beach. I circled for forty-five minutes on Sunday and eventually just went home. — L. Okonkwo, Downtown",
      "To the editor: Can we please talk about how nice the new benches on the boardwalk are? Somebody at City Hall got something right. — M. Haddad, Little Havana"
    ]
  }
];

VCD.TICKER = [
  "Ocean Drive power fully restored",
  "Sharks open playoffs next Sunday at home",
  "Synth Week passes on sale Friday at noon",
  "King tide warning in effect Saturday and Sunday",
  "Starfish Island detour hours extended",
  "Port posts record quarter"
];

VCD.HOROSCOPES = [
  ["Aries", "A bold move on the dance floor pays off. Wear the white suit."],
  ["Taurus", "Treat yourself to a mango smoothie. You have earned it."],
  ["Gemini", "Two invitations arrive at once. Pick the one with the rooftop."],
  ["Cancer", "Stay near the water today. The tide is on your side."],
  ["Leo", "Your neon era begins now. Others will follow your glow."],
  ["Virgo", "Organize your cassettes. Clarity follows."],
  ["Libra", "Balance work and sunset. Leave the office by six."],
  ["Scorpio", "A stranger in sunglasses has useful advice. Listen."],
  ["Sagittarius", "Take the long way down Ocean Drive. Windows down."],
  ["Capricorn", "Hard work is noticed. Expect a call before Friday."],
  ["Aquarius", "An old friend reappears with a strange idea. Say yes."],
  ["Pisces", "Trust your instincts at the boat show."]
];

VCD.QUOTES = [
  ["The sunset is free. Everything else on Ocean Drive costs extra.", "Old Vice Point saying"],
  ["In this town, the neon never sleeps, and neither do the mosquitoes.", "Anonymous cab driver"],
  ["Every palm tree here has seen something it will never tell.", "Local poet Inés Calderón"],
  ["Humidity is just the city giving you a hug.", "Weather desk, unofficially"],
  ["If you can't find it on Washington Beach, you didn't really need it.", "Boardwalk vendor"],
  ["Pastel is not a color. It's a lifestyle.", "Fashion columnist Remy Laurent"],
  ["We don't have seasons. We have hurricane season and the other one.", "Every resident, ever"]
];

VCD.CLASSIFIEDS = [
  ["FOR SALE", "Speedboat, 28 ft, cigarette style. Runs fast. Smells like coconut oil. Serious offers only."],
  ["WANTED", "Keytar player for synth-pop cover band. Must own own shoulder pads."],
  ["LOST", "Pink flamingo lawn ornament, answers to \"Gerald.\" Last seen near Leaf Links."],
  ["FOR RENT", "Studio, Ocean Beach. Ocean view if you lean out the window a little."],
  ["SERVICES", "Pool cleaning, palm trimming, and moral support. Call Rudy."],
  ["FOR SALE", "Vintage arcade cabinet, works, high score not mine. Pickup Little Haiti."]
];

VCD.WEATHER = [
  { day: "Today", icon: "☀️", hi: 88, lo: 77, note: "Sunny, humid" },
  { day: "Tomorrow", icon: "⛅", hi: 87, lo: 76, note: "Afternoon clouds" },
  { day: "Thu", icon: "⛈️", hi: 85, lo: 75, note: "Late storms" },
  { day: "Fri", icon: "🌤️", hi: 86, lo: 76, note: "Mostly sunny" },
  { day: "Sat", icon: "🌊", hi: 84, lo: 75, note: "King tide AM" }
];
