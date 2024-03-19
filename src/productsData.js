const products = [
    {
      id: 1,
      name: 'No Weapon Formed Against Me Will Prosper',
      date: 2022,
      collection: "Black Dog",
      price: 3000,
      image: ['/images/endscene.jpg'],
      media: 'Graphite and marker on paper, digital collage',
      dimensions: "3x3ft",
      description: 'A piece part of the “Black Dog” series using the motif of the black dog to illustrate the absurdity of the loyalty of suffering in life.',
    },

    {
      id: 2,
      name: 'When the soul breaks through the confines of its mortal frame',
      date: 2021,
      collection: '',
      price: 12000,
      image: ['/images/nihilist.jpg', '/images/nihilist-1.jpg', '/images/nihilistwarm.jpg'],
      media: 'Graphite, acrylic, marker on paper, digital collage',
      dimensions: "24x18in",
      description: 'This captivating artwork portrays a dichotomy of selves, with the elder positioned in a taxi\'s front seat and the younger self in the back, illustrating the poignant tension between mortal physicality and intellectual aspirations. The older self, a symbol of the earthly constraints, confronts the youthful self wielding a silencer, embodying the ceaseless pursuit of transcending worldly limits. As the aged visage signifies the inherent boundaries of our existence, the younger self becomes a symbol of the relentless quest for enlightenment, showcasing the perpetual struggle to overcome the limitations of the physical realm and embrace the boundless realm of intellectual exploration.',
    },
    
    {
        id: 3,
        name: 'SAP(FORTHESOUL)',
        date: 2022,
        collection: '',
        price: 10000,
        image: ['/videos/SAP.mp4', '/images/SAP.JPG'],
        media: '3D model sculpture, PIR motion sensor, DFPlayer, SD card, jumper wires, arduino uno',
        dimensions: "9x10x4in",
        description: '"SAP(FORTHESOUL)" is a multimedia art piece conceived during my sophomore year at Parsons School of Design. Utilizing AutoCAD, I crafted a 3D sculpture inspired by African plaques. The sculpture incorporates Arduino technology, employing a PIR motion sensor and DFPlayer with an SD card, to dynamically generate speeches exploring existential and absurdist themes. The spoken words, a compilation of writings by Jean-Paul Sartre, Albert Camus, and my own alterations, are transformed into speech through text-to-speech software, creating an immersive and thought-provoking experience within the 9x10x4in dimensions of the artwork.',
      },

      {
        id: 4,
        name: 'The Paradox of the Absurdist',
        date: 2022,
        collection: '',
        price: 1000,
        image: ['/images/absurdist.jpg'],
        media: 'Oil on canvas, digital collage',
        dimensions: '2x3ft',
        description: '“The Paradox of the Absurdist” is a collage painting regarding absurdism; the belief that human exist in a purposeless, chaotic world. With this knowledge one has the choice to rebel or embrace what life gives us.',
      },
      {
        id: 5,
        name: 'Fortis Fortuna Adiuvat',
        date: 2022,
        collection: 'Black Dog',
        price: 1000,
        image: ['/images/angel.JPG'],
        media: 'Graphite on paper, digital collage',
        dimensions: '30x40in',
        description: 'A piece part of the “Black Dog” series using the motif of the black dog to illustrate the absurdity of the loyalty of suffering in life.',
      },

      {
        id: 6,
        name: 'Kirin',
        date: 2023,
        collection: '',
        price: 1000,
        image: ['/images/kirin.jpg'],
        media:'Graphic, charcoal and conte crayon on paper',
        dimensions: "18x24in",
        description: 'A custom drawing made in traditional Japanese tattoo style that pays tribute to the Japanese mythological creature, the Kirin.',
      },

      {
        id: 7,
        name: 'Divinity in Hollowness',
        date: 2024,
        collection: '',
        price: 10000,
        image: ['/images/skeleton.jpg'],
        media:'Graphic, charcoal and conte crayon on paper',
        dimensions: "18x24in",
        description: '"Divinity in Hollowness", finished in 2024, explores the convergence of life and death through a haunting portrayal of a zombie-angel hybrid with a radiant cross on its forehead and four arms – symbolizing the struggle for divinity amid the desolation of existence. Rendered in graphic, charcoal, and conte crayon on paper, the 18x24in piece captures a desolate scene of decay along an empty river, where a decaying figure is haunted by the otherworldly presence. This piece evokes themes of  accepting one\'s hollowness, confronting the loss of self, and seeking transcendence in the void, welcoming viewers to reflect on the intersection of spirituality and mortality.',
      },

      {
        id: 8,
        name: 'Solo/Sinnerman',
        date: 2021,
        collection: '',
        price: 1000,
        image: ['/images/solo-1.JPG'],
        media: "Graphite, marker, acrylic on paper",
        dimensions: '6x6in',
        description: 'This piece serves as a profound self-portrait reflecting my present state, employing bold lines to evoke a dark and somber atmosphere inspired by film noir aesthetics. Originating from a dream featuring a conversation with a figure reminiscent of Machiavelli, the piece delves into the dichotomy of being perceived as the \'good guy\' loved rather than feared. The dream\'s impact on my principles and character is encapsulated in the portrait, subtly alluding to Christianity and smoking as symbols of a cynical hero navigating the complexities of the world while staying true to personal principles, even acknowledging inherent flaws.',
      },

      {
        id: 9,
        name: 'L\'homme noir et le chat',
        date: 2019,
        collection: 'Le Noir',
        price: 1000,
        image: ['/images/blackcat.jpg'],
        media: "Acrylic and oil on paper",
        dimensions: "9x12in",
        description: '"L\'homme noir et le chat," created in 2019 with acrylic and oil on paper, measures 9x12 inches. This artwork explores the complexity of subtle racial undertones within societal dynamics. Through the juxtaposition of a black man in a ski mask and a black cat with human-like eyes, the painting prompts reflection on the dehumanizing gaze and the awkward interplay between the two subjects.',
      },

      {
        id: 10,
        name: 'The Amerikkkan Neighbor',
        date: 2021,
        collection: '',
        price: 12000,
        image: ['/images/Amerikkka.jpg'],
        media: 'Oil, acrylic, aluminum foil on canvas, digital collage',
        dimensions: '2x3ft',
        description: 'This multimedia piece envisions a fictional intrusion, placing a KKK member in my living room, drawing inspiration from Faith Ringgold\’s The American People Series: Die and Picasso\’s Guernica. It serves as a critical exploration of America\'s unsettling fixation on racism, depicting the stagnant progress in addressing racial issues. Developed over nearly a year, the painting captures the escalating violence against the black community, highlighting the numbing impact of media coverage and the persistent lack of accountability for oppressors. Amid senseless bloodshed, the piece prompts reflection on the motivations behind such acts, suggesting the need for understanding to address the ongoing cycle of violence.',
      },

      {
        id: 11,
        name: 'Smh, Bill, smh',
        date: 2019,
        collection: '',
        price: 50,
        image: ['/images/bill.jpg'],
        media: 'Collage on paper, digital',
        dimensions: '8.5x11in',
        description: '',
      },

      {
        id: 12,
        name: 'The Caped Woman',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/cloak.jpg'],
        media: 'Collage on paper, digital',
        dimensions: '8.5x11in',
        description: '',
      },

      {
        id: 13,
        name: 'FORESIGHT!',
        date: 2021,
        collection: '',
        price: 16000,
        image: ['/images/foresight.JPG', '/images/foresight-1.JPG', '/images/foresight-2.JPG', '/images/foresight-3.JPG', '/images/foresight-4.JPG'],
        media: 'Oil and digital collage',
        dimensions: '24x18in',
        description: 'In "FORESIGHT," the portrayal of myself on a payphone surrounded by black witch moths and observed by the Whooping Boy on the Three Legged Horse delves into the interconnectedness of cultural monsters and the values embedded in Jamaican folklore. Examining entities like the duppies, specifically the Three Legged Horse with its deadly pursuit and the Whooping Boy riding it, reveals how these monsters embody societal fears and cultural warnings. Through the symbolism of the black witch moth, considered a harbinger of death, the narrative unfolds to explore the essence of fear and its transformative impact on desires, illustrating the profound connection between fear, powerlessness, and the pursuit of self-sufficiency.',
      },

      {
        id: 14,
        name: 'Godspeed Cowboy',
        date: 2020,
        collection: '',
        price: 15000,
        image: ['/images/godspeed.JPG'],
        media: 'Oil, acrylic, collage, charcoal, and fabric on canvas',
        dimensions: "18x24in",
        description: 'The multimedia artwork portrays a moment between myself as a toddler and my father, drawing parallels between Western Americana Cowboy culture and my father\'s characteristics. Through the inclusion of black figures and religious symbolism, such as the rope acting as a halo, the piece reflects the empowerment and values instilled by my father within a cultural context often overlooked. Despite emotional absence, the subtle expressions of love through color and composition underscore the enduring connections and unique expressions of affection within the piece.',
      },

      {
        id: 15,
        name: 'The Painter & Consciousness',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/painter.JPG'],
        media: 'Collage on paper, digital',
        dimensions: '8.5x11in',
        description: '',
      },

      {
        id: 16,
        name: 'Transparent',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/wineglass.jpg'],
        media: 'Acrylic on paper',
        dimensions: '9x12in',
        description: '"Transparent," created in 2019, is an acrylic on paper artwork measuring 9x12 inches. This composition features a still life arrangement of a wine bottle, wine glass, and a candle, serving as a metaphorical exploration of emotional transparency. The delicate interplay of light and shadow in this piece mirrors the vulnerability and openness one experiences when embracing a transparent state of being, inviting viewers to reflect on the subtle nuances of human connection.',
      },

      {
        id: 17,
        name: 'Sunday Morning Cowboy',
        date: 2020,
        collection: '',
        price: 1000,
        image: ['/images/sunday.jpg'],
        media: 'Oil, acrylic, fabric on canvas, and digital collage',
        dimensions: '18x24in',
        description: 'The multimedia artwork portrays a moment between myself as a toddler and my mother, delving into themes of religion, family dynamics, culture, and shared history. Through the symbolism of the burning bush, the piece encapsulates my mother\'s profound belief in me, reminiscent of the biblical narrative of Moses leading the Israelites. Despite occasional miscommunication, represented through the fragmented style, the artwork emphasizes the enduring strength of our familial bond and the profound influence of our shared past on shaping our identities.',
      },

      {
        id: 18,
        name: 'I GOT MY REPARATIONS, BOUGHT MYSELF SOME JEWELRY!',
        date: 2020,
        collection: '',
        price: 7000,
        image: ['/images/reparations.JPG'],
        media: 'Acrylic, collage on canvas panel',
        dimensions: "9x9in",
        description: 'In this mix media piece, acrylic, oil and collage were used to illustrate a radical idea about reparations. There’s a concern in which one, who are reparations really for, two, what is being given as reparations, three, is it ever enough and four, what happens when reparations are distributed?',
      },

      {
        id: 19,
        name: 'Glitter will always make you feel better',
        date: 2019,
        collection: '',
        price: 7000,
        image: ['/images/glitter.jpg', '/images/glitter-1.jpg', '/images/glitter-2.jpg', '/images/glitter-3.jpg', '/images/glitter-4.JPG'],
        media: 'Acrylic, oil on canvas, digital',
        dimensions: "18x24in",
        description: 'The series of artworks unfolds a nuanced exploration of the artist\'s relationship with art, deepening as one progresses through the swiped images. The initial painting symbolizes a surface-level connection, where art is depicted as a captivating figure that collaboratively engages and educates the artist about various facets of life. However, as the digital distortions intensify with each swipe, the perception of this relationship transforms, culminating in a visually evocative "bad trip," highlighting the complex and unpredictable nature inherent in any artist-art relationship.',
      },

      {
        id: 20,
        name: 'infinitum',
        date: 2019,
        collection: '',
        price: 2500,
        image: ['/images/infinitum.jpg'],
        media: 'Charcoal, marker, and acrylic on canvas',
        dimensions: "8x11in",
        description: 'In this mixed media piece, the artist explores the enigma of existence, shaping the figure with a line and geometric forms to convey a sense of hollowness and ambiguity. Mirrored shapes symbolize the dualities and intersections of life, prompting reflection on the uncertainties surrounding identity. By incorporating textures that evoke the vastness of space, the artwork delves into the unknown aspects of both ourselves and the universe, culminating in a thought-provoking representation of a subconscious holding a gun – a poignant inquiry into the fate of consciousness after death and the profound question of our finiteness.',
      },

      {
        id: 21,
        name: 'Anti',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/anti.jpg'],
        media: 'photography and digital print',
        dimensions: '8.5x11in',
        description: 'In "Anti," created in 2019 through the medium of photography and digital print with dimensions of 8.5x11 inches, the artist captures a poignant narrative surrounding substance abuse. The spilled pills serve as a visual metaphor for the scattered consequences of addiction, while the overlaid image of a bloody sink intensifies the raw and visceral impact, addressing the physical toll and personal struggle associated with substance misuse. This piece prompts reflection on the destructive nature of substance abuse and fosters a dialogue on the urgent need for empathy and support in combating this pervasive issue.',
      },

      {
        id: 22,
        name: 'Explicit Print',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/beachside.JPG'],
        media: 'digital print',
        dimensions: '8.5x11in',
        description: '',
      },

      {
        id: 23,
        name: 'Easy Way Out',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/exit.JPG'],
        media: 'photography and digital print',
        dimensions: '8.5x11in',
        description: '',
      },

      {
        id: 24,
        name: 'Seul-2',
        date: 2019,
        collection: 'Seul',
        price: 1000,
        image: ['/images/seul-2.JPG'],
        media: 'photography and digital print',
        dimensions: '18x24in',
        description: '',
      },

      {
        id: 25,
        name: 'Consciousness',
        date: 2019,
        collection: '',
        price: 2000,
        image: ['/images/swan.JPG'],
        media: 'Charcoal on paper, digital print',
        dimensions: '8x8in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 26,
        name: 'Sunday Radio',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/radio.jpg'],
        media: 'Charcoal on paper, digital print',
        dimensions: '8x8in',
        description: 'An exquisite sculpture to adorn your living space.',
      },
      {
        id: 27,
        name: 'Breathe Alone',
        date: 2019,
        collection: 'Seul',
        price: 1000,
        image: ['/images/seul-1.JPG'],
        media: 'photography and digital print',
        dimensions: '36x18in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 28,
        name: 'Contrasted Saturation',
        date: 2019,
        collection: '',
        price: 2000,
        image: ['/images/umbrella.jpg'],
        media: 'photography and digital print',
        dimensions: '36x18in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 29,
        name: 'Sacred Heartz',
        date: 2023,
        collection: '',
        price: 5000,
        image: ['/images/sacred.JPG'],
        media: 'photography and digital print',
        dimensions: '48x18in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 30,
        name: 'Subterranean Voyage',
        date: 2023,
        collection: '',
        price: 5000,
        image: ['/images/sub.JPG',],
        media: 'photography and digital print',
        dimensions: '36x18in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 31,
        name: 'Chromed: SUDO RM -RF',
        date: 2023,
        collection: '',
        price: 5000,
        image: ['/images/chromed.JPG', '/images/chromedgreen.JPG', '/images/chromedred.JPG'],
        media: 'photography and digital print',
        dimensions: '36x18in',
        description: 'An exquisite sculpture to adorn your living space.',
      },
      {
        id: 32,
        name: 'Targetted',
        date: 2021,
        collection: '',
        price: 2000,
        image: ['/images/TROUBLE1.JPG'],
        media: 'photography and digital collage print',
        dimensions: '36x36in',
        description: 'An exquisite sculpture to adorn your living space.',
      },
      {
        id: 33,
        name: 'Sandra',
        date: 2021,
        collection: '',
        price: 2000,
        image: ['public/images/sandra25.jpg'],
        media: 'photography and digital collage print',
        dimensions: '36x36in',
        description: 'An exquisite sculpture to adorn your living space.',
      },
      {
        id: 34,
        name: 'Self Portrait of the Solo',
        date: 2021,
        collection: '',
        price: 2000,
        image: ['/images/trippingme11.JPG'],
        media: 'photography and digital print',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },
      {
        id: 35,
        name: 'SOULO',
        date: 2021,
        collection: '',
        price: 2000,
        image: ['/images/soulo.jpg', '/images/soulowarm.jpg', '/images/soulored.jpg', '/images/souloyellow.jpg'],
        media: 'photography and digital print',
        dimensions: '36x36in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 36,
        name: 'Untitled',
        date: 2022,
        collection: '',
        price: 15000,
        image: ['/images/mene.jpg'],
        media: 'Graphite and collage on paper, digital collage',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 37,
        name: 'The Absurdist Manifesto',
        date: 2022,
        collection: '',
        price: 20000,
        image: ['/images/FAM-13.jpg', '/images/FAM-increasedcontrast3.jpg', '/images/FAM-14.JPG'],
        media: 'Graphite and collage on paper, digital collage',
        dimensions: '36x18in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 38,
        name: 'RHAATID BRITIAN FI WI COLONIZA',
        date: 2020,
        collection: '',
        price: 8000,
        image: ['/images/RBFWC-0.JPG', '/images/RBFWC-1.JPG', '/images/RBFWC-2.JPG', '/images/RBFWC-3.JPG', '/images/RBFWC-4.JPG', '/images/RBFWC-5.JPG', '/images/RBFWC-6.JPG', '/images/RBFWC-7.JPG', '/images/RBFWC-8.JPG'],
        media: 'Digital collage print',
        dimensions: '18x18in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 39,
        name: 'SOLO-02',
        date: 2020,
        collection: '',
        price: 4000,
        image: ['/images/SOLO-02-0.JPG', '/images/SOLO-02-1.jpg', '/images/SOLO-02-2.jpg'],
        media: 'Graphite, marker, collage on paper, Digital collage print',
        dimensions: '11x14in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 40,
        name: 'Uncurated Pledge',
        date: 2020,
        collection: '',
        price: 4000,
        image: ['/images/uncurated-1.JPG', '/images/uncurated-2.jpg'],
        media: 'Digital collage print',
        dimensions: '10x10in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 41,
        name: 'Bruised',
        date: 2020,
        collection: '',
        price: 5000,
        image: ['/images/bruised.JPG'],
        media: 'Digital collage print',
        dimensions: '10x10in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 42,
        name: 'Happiness Break',
        date: 2020,
        collection: '',
        price: 5000,
        image: ['/images/happy-red.JPG', '/images/happy-green.JPG' ],
        media: 'Digital print',
        dimensions: '10x10in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 43,
        name: 'In the bleak midwinter',
        date: 2020,
        collection: '',
        price: 12000,
        image: ['/images/newark.jpg'],
        media: 'Photography print',
        dimensions: '12x16in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 44,
        name: 'OPIA!',
        date: 2019,
        collection: '',
        price: 100000,
        image: ['/videos/opia.mp4','/images/opia-1.jpg', '/images/opia-2.JPG'],
        media: 'Digital print',
        dimensions: '16x16in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 45,
        name: 'Cigarette Butts',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/cig-2.JPG', '/images/cig-1.JPG', '/images/cig-3.JPG', '/images/cig-4.JPG'],
        media: 'Photography and digital print',
        dimensions: '8.5x11in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 46,
        name: 'Ma Soeur',
        date: 2019,
        collection: '',
        price: 10000000000,
        image: ['/images/cubism.jpg'],
        media: 'Oil and acrylic on canvas',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      
      {
        id: 47,
        name: 'Haze',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/haze.jpg'],
        media: 'Photography ',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 48,
        name: 'Untitled',
        date: 2019,
        collection: '',
        price: 1000,
        image: ['/images/brush.jpg'],
        media: 'Photography ',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 49,
        name: 'Freestyle illustrations',
        date: 2019,
        collection: '',
        price: 100000,
        image: ['/images/ill-1.jpg', '/images/ill-2.jpg', '/images/ill-3.jpg', '/images/ill-4.jpg', '/images/ill-5.jpg', '/images/ill-6.jpg', '/images/ill-7.jpg'],
        media: 'Marker on paper ',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 50,
        name: 'Self Awareness isn\'t Depression',
        date: 2019,
        collection: '',
        price: 100,
        image: ['/images/SD.jpg'],
        media: 'Graphite on paper ',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 51,
        name: 'I be so confused I ain\'t hard to find/ Prophets',
        date: 2019,
        collection: '',
        price: 100000,
        image: ['/images/false.jpg'],
        media: 'Graphite on paper ',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 52,
        name: 'When an Angel Lies',
        date: 2022,
        collection: 'Black Dog',
        price: 100000,
        image: ['/images/lies.jpg', '/images/lies-1.JPG', '/images/lies-2.JPG', '/images/lies-3.JPG', '/images/lies-4.JPG'],
        media: 'Graphite on paper ',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 53,
        name: 'Docs et la Fleur',
        date: 2019,
        collection: '',
        price: 100000,
        image: ['/images/docs.jpg'],
        media: 'Acrylic on canvas',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 54,
        name: 'I\'m not so pretty to look at',
        date: 2019,
        collection: '',
        price: 100000,
        image: ['/images/alter.jpg'],
        media: 'Acrylic and graphite on paper',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 55,
        name: 'Untitled',
        date: 2021,
        collection: '',
        price: 5000,
        image: ['/images/g.jpg'],
        media: 'Graphite and charcoal on paper',
        dimensions: '18x24in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 56,
        name: 'The Decrepit\'s Grin',
        date: 2021,
        collection: '',
        price: 50000,
        image: ['/images/grin-1.JPG', '/images/grin-2.JPG', '/images/grin-3.JPG'],
        media: 'Electrical tape, resin teeth sculpture',
        dimensions: '9x8x12in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 57,
        name: 'Untitled',
        date: 2022,
        collection: 'Black Dog',
        price: 50000,
        image: ['/images/nightlife2.jpg'],
        media: 'Graphite on paper, digital',
        dimensions: '24x18in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 58,
        name: 'Second Wind',
        date: 2023,
        collection: '',
        price: 0,
        image: ['/images/secondwind.jpg', '/images/secondwind-1.jpg', '/images/secondwind-2.jpg', '/images/secondwind-3.jpg', '/images/secondwind-4.jpg'],
        media: 'Website',
        dimensions: '',
        description: 'Second Wind, a full stack online community-based platform that provide resources, support, and employment for those impacted by the criminal justice system. As a project manager and backend engineer for Second Wind, I orchestrated a space that provides resources, support, and employment for those impacted by the criminal justice system. I leveraged Express, Node,js, SQL, Postgres, Postman, Knex.js to develop models, controllers, and routes for all tables in the database to enable seamless CRUD functionality for all requests in the database.',
      },

      {
        id: 59,
        name: 'CareerSpring Interest Finder',
        date: 2023,
        collection: '',
        price: 0,
        image: ['/images/careerspring.jpg', '/images/careerspring-1.jpg', '/images/careerspring-2.jpg', '/images/careerspring-3.jpg'],
        media: 'Website Development',
        dimensions: '',
        description: 'As a Developer Contractor, I’ve been instrumental in developing software like CareerSpring’s Career Interest Profiler by leveraging JavaScript, HTML & CSS. This custom career assessment tool seamlessly integrated into WordPress serves as a beacon for individuals exploring their professional paths. Through meticulous design, wireframing, and technical implementation, I created a tool that not only enhances user experience but aligns with long-term organizational goals. This tool, part of CareerSpring, serves as a beacon, guiding individuals towards careers that align with their interests.',
      },
      
      {
        id: 60,
        name: 'METVoyager',
        date: 2023,
        collection: '',
        price: 0,
        image: ['/images/metvoyager.jpg', '/images/metvoyager-1.jpg', '/images/metvoyager-2.jpg'],
        media: 'Website Development',
        dimensions: '',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 61,
        name: 'Chrome Abyss',
        date: 2022,
        collection: '',
        price: 17000,
        image: ['/images/abyss-1.JPG', '/images/abyss-2.JPG', '/images/abyss-3.JPG', '/images/abyss-4.JPG' ],
        media: 'Digital print',
        dimensions: '16x16in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 62,
        name: 'Fade Away',
        date: 2022,
        collection: '',
        price: 15000,
        image: ['/images/abyss-5.JPG'],
        media: 'Digital print',
        dimensions: '16x16in',
        description: 'An exquisite sculpture to adorn your living space.',
      },

      {
        id: 63,
        name: 'Apollo',
        date: 2019,
        collection: '',
        price: 15000,
        image: ['/images/apollo.jpg'],
        media: 'Graphite on paper',
        dimensions: '9x12in',
        description: 'Still life study of Apollo bust.',
      },

      {
        id: 64,
        name: 'Obokuri eeumi',
        date: 2021,
        collection: '',
        price: 15000,
        image: ['/images/thershold.JPG'],
        media: 'Graphite on paper',
        dimensions: '12x12in',
        description: 'Still life study of Apollo bust.',
      },

      {
        id: 65,
        name: 'The Name\'s Dan Solo: Ghost',
        date: 2021,
        collection: '',
        price: 15000,
        image: ['/images/dipt11.jpg'],
        media: 'Digital print',
        dimensions: '12x12in',
        description: 'One half of a diptych of my ambivalence to isolation.',
      },

      {
        id: 66,
        name: 'The Name\'s Dan Solo: Refuge',
        date: 2021,
        collection: '',
        price: 15000,
        image: ['/images/dipt21.JPG'],
        media: 'Digital print',
        dimensions: '12x12in',
        description: 'One half of a diptych of my ambivalence to isolation.',
      },

      {
        id: 67,
        name: 'Get you a Kangol',
        date: 2021,
        collection: '',
        price: 150000,
        image: ['/images/kangol.JPG', '/images/kangol-1.JPG' ],
        media: 'Wire, aluminum foil, and plaster cloth sculpture',
        dimensions: '12x12in',
        description: 'One half of a diptych of my ambivalence to isolation',
      },

      {
        id: 68,
        name: 'Smoker\'s Delight',
        date: 2020,
        collection: '',
        price: 150000,
        image: ['/images/lighter.JPG' ],
        media: 'Photography and digital print',
        dimensions: '24x19in',
        description: 'One half of a diptych of my ambivalence to isolation',
      },

      {
        id: 69,
        name: 'PEACHFUZZ!',
        date: 2019,
        collection: '',
        price: 250000,
        image: ['/images/lips.jpg' ],
        media: 'Oil on panel',
        dimensions: '14x14in',
        description: 'One half of a diptych of my ambivalence to isolation',
      },

      {
        id: 70,
        name: 'Cat Azz',
        date: 2019,
        collection: '',
        price: 250000,
        image: ['/images/cat-1.JPG', '/images/cat-2.jpg', '/images/cat-3.jpg', '/images/cat-4.JPG'],
        media: 'Graphite, markers on paper',
        dimensions: '8.5x11in',
        description: 'A short comic, about a cat named Lou who doesn\'t give a cat\'s ass about anything.',
      },

      {
        id: 71,
        name: 'Death of a Rasta',
        date: 2022,
        collection: '',
        price: 250000,
        image: ['/videos/rip.mp4'],
        media: 'Found media, fire, acrylic, charcoal, and charcoal on cardboard',
        dimensions: '46x34in',
        description: '',
      },

      {
        id: 72,
        name: 'SOLO',
        date: 2021,
        collection: '',
        price: 250000,
        image: ['/images/so-1.JPG','/images/so-2.JPG', '/images/so-2.JPG'],
        media: 'Spray paint',
        dimensions: '24x18in',
        description: '',
      },

  ];
  
  export default products;