const cs = {
  nav: {
    brand: 'Centra preventivni mediciny',
    home: 'Domu',
    clinics: 'Kliniky',
    reservation: 'Rezervace',
    products: 'Produkty',
    bookNow: 'Rezervovat',
    languageLabel: 'Jazyk',
  },
  footer: {
    about: 'O nas',
    career: 'Kariera',
    gdpr: 'GDPR',
    contact: 'Kontakt',
    rights: '© 2026 Centra Preventivni Mediciny (CPM). Vsechna prava vyhrazena.',
  },
  home: {
    badge: 'Budoucnost preventivni pece',
    titleLine1: 'Umeni',
    titleAccent: 'preventivni mediciny.',
    description:
      'Soustredime se na spickovou diagnostiku a lidsky pristup. Propojujeme moderni technologie s individualnim pribehem vaseho zdravi pro dlouhodobou vitalitu.',
    ctaClinics: 'Nase kliniky',
    ctaProducts: 'Katalog produktu',
    heroImageAlt: 'Moderni lekarske zarizeni',
    liveUpdates: 'Zive aktualizace',
    auraActive: 'System Aura v2.4 Aktivni',
    premiumClinicsTitle: 'Premium kliniky',
    premiumClinicsDescription:
      'Vstupte do nasi exkluzivni site diagnostickych center navrzenych pro maximalni komfort a presnost.',
    premiumClinicsAction: 'Najit pobocku',
    clinicInteriorAlt: 'Interier kliniky',
    featuredProductsTitle: 'Vybrane produkty',
    featuredProductsDescription:
      'Zdravotnicke technologie pro monitorovani vaseho zdravi v pohodli domova.',
    reservationTitle: 'Rezervace',
    reservationDescription: 'Okamzite objednani ke specialistum.',
    recordsTitle: 'Zdravotni zaznamy',
    recordsDescription: 'Zabezpeceny a prehledny denik vaseho zdravi.',
    expertiseBadge: 'Nase odbornost',
    expertiseTitle: 'Komplexni sluzby site na miru vasemu organismu.',
    services: {
      genomics: {
        title: 'Pokrocila genomika',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        features: ['Ut enim ad minim veniam', 'Quis nostrud exercitation'],
      },
      neurology: {
        title: 'Neurologicka pece',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        features: ['Excepteur sint occaecat', 'Cupidatat non proident'],
      },
      longevity: {
        title: 'Protokoly dlouhovekosti',
        description:
          'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.',
        features: ['Error sit voluptatem', 'Accusantium doloremque'],
      },
    },
    partnershipTitle: 'Stante se soucasti nasi site',
    partnershipDescription:
      'Hledame partnery, kteri sdileji nasi vizi o budoucnosti mediciny. Nabizime spolupraci v oblasti diagnostiky, vyzkumu i distribuce nasich technologii. Pojdme spolecne posouvat hranice preventivni pece.',
    partnershipCta: 'Kontaktovat nas',
  },
  clinics: {
    addressUnavailable: 'Adresa neni k dispozici',
    title: 'Nase kliniky',
    description: 'Prehled klinik je nacitan z DatabaseAPI. Vyhledavejte podle nazvu nebo adresy.',
    searchPlaceholder: 'Hledat kliniku nebo mesto...',
    loading: 'Nacitam kliniky z databaze...',
    loadError: 'Nepodarilo se nacist kliniky.',
    icoPrefix: 'ICO',
    noResults: 'Pro zadany filtr nebyla nalezena zadna klinika.',
  },
  reservation: {
    title: 'Volne terminy',
    description:
      'Terminy jsou sloucene napric vsemi mistnostmi kliniky. Rezervaci provadi pouze autorizovany pracovnik po telefonu.',
    loadClinicsError: 'Nepodarilo se nacist kliniky.',
    loadServicesError: 'Nepodarilo se nacist sluzby kliniky.',
    loadSlotsError: 'Nepodarilo se nacist volne casy.',
    clinic: 'Klinika',
    service: 'Sluzba',
    date: 'Datum',
    freeTimes: 'Volne casy',
    loadingAvailability: 'Nacitam dostupne terminy z DatabaseAPI...',
    noSlots: 'Pro vybranou kliniku nejsou v tento den dostupne zadne volne sloty.',
    summary: 'Souhrn',
    phoneOnlyTitle: 'Objednani pouze telefonicky',
    phoneOnlyPrefix: 'Pro vytvoreni rezervace volejte kliniku na cislo',
    phoneOnlyUnavailable: 'NENI DOSTUPNE',
    phoneOnlySuffix: '. Online rezervace z webu neni povolena.',
    unknown: '-',
  },
  products: {
    badge: 'Katalog technologii 2026',
    titleLine1: 'Technologie',
    titleAccent: 'pro zivot.',
    description:
      'Predstavujeme nasi nejnovejsi radu diagnostickych nastroju a softwarovych reseni navrzenych pro precizni medicinu a dlouhovekost.',
    browseAll: 'Prohlednout vse',
    technicalSpec: 'Technicka specifikace',
    products: {
      p1: {
        category: 'Zobrazovaci diagnostika',
        description: 'Kompaktni ultrazvukovy system s AI analyzou tkani v realnem case.',
        features: ['4K Rozliseni', 'AI Diagnostika', 'Cloud Sync'],
      },
      p2: {
        category: 'Laboratorni technika',
        description: 'Plne automatizovany system pro analyzu krevnich vzorku a biomarkeru.',
        features: ['Rychlost 100 vz/h', 'Multi-biomarker', 'Kompaktni design'],
      },
      p3: {
        category: 'Monitorovani',
        description: 'Pokrocily monitor dechovych funkci s prediktivni analyzou rizik.',
        features: ['Bezdratovy prenos', '24/7 Monitoring', 'Mobilni aplikace'],
      },
      details: 'Detaily produktu',
    },
    softwareBadge: 'Softwarova sada',
    softwareTitle: 'Curator Cloud Suite',
    softwareDescription:
      'Komplexni platforma pro spravu pacientskych dat, analyzu trendu a automatizaci klinickych procesu. Vse v bezpecnem cloudu s pristupem odkudkoliv.',
    softwareFeatures: {
      securityTitle: 'Zabezpeceni',
      securityDesc: 'End-to-end sifrovani dat.',
      speedTitle: 'Rychlost',
      speedDesc: 'Okamzity pristup k historii.',
      analyticsTitle: 'Analyza',
      analyticsDesc: 'AI predikce vyvoje zdravi.',
      integrationTitle: 'Integrace',
      integrationDesc: 'Propojeni se vsemi pristroji.',
    },
    requestDemo: 'Vyzadat demo',
    videoTour: 'Video prohlidka',
    consultTitle: 'Potrebujete poradit s vyberem?',
    consultDescription:
      'Nasi specialiste jsou pripraveni vam pomoci vybrat tu nejvhodnejsi technologii pro vase potreby nebo klinickou praxi. Nabizime individualni konzultace a skoleni.',
    downloadCatalog: 'Stahnout kompletni katalog (PDF, 12MB)',
    faq: 'Casto kladene otazky',
    contactSales: 'Kontaktujte obchodni oddeleni',
    yourName: 'Vase jmeno',
    email: 'E-mail',
    helpQuestion: 'Jak vam muzeme pomoci?',
    sendInquiry: 'Odeslat poptavku',
  },
  about: {
    badge: 'O nas',
    title: 'Centra preventivni mediciny',
    description:
      'Pomahame lidem zit zdraveji diky kombinaci moderni diagnostiky, personalizovane pece a dlouhodobe prevence. Nas tym propojuje klinickou odbornost, data a lidsky pristup.',
    missionTitle: 'Mise',
    missionDescription: 'Posouvat standard prevence a zpristupnit pokrocilou pec vice lidem.',
    visionTitle: 'Vize',
    visionDescription: 'Byt nejduveryhodnejsi siti preventivnich klinik ve stredni Evrope.',
    valuesTitle: 'Hodnoty',
    valuesDescription: 'Empatie, presnost, odpovednost a transparentnost v kazdem kroku pece.',
  },
  career: {
    badge: 'Kariera',
    title: 'Pridat se k CPM',
    description:
      'Stavime tym lidi, kteri chteji realne zlepsovat zdravotni vysledky klientu. Nabizime moderni prostredi, smysluplnou praci a prostor pro rust.',
    positions: {
      p1Title: 'Lekar/ka preventivni mediciny',
      p1Location: 'Praha',
      p1Type: 'Plny uvazek',
      p2Title: 'Specialista/ka laboratorni diagnostiky',
      p2Location: 'Brno',
      p2Type: 'Plny uvazek',
      p3Title: 'Koordinator/ka pece o klienty',
      p3Location: 'Hybrid',
      p3Type: 'Plny uvazek',
    },
  },
  gdpr: {
    badge: 'GDPR',
    title: 'Zpracovani osobnich udaju',
    description:
      'Vasim osobnim udajum venujeme maximalni peci. Zpracovavame je vyhradne v rozsahu nutnem pro poskytovani zdravotnich sluzeb a plneni pravnich povinnosti.',
    section1Title: 'Co zpracovavame',
    section1Description:
      'Identifikacni, kontaktni a zdravotni udaje nutne pro objednani a poskytovani pece.',
    section2Title: 'Pravni zaklad',
    section2Description: 'Plneni smlouvy, pravni povinnosti a opravnene zajmy v souladu s GDPR.',
    section3Title: 'Vase prava',
    section3Description:
      'Mate pravo na pristup, opravu, omezeni zpracovani i podani stiznosti u dozoroveho uradu.',
  },
  contact: {
    badge: 'Kontakt',
    title: 'Jsme vam k dispozici',
    description: 'Mate dotaz k rezervaci, sluzbam nebo partnerstvi? Ozvete se nam a tym CPM se vam co nejdrive ozve.',
    emailTitle: 'E-mail',
    phoneTitle: 'Telefon',
  },
} as const;

export default cs;
