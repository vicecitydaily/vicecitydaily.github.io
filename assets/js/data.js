// Vice City Daily — GTA VI news.
// Every story is real reporting with links to its sources. Add a story by
// putting a new object at the top of ARTICLES (newest first) and a photo in
// assets/img/. Photos are real-world Miami/Florida shots from Wikimedia
// Commons (free licenses), credited on each story — no Rockstar artwork.
window.VCD = window.VCD || {};

VCD.UPDATED = "2026-10-20";
VCD.INSTAGRAM = { handle: "vicecity.daily6", url: "https://www.instagram.com/vicecity.daily6/" };

// Launch: midnight local time on Nov 19, 2026 (the game unlocks per time zone).
VCD.LAUNCH = { year: 2026, month: 10, day: 19 }; // month is 0-based
VCD.PRELOAD = { year: 2026, month: 10, day: 12 };

VCD.CATEGORIES = [
  { id: "official", name: "Official" },
  { id: "release", name: "Release" },
  { id: "miami", name: "Miami" },
  { id: "industry", name: "Industry" },
  { id: "reports", name: "Reports" }
];

VCD.FACTS = [
  ["Release", "Nov 19, 2026"],
  ["Platforms", "PS5 · Xbox Series X|S"],
  ["Price", "From $79.99"],
  ["Rating", "ESRB M 17+"],
  ["Preload", "Nov 12, 2026"]
];

VCD.TIMELINE = [
  ["2023-12-05", "Trailer 1 revealed: Lucia, Leonida and a return to Vice City"],
  ["2025-05-06", "Trailer 2 introduces Jason Duval"],
  ["2025-11-06", "Rockstar moves launch to November 19, 2026"],
  ["2026-06-18", "Official cover art revealed"],
  ["2026-06-24", "Prices revealed: $79.99 Standard, $99.99 Ultimate"],
  ["2026-08-27", "An Extended Look premieres on Netflix"],
  ["2026-10-15", "Official launch trailer released"],
  ["2026-11-12", "Digital preloads open"],
  ["2026-11-19", "GTA VI launches on PS5 and Xbox Series X|S"],
  ["2026-12-10", "The Game Awards 2026"]
];

// Official Rockstar Games videos on YouTube, embedded with YouTube's player.
VCD.VIDEOS = [
  { id: "rz1B4B2yBZY", title: "Launch Trailer", date: "2026-10-15" },
  { id: "tJbzMqJGH4k", title: "An Extended Look", date: "2026-08-27" },
  { id: "VQRLujxTm3c", title: "Trailer 2", date: "2025-05-06" },
  { id: "QdBZY2fkU-0", title: "Trailer 1", date: "2023-12-05" }
];

