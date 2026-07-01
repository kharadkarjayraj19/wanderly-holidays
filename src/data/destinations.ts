/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DestinationPackage, Testimonial } from '../types';

export const DOMESTIC_PACKAGES: DestinationPackage[] = [
  {
    id: 'maharashtra-3-jyotirling',
    title: 'Maharashtra 3 Jyotirling Tour',
    subtitle: 'Bhimashankar, Trimbakeshwar & Grishneshwar Spiritual Odyssey',
    description: 'A deeply spiritual and highly scenic pilgrimage across Maharashtra’s sacred land. Pay homage at three powerful Jyotirlinga shrines nestled amidst lush Western Ghats mountains, historic caves, and ancient architecture during mist-laden mornings.',
    duration: '4 Nights / 5 Days',
    price: 18999,
    originalPrice: 22999,
    transportPrice: 11499,
    transportOriginalPrice: 13999,
    rating: 4.92,
    reviewsCount: 164,
    image: '/src/assets/images/maharashtra_jyotirling_1782413180226.jpg',
    category: 'jyotirling',
    tags: ['Holy Pilgrimage', '3 Sacred Shrines', 'Western Ghats'],
    popular: true,
    highlights: [
      'Perform Abhishek and Darshan at Trimbakeshwar, Bhimashankar & Grishneshwar Jyotirlingas',
      'Explore the magnificent monolithic rock-cut Ellora Caves nearby',
      'Scenic drives winding through the mist-filled Sahyadri mountain ranges',
      'Visit Panchavati, Ram Kund and Tapovan in the holy city of Nashik',
      'Comfortable private AC Sedan with an expert regional driver-guide'
    ],
    inclusions: [
      'Stay option: Premium 4-star hotel stays in Nashik, Pune & Aurangabad (with stay option)',
      'Stay option: Daily delicious buffet breakfast at hotels',
      'All options: Private AC Sedan for all transfers, holy shrines, sightseeing, and railway/airport transfers',
      'All options: Expert professional driver familiar with temple routes and VIP entry timings',
      'All options: All toll taxes, fuel charges, parking fees, and driver daily allowances'
    ],
    exclusions: [
      'Stay option: Lunch, dinner, and personal room services',
      'Transport option: All hotels, room stays, and breakfasts (entirely self-managed)',
      'All options: Special Darshan tickets, VIP entry passes, and temple offerings (Pooja samagri)',
      'Camera fees at Ellora Caves and personal travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pune Arrival & Bhimashankar Jyotirlinga (110 km / 3 hrs)',
        description: 'Arrive in Pune (airport or railway station). Meet your private driver-guide and drive straight up the misty Sahyadri mountains to Bhimashankar Jyotirlinga, surrounded by dense reserve forests. Seek blessings at the gorgeous old Hemadpanthi-style temple, and check out the scenic Sahyadri valleys. Check into your premium hotel for dinner and rest.',
        activities: ['Pune pickup', 'Misty drive to Bhimashankar', 'Divine Darshan at first Jyotirlinga', 'Pune or Shirdi overnight stay']
      },
      {
        day: 2,
        title: 'Drive to Nashik & Trimbakeshwar Jyotirlinga (200 km / 5 hrs)',
        description: 'Enjoy breakfast and drive north to the historic temple town of Nashik. Head to Trimbakeshwar, located at the base of the majestic Brahmagiri hills. Touch the source of the holy Godavari river and witness the unique three-faced Lingam representing Shiva, Vishnu, and Brahma. Spend a calm evening attending the grand Ganga Aarti at Ram Kund in Panchavati.',
        activities: ['Scenic drive to Nashik', 'Trimbakeshwar Darshan', 'Ram Kund evening oil lamp rituals', 'Nashik hotel check-in']
      },
      {
        day: 3,
        title: 'Nashik Sightseeing & Drive to Aurangabad (180 km / 4 hrs)',
        description: 'Tour Panchavati’s spiritual forest sites where Lord Rama, Sita, and Lakshmana lived during exile. Visit Kalaram Temple, Sita Gufaa, and Tapovan. Later, take a smooth drive across the countryside to Aurangabad (Chhatrapati Sambhajinagar). Enjoy local Maharashtrian delicacies on route.',
        activities: ['Panchavati spiritual walking tour', 'Exploring Sita Gufaa & Kalaram Temple', 'Drive to Aurangabad', 'Leisure evening']
      },
      {
        day: 4,
        title: 'Grishneshwar Jyotirlinga & Ellora Caves (30 km / 1 hr)',
        description: 'Visit the elegant, red-sandstone Grishneshwar Temple, the 12th and final Jyotirlinga of Lord Shiva. Experience the sacred vibrations, then proceed immediately to the neighboring UNESCO World Heritage Site of Ellora Caves. Marvel at the Kailash Temple (Cave 16), a mind-boggling monolithic structure carved from a single mountain cliff.',
        activities: ['Grishneshwar final Jyotirlinga Darshan', 'Ellora Caves guided exploration', 'Kailash Temple photography', 'Aurangabad overnight stay']
      },
      {
        day: 5,
        title: 'Bibi Ka Maqbara & Pune/Mumbai Departure',
        description: 'Savor breakfast, then take a beautiful morning photo tour at Bibi Ka Maqbara, widely known as the Taj of the Deccan. Later, enjoy a relaxed return drive to Pune or Mumbai airport/railway station for your onward journey with divine blessings.',
        activities: ['Bibi Ka Maqbara photo session', 'Scenic return drive', 'Airport or station drop-off']
      }
    ]
  },
  {
    id: 'mumbai-3-jyotirling-4day',
    title: '3 Jyotirlinga Tour from Mumbai (4 Days)',
    subtitle: 'Divine Trimbakeshwar, Bhimashankar & Grishneshwar Pilgrimage from Mumbai',
    description: 'A seamless, premium 4-day private pilgrimage designed for devotees from Mumbai. Journey through the picturesque Sahyadri hills to worship at Trimbakeshwar, Bhimashankar, and Grishneshwar Jyotirlingas, while exploring historic Nashik ghats and the breathtaking Kailash Temple in Ellora.',
    duration: '3 Nights / 4 Days',
    price: 14999,
    originalPrice: 18499,
    transportPrice: 9499,
    transportOriginalPrice: 11999,
    rating: 4.93,
    reviewsCount: 148,
    image: '/src/assets/images/maharashtra_jyotirling_1782413180226.jpg',
    category: 'jyotirling',
    tags: ['From Mumbai', '3 Sacred Jyotirlingas', 'All-Inclusive Private Chauffeur'],
    popular: true,
    highlights: [
      'Seek sacred blessings at Bhimashankar, Trimbakeshwar & Grishneshwar Jyotirlingas',
      'Wander through historical Panchavati forest sites & holy Ram Kund ghats in Nashik',
      'Be awed by the magnificent rock-cut UNESCO Ellora Caves & Kailash Temple',
      'Enjoy smooth highway transits including the newly opened high-speed Samruddhi Expressway',
      'Complete door-to-door private AC sedan/SUV pickup and drop-off in Mumbai'
    ],
    inclusions: [
      'Stay option: 3 Nights premium accommodation (1N Nashik, 2N Aurangabad) in 4-star hotels',
      'Stay option: Daily delicious buffet breakfast at hotels',
      'All options: Fully private air-conditioned Sedan or SUV for the entire 4-day route',
      'All options: Professional, highly experienced highway driver-guide',
      'All options: All highway tolls, fuel, parking, and driver overnight allowances'
    ],
    exclusions: [
      'Stay option: All lunches, dinners, and laundry services',
      'Transport option: All hotel reservations, room bookings, and breakfasts',
      'All options: VIP/Special Darshan passes and direct temple ritual fees',
      'All options: Monument entry fees at Ellora Caves or Forts'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mumbai to Bhimashankar & Drive to Nashik (320 km / 7 hrs)',
        description: 'Depart early morning from your residence/airport in Mumbai. Travel in your private AC sedan up the lush, misty Western Ghats to Bhimashankar Jyotirlinga. Perform Abhishek and Darshan at this holy temple surrounded by a scenic bird sanctuary. Afterwards, embark on a comfortable drive to Nashik. Check in and relax.',
        activities: ['Mumbai early pickup (6:30 AM)', 'Scenic Sahyadri Ghats drive', 'Bhimashankar Holy Darshan', 'Drive to Nashik', 'Nashik hotel check-in']
      },
      {
        day: 2,
        title: 'Trimbakeshwar Darshan, Nashik Sightseeing & Drive to Aurangabad (210 km / 5 hrs)',
        description: 'Drive to the sacred village of Trimbak at the foot of Brahmagiri Hills. Experience a divine morning Darshan of the unique three-faced Jyotirlinga. Head back to Nashik to explore Panchavati, the holy Ram Kund bathing ghats, Sita Gufaa, and Kalaram Temple. Post lunch, take a pleasant afternoon drive to Aurangabad (Chhatrapati Sambhajinagar) and check-in.',
        activities: ['Trimbakeshwar morning Darshan', 'Ram Kund holy dip & Panchavati walk', 'Scenic countryside drive', 'Aurangabad hotel check-in']
      },
      {
        day: 3,
        title: 'Grishneshwar Jyotirlinga & Ellora Caves Exploration (30 km / 1 hr)',
        description: 'Set off to Grishneshwar Temple, the 12th and final Jyotirlinga of Lord Shiva. After a peaceful and sacred Darshan, proceed to the neighboring UNESCO World Heritage Site of Ellora Caves. Explore the mind-blowing monolithic Kailash Temple (Cave 16), carved entirely out of a single gigantic volcanic cliff. Spend your evening exploring local Aurangabad handloom markets.',
        activities: ['Grishneshwar 3rd Jyotirlinga Darshan', 'Ellora Caves & Kailash Temple guided walk', 'Paithani weaving boutique visit', 'Aurangabad leisure stay']
      },
      {
        day: 4,
        title: 'Bibi Ka Maqbara & High-Speed Return to Mumbai (340 km / 6 hrs)',
        description: 'Enjoy breakfast and check out. Take a photo tour of Bibi Ka Maqbara (Deccan Taj), appreciating its exquisite Mughal-era architecture. Embark on a super-smooth return road trip to Mumbai via the world-class high-speed Samruddhi Mahamarg expressway. Drop off at your home/airport in Mumbai by evening with sacred memories.',
        activities: ['Bibi Ka Maqbara morning visit', 'Samruddhi Expressway high-speed transit', 'Scenic road trip back', 'Mumbai drop-off (Home/Airport)']
      }
    ]
  },
  {
    id: 'nashik-3-jyotirling-4day',
    title: '3 Jyotirlinga Tour from Nashik (4 Days)',
    subtitle: 'Divine Trimbakeshwar, Grishneshwar & Bhimashankar Pilgrimage starting from Nashik',
    description: 'A premium 4-day private pilgrimage starting and ending in Nashik. Experience divine blessings at Trimbakeshwar, Grishneshwar, and Bhimashankar Jyotirlingas, while exploring Panchavati ghats, scenic vineyards, and the historic Ellora Caves in complete comfort.',
    duration: '3 Nights / 4 Days',
    price: 13499,
    originalPrice: 16499,
    transportPrice: 8499,
    transportOriginalPrice: 10999,
    rating: 4.92,
    reviewsCount: 89,
    image: '/src/assets/images/maharashtra_jyotirling_1782413180226.jpg',
    category: 'jyotirling',
    tags: ['From Nashik', '3 Sacred Jyotirlingas', 'All-Inclusive Private Car'],
    popular: false,
    highlights: [
      'Divine worship at the unique three-faced Trimbakeshwar Jyotirlinga',
      'Seek sacred blessings at Grishneshwar and forested Bhimashankar Jyotirlingas',
      'Deep tour of Nashik including holy Panchavati and Ram Kund ghats',
      'Awe-inspiring visit to UNESCO Ellora Caves and Kailash monolithic temple',
      'Round-trip private air-conditioned vehicle starting and ending in Nashik'
    ],
    inclusions: [
      'Stay option: 3 Nights premium stay (1N Nashik, 1N Aurangabad, 1N Shirdi) in 4-star hotels',
      'Stay option: Daily delicious breakfast buffet at hotels',
      'All options: Fully private air-conditioned Sedan/SUV for all 4 days',
      'All options: Professional highway driver with toll/parking fees included'
    ],
    exclusions: [
      'Stay option: All lunches, dinners, and personal shopping',
      'Transport option: All hotel reservations, room bookings, and breakfasts',
      'All options: VIP/Special Darshan passes and direct temple ritual fees',
      'All options: Monument entry fees at Ellora Caves or Forts'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nashik Pickup & Trimbakeshwar Darshan',
        description: 'Your private car picks you up from Nashik Road Railway Station or your hotel. Head to the holy Trimbakeshwar temple at the foot of Brahmagiri hills. Seek divine blessings of Lord Shiva, then explore Panchavati, Ram Kund, and local historic temples in the afternoon.',
        activities: ['Nashik pickup', 'Trimbakeshwar Darshan', 'Panchavati historic walk', 'Ram Kund sunset prayer', 'Nashik luxury stay']
      },
      {
        day: 2,
        title: 'Nashik to Aurangabad & Grishneshwar (210 km / 4.5 hrs)',
        description: 'After breakfast, drive through the beautiful countryside to Aurangabad. Proceed to Grishneshwar, the sacred 12th Jyotirlinga. After a serene Darshan, step into the neighboring Ellora Caves to admire the magnificent monolithic Kailash Temple.',
        activities: ['Scenic drive to Aurangabad', 'Grishneshwar Jyotirlinga Darshan', 'Ellora Caves & Kailash Temple tour', 'Aurangabad leisure stay']
      },
      {
        day: 3,
        title: 'Aurangabad to Bhimashankar (330 km / 7 hrs)',
        description: 'Depart early morning from Aurangabad and enjoy a scenic drive towards the pristine reserve forests of Bhimashankar. Check in at your nature-friendly hotel/resort and prepare for a serene evening Darshan at the beautiful Bhimashankar Jyotirlinga.',
        activities: ['Early morning checkout', 'Scenic long-distance drive', 'Bhimashankar Forest Sanctuary', 'Holy evening Darshan & prayers']
      },
      {
        day: 4,
        title: 'Bhimashankar to Shirdi / Nashik Return (220 km / 5 hrs)',
        description: 'Worship during morning prayers at Bhimashankar temple, then begin your return road trip to Nashik. Optionally stop at the globally revered Sai Baba Temple in Shirdi for divine blessings before dropping off at your destination in Nashik.',
        activities: ['Morning temple prayers', 'Drive via Shirdi bypass', 'Optional Shirdi Sai Baba Darshan', 'Nashik drop-off (Hotel/Station)']
      }
    ]
  },
  {
    id: 'aurangabad-3-jyotirling-4day',
    title: '3 Jyotirlinga Tour from Aurangabad (4 Days)',
    subtitle: 'Divine Grishneshwar, Trimbakeshwar & Bhimashankar Pilgrimage starting from Aurangabad',
    description: 'A premium, thoughtfully curated 4-day private pilgrimage starting and ending in Aurangabad. Seek divine blessings at Grishneshwar, Trimbakeshwar, and Bhimashankar Jyotirlingas, while experiencing the colossal Kailash Temple, Panchavati, and local handlooms.',
    duration: '3 Nights / 4 Days',
    price: 13999,
    originalPrice: 17499,
    transportPrice: 8999,
    transportOriginalPrice: 11499,
    rating: 4.95,
    reviewsCount: 94,
    image: '/src/assets/images/maharashtra_jyotirling_1782413180226.jpg',
    category: 'jyotirling',
    tags: ['From Aurangabad', '3 Sacred Jyotirlingas', 'All-Inclusive Private Car'],
    popular: false,
    highlights: [
      'Peaceful Darshan at Grishneshwar, the 12th sacred Jyotirlinga',
      'Perform abhishekam at the unique three-faced Trimbakeshwar temple in Nashik',
      'Trek through the lush Western Ghats forest to Bhimashankar Jyotirlinga',
      'Exquisite guided tour of the monumental monolithic Kailash Temple',
      'Full private AC sedan/SUV starting and ending in Aurangabad'
    ],
    inclusions: [
      'Stay option: 3 Nights premium stay (1N Aurangabad, 1N Nashik, 1N Shirdi) in 4-star hotels',
      'Stay option: Daily delicious breakfast buffet',
      'All options: Fully private air-conditioned Sedan/SUV for all 4 days',
      'All options: Highly skilled professional driver-guide with all tolls/allowances paid'
    ],
    exclusions: [
      'Stay option: All lunches, dinners, and personal shopping',
      'Transport option: All hotel reservations, room bookings, and breakfasts',
      'All options: VIP/Special Darshan passes and direct temple ritual fees',
      'All options: Monument entry fees at Ellora Caves or Forts'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Aurangabad Pickup, Grishneshwar & Ellora',
        description: 'Warm welcome upon your arrival at Aurangabad airport/station or hotel. Head directly to Grishneshwar Jyotirlinga for a peaceful Darshan. Afterward, visit the world-famous UNESCO Ellora Caves to witness the awe-inspiring hand-carved monolithic Kailash Temple.',
        activities: ['Aurangabad pickup', 'Grishneshwar holy worship', 'Ellora Caves & Kailash Temple tour', 'Traditional lunch', 'Aurangabad hotel check-in']
      },
      {
        day: 2,
        title: 'Aurangabad to Nashik via Samruddhi Expressway (190 km / 3 hrs)',
        description: 'Drive along India\'s ultra-modern Samruddhi Mahamarg expressway to Nashik. Arrive and explore Panchavati, the mythical forest site, alongside Ram Kund and Sita Gufaa. Take in a mesmerizing sunset by the holy Godavari river.',
        activities: ['Samruddhi Expressway high-speed drive', 'Nashik arrival & lunch', 'Panchavati historic temple tour', 'Godavari river evening walk']
      },
      {
        day: 3,
        title: 'Trimbakeshwar Darshan & Drive to Bhimashankar (230 km / 5.5 hrs)',
        description: 'Rise early for a sacred morning Darshan of the Trimbakeshwar Jyotirlinga temple. Afterward, begin a beautiful countryside drive to Bhimashankar, situated high in the Western Ghats forest reserve. Arrive, check in, and enjoy a peaceful evening at the temple.',
        activities: ['Trimbakeshwar morning Darshan', 'Scenic mountain drive to Bhimashankar', 'Reserve forest nature walk', 'Bhimashankar evening prayer']
      },
      {
        day: 4,
        title: 'Bhimashankar to Shirdi & Aurangabad Return (320 km / 7 hrs)',
        description: 'Perform your morning puja at Bhimashankar temple, then head back. Stop for a divine Darshan of Sai Baba in Shirdi, then proceed back to Aurangabad for your evening drop-off at your hotel/airport/railway station.',
        activities: ['Bhimashankar morning prayers', 'Scenic return drive', 'Shirdi Sai Baba temple Darshan', 'Aurangabad drop-off']
      }
    ]
  },
  {
    id: 'ajanta-ellora-scenic',
    title: 'Ajanta & Ellora Caves Scenic Tour',
    subtitle: 'Majestic Rock-Cut Monasteries, Fortresses & Royal Deccan Heritage',
    description: 'Immerse yourself in India’s finest archaeological treasures. Witness spectacular murals dating back 2,200 years in Ajanta, walk the massive monolithic galleries of Ellora, and climb the impenetrable medieval Daulatabad Fort.',
    duration: '3 Nights / 4 Days',
    price: 16499,
    originalPrice: 19999,
    transportPrice: 9999,
    transportOriginalPrice: 12000,
    rating: 4.88,
    reviewsCount: 112,
    image: '/src/assets/images/ajanta_ellora_1782413196439.jpg',
    category: 'monsoon-maharashtra',
    tags: ['UNESCO Heritage', 'Ancient Art', 'Monuments'],
    popular: false,
    highlights: [
      'Full guided tour of Ajanta Caves, featuring spectacular ancient Buddhist frescoes',
      'Walk inside Ellora’s majestic monolithic Kailash Temple',
      'Climb the historic Daulatabad Fort with its ingenious labyrinth trap passages',
      'See Bibi Ka Maqbara, the beautiful 17th-century Taj-style royal mausoleum',
      'Private AC Sedan with complete historical guidance from local drivers'
    ],
    inclusions: [
      'Stay option: 3 Nights premium 4-star stay in Aurangabad',
      'Stay option: Lavish daily buffet breakfasts at the hotel',
      'All options: Private AC Sedan for all transfers, cave excursions, fort visits, and airport drops',
      'All options: Expert professional driver with extensive highway and local knowledge',
      'All options: Toll taxes, parking, driver allowance, and clean mineral water onboard'
    ],
    exclusions: [
      'Stay option: Lunches, dinners, and personal incidentals',
      'Transport option: All hotel reservations, room stays, and daily breakfast',
      'All options: Cave entry tickets, professional monument guide charges, and shuttle bus fees at Ajanta'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Aurangabad Arrival & Bibi Ka Maqbara',
        description: 'Land in Aurangabad and meet our private representative. Transfer directly to your premium hotel. In the afternoon, visit the elegant Bibi Ka Maqbara, a stunning white mausoleum built by Mughal Emperor Aurangzeb in memory of his mother. Wander the beautiful Mughal gardens and enjoy the royal sunset.',
        activities: ['Airport/Station pickup', 'Hotel check-in', 'Bibi Ka Maqbara tour', 'Traditional Mughlai cuisine tasting']
      },
      {
        day: 2,
        title: 'Ajanta Caves - Ancient Buddhist Frescoes (100 km / 2.5 hrs)',
        description: 'Set off early for Ajanta Caves, a horseshoe-shaped gorge overlooking the Waghora River. Discover 30 magnificent rock-cut caves adorned with unparalleled ancient frescoes and stone carvings depicting Jataka tales. Learn how Buddhist monks painstakingly carved these deep volcanic rock chambers.',
        activities: ['Scenic rural drive', 'Ajanta Caves guided exploration', 'Shuttle ride', 'Local craft shopping']
      },
      {
        day: 3,
        title: 'Ellora Caves & Fortified Daulatabad Castle (40 km / 1 hr)',
        description: 'Explore the spectacular Ellora Caves, a fusion of Buddhist, Hindu, and Jain rock shrines. Gaze up at the Kailash Temple, an architectural miracle. Afterwards, visit Daulatabad Fort (Devgiri), a breathtaking hill castle. Climb through dark labyrinth passages (Andhari) and view the massive medieval cannons.',
        activities: ['Ellora Caves morning tour', 'Kailash Temple monolithic walk', 'Daulatabad Fort hike', 'Panoramic hill sunset views']
      },
      {
        day: 4,
        title: 'Local Artistry Tour & Departure',
        description: 'Savor breakfast and check out. Visit a local handloom cottage industry to witness the weaving of Himroo shawls and luxury Paithani sarees. Our private chauffeur will transfer you to Aurangabad Airport or Railway Station for your flight home.',
        activities: ['Paithani & Himroo weaving demonstration', 'Souvenir shopping', 'Airport/Station transfer drop-off']
      }
    ]
  },
  {
    id: 'nashik-2day-pilgrimage',
    title: '2 Day Nashik Pilgrimage Tour',
    subtitle: 'Holy Panchavati Ram Kund, Trimbakeshwar & Godavari Sacred Ghats',
    description: 'A condensed, highly peaceful spiritual getaway to Nashik, the legendary city of Kumbh Mela. Cleanse your mind at Ram Kund, walk the sacred forests of Panchavati, and perform divine Pooja at Trimbakeshwar Jyotirlinga.',
    duration: '1 Night / 2 Days',
    price: 9999,
    originalPrice: 12999,
    transportPrice: 5999,
    transportOriginalPrice: 7999,
    rating: 4.85,
    reviewsCount: 92,
    image: '/src/assets/images/nashik_pilgrimage_1782413212811.jpg',
    category: 'pilgrimage',
    tags: ['Holy River', 'Weekend Spiritual', 'Quick Escape'],
    popular: false,
    highlights: [
      'Full holy dip and Abhishek at Ram Kund along the sacred Godavari River',
      'Attend the powerful morning Aarti at Trimbakeshwar Shiva Temple',
      'Walk through Panchavati, Kalaram Temple, Sita Gufaa & Tapovan',
      'Private air-conditioned Sedan transfers from Mumbai or Pune'
    ],
    inclusions: [
      'Stay option: 1 Night stay in a premium 3-star superior hotel in Nashik',
      'Stay option: Complimentary traditional Maharashtrian breakfast',
      'All options: Round-trip private AC Sedan transfers from Mumbai or Pune, plus all local pilgrimage tours',
      'All options: Toll taxes, parking fees, highway charges, and professional driver allowance'
    ],
    exclusions: [
      'Stay option: All meals except breakfast',
      'Transport option: All hotels, room accommodation, and breakfasts',
      'All options: Dakshina to priests, VIP entry coupons, and personal floral offerings'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mumbai/Pune to Nashik & Panchavati Temple Tour (170 km / 4 hrs)',
        description: 'Depart from Mumbai or Pune in your comfortable private AC sedan. Arrive in Nashik and check in. Set off immediately for Panchavati on the banks of Godavari river. Visit Ram Kund, the sacred bathing pool. Explore Sita Gufaa, where Sita hid from Ravana, the historic Kalaram temple built of black stones, and the serene Tapovan forests.',
        activities: ['Mumbai/Pune pickup', 'Panchavati exploration', 'Sita Gufaa cave crawl', 'Evening Ganga Aarti at Ram Kund']
      },
      {
        day: 2,
        title: 'Trimbakeshwar Jyotirlinga & Return Drive (30 km / 1 hr)',
        description: 'Wake up early and drive to the holy base of Brahmagiri hills to visit Trimbakeshwar Jyotirlinga. Perform dynamic rituals and seek blessings. Return to Nashik for checking out. Drive back to Mumbai or Pune, enjoying stunning scenic mountain views along Kasara Ghat on route.',
        activities: ['Trimbakeshwar morning Darshan', 'Kasara Ghat photography', 'Return drive', 'Airport or home drop-off']
      }
    ]
  },
  {
    id: 'monsoon-maharashtra-hills',
    title: 'Monsoon Maharashtra Western Ghats Escape',
    subtitle: 'Bhandardara Lake, Malshej Ghat Cascading Waterfalls & Foggy Mountain Peaks',
    description: 'Experience Maharashtra at its absolute greenest. Escape to the mist-wrapped cliffs of Malshej Ghat and the serene Arthur Lake in Bhandardara. Breathe in pure, cool air amidst thousands of seasonal waterfalls cascading down spectacular Sahyadri peaks.',
    duration: '2 Nights / 3 Days',
    price: 14999,
    originalPrice: 18499,
    transportPrice: 8499,
    transportOriginalPrice: 10499,
    rating: 4.9,
    reviewsCount: 108,
    image: '/src/assets/images/monsoon_maharashtra_1782413242827.jpg',
    category: 'monsoon-maharashtra',
    tags: ['Waterfall Chasing', 'Monsoon Special', 'Misty Cliffs'],
    popular: true,
    highlights: [
      'Walk under hundreds of refreshing roadside waterfalls in scenic Malshej Ghat',
      'Enjoy boating on Arthur Lake and see the historic Wilson Dam in Bhandardara',
      'Catch spectacular cloud-valley views from the ancient Harishchandragad base',
      'Experience dynamic local hot chai and fresh hot corn-on-the-cob in the rain'
    ],
    inclusions: [
      'Stay option: 2 Nights premium lake-view resort stay in Bhandardara / Lonavala',
      'Stay option: Daily breakfast at the resort',
      'All options: Dedicated private high-ground clearance SUV or Sedan for all mountain passes and waterfalls tour',
      'All options: Experienced wet-weather mountain driver to ensure absolute safety in rains',
      'All options: Tolls, parking, and driver allowances'
    ],
    exclusions: [
      'Stay option: Room heaters, laundry, and meals outside of breakfast',
      'Transport option: All resort bookings, hotel stays, and meals',
      'All options: Boating tickets on Arthur Lake and waterfall zip-line activities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mumbai/Pune to Bhandardara Lake (160 km / 4 hrs)',
        description: 'Depart Mumbai or Pune and drive up into the Western Ghats. Watch the landscape transform into deep, vibrant green valleys. Arrive in Bhandardara and check into your lake-view resort. Visit Wilson Dam, built in 1910, and walk across the misty paths of Umbrella Falls and Randha Falls. Spend a peaceful evening next to Arthur Lake.',
        activities: ['Scenic mountain drive', 'Resort check-in', 'Waterfalls hiking', 'Sunset Arthur Lake stroll']
      },
      {
        day: 2,
        title: 'Malshej Ghat Roadside Cascades & Mountain Fog (90 km / 2 hrs)',
        description: 'Take a beautiful morning drive to Malshej Ghat. Wind through narrow mountain passes where thick white fog completely covers the roads. Stop at several panoramic points to stand under gushing waterfalls and view rare migratory flamingos at Pimpalgaon Joga Dam. Return to your resort for a warm campfire.',
        activities: ['Waterfall chasing', 'Misty mountain pass drive', 'Birdwatching at Pimpalgaon Dam', 'Cozy evening resort fire']
      },
      {
        day: 3,
        title: 'Bhandardara Valley View & Departure',
        description: 'Enjoy breakfast with views of Kalsubai Peak, the highest point in Maharashtra. Take a final boat ride on the lake, pack up, and enjoy a comfortable return drive to Mumbai or Pune, stopping for roadside local snacks.',
        activities: ['Lake boating', 'Kalsubai view photography', 'Scenic valley drive back', 'Home drop-off']
      }
    ]
  },
  {
    id: 'shillong-meghalaya-clouds',
    title: 'Shillong & Meghalaya Cascades',
    subtitle: 'Scotland of the East, Living Root Bridges & Cherrapunji Rain Trails',
    description: 'Fly to the rain-kissed magical valleys of Meghalaya. Discover ancient double-decker living root bridges grown by local Khasi tribes, row on crystal-clear waters in Dawki, and experience the sweeping mist of Cherrapunji.',
    duration: '5 Nights / 6 Days',
    price: 31499,
    originalPrice: 37999,
    transportPrice: 18999,
    transportOriginalPrice: 22999,
    rating: 4.94,
    reviewsCount: 119,
    image: '/src/assets/images/shillong_waterfalls_1782413227355.jpg',
    category: 'shillong',
    tags: ['North East India', 'Living Bridges', 'Monsoon Trails'],
    popular: true,
    highlights: [
      'Hike down the breathtaking living root bridges in Nongriat',
      'Experience zero-gravity rowing on the emerald-clear waters of Umngot River in Dawki',
      'Stand before Nohkalikai Falls, India’s tallest plunge waterfall, surrounded by mist',
      'Explore deep limestone stalactite chambers in Mawsmai Caves'
    ],
    inclusions: [
      'Stay option: 5 Nights premium accommodation (Shillong & Cherrapunji boutique hotels)',
      'Stay option: Daily delicious local and continental breakfast at hotels',
      'All options: Private 4x4 or high-ground clearance Sedan for all Shillong-Cherrapunji-Dawki loops',
      'All options: Experienced local driver fluent in regional routes, parking, and toll allowances'
    ],
    exclusions: [
      'Stay option: Lunches, dinners, and personal porter services',
      'Transport option: All hotels, room bookings, and morning breakfasts',
      'All options: Entrance tickets to waterfalls, caves, living root bridge trails, and boating in Dawki'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival & Drive to Pine-Clad Shillong (100 km / 3 hrs)',
        description: 'Arrive at Guwahati Airport/Railway Station. Meet your private driver and wind past scenic Umiam Lake (Barapani), a massive turquoise reservoir surrounded by green pine forests. Arrive in Shillong, the elegant capital of Meghalaya. Check into your boutique hotel and explore the local Police Bazar.',
        activities: ['Guwahati pickup', 'Barapani Lake scenic stopover', 'Resort check-in', 'Shillong night market walk']
      },
      {
        day: 2,
        title: 'Shillong Peaks, Elephant Falls & Laitlum Canyons',
        description: 'Spend the day touring Shillong’s scenic lookouts. Walk under the multi-tiered Elephant Falls. Drive to Laitlum Canyons, a breathtaking hilltop gorge where steep green valleys dive thousands of feet into clouds below. Visit the Don Bosco Museum to see tribal cultures.',
        activities: ['Laitlum Canyons morning trek', 'Elephant Falls tour', 'Don Bosco museum walk', 'Sunset peak coffee']
      },
      {
        day: 3,
        title: 'Shillong to Cherrapunji Rain Trail (60 km / 2 hrs)',
        description: 'Drive along the misty high ridge to Cherrapunji (Sohra), the wettest place on earth. Stop at Mawkdok Dympep Valley Viewpoint to zip-line over tree canopies. Check into your cliffside eco-resort. Explore the ancient Mawsmai limestone cave chambers and capture the massive Seven Sisters Waterfalls.',
        activities: ['Ridge drive to Cherrapunji', 'High-altitude zip-lining', 'Mawsmai Cave walk', 'Seven Sisters Waterfall viewpoint']
      },
      {
        day: 4,
        title: 'Ancient Living Root Bridges Hike',
        description: 'Embark on a magnificent jungle walk down to witness the double-decker living root bridges of Nongriat, woven over decades from the roots of rubber trees by Khasi elders. Swim in natural turquoise rock pools before returning to Cherrapunji for a cozy dinner.',
        activities: ['Root bridge trek', 'Turquoise natural pool swim', 'Khasi village local lunch', 'Eco-resort evening bonfire']
      },
      {
        day: 5,
        title: 'Crystal Clear Dawki River & Mawlynnong (90 km / 3 hrs)',
        description: 'Drive down to Dawki on the international border. Ride a hand-carved wooden boat on Umngot River, where water is so pristine that boats appear to float in mid-air over rocks. Afterwards, tour Mawlynnong, celebrated as Asia’s cleanest village, walking along bamboo skywalks.',
        activities: ['Dawki Umngot River crystal boating', 'Asia’s Cleanest Village tour', 'Skywalk views', 'Return to Shillong']
      },
      {
        day: 6,
        title: 'Shillong to Guwahati & Departure',
        description: 'Savor a warm Khasi breakfast. Drive back to Guwahati. Our private chauffeur will drop you off at Guwahati International Airport or Railway Station with beautiful memories of Meghalaya.',
        activities: ['Mountain breakfast', 'Guwahati return drive', 'Airport drop-off']
      }
    ]
  },
  {
    id: 'kerala-emerald-haven',
    title: 'Kerala Backwaters & Hills',
    subtitle: 'Munnar Tea Gardens, Alleppey Luxury Houseboat & Thekkady Wildlife',
    description: 'Immerse yourself in India’s greenest paradise. Watch mist roll over endless organic tea estates, feel the cool mountain breeze in Munnar, and drift along the peaceful palm-fringed backwaters of Kumarakom & Alleppey in your private wooden houseboat.',
    duration: '5 Nights / 6 Days',
    price: 32499,
    originalPrice: 39999,
    transportPrice: 19499,
    transportOriginalPrice: 23999,
    rating: 4.9,
    reviewsCount: 148,
    image: '/src/assets/images/hero_kerala_backwaters_1782411709697.jpg',
    category: 'kerala',
    tags: ['Best Seller', 'Nature Retreat', 'Private Houseboat'],
    popular: true,
    highlights: [
      'Overnight cruise on a premium, private wooden Kettuvallam houseboat',
      'Guided aromatic spice plantation walk in Thekkady',
      'Tea tasting and panoramic trekking through Munnar’s Lockhart tea estate',
      'Sighting endangered Nilgiri Tahr at Eravikulam National Park',
      'Scenic drive passing Valara and Cheeyappara waterfalls'
    ],
    inclusions: [
      'Stay option: 5 Nights premium 4-star accommodation (including 1 Night in Private Houseboat)',
      'Stay option: All meals (Breakfast, Lunch, Dinner) during the Houseboat stay',
      'Stay option: Daily delicious buffet breakfast at Munnar & Thekkady hotels',
      'All options: Private air-conditioned Sedan for all transfers, sightseeing & airport pickups',
      'All options: Professional driver-cum-guide, fuel, toll, and parking allowances'
    ],
    exclusions: [
      'Stay option: Lunch and Dinner at Munnar & Thekkady resorts',
      'Transport option: All hotel reservations, houseboats, and meals (entirely self-managed)',
      'All options: Entrance fees to national parks, monuments, and tea museums'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kochi & Drive to Munnar (130 km / 4 hrs)',
        description: 'Receive a traditional warm welcome at Kochi airport or railway station. Begin your scenic drive to Munnar, the premium hill station of Kerala. Wind through breathtaking hairpin curves, passing dense pine forests and the iconic Cheeyappara and Valara waterfalls. Check into your luxury resort and enjoy a serene evening at leisure.',
        activities: ['Airport pickup', 'Scenic drive passing cascading waterfalls', 'Resort check-in', 'Evening leisure in Munnar']
      },
      {
        day: 2,
        title: 'Exploring Munnar’s Tea Estates & Eravikulam',
        description: 'Set off after breakfast for a full day of sightseeing in Munnar. Visit the Eravikulam National Park, home to the rare Nilgiri Tahr wild goat. Walk through the lush green Mattupetty Dam, Echo Point, and Kundala Lake. Wrap up your day at the Munnar Tea Museum to learn the historical process of orthodox tea-making.',
        activities: ['Sighting Nilgiri Tahr at Eravikulam', 'Boating on Mattupetty Dam', 'Experiencing Echo Point', 'Tea Museum guided tour']
      },
      {
        day: 3,
        title: 'Munnar to Thekkady Wilderness (110 km / 3 hrs)',
        description: 'Depart Munnar and head to Thekkady, India’s premier wildlife sanctuary. Drive past spice gardens and misty hills. In the afternoon, enjoy an educational guided walk through a premium spice plantation, smelling fresh cardamom, pepper, and cinnamon. Later, enjoy a calm boating session on Periyar Lake inside the wildlife sanctuary.',
        activities: ['Scenic drive to Thekkady', 'Aromatic Spice Plantation Walk', 'Periyar Lake wildlife safari boating', 'Traditional Kathakali cultural show']
      },
      {
        day: 4,
        title: 'Thekkady to Alleppey Houseboat Dream (140 km / 4 hrs)',
        description: 'After a hearty breakfast, head to Alleppey, the Venice of the East. Board your beautifully crafted traditional private houseboat at noon. Enjoy a welcome drink as your captain steers you into the intricate network of canals, paddy fields, and sleepy villages. Watch the sun set behind towering palms while savoring authentic Kerala meals prepared onboard.',
        activities: ['Houseboat boarding', 'Cruising through Alleppey backwaters', 'Traditional Kerala lunch & dinner onboard', 'Night stay in floating luxury']
      },
      {
        day: 5,
        title: 'Alleppey to Kochi Coast (60 km / 1.5 hrs)',
        description: 'Disembark the houseboat after a beautiful floating breakfast. Drive back to the historic port city of Kochi. Spend the afternoon exploring Fort Kochi, the 16th-century Chinese Fishing Nets, St. Francis Church, and the vibrant Jew Town with its ancient spice markets and synagogue.',
        activities: ['Disembarking houseboat', 'Exploring Fort Kochi & Chinese Fishing Nets', 'Visiting historic St. Francis Church & Jew Town', 'Luxury beachside dinner']
      },
      {
        day: 6,
        title: 'Departure with Cherished Memories',
        description: 'Savor one last breakfast at your hotel. Do some last-minute souvenir shopping for spices, tea, and local banana chips. Our driver will drop you off at Kochi International Airport or Railway Station with beautiful memories of God’s Own Country.',
        activities: ['Leisure breakfast', 'Souvenir spice shopping', 'Airport/Station drop-off']
      }
    ]
  },
  {
    id: 'kashmir-paradise-earth',
    title: 'Kashmir Meadows & Lakes',
    subtitle: 'Srinagar Dal Lake Shikara, Snowy Gulmarg Gondola & Pahalgam Valleys',
    description: 'Experience true poetic romance in Kashmir. Float in a decorated wooden Shikara on the mirrored waters of Dal Lake, walk amidst millions of tulips, ride the highest cable car in Gulmarg, and capture the roaring streams of Lidder River in Pahalgam.',
    duration: '6 Nights / 7 Days',
    price: 36999,
    originalPrice: 44999,
    transportPrice: 21999,
    transportOriginalPrice: 26999,
    rating: 4.95,
    reviewsCount: 192,
    image: '/src/assets/images/kashmir_dal_lake_1782411725613.jpg',
    category: 'kashmir',
    tags: ['Premium Choice', 'Snow & Meadows', 'Luxury Houseboat Stay'],
    popular: true,
    highlights: [
      'Stunning 2-Hour sunset Shikara ride on Dal Lake with traditional Kashmiri Kahwa',
      'Overnight stay in an ultra-premium, hand-carved cedarwood luxury Houseboat',
      'Phase 1 & 2 Gondola Cable Car Ride in Gulmarg up to 14,000 ft',
      'Exploring Betaab Valley & Chandanwari in Pahalgam via local open-top gypsy',
      'Strolling in Nishat and Shalimar Royal Mughal Gardens'
    ],
    inclusions: [
      'Stay option: 5 Nights premium 4-star resort stays + 1 Night in a Luxury Houseboat on Dal Lake',
      'Stay option: Daily premium buffet breakfast and multi-cuisine dinner (MAP Plan)',
      'Stay option: Complimentary welcome tea (Kashmiri Kahwa) upon arrival',
      'All options: All local transfers & sightseeing in an exclusive, heated luxury Sedan',
      'All options: Local Union vehicle in Pahalgam for eco-sensitive valley tours',
      'All options: All toll tax, parking, driver allowances, and fuel'
    ],
    exclusions: [
      'Stay option: Lunch, and personal shopping expenses',
      'Transport option: All hotels, houseboats, and meals (entirely self-managed)',
      'All options: Airfare to and from Srinagar Airport (SXR)',
      'All options: Gondola ride tickets and pony ride charges'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Srinagar & Romantic Dal Lake Houseboat',
        description: 'Arrive at Srinagar airport where your luxury vehicle awaits. Step into a magical fairy tale as we transfer you to your premium, intricately carved hand-crafted wood houseboat floating on Dal Lake. Enjoy a traditional welcome with Kashmiri Kahwa. In the evening, step onto a beautifully decorated Shikara for a 2-hour leisurely cruise, witnessing floating gardens and the brilliant reflection of mountains in the sunset.',
        activities: ['Srinagar airport welcome', 'Luxury Houseboat check-in', 'Sunset Shikara boat cruise', 'Traditional Kashmiri dinner']
      },
      {
        day: 2,
        title: 'Mughal Splendors & Srinagar Heritage Tour',
        description: 'Transition from houseboat to a luxury boutique hotel. Spend the day touring the magnificent royal Mughal gardens built by Emperor Jahangir. Explore Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Abode of Love), situated on the banks of Dal Lake with terraced lawns and cascades. Visit the historical Shankaracharya Temple perched on a hilltop for sweeping city views.',
        activities: ['Resort check-in', 'Touring Nishat & Shalimar Mughal Gardens', 'Visiting Shankaracharya Temple', 'Traditional handcraft shopping']
      },
      {
        day: 3,
        title: 'Srinagar to Snow-Covered Gulmarg (50 km / 2 hrs)',
        description: 'Drive to Gulmarg, the "Meadow of Flowers", and India’s premier winter sports destination. The route takes you through tall pine forests and vast orchards. Check into your snow-view resort. Spend the day playing in the soft snow, riding ponies, and exploring the historic St. Mary’s Church.',
        activities: ['Drive to Gulmarg', 'Resort check-in', 'Snow fields exploration', 'Cozy fireplace dinner']
      },
      {
        day: 4,
        title: 'Thrilling Gondola Ride & Mountain Peaks',
        description: 'Board the famous Gulmarg Gondola, the highest and longest cable car in Asia. Ride Phase 1 to Kongdori (8,500 ft) and continue to Phase 2 at Apharwat Peak (14,000 ft) for jaw-dropping views of Nanga Parbat and neighboring Himalayan giants. Enjoy skiing, snowboarding, or making snowmen on top of the world.',
        activities: ['Gulmarg Gondola Ride (Phase 1 & 2)', 'Alpine snow activities', 'Scenic photography on Apharwat Peak']
      },
      {
        day: 5,
        title: 'Gulmarg to Pahalgam Valley (140 km / 4 hrs)',
        description: 'Drive to Pahalgam, the peaceful "Valley of Shepherds". Along the way, visit the vast saffron fields in Pampore and the majestic ruins of the 1100-year-old Avantipur temple. Arrive in Pahalgam and listen to the relaxing, crystal-clear stream of the Lidder River running next to your resort.',
        activities: ['Drive to Pahalgam', 'Saffron fields visit', 'Avantipur Ruins exploration', 'Riverside campfire evening']
      },
      {
        day: 6,
        title: 'Betaab Valley, Aru Valley & Chandanwari Scenic Tour',
        description: 'Hop into a local open-top gypsy to explore the famous valleys of Pahalgam. Visit Betaab Valley, named after the Bollywood movie shot there, featuring gorgeous rolling meadows and crystal streams. Continue to Chandanwari, the starting point of the holy Amarnath Yatra pilgrimage, and Aru Valley, a serene scenic village.',
        activities: ['Open-top Gypsy tour', 'Visiting Betaab and Aru Valleys', 'Snow glacier viewing at Chandanwari', 'Evening riverside nature walk']
      },
      {
        day: 7,
        title: 'Farewell from Srinagar Airport (95 km / 2.5 hrs)',
        description: 'Enjoy a warm Kashmiri breakfast. Wrap up your packing and drive back to Srinagar International Airport. Fly back home with your soul fully refreshed by the paradise on earth.',
        activities: ['Buffet breakfast', 'Scenic drive back to Srinagar', 'Airport drop-off']
      }
    ]
  },
  {
    id: 'ladakh-mystical-heights',
    title: 'Ladakh Mystical Heights',
    subtitle: 'Magnetic Hill, Nubra Valley Camel Ride & Pangong Lake Reflection',
    description: 'Journey to the rooftop of India. Traverse the highest motorable roads in the world, marvel at gravity-defying Magnetic Hill, ride two-humped Bactrian camels through high-altitude sand dunes, and sleep under millions of stars reflecting on Pangong Lake.',
    duration: '6 Nights / 7 Days',
    price: 38999,
    originalPrice: 46999,
    transportPrice: 22499,
    transportOriginalPrice: 27499,
    rating: 4.93,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    category: 'ladakh',
    tags: ['Adventure', 'High Altitude', 'Camping Experience'],
    popular: false,
    highlights: [
      'Gazing at Pangong Lake (14,270 ft), watching its water change from light blue to royal indigo',
      'Driving through Khardung La (17,582 ft), the highest motorable road in the world',
      'Riding rare, double-humped Bactrian Camels in the high-altitude sand dunes of Hunder',
      'Experiencing gravity-defying physics at the mysterious Magnetic Hill in Leh',
      'Overnight stay in luxury glamping tents next to the shore of Pangong Tso'
    ],
    inclusions: [
      'Stay option: 6 Nights accommodation (Leh boutique hotel, Nubra Valley, Pangong Glamping)',
      'Stay option: Daily freshly prepared local organic breakfast and dinner at all locations',
      'All options: Private 4x4 rugged SUV (Innova/Scorpio) for all sightseeing and high-mountain transfers',
      'All options: Oxygen cylinder in the vehicle at all times for altitude safety and acclimation',
      'All options: All inner-line tourist permits, environmental fees, and wildlife passes pre-arranged',
      'All options: Leh airport pickup and drop-off'
    ],
    exclusions: [
      'Stay option: All lunches, and local personal shopping expenses',
      'Transport option: All hotel reservations, luxury tents, and meals (entirely self-managed)',
      'All options: Airfare to and from Leh Kushok Bakula Rimpochee Airport (IXL)',
      'All options: Pony rides, quad biking, and river rafting tickets'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Leh Arrival & Crucial Altitude Acclimation Day',
        description: 'Fly over snow-covered Himalayan peaks and land at Leh Airport (11,500 ft). Step into the cool, crisp thin air. Check into your boutique hotel. This day is strictly dedicated to complete physical rest to acclimate to the high altitude. Sip warm local butter tea, read a book, and rest in your heated room.',
        activities: ['Airport pickup', 'Acclimatization briefing', 'Full day complete resort rest', 'Heated room cozy dinner']
      },
      {
        day: 2,
        title: 'Magnetic Hill, Confluence & Spituk Monastery',
        description: 'Enjoy a light morning tour. Visit the confluence of the Indus and Zanskar rivers, seeing two distinct water colors merge. Stop at the famous Magnetic Hill, where parked vehicles appear to roll uphill against gravity. Conclude at Spituk Monastery, a 15th-century cliffside sanctuary with incredible valley views.',
        activities: ['Confluence of Indus & Zanskar view', 'Magnetic Hill gravity experiment', 'Spituk Monastery visit', 'Leh local market walking tour']
      },
      {
        day: 3,
        title: 'Leh to Nubra Valley via Khardung La (125 km / 5 hrs)',
        description: 'Set off on an epic drive. Ascend the world’s highest motorable pass, Khardung La (17,582 ft). Capture breathtaking panoramic photos surrounded by glaciers. Descend into the warm Nubra Valley, check into your luxury valley resort, and head to the white sand dunes of Hunder to ride double-humped Bactrian Camels.',
        activities: ['Crossing Khardung La Pass', 'Glacier photography', 'Hunder sand dunes safari', 'Bactrian Camel riding']
      },
      {
        day: 4,
        title: 'Diskit Monastery & Drive to Pangong Lake (150 km / 6 hrs)',
        description: 'Visit Diskit Monastery, featuring a towering 106-foot golden statue of Maitreya Buddha overlooking the Nubra Valley. Drive along the gushing Shyok River towards the border. Arrive at Pangong Lake (14,270 ft). Witness the surreal spectacle of a massive salt-water lake reflecting deep blues and greens against dry brown mountains. Check into your luxury glamping dome.',
        activities: ['Diskit Monastery & Maitreya Buddha visit', 'Scenic Shyok River drive', 'Arrival at Pangong Lake', 'Luxury lake-view glamping check-in']
      },
      {
        day: 5,
        title: 'Pangong Sunrise & Drive back to Leh (160 km / 6 hrs)',
        description: 'Wake up early to witness a magical sunrise over Pangong Lake, watching the water change colors through shades of turquoise, azure, and deep navy blue. After a hearty camp breakfast, drive back to Leh crossing the majestic Chang La Pass (17,590 ft). Check into your Leh hotel and enjoy a celebratory final evening.',
        activities: ['Pangong Lake sunrise viewing', 'Crossing Chang La Pass', 'Leh hotel check-in', 'Celebration multi-cuisine dinner']
      },
      {
        day: 6,
        title: 'Departure with Himalayan Altitude in Your Spirit',
        description: 'Enjoy your last breakfast in Leh. Pack your souvenirs like Pashmina shawls, prayer wheels, and apricots. Transfer to Leh Airport for your departure flight back home.',
        activities: ['Gourmet local breakfast', 'Apricot souvenir shopping', 'Airport drop-off']
      }
    ]
  },
  {
    id: 'goa-sunset-escape',
    title: 'Goa Premium Beach Getaway',
    subtitle: 'North Goa Beach Trails, South Goa Heritage & Private Yacht Sunset Cruise',
    description: 'Experience Goa with a refined, premium twist. Skip the massive tourist crowds and stay at a luxury colonial-style beach resort. Enjoy private heritage walks through bright pastel Latin quarters, witness roaring Dudhsagar waterfalls, and cruise on a premium catamaran at sunset.',
    duration: '4 Nights / 5 Days',
    price: 24999,
    originalPrice: 29999,
    transportPrice: 14999,
    transportOriginalPrice: 17999,
    rating: 4.82,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
    category: 'goa',
    tags: ['Beach Luxury', 'Sunset Yacht', 'Heritage Walk'],
    popular: false,
    highlights: [
      'Private 2-hour sunset cruise on a premium luxury Catamaran/Yacht with wine and dynamic appetizers',
      'Exclusive guided walking tour of Fontainhas, Panaji’s historic Portuguese Latin Quarter',
      'Premium beachside cabana dinner under the stars with live retro jazz music',
      'Scenic trip to Dudhsagar Waterfalls with off-road open-top jeep safari',
      'Water sports package including jet ski, parasailing, and speed boating at a private beach cove'
    ],
    inclusions: [
      'Stay option: 4 Nights in a premium 5-star beachfront boutique resort in South Goa',
      'Stay option: Daily lavish buffet breakfasts and 1 specialty beachside dinner',
      'Stay option: Private luxury catamaran sunset cruise with complimentary wine & cheese platter',
      'All options: Private chauffeur-driven luxury sedan for all excursions, shopping, and airport pickups',
      'All options: Certified heritage storyteller guide for Fontainhas walk',
      'All options: All airport pick-and-drop services via private cab'
    ],
    exclusions: [
      'Stay option: Personal room service expenses (laundry, spa, hard drinks)',
      'Transport option: All hotels, beach villas, resort booking, and breakfasts (entirely self-managed)',
      'All options: Airfare to and from Manohar International Airport Mopa (GOX) or Dabolim (GOI)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Goa & Beachfront Resort Welcome',
        description: 'Land in warm Goa where a private air-conditioned vehicle transfers you to your luxury 5-star beachfront resort in peaceful South Goa. Sip a refreshing tropical welcome drink. Spend the afternoon relaxing on the white sands of Varca beach or lounging next to the resort pool. At night, enjoy a fine-dining multi-cuisine dinner.',
        activities: ['Airport pickup', 'Boutique resort check-in', 'Private beach walk', 'Resort welcome dinner']
      },
      {
        day: 2,
        title: 'Colonial History & Fontainhas Latin Quarter Storytelling Walk',
        description: 'Explore the colonial heritage of Goa. Visit the magnificent Basilica of Bom Jesus in Old Goa, housing the sacred relics of St. Francis Xavier. In the afternoon, take a private guided walking tour of Fontainhas in Panaji. Walk through narrow winding alleys flanked by bright yellow, blue, and red 19th-century Portuguese houses with wooden balconies.',
        activities: ['Basilica of Bom Jesus visit', 'Old Goa cathedral tour', 'Guided Fontainhas Latin Quarter walk', 'Traditional Goan-Portuguese lunch']
      },
      {
        day: 3,
        title: 'Off-Road Dudhsagar Waterfall Safari & Spice Plantation',
        description: 'Embark on a thrilling adventure. Ride an open-top forest department jeep through the dense canopy of Bhagwan Mahavir Wildlife Sanctuary to the majestic Dudhsagar Waterfalls, where white milk-like waters cascade from 1000 feet. Swim in the natural pool. Afterwards, visit a beautiful organic spice plantation, enjoying a traditional buffet served on banana leaves.',
        activities: ['Off-road forest jeep safari', 'Swimming in Dudhsagar pool', 'Organic spice plantation tour', 'Authentic clay-pot buffet lunch']
      },
      {
        day: 4,
        title: 'Adventure Cove & Private Luxury Yacht Sunset Cruise',
        description: 'Head to a private beach cove for an action-packed morning of curated water sports, including jet skiing, parasailing, and bumper rides. In the late afternoon, board a premium, private double-decker luxury catamaran yacht. Cruise along the Mandovi River out to the Arabian Sea, spotting playful dolphins and sipping fine wine as the sun dips below the horizon.',
        activities: ['Curated beach watersports', 'Luxury private yacht cruise', 'Dolphin spotting', 'Appetizers & wine at sunset']
      },
      {
        day: 5,
        title: 'Departure with Sunshine in Your Soul',
        description: 'Indulge in a late gourmet breakfast at the resort. Spend your last hours shopping for cashew nuts, feni, and resort-wear clothing in local boutiques. Transfer comfortably to Goa Airport with a golden tan and beautiful memories.',
        activities: ['Resort gourmet breakfast', 'Boutique shopping', 'Airport transfer']
      }
    ]
  },
  {
    id: 'jaipur-day-tour',
    title: 'Jaipur: Private Full-Day Sightseeing Tour by Car with Guide',
    subtitle: 'Explore the historic Amber Fort, Hawa Mahal, City Palace, and local bazaars',
    description: 'Immerse yourself in the royal grandeur of the Pink City. This premium, private guided day tour covers Jaipur\'s most spectacular palaces and historic monuments, complete with an air-conditioned sedan and a knowledgeable private guide.',
    duration: '1 Day (Full Day)',
    price: 3999,
    originalPrice: 4999,
    transportPrice: 2499,
    transportOriginalPrice: 2999,
    rating: 4.95,
    reviewsCount: 245,
    image: 'https://images.unsplash.com/photo-1477587458883-47135acdb7ae?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['Private Guide', 'Pink City Heritage', 'All-Inclusive Car'],
    highlights: [
      'Marvel at the stunning Hawa Mahal (Palace of Winds) facade',
      'Explore the colossal Amber Fort with its breathtaking Sheesh Mahal (Mirror Palace)',
      'Visit the magnificent City Palace, still home to the royal family',
      'Walk through the ancient astronomical instruments at the UNESCO Jantar Mantar',
      'Stop at the beautiful Jal Mahal (Water Palace) in Man Sagar Lake',
      'Stroll and shop for traditional handicrafts at the lively local Bazaars'
    ],
    inclusions: [
      'Stay option: Premium buffet lunch at a local heritage restaurant',
      'All options: Fully private AC Sedan/SUV for the entire sightseeing route',
      'All options: Certified local English/Hindi speaking tour guide',
      'All options: Hotel pickup and drop-off anywhere in Jaipur',
      'All options: Tolls, parking fees, fuel, and driver allowances'
    ],
    exclusions: [
      'All options: Direct entry tickets to monuments (approx. ₹300-500 total)',
      'All options: Personal expenses, shopping, and tips for the guide/driver'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Full Day Royal Pink City Tour',
        description: 'Your private guide and driver pick you up from your hotel at 8:30 AM. Begin with a stop at Hawa Mahal, then head to the magnificent Amber Fort on a hilltop. Next, admire Jal Mahal, enjoy a traditional Rajasthani lunch, visit Jantar Mantar and the royal City Palace, and wrap up with a vibrant local bazaar walk.',
        activities: ['Hotel pickup', 'Hawa Mahal photo stop', 'Amber Fort deep tour', 'Jal Mahal visit', 'Heritage lunch', 'City Palace & Jantar Mantar', 'Local Bazaar exploration', 'Hotel drop-off']
      }
    ]
  },
  {
    id: 'jodhpur-walking-tour',
    title: 'Jodhpur: Blue City Heritage Walking Tour',
    subtitle: 'Stroll through the indigo-hued lanes, ancient markets, and stepwells of the Old City',
    description: 'Discover why Jodhpur is celebrated worldwide as the "Blue City". Wander with a passionate local storyteller through centuries-old streets, hidden medieval residential blocks painted in cobalt blue, and vibrant spice and handicraft markets.',
    duration: '1 Day (Half Day - 3 Hours)',
    price: 1499,
    originalPrice: 1999,
    transportPrice: 999,
    transportOriginalPrice: 1299,
    rating: 4.89,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['Walking Tour', 'Blue City Lanes', 'Local Storyteller'],
    highlights: [
      'Witness the vibrant indigo-blue houses of Brahmin families',
      'Visit the iconic Clock Tower (Ghanta Ghar) in the heart of Old City',
      'Wander through colorful local spice, textile, and handicraft markets',
      'Discover hidden stepwells like Toorji Ka Jhalra and ancient medieval structures',
      'Learn rich historical secrets and folklore from an expert local guide'
    ],
    inclusions: [
      'Stay option: Guided walking tour + authentic tea/coffee and local street snacks (Lassi & Samosa)',
      'All options: Dedicated expert local storyteller guide',
      'All options: Carefully curated walking map of hidden pathways'
    ],
    exclusions: [
      'All options: Transfers to/from the walking tour meeting point',
      'All options: Personal expenses, shopping, and tips'
    ],
    itinerary: [
      {
        day: 1,
        title: '3-Hour Blue City Heritage Walk',
        description: 'Meet your guide at the iconic Clock Tower. Walk into the narrow, winding lanes of Jodhpur where bright blue-washed houses frame the paths. Visit the breathtaking Toorji stepwell, sample rich Makhaniya Lassi, see ancient temples, and discover the traditional lifestyles of the locals.',
        activities: ['Clock Tower meetup', 'Vibrant Local Markets', 'Toorji Stepwell visit', 'Blue Houses deep walk', 'Lassi & Snack tasting', 'Heritage street photography']
      }
    ]
  },
  {
    id: 'udaipur-boat-tour',
    title: 'Udaipur: City Palace, Lake Pichola & Jag Mandir Boat Tour',
    subtitle: 'Sail past floating palaces and walk the majestic corridors of Rajasthan\'s grandest City Palace',
    description: 'Experience the ultimate romantic charm of Udaipur, the City of Lakes. This private guided tour takes you through the magnificent chambers of the City Palace, followed by a serene, scenic boat cruise across the shimmering waters of Lake Pichola to the island palace of Jag Mandir.',
    duration: '1 Day (Full Day)',
    price: 3499,
    originalPrice: 4299,
    transportPrice: 2199,
    transportOriginalPrice: 2699,
    rating: 4.93,
    reviewsCount: 188,
    image: 'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['Lake Boat Cruise', 'Floating Palaces', 'Private Guided Tour'],
    highlights: [
      'Tour the colossal City Palace museum and its beautiful royal courtyards',
      'Sail in a scenic boat cruise across the crystal-clear Lake Pichola',
      'Explore the historical island palace of Jag Mandir with grand marble elephants',
      'Visit the historic Jagdish Temple, an exquisite Indo-Aryan masterpiece',
      'Walk through the beautiful royal fountains at Saheliyon-ki-Bari gardens'
    ],
    inclusions: [
      'Stay option: Premium buffet lunch overlooking Lake Pichola',
      'All options: Boat cruise tickets to Jag Mandir Island Palace',
      'All options: Private AC Sedan for all transfers and sightseeing',
      'All options: Dedicated expert local guide for the day',
      'All options: Hotel pickup and drop-off in Udaipur'
    ],
    exclusions: [
      'All options: Monument entry tickets',
      'All options: Personal expenses, shopping, and camera charges'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Romantic Lakes & Palaces Day Tour',
        description: 'Pickup from hotel at 9:00 AM. Visit the ancient Jagdish Temple first, followed by a detailed guided tour of the sprawling City Palace complex. Afterward, embark on an exquisite shared or private boat ride on Lake Pichola to Jag Mandir. Wrap up the day by walking around Saheliyon-ki-Bari fountains.',
        activities: ['Hotel pickup', 'Jagdish Temple visit', 'City Palace grand tour', 'Lake Pichola Boat Cruise', 'Jag Mandir Palace exploration', 'Saheliyon-ki-Bari Gardens', 'Lake-view sunset drop-off']
      }
    ]
  },
  {
    id: 'mumbai-sightseeing-tour',
    title: 'Mumbai: Full-Day Sightseeing Tour',
    subtitle: 'The ultimate city overview from Gateway of India to Marine Drive and Dhobi Ghat',
    description: 'Unveil the chaotic beauty, colonial history, and unstoppable spirit of India\'s commercial capital. This private car tour takes you comfortably from colonial architectural masterworks to bustling public laundry houses, scenic seafronts, and historic houses.',
    duration: '1 Day (Full Day)',
    price: 3299,
    originalPrice: 3999,
    transportPrice: 1999,
    transportOriginalPrice: 2499,
    rating: 4.87,
    reviewsCount: 204,
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['Commercial Capital', 'Colonial Heritage', 'Seaside Drives'],
    highlights: [
      'Admire the iconic Gateway of India overlooking the Arabian Sea',
      'Drive along the picturesque Marine Drive (Queen’s Necklace) curve',
      'Witness the jaw-dropping scale of Dhobi Ghat, the world’s largest open-air laundry',
      'Explore the terraced Hanging Gardens of Malabar Hill with panoramic city views',
      'Visit Mani Bhavan, Gandhi’s historic headquarters in Mumbai',
      'Shop, dine, and experience the old-world charm of historic Colaba'
    ],
    inclusions: [
      'Stay option: Authentic Mumbai street-food lunch or cafe voucher',
      'All options: Private AC Sedan for all city transfers and sightseeing',
      'All options: Professional driver familiar with all Mumbai shortcuts',
      'All options: Certified city guide to narrate fascinating stories',
      'All options: Hotel pickup and drop-off in South Mumbai'
    ],
    exclusions: [
      'All options: Entrance tickets to museums or heritage buildings',
      'All options: Personal expenses and tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'The Soul of Mumbai Day Tour',
        description: 'Your day starts at 9:00 AM with the majestic Gateway of India and the Taj Mahal Palace Hotel. Drive past Victoria Terminus, stop at the mesmerizing Dhobi Ghat, visit Mani Bhavan to learn about Gandhi, climb Malabar Hill for Hanging Gardens, and end the evening enjoying the sunset at Marine Drive.',
        activities: ['Gateway of India', 'Taj Mahal Palace stop', 'Chhatrapati Shivaji (CST) station', 'Dhobi Ghat viewpoint', 'Mani Bhavan Gandhi Museum', 'Hanging Gardens & Malabar Hill', 'Marine Drive Sunset', 'Hotel drop-off']
      }
    ]
  },
  {
    id: 'ajanta-ellora-day-tour',
    title: 'Aurangabad: Ajanta & Ellora Caves One Day Tour',
    subtitle: 'Explore ancient UNESCO rock-cut cave temples and the monumental monolithic Kailash Temple',
    description: 'Embark on an unforgettable journey back in time. Explore the ancient Buddhist frescoes of Ajanta and the monumental rock-cut Hindu, Jain, and Buddhist caves of Ellora—including the world\'s largest monolithic structure, the magnificent Kailash Temple.',
    duration: '1 Day (Full Day)',
    price: 3499,
    originalPrice: 4499,
    transportPrice: 2299,
    transportOriginalPrice: 2799,
    rating: 4.94,
    reviewsCount: 176,
    image: '/src/assets/images/ajanta_ellora_1782413196439.jpg',
    category: 'day-tours',
    tags: ['UNESCO Caves', 'Kailash Temple', 'Private AC Car'],
    highlights: [
      'Discover the exquisite, ancient Buddhist cave paintings and murals at Ajanta',
      'Marvel at the Kailash Temple in Ellora, carved out of a single massive rock',
      'Explore 34 monumental caves representing Buddhist, Hindu, and Jain faiths',
      'Learn the architectural secrets of the 5th to 10th-century craftsmanship',
      'Travel in total comfort with private hotel transfers from Aurangabad'
    ],
    inclusions: [
      'Stay option: Premium local multi-cuisine lunch with refreshing soft drinks',
      'All options: Private AC Sedan or SUV for the entire day itinerary',
      'All options: Experienced local guide certified in history & archaeology',
      'All options: Convenient hotel/airport pickup and drop-off in Aurangabad'
    ],
    exclusions: [
      'All options: Cave entry fees and shuttle bus tickets (approx. ₹300 total)',
      'All options: Personal expenses, camera permits, and tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ancient Wonders of Ajanta & Ellora',
        description: 'Meet your guide and driver at 8:00 AM at your Aurangabad hotel. Drive to the mesmerizing Ellora Caves first to admire the monumental monolithic Kailash Temple (Cave 16) and Buddhist/Jain rock-cut structures. Savor a delicious buffet lunch, then head to the ancient cave galleries of Ajanta to marvel at centuries-old frescoes and giant Buddha statues before returning to the city.',
        activities: ['Aurangabad hotel pickup', 'Ellora Caves guided exploration', 'Kailash Temple deep-dive tour', 'Authentic lunch break', 'Ajanta Caves heritage walk', 'Ancient Buddhist frescoes tour', 'Return drive and hotel drop-off']
      }
    ]
  },
  {
    id: 'mumbai-elephanta-caves',
    title: 'Mumbai: Elephanta Caves Half-Day Tour with Ferry',
    subtitle: 'Cross Mumbai Harbour by ferry to explore centuries-old UNESCO rock-cut cave temples',
    description: 'Journey back to the 5th century. Board a double-decker ferry from Gateway of India to Elephanta Island. Guided by a certified historian, uncover the magnificent UNESCO-listed rock-cut cave temples dedicated to Lord Shiva, featuring the spectacular 20-foot high Trimurti sculpture.',
    duration: '1 Day (Half Day - 5 Hours)',
    price: 2299,
    originalPrice: 2999,
    transportPrice: 1499,
    transportOriginalPrice: 1899,
    rating: 4.81,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['UNESCO Heritage', 'Ferry Ride', 'Rock-cut Caves'],
    highlights: [
      'Scenic 1-hour double-decker ferry ride across Mumbai Harbour',
      'Explore the magnificent 5th-century rock-cut cave temples',
      'Admire the legendary three-headed Trimurti Shiva sculpture',
      'Ride the charming mini toy train from the jetty to the hill base',
      'Learn rich mythological tales from a certified archaeological guide'
    ],
    inclusions: [
      'Stay option: Delicacies & refreshments at the island restaurant',
      'All options: Round-trip double-decker ferry tickets from Mumbai',
      'All options: Elephanta island entry fee & toy train tickets',
      'All options: Certified English/Hindi speaking tour guide',
      'All options: Meet-up at Gateway of India'
    ],
    exclusions: [
      'All options: Hotel pickup and drop-off (can be customized)',
      'All options: Cave camera fees and personal expenditures'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Spiritual Caves Island Odyssey',
        description: 'Meet your guide at Gateway of India at 8:30 AM. Board the morning ferry. Take in views of Mumbai skyline and naval ships. Arrive at Elephanta, ride the fun toy train to the steps, climb up past local monkeys and stalls, and spend 2 hours exploring the awe-inspiring cave sculptures.',
        activities: ['Gateway of India meetup', 'Double-decker Ferry Cruise', 'Toy Train ride', 'Guided Caves Tour', 'Trimurti sculpture darshan', 'Ferry return to Gateway']
      }
    ]
  },
  {
    id: 'nashik-sula-wine',
    title: 'Nashik: Sula Vineyards Wine Tasting Experience',
    subtitle: 'Stroll through lush rolling vineyards, explore state-of-the-art wineries, and taste premium reserve blends',
    description: 'Immerse yourself in India\'s wine capital. Enjoy a beautifully guided walk through the scenic Sula Vineyards, learn about modern wine-making processes from expert sommeliers, and enjoy a curated tasting of iconic award-winning Sula reserves.',
    duration: '1 Day (Half Day)',
    price: 2499,
    originalPrice: 2999,
    transportPrice: 1299,
    transportOriginalPrice: 1599,
    rating: 4.88,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['Wine Tasting', 'Vineyard Walk', 'Sommelier Guide'],
    highlights: [
      'Guided walk through pristine vineyard blocks',
      'Step-by-step tour of the modern crushing & aging cellars',
      'Premium tasting session of 5 signature Sula wines',
      'Access to the scenic open-air balcony bar overlooking the lake'
    ],
    inclusions: [
      'All options: Guided vineyard and winery tour with expert sommelier',
      'All options: Wine tasting cards with cheese/cracker pairings',
      'Stay option: Gourmet three-course lunch at the vineyard bistro'
    ],
    exclusions: [
      'All options: Transportation to/from Sula Vineyards (unless transport option selected)',
      'All options: Additional bottle purchases or personal expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Vineyard Walk & Premium Tasting',
        description: 'Arrive at Sula Vineyards. Tour the lush vineyards, see the oak barrel aging cellars, and enjoy a premium wine-tasting masterclass led by an expert sommelier.',
        activities: ['Arrival & welcome', 'Vineyard stroll', 'Winery production tour', 'Barrel cellar visit', 'Sommelier tasting masterclass', 'Bistro lunch / leisure time']
      }
    ]
  },
  {
    id: 'mumbai-nashik-trimbakeshwar',
    title: 'From Mumbai: Nashik Wine Tour & Trimbakeshwar Temple',
    subtitle: 'A unique blend of ancient spirituality and premium lifestyle wine tasting in a comfortable day trip',
    description: 'Embark on a unique, private full-day road trip from Mumbai. Visit the highly sacred Trimbakeshwar Jyotirlinga Temple nestled in the Brahmagiri Hills, and contrast the spiritual morning with an elegant afternoon vineyard tour and wine tasting at Nashik\'s finest estates.',
    duration: '1 Day (Full Day)',
    price: 4999,
    originalPrice: 5999,
    transportPrice: 3499,
    transportOriginalPrice: 4199,
    rating: 4.92,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['Jyotirlinga Darshan', 'Sula Vineyards', 'Private Road Trip'],
    highlights: [
      'Seek blessings at the sacred Trimbakeshwar Jyotirlinga Temple',
      'Indulge in a premium winery tour and tasting masterclass in Nashik',
      'Scenic drive through the beautiful Western Ghats and Kasara Ghat',
      'Travel in ultimate comfort with private hotel pickup and drop-off'
    ],
    inclusions: [
      'Stay option: VIP Darshan pass assistance + authentic Maharashtrian lunch',
      'All options: Private AC Sedan/SUV round-trip from Mumbai',
      'All options: Guided tour and wine tasting fee at a premium winery',
      'All options: Professional highway driver, tolls, and parking taxes'
    ],
    exclusions: [
      'All options: Personal temple offerings and shopping expenses',
      'All options: Stay / hotel accommodations'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Spirituality & Vineyards',
        description: 'Private morning pickup from Mumbai. Arrive at Trimbakeshwar for a sacred morning darshan. Drive to Nashik for a delicious lunch, followed by a relaxing afternoon winery tour, barrel cellar walk, and tasting. Travel back to Mumbai in the evening.',
        activities: ['Mumbai pickup (6:00 AM)', 'Western Ghats drive', 'Trimbakeshwar Temple darshan', 'Drive to Nashik', 'Winery tour & tasting masterclass', 'Return road trip to Mumbai']
      }
    ]
  },
  {
    id: 'kochi-backwaters-cruise',
    title: 'Kochi: Kerala Backwaters Village Cruise with Lunch',
    subtitle: 'Glide through narrow canals on a country canoe and savor a traditional lunch served on a banana leaf',
    description: 'Discover the tranquil rhythm of country life in Kerala. Cruise along narrow, palm-fringed backwater canals on a traditional non-mechanized country boat. Witness coir making, coconut shell carving, and local fishing, topped off with a sumptuous traditional Sadhya lunch.',
    duration: '1 Day (Full Day)',
    price: 2999,
    originalPrice: 3699,
    transportPrice: 1799,
    transportOriginalPrice: 2199,
    rating: 4.91,
    reviewsCount: 108,
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['Village Cruise', 'Banana Leaf Lunch', 'Canoe Boat Ride'],
    highlights: [
      'Glide down silent, palm-shaded canals on a wooden country canoe',
      'Observe organic coir fiber weaving and coconut toddy tapping',
      'Savor a traditional Keralan Sadhya lunch served on fresh banana leaves',
      'Deep village walk to interact with local warm-hearted artisans'
    ],
    inclusions: [
      'Stay option: Full traditional banana leaf lunch + village snacks',
      'All options: Guided backwater cruise on traditional wooden country boats',
      'All options: Private AC vehicle transfer from Kochi hotels',
      'All options: Fluent English/Malayalam local village host'
    ],
    exclusions: [
      'All options: Personal shopping (coir products, spices)',
      'All options: Gratuities for boatmen and village artisans'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Scenic Backwater & Artisanal Village Tour',
        description: 'Depart from Kochi at 8:00 AM to a serene backwater village. Board the traditional country boat to cruise narrow canals. Walk through the village, see traditional occupations, enjoy a beautiful banana leaf meal, and return to Kochi by afternoon.',
        activities: ['Kochi hotel pickup', 'Drive to village jetty', 'Country boat canal cruise', 'Artisanal crafts demonstration', 'Traditional Sadhya lunch', 'Village walk & return transfer']
      }
    ]
  },
  {
    id: 'delhi-taj-gatimaan-tour',
    title: 'From Delhi: Taj Mahal & Agra Tour by Gatimaan Express Train',
    subtitle: 'Experience the speed of India\'s fastest train to see the breathtaking Taj Mahal and Agra Fort',
    description: 'Bypass heavy highway traffic and travel in high-speed comfort aboard the semi-high-speed Gatimaan Express from Delhi. Explore the mesmerizing Taj Mahal with a private historian guide, marvel at the colossal Agra Fort, and return to Delhi the same evening.',
    duration: '1 Day (Full Day)',
    price: 5499,
    originalPrice: 6499,
    transportPrice: 3999,
    transportOriginalPrice: 4799,
    rating: 4.97,
    reviewsCount: 380,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['Gatimaan Express', 'Taj Mahal Tour', 'Private Historian Guide'],
    highlights: [
      'Travel on India’s luxury high-speed Gatimaan Express with meals onboard',
      'Witness the majestic Taj Mahal, a world wonder, with an expert guide',
      'Tour the UNESCO-listed massive red sandstone Agra Fort structures',
      'Enjoy convenient door-to-door transfers from your Delhi hotel'
    ],
    inclusions: [
      'Stay option: Lavish multi-cuisine buffet lunch at a 5-star hotel',
      'All options: Round-trip Gatimaan Express Train tickets (A/C Chair Car)',
      'All options: Private AC vehicle in Agra with professional driver',
      'All options: Certified private guide for Taj Mahal and Agra Fort',
      'All options: Delhi hotel pickup & railway station transfers'
    ],
    exclusions: [
      'All options: Monument entry tickets (approx. ₹1300 for foreigners, ₹100 for Indians)',
      'All options: Camera fees, tips, and personal beverages'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Agra High-Speed Odyssey',
        description: 'Early morning hotel pickup at 7:00 AM. Board Gatimaan Express at Hazrat Nizamuddin Station. Onboard breakfast included. Arrive in Agra, meet your guide and private car. Tour the Taj Mahal and Agra Fort. Savor lunch at a 5-star hotel. Head back to Agra Cantt Station for the evening train with dinner served onboard. Pick up at Delhi station and drop at hotel.',
        activities: ['Delhi hotel pickup', 'Gatimaan Express departure', 'Onboard breakfast', 'Taj Mahal guided tour', 'Agra Fort exploration', '5-star luxury lunch', 'Gatimaan Express return', 'Delhi hotel drop-off']
      }
    ]
  },
  {
    id: 'golden-triangle-3day',
    title: '3-Day Delhi, Agra & Jaipur Golden Triangle Tour',
    subtitle: 'The ultimate classic journey covering majestic forts, palaces, and world wonders across three historic cities',
    description: 'Immerse yourself in India\'s rich history, art, and architecture. This premium private tour takes you comfortably through the three corners of the famous Golden Triangle—Delhi, Agra, and Jaipur. Travel in a private air-conditioned vehicle with dedicated city guides. perfect for first-time visitors seeking royal luxury.',
    duration: '3 Days (2 Nights)',
    price: 14999,
    originalPrice: 17999,
    transportPrice: 9999,
    transportOriginalPrice: 11999,
    rating: 4.98,
    reviewsCount: 292,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    category: 'day-tours',
    tags: ['Golden Triangle', '3-City Tour', 'Forts & Palaces'],
    highlights: [
      'See Old Delhi landmarks & New Delhi colonial avenues in one day',
      'Watch a magical sunrise at the Taj Mahal and tour Agra Fort',
      'Explore Jaipur\'s hilltop Amber Fort, City Palace, and local bazaars',
      'Enjoy smooth, seamless intercity transfers in a private luxury car'
    ],
    inclusions: [
      'Stay option: 2 Nights in 4-Star or 5-Star luxury heritage hotels with breakfasts',
      'All options: Fully private AC Sedan/SUV for all transfers and 3-day sightseeing',
      'All options: Professional private driver with all highway tolls and parking paid',
      'All options: Dedicated expert local guides in Delhi, Agra, and Jaipur',
      'All options: Hotel pickup in Delhi and drop-off anywhere in Delhi/Jaipur'
    ],
    exclusions: [
      'All options: Monument entry fees and camera charges',
      'All options: Lunches, dinners, and any personal shopping'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi Sightseeing & Drive to Agra',
        description: 'Start with Old Delhi (Jama Masjid, Chandni Chowk rickshaw ride) and drive past India Gate and Parliament House. In the afternoon, drive via the Yamuna Expressway to Agra. Check-in to your Agra hotel.',
        activities: ['Delhi hotel pickup', 'Old & New Delhi tour', 'Yamuna Expressway drive', 'Agra hotel check-in', 'Evening at leisure']
      },
      {
        day: 2,
        title: 'Agra Sunrise Taj Mahal & Drive to Jaipur',
        description: 'Wake up early to view the Taj Mahal at sunrise. Return for breakfast, pack up, and tour the historic Agra Fort. Drive to Jaipur, stopping at Fatehpur Sikri on the way. Check-in to your hotel in the Pink City.',
        activities: ['Sunrise Taj Mahal tour', 'Agra Fort deep walk', 'Fatehpur Sikri stop', 'Drive to Jaipur', 'Jaipur hotel check-in']
      },
      {
        day: 3,
        title: 'Jaipur Exploration & Delhi Return',
        description: 'Explore the spectacular hilltop Amber Fort, stop at Jal Mahal and Hawa Mahal, and tour the Royal City Palace and Jantar Mantar. In the late afternoon, drive back to Delhi or get dropped off at Jaipur Airport.',
        activities: ['Amber Fort exploration', 'Jal Mahal & Hawa Mahal', 'City Palace & Jantar Mantar', 'Return drive to Delhi', 'Delhi/Jaipur drop-off']
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aishwarya Roy',
    location: 'Mumbai, Maharashtra',
    comment: 'Wanderly Holidays planned our pilgrimage and Maharashtra 3 Jyotirling tour. It was pure bliss! The driver was so respectful and familiar with the VIP temple schedules, which saved us hours. Direct WhatsApp booking was incredibly fast and easy.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    destinationVisited: 'Maharashtra 3 Jyotirling Tour'
  },
  {
    id: 'test-2',
    name: 'Rajesh Sharma',
    location: 'Delhi NCR',
    comment: 'The attention to detail on our Ladakh trip was spectacular. We had an oxygen cylinder in our SUV at all times which was reassuring, and the Pangong Lake glamping dome was incredibly warm and comfortable despite sub-zero temperatures.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    destinationVisited: 'Ladakh Mystical Heights'
  },
  {
    id: 'test-3',
    name: 'Meera Nair',
    location: 'Bengaluru, Karnataka',
    comment: 'We booked the Kerala package with the Transport Only option because we wanted to book our own heritage home stays. It worked out perfectly! The private Kettuvallam and dedicated vehicle were pristine and incredibly affordable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    destinationVisited: 'Kerala Backwaters & Hills'
  }
];