// Instagram reels, newest first: [reel code, view count]. The code is the part
// after /reel/ in the link. Views are shown as social proof and power the
// "Most viewed" sort; update them whenever you like. Instagram's official
// embedded player is used, so plays count on the account.
VCD.REELS = [
  ["DerysGmplxE", 187],
  ["Derky53J3jC", 179],
  ["Dera1cGpMsZ", 153],
  ["DerLxtLJQdM", 195],
  ["DemYuH7JSJr", 214],
  ["Dej-qBpJ4YG", 56],
  ["DeiYz6nJwVk", 220],
  ["Deh4tjoTh4o", 244],
  ["Dehj0hTJ_wD", 419],
  ["DehbXFDprdH", 300],
  ["DehQUoipg3-", 321],
  ["DehQGzTJDMs", 244],
  ["DehP9zNpsuT", 263],
  ["DefYddizokn", 167],
  ["DefEEqyJnlI", 2631],
  ["DecSoKcpmO6", 65],
  ["DeaJx23TjAU", 545],
  ["DeXU7zdTM_D", 285],
  ["DePfKY4prp4", 2142],
  ["DePcCPlpVCl", 231],
  ["DeM2WjRJKCq", 282],
  ["DeKNJKLJMk1", 242],
  ["DeHYTzsJM1w", 228],
  ["DeEwCL2JvnP", 250],
  ["DeCN8RjJOrX", 285],
  ["Dd_qgPupvdI", 314],
  ["Dd97LBRTt87", 329],
  ["Dd7PlHlJVnb", 344],
  ["Dd7DFuJPwgt", 916],
  ["Dd68PlKJIQR", 50500],
  ["Dd6oDi0JEip", 139],
  ["Dd4brwmTm35", 242],
  ["Dd4WQyaMLc0", 103],
  ["Dd4TsVTpmD9", 213],
  ["Dd3aMkFpcUr", 90],
  ["Dd26M4QJQVw", 286],
  ["Dd18AA6zAP_", 901],
  ["Dd1pQsxpG8U", 223],
  ["Dd1Tnl9JMno", 280],
  ["Dd04rUIpJmZ", 144],
  ["Dd0ajgUJSgP", 38],
  ["DdzJJHgpfEB", 40],
  ["DdybZhZJo88", 222],
  ["DdyYtBJprD6", 57],
  ["Ddx7JrdpSqM", 51],
  ["DdrYioBp-Xn", 246],
  ["DdrMM2RpFRk", 222],
  ["Ddqz4Ntp8vA", 197],
  ["DdqyWHyJT6z", 197],
  ["DdqC_t9julb", 238],
  ["DdosW4zjg50", 173],
  ["Ddoo-9upv02", 163],
  ["DdoI0tmpBM3", 272],
  ["DdoINXHpKqK", 199],
  ["DdoH3s9J_1_", 183],
  ["DdoG0PMpY1U", 254],
  ["DdmcqeZTqDc", 181],
  ["DdmHL2zJGgZ", 151],
  ["Ddko_PGj_KX", 231],
  ["DdkG2x1zXUb", 574],
  ["DdkEjaiTh9D", 341],
  ["DdjrOqSjgqE", 181],
  ["DdjqPgMjICO", 163],
  ["Ddjd2Wkjs-p", 128],
  ["DdjQDSXjqmK", 184],
  ["DdjPydGju8Q", 167],
  ["DdjPgpeDhbW", 177],
  ["Ddi-8wljIIL", 168],
  ["Ddi7I4DjBlb", 213],
  ["Ddi42RIAvvZ", 177],
  ["DdhkO3Zk68I", 162],
  ["DdhOX2Zp7nw", 222],
  ["DcnubcTphm4", 132],
  ["DcW0sYOTPt-", 145],
  ["DcW0HVLTBUU", 166],
  ["DcWzf_SzJf_", 150],
  ["DcUT4WhzM1O", 126],
  ["DcUTeRgzGBo", 125],
  ["DcUS7C1Tqum", 154],
  ["DcURzZNzGPK", 148],
  ["DcUQwoxTGn9", 128],
  ["DcUQUIZTFmr", 129],
  ["DcUPoQdzHTt", 126],
  ["DcT5uN3JwUl", 138],
  ["DcOnVGopYA0", 122],
  ["DcL0TWPpwZL", 121],
  ["DcJ-S0gzvWK", 158],
  ["DcJ9BfQTrv-", 160],
  ["DcJ8BlRzCIx", 159],
  ["DcJtkw5pbvs", 127],
  ["DcJsy3opWiM", 188],
  ["DcJkn7vprHl", 150]
];

const credit = (artist, license, page) => ({ artist, license, page });

VCD.ARTICLES = [
  {
    id: "gta-6-online-not-at-launch",
    category: "official",
    date: "2026-10-19",
    title: "No GTA 6 Online at Launch, and No Date for It Yet",
    dek: "GTA VI ships on November 19 as a single-player game. Rockstar hasn't announced when its online mode will follow.",
    image: "no-online.jpg",
    credit: credit("Elbert Hampton", "CC0", "https://commons.wikimedia.org/wiki/File:Lifeguard_tower_in_Miami_Beach_-_november_2022.jpg"),
    body: [
      "Rockstar has confirmed that Grand Theft Auto VI will not include multiplayer when it launches on November 19. There is no official release date for an online mode, and Rockstar has not shown a trailer for one.",
      "There is a precedent for a short wait. GTA V's story mode came out on September 17, 2013, and GTA Online followed about two weeks later, on October 1. But GTA VI is a much bigger project, so there's no guarantee it follows the same pattern. Some coverage points to 2027 as a possibility.",
      "Twitch CEO Dan Clancy has said the company expects an even bigger surge in viewing the year after launch, when Rockstar brings multiplayer online. Until then, the current GTA Online remains available."
    ],
    sources: [
      ["The Game Haus", "https://thegamehaus.com/gaming/is-there-a-gta-6-online-release-date/2026/10/19/"]
    ]
  },
  {
    id: "launch-trailer",
    category: "official",
    date: "2026-10-15",
    featured: true,
    title: "Rockstar Drops the Official GTA VI Launch Trailer",
    dek: "Ninety seconds of in-game footage captured on PS5: an easy score goes wrong, and Jason and Lucia are pulled into a conspiracy across Leonida.",
    image: "launch-trailer.jpg",
    video: "rz1B4B2yBZY",
    credit: credit("Radomianin", "Public domain", "https://commons.wikimedia.org/wiki/File:The_Carlyle_(neon_sign),_Miami_Beach,_east_view_up,_2018-08-21.jpg"),
    body: [
      "Rockstar Games released the official launch trailer for Grand Theft Auto VI on October 15, five weeks before the game arrives on PlayStation 5 and Xbox Series X|S.",
      "The trailer runs about 90 seconds. Rockstar says it was captured entirely in-game on a PlayStation 5, though it didn't say whether that was a base console or a PS5 Pro.",
      "The official synopsis: Jason and Lucia's criminal plans go wrong during an easy score, leaving them in the middle of a criminal conspiracy that stretches across the state of Leonida. To survive, they have to rely on each other. Early in the trailer, Jason explains that he didn't leave the army on the best of terms, and Lucia appears on parole, wearing an ankle monitor in several scenes.",
      "It's Rockstar's first major new single-player release since Red Dead Redemption 2 in 2018."
    ],
    sources: [
      ["Video Games Chronicle", "https://www.videogameschronicle.com/news/rockstar-has-revealed-the-official-launch-trailer-for-grand-theft-auto-6/"],
      ["TechRadar", "https://www.techradar.com/gaming/grand-theft-auto-6s-launch-trailer-is-here-giving-fans-a-deeper-look-at-jason-and-lucias-crime-fueled-story"],
      ["FOX10", "https://www.fox10tv.com/2026/10/16/gta-6-locks-nov-19-release-date-after-delays/"]
    ]
  },
  {
    id: "justice-flower-in-a-hurricane",
    category: "official",
    date: "2026-10-15",
    title: "Justice Scores GTA VI, With a Star-Studded Single in the Trailer",
    dek: "\"Flower in a Hurricane\" features Tame Impala, SZA and King Gizzard & The Lizard Wizard.",
    image: "justice.jpg",
    credit: credit("Shixart1985", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:A_large_crowd_enjoys_a_music_concert_illuminated_by_colorful_lights_and_a_stunning_stage_display.jpg"),
    body: [
      "French electronic duo Justice composed GTA VI's original score, according to Rockstar.",
      "The launch trailer debuts a new Justice single, \"Flower in a Hurricane,\" featuring Tame Impala, SZA and King Gizzard & The Lizard Wizard. The song will appear on Grand Theft Auto VI: The Album, the game's official soundtrack."
    ],
    sources: [
      ["Video Games Chronicle", "https://www.videogameschronicle.com/news/rockstar-has-revealed-the-official-launch-trailer-for-grand-theft-auto-6/"],
      ["God is a Geek", "https://godisageek.com/2026/10/gta-6-launch-trailer-justice-ps5/"]
    ]
  },
  {
    id: "game-awards-eligible",
    category: "industry",
    date: "2026-10-15",
    title: "GTA VI Makes The Game Awards 2026 Cutoff by One Day",
    dek: "Games must be on sale by 9 p.m. PT on November 20. GTA VI launches on the 19th.",
    image: "game-awards.jpg",
    credit: credit("Luis Alfredo Romero", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Biscayne_Bay_sunset.jpg"),
    body: [
      "The Game Awards' rules say games must be commercially available on or before Friday, November 20, 2026, at 9 p.m. PT. GTA VI's November 19 launch lands just inside that window, which makes it eligible for this year's awards, including Game of the Year.",
      "The fan-voted Players' Voice category has a later cutoff, November 30. The ceremony is set for December 10, 2026."
    ],
    sources: [
      ["Insider Gaming", "https://insider-gaming.com/gta-6-is-officially-eligible-for-the-game-awards-2026/"],
      ["Kotaku", "https://kotaku.com/gta-6-avoids-a-very-awkward-situation-by-officially-being-eligible-for-the-2026-game-awards-2000746320"],
      ["Beebom", "https://beebom.com/gta-6-eligible-for-goty-at-the-game-awards-2026/"]
    ]
  },
  {
    id: "rockstar-next-game-faster",
    category: "industry",
    date: "2026-10-15",
    title: "Rockstar: No More Eight-Year Waits After GTA VI",
    dek: "Studio leads say the engine, tools and team built for GTA VI will speed up whatever comes next.",
    image: "next-game.jpg",
    credit: credit("Lawrence Rayner", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Palm_Sunset.jpg"),
    body: [
      "In an interview with Bloomberg, Rockstar's Phil Hooker and Aaron Garbut said the studio won't repeat the long gap between GTA V and GTA VI.",
      "\"The engine, the tools and the team we've built during this project will allow us to do things more quickly,\" Hooker said.",
      "\"We foundationally changed a lot of stuff on this project,\" Garbut added. \"But now it's done, and we're not going to rip it apart.\""
    ],
    sources: [
      ["Video Games Chronicle (citing Bloomberg)", "https://www.videogameschronicle.com/news/rockstar-has-revealed-the-official-launch-trailer-for-grand-theft-auto-6/"]
    ]
  },
  {
    id: "release-date-locked-preload",
    category: "release",
    date: "2026-10-16",
    title: "November 19 Is Locked: Preloads Open a Week Early",
    dek: "GTA VI unlocks at midnight in each time zone, so the launch rolls around the world over about a day.",
    image: "release-date.jpg",
    credit: credit("Dori", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Night_Panorama_Miami_Florida_5462.jpg"),
    body: [
      "After moving from fall 2025 to May 26, 2026, and then to November 19, 2026, GTA VI's release date has held. The launch trailer reconfirmed November 19 for PS5 and Xbox Series X|S.",
      "Digital preloads begin November 12, one week before launch. The game unlocks at midnight local time in each region rather than at one moment worldwide: New Zealand players go first (11:00 UTC on November 18), and the US West Coast is last (08:00 UTC on November 19).",
      "Wall Street analysts estimate the game cost more than $1 billion to make, which would make it the most expensive video game ever produced. Rockstar hasn't confirmed a figure."
    ],
    sources: [
      ["FOX10", "https://www.fox10tv.com/2026/10/16/gta-6-locks-nov-19-release-date-after-delays/"],
      ["All Things How", "https://allthings.how/gta-6-release-date/"]
    ]
  },
  {
    id: "pc-version-q1-2027-report",
    category: "reports",
    date: "2026-10-13",
    title: "Report: GTA VI Could Hit PC in Early 2027",
    dek: "A GamesBeat report citing four anonymous sources points to January through March. Rockstar hasn't announced a PC version.",
    image: "pc-report.jpg",
    credit: credit("Phillip Pessar", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Art_Deco_Hotels_Ocean_Drive_South_Beach.jpg"),
    body: [
      "GamesBeat reported on October 13 that Rockstar is targeting the first quarter of 2027 for GTA VI on PC, citing four industry sources familiar with the studio's plans. Rockstar did not respond to a request for comment.",
      "Treat it as unconfirmed: Rockstar has not announced a PC version or date. If the report is right, the wait would be far shorter than GTA V's, which reached PC about a year and seven months after its console debut."
    ],
    sources: [
      ["PCWorld", "https://www.pcworld.com/article/3260660/we-guessed-late-2027-for-gta-6-on-pc-a-report-says-q1-2027.html"],
      ["Beebom", "https://beebom.com/gta-6-pc-reportedly-releasing-in-q1-2027/"],
      ["Dexerto", "https://www.dexerto.com/gta/gta-6-releasing-on-pc-much-earlier-than-expected-report-3418569/"]
    ]
  },
  {
    id: "miami-dade-pushback",
    category: "miami",
    date: "2026-10-12",
    title: "Miami-Dade Pushes Back on Turning Its Airport Into Vice City",
    dek: "Commissioners balked at plans to dress Miami International Airport, PortMiami and Metromover stations for GTA VI.",
    image: "county-pushback.jpg",
    credit: credit("FunctioningMemberOfSociety", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Miami_International_Airport_(MIA)_June_2024_(2).jpg"),
    body: [
      "A plan from Mayor Daniella Levine Cava's staff to have Rockstar pay the county to dress public facilities as Vice City ran into resistance at the county commission.",
      "Commissioner Rene Garcia led the opposition. \"I feel really uncomfortable with this whole thing,\" he said, noting that Rockstar is spending at least $150 million marketing the game while the county settled for less than $1 million. Commissioner Danielle Cohen Higgins pointed to county policy barring advertising that promotes violence.",
      "Commissioners scheduled an October 20 vote on whether the county keeps its role in the plan. The city-level deals aren't affected: Downtown Miami banners and Miami Beach chair and umbrella branding were approved by the cities, and the Miami Heat's \"A Night in Vice City\" game is set for November 18."
    ],
    sources: [
      ["GTA BOOM", "https://www.gtaboom.com/miami-dade-pushes-back-on-turning-its-airport-into-vice-city-for-gta-6-3969"]
    ]
  },
  {
    id: "xbox-cloud-no-pc-streaming",
    category: "industry",
    date: "2026-10-07",
    title: "Xbox: GTA VI Won't Stream to PC at Launch",
    dek: "Xbox strategy chief Matthew Ball shot down reports of exclusive cloud-streaming rights.",
    image: "xbox-cloud.jpg",
    credit: credit("Kyu3a", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Xbox_Series_X%E3%81%A8Series_S.jpg"),
    body: [
      "Matthew Ball, Xbox's Chief Strategy Officer, said on October 7 that GTA VI is coming to Xbox on November 19 but won't be streamed exclusively or to PC. That rules out Xbox Cloud Gaming as a way for PC players to get in on day one.",
      "Ball's post followed a report from The Verge that Xbox would be the only platform offering cloud streaming of GTA VI at launch. The Verge later corrected its story to say Microsoft's deal isn't exclusive and doesn't include PC streaming."
    ],
    sources: [
      ["Digital Citizen", "https://www.digitalcitizen.life/gta-6-will-not-stream-to-pc-at-launch-xbox-matthew-ball/"],
      ["ProPakistani", "https://propakistani.pk/2026/10/07/xbox-clarifies-gta-6-will-not-stream-to-pc-at-launch/"]
    ]
  },
  {
    id: "esrb-mature-rating",
    category: "official",
    date: "2026-10-01",
    title: "GTA VI Is Officially Rated M for Mature 17+",
    dek: "The rating now shows on Rockstar's site and the US PlayStation and Xbox stores, with seven content descriptors.",
    image: "esrb.jpg",
    credit: credit("Radomianin", "Public domain", "https://commons.wikimedia.org/wiki/File:Boulevard_Hotel_(Neon_sign),_Miami_Beach.jpg"),
    body: [
      "The ESRB has rated Grand Theft Auto VI Mature 17+. The rating appears on Rockstar's GTA VI site and the US PlayStation and Xbox store listings.",
      "The descriptors are Blood and Gore, Intense Violence, Mature Humor, Nudity, Strong Language, Strong Sexual Content, and Use of Drugs and Alcohol, plus an In-Game Purchases notice.",
      "Ratings differ by region: PEGI 18 in the UK and Europe, R18 in Australia and New Zealand, and 21+ in Saudi Arabia and the UAE."
    ],
    sources: [
      ["Cheat Code Central", "https://cheatcc.com/articles/gta-6-rated-mature-17-by-esrb-as-australia-and-nz-stores-flag-sex-scenes/"],
      ["Dexerto", "https://www.dexerto.com/gta/gta-6-age-ratings-suggest-no-gambling-to-go-with-drugs-and-decapitations-3416139/"]
    ]
  },
  {
    id: "game-informer-cover-story",
    category: "official",
    date: "2026-09-25",
    title: "Game Informer's GTA VI Cover Story Explores Leonida's Weather and Wildlife",
    dek: "Fourteen pages, twelve new screenshots and interviews with Rockstar's lead designers.",
    image: "game-informer.jpg",
    credit: credit("Zygy", "CC0", "https://commons.wikimedia.org/wiki/File:Alligator_mississippiensis_113744549.jpg"),
    body: [
      "Game Informer revealed its GTA VI cover on September 25, with art supplied by Rockstar showing Jason Duval and Lucia Caminos. The digital issue went live on September 29.",
      "The 14-page feature, written by South Florida native Marcus Stewart, focuses on Leonida, the game's take on Florida. It covers weather systems built to capture the state's less sunny side, wildlife on land, in the air and at sea, and how Rockstar researched Miami and Florida. It includes 12 new screenshots and interviews with several of Rockstar's lead designers."
    ],
    sources: [
      ["Game Informer: cover reveal", "https://gameinformer.com/cover-reveal/2026/09/25/cover-reveal-grand-theft-auto-vi"],
      ["Game Informer: digital issue", "https://gameinformer.com/digital-issue/2026/09/29/the-grand-theft-auto-vi-digital-issue-is-now-live"]
    ]
  },
  {
    id: "welcome-to-vice-city-sign",
    category: "miami",
    date: "2026-09-18",
    title: "A Giant \"Welcome to Vice City\" Sign Now Tops Miami's Kaseya Center",
    dek: "Rockstar paid Miami-Dade County about $975,000 for the rooftop sign on the home of the Miami Heat.",
    image: "kaseya-sign.jpg",
    credit: credit("Daniel Christensen", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Downtown_Miami_Night_Skyline_from_Watson_Island.jpg"),
    body: [
      "Downtown Miami now has a \"Welcome to Vice City\" sign on the roof of the county-owned Kaseya Center. Rockstar is paying about $975,000 for the temporary placement, according to the Miami Herald.",
      "Because the deal came in under $1 million, the mayor could approve it without a full commission vote, and some commissioners objected. Commissioner Natalie Milian Orbis said she would have appreciated more information, and Commissioner Juan Carlos Bermudez raised concerns about the county's reputation.",
      "Most of the money will go toward redeveloping Parcel B, a county-owned waterfront lot behind the arena slated to become a community park."
    ],
    sources: [
      ["Local 10 News", "https://www.local10.com/news/local/2026/09/18/miami-dade-commissioners-raise-concerns-about-countys-welcome-to-vice-city-deal-with-grand-theft-auto-vi-game/"],
      ["WLRN", "https://www.wlrn.org/light/government-politics/2026-09-18/miami-dade-welcome-to-vice-city-gta-kaseya"]
    ]
  },
  {
    id: "extended-look-netflix",
    category: "official",
    date: "2026-08-27",
    title: "Rockstar Premieres a 27-Minute \"Extended Look\" at GTA VI on Netflix",
    dek: "The in-game presentation streamed on Netflix first, then hit Rockstar's YouTube channel six hours later.",
    image: "next-game.jpg",
    video: "tJbzMqJGH4k",
    credit: credit("Rockstar Games", "official video via YouTube", "https://www.youtube.com/watch?v=tJbzMqJGH4k"),
    body: [
      "Rockstar announced on August 6 that Grand Theft Auto VI: An Extended Look would premiere on Netflix on Thursday, August 27, at 3 p.m. ET. The same presentation went up on Rockstar's YouTube channel and the GTA VI website at 9 p.m. ET that evening, giving Netflix a six-hour head start.",
      "Rockstar says the presentation was captured entirely from in-game footage on PS5. It follows Jason Duval and Lucia Caminos through Leonida, the game's fictional take on Florida.",
      "It was the longest look at the game Rockstar had shown, and a break from the studio's usual approach of releasing trailers only on its own channels."
    ],
    sources: [
      ["Game Informer", "https://gameinformer.com/2026/08/06/grand-theft-auto-vi-is-getting-an-extended-look-on-netflix-august-27"],
      ["GameSpot", "https://www.gamespot.com/articles/gta-6-extended-look-coming-august-27-on-netflix/"],
      ["Rockstar Games", "https://www.rockstargames.com/VI/an-extended-look"]
    ]
  },
  {
    id: "cover-art-reveal",
    category: "official",
    date: "2026-06-18",
    title: "GTA VI's Official Cover Art Revealed, With Pre-Orders Set for June 25",
    dek: "A classic grid-style cover built around Lucia Caminos and Jason Duval ended more than a year of silence after Trailer 2.",
    image: "esrb.jpg",
    video: "INjHGpMRjRA",
    photoInsteadOfVideoStill: true,
    credit: credit("Radomianin", "Public domain", "https://commons.wikimedia.org/wiki/File:Boulevard_Hotel_(Neon_sign),_Miami_Beach.jpg"),
    body: [
      "Rockstar revealed the official cover art for Grand Theft Auto VI on June 18, 2026, alongside a short teaser video. It was the first new look at the game in more than 400 days, since Trailer 2 in May 2025.",
      "The artwork uses the grid layout that has defined GTA covers for decades, centered on protagonists Lucia Caminos and Jason Duval.",
      "Rockstar also confirmed that pre-orders would open June 25 on digital storefronts and at select retailers."
    ],
    sources: [
      ["GTABase", "https://www.gtabase.com/articles/gta-6/gta-6-official-cover-art-revealed-pre-orders-begin-june-25"],
      ["Gfinity Esports", "https://www.gfinityesports.com/article/official-gta-6-cover-art-unveiled-by-rockstar"]
    ]
  },
  {
    id: "price-editions-preorder",
    category: "release",
    date: "2026-06-24",
    title: "GTA VI Costs $79.99. The Ultimate Edition Is $99.99",
    dek: "Pre-order bonuses include the Vintage Vice City Pack and a free month of GTA+. Physical copies contain a download code, not a disc.",
    image: "editions.jpg",
    credit: credit("InclusiveGameLab", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:InclusiveGameLab_Person-with-PS5-Controller_4_CC-BY-SA.jpg"),
    body: [
      "Take-Two confirmed pricing for GTA VI: $79.99 for the Standard Edition and $99.99 for the Ultimate Edition on PS5 and Xbox Series X|S. Standard owners can upgrade later for $20.",
      "Every pre-order includes the Vintage Vice City Pack: a '55 Vapid Stanier with a Shore Court garage, outfits and hairstyles for Jason and Lucia, and an exclusive weapon pattern. Digital pre-orders on the PlayStation Store or Microsoft Store also include one free month of GTA+, which auto-renews at the regular price unless you cancel.",
      "Ultimate Edition extras include a '67 Vapid Dominator Buggy with a Paradise garage, a '95 Grotti Cheetah, a classic car collection, a Shitzu Squalo boat, the Hawk & Little Morgan revolver, custom sidearms, and extra clothing, tattoo and salon options. The physical edition's case contains a download code; there's no disc."
    ],
    sources: [
      ["MP1st", "https://mp1st.com/news/gta-6-pre-load-pre-order-bonuses-new-screenshots-revealed-standard-edition-costs-80"],
      ["The Express Tribune", "https://tribune.com.pk/story/2614883/rockstar-confirms-gta-6-price-and-details-launch-editions-ahead-of-pre-orders-going-live?amp=1"]
    ]
  }
];
