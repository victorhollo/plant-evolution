/* Plant Evolution: content (English + Finnish) and interactions. No libraries. */

const UI = {
  en: {
    doc_title: 'Plant Evolution: from algae to crops',
    skip: 'Skip to timeline', brand: 'Plant Evolution',
    nav_timeline: 'Timeline', nav_tree: 'Tree of life', nav_innov: 'Innovations', nav_quiz: 'Quiz',
    hero_eyebrow: 'One billion years in one scroll',
    hero_h: 'How plants conquered the Earth',
    hero_lede: 'From single green cells in ancient water to forests, flowers and farms: follow seven turning points in the story of plant life.',
    hero_cta: 'Start the timeline',
    plant_hint: 'Drag to turn the plant', plant_label: '3D model of a flowering plant. Drag or use arrow keys to turn it.',
    tl_h: 'The timeline',
    tl_intro: 'Scroll to travel forward in time. All dates are approximate and given in years before the present.',
    tree_h: 'The tree of plant life',
    tree_intro: 'Each new group branched off from an older one. Time runs from top to bottom. Select a group to jump to its stage.',
    tree_note: 'This is a simplified diagram. Real plant evolution has many more branches and extinct groups.',
    inn_h: 'Key innovations',
    inn_intro: 'Eight inventions that let plants live in new places. Select a card to flip it.',
    quiz_h: 'Test yourself', quiz_intro: 'Five questions. You get feedback straight away.',
    src_h: 'Sources and further reading',
    src_intro: 'Dates come from these sources and are rounded. Scientists keep refining them as new fossils and DNA studies appear.',
    foot: 'Made for upper secondary biology. Dates are approximate.',
    foot_ai: 'Era illustrations made with AI (Google ImageFX). They are artistic impressions, not scientific reconstructions.',
    rail_label: 'Stages', u_bn: 'billion years ago', u_m: 'million years ago', u_y: 'years ago',
    ad_h: 'Key adaptations', ex_h: 'Example species', stage: 'Stage',
    go_to: 'go to stage', flip: 'Flip', flip_back: 'Flip back',
    q_of: 'Question {i} of {n}', correct: 'Correct!', wrong: 'Not quite. The answer is: ',
    next: 'Next question', finish: 'See your score', restart: 'Try again',
    res: ['Good start. The timeline above has all the answers.', 'Well done. Scroll back up to check the ones you missed.', 'Perfect! You know your plants.']
  },
  fi: {
    doc_title: 'Kasvien evoluutio: levistä viljelykasveihin',
    skip: 'Siirry aikajanalle', brand: 'Kasvien evoluutio',
    nav_timeline: 'Aikajana', nav_tree: 'Sukupuu', nav_innov: 'Keksinnöt', nav_quiz: 'Visa',
    hero_eyebrow: 'Miljardi vuotta yhdellä vierityksellä',
    hero_h: 'Miten kasvit valloittivat maapallon',
    hero_lede: 'Muinaisen veden viherlevistä metsiin, kukkiin ja peltoihin: seuraa kasvien historian seitsemää käännekohtaa.',
    hero_cta: 'Aloita aikajana',
    plant_hint: 'Käännä kasvia vetämällä', plant_label: 'Kukkakasvin 3D-malli. Käännä sitä vetämällä tai nuolinäppäimillä.',
    tl_h: 'Aikajana',
    tl_intro: 'Vieritä alaspäin kulkeaksesi ajassa eteenpäin. Kaikki ajankohdat ovat likimääräisiä ja ilmoitettu vuosina ennen nykypäivää.',
    tree_h: 'Kasvien sukupuu',
    tree_intro: 'Jokainen uusi ryhmä haarautui vanhemmasta. Aika kulkee ylhäältä alas. Valitse ryhmä siirtyäksesi sen vaiheeseen.',
    tree_note: 'Kaavio on yksinkertaistettu. Todellisessa kasvien evoluutiossa on paljon enemmän haaroja ja sukupuuttoon kuolleita ryhmiä.',
    inn_h: 'Tärkeät keksinnöt',
    inn_intro: 'Kahdeksan keksintöä, joiden avulla kasvit pystyivät elämään uusissa paikoissa. Käännä kortti valitsemalla se.',
    quiz_h: 'Testaa itsesi', quiz_intro: 'Viisi kysymystä. Saat palautteen heti.',
    src_h: 'Lähteet ja lisälukemista',
    src_intro: 'Ajankohdat perustuvat näihin lähteisiin, ja ne on pyöristetty. Tutkijat tarkentavat niitä jatkuvasti uusien fossiilien ja DNA-tutkimusten myötä.',
    foot: 'Tehty lukion biologian opetukseen. Ajankohdat ovat likimääräisiä.',
    foot_ai: 'Aikakausien kuvitus on tehty tekoälyllä (Google ImageFX). Kuvat ovat taiteellisia tulkintoja, eivät tieteellisiä rekonstruktioita.',
    rail_label: 'Vaiheet', u_bn: 'miljardia vuotta sitten', u_m: 'miljoonaa vuotta sitten', u_y: 'vuotta sitten',
    ad_h: 'Keskeiset sopeumat', ex_h: 'Esimerkkilajeja', stage: 'Vaihe',
    go_to: 'siirry vaiheeseen', flip: 'Käännä', flip_back: 'Käännä takaisin',
    q_of: 'Kysymys {i} / {n}', correct: 'Oikein!', wrong: 'Ei aivan. Oikea vastaus: ',
    next: 'Seuraava kysymys', finish: 'Näytä tulos', restart: 'Yritä uudelleen',
    res: ['Hyvä alku. Aikajanalta löytyvät kaikki vastaukset.', 'Hyvin tehty. Vieritä ylös tarkistamaan väärin menneet.', 'Täydellistä! Tunnet kasvisi.']
  }
};

// ex items: [latin name, common name]
const STAGES = [
  {
    en: {
      name: 'Origins: green algae and the first photosynthesizers', rail: 'Origins',
      when: '~1 billion years ago', short: '~1 billion',
      p: [
        'Photosynthesis began in bacteria: cyanobacteria were making sugar from sunlight and releasing oxygen billions of years before plants existed. More than a billion years ago, a larger cell swallowed a cyanobacterium but did not digest it. It became the chloroplast, and the descendants of that cell include all green algae and plants.',
        'Green algae evolved in the sea and in fresh water. One freshwater group, the charophytes, is the closest living relative of land plants. Early plant history leaves few fossils, so these dates vary between studies.'
      ],
      ad: ['Chloroplasts', 'Chlorophyll a and b', 'Cellulose cell walls', 'Starch for energy storage'],
      ex: [['Chara', 'stonewort'], ['Spirogyra', 'filamentous green alga'], ['Volvox', 'colonial green alga'], ['Ulva', 'sea lettuce']],
      note: 'Estimates vary: the plant lineage may be about 1.5 billion years old, while clear green algae fossils are around 750 million years old.'
    },
    fi: {
      name: 'Alkuperä: viherlevät ja ensimmäiset yhteyttäjät', rail: 'Alkuperä',
      when: 'noin miljardi vuotta sitten', short: '~1 mrd',
      p: [
        'Yhteyttäminen alkoi bakteereista: sinibakteerit valmistivat sokeria auringonvalon avulla ja vapauttivat happea miljardeja vuosia ennen kasveja. Yli miljardi vuotta sitten suurempi solu nieli sinibakteerin mutta ei hajottanut sitä. Siitä tuli viherhiukkanen, ja tämän solun jälkeläisiä ovat kaikki viherlevät ja kasvit.',
        'Viherlevät kehittyivät meressä ja makeassa vedessä. Yksi makean veden ryhmä, näkinpartaislevät, on maakasvien lähin elävä sukulainen. Kasvien varhaishistoriasta on vähän fossiileja, joten ajankohdat vaihtelevat tutkimuksesta toiseen.'
      ],
      ad: ['Viherhiukkaset', 'a- ja b-lehtivihreä', 'Selluloosasta tehty soluseinä', 'Tärkkelys energiavarastona'],
      ex: [['Chara', 'näkinparta'], ['Spirogyra', 'rihmamainen viherlevä'], ['Volvox', 'yhdyskuntaviherlevä'], ['Ulva', 'merisalaatti']],
      note: 'Arviot vaihtelevat: kasvien kantalinja voi olla noin 1,5 miljardia vuotta vanha, kun taas selvät viherlevien fossiilit ovat noin 750 miljoonaa vuotta vanhoja.'
    }
  },
  {
    en: {
      name: 'Colonization of land: mosses and liverworts', rail: 'Onto land',
      when: '~470 million years ago', short: '~470 million',
      p: [
        'The first land plants left behind tiny spores in Ordovician rocks. They were small and low and lived in damp places, much like today’s mosses, liverworts and hornworts (the bryophytes).',
        'Land offered plenty of light and carbon dioxide, but also the danger of drying out. Early land plants evolved a waxy cuticle and relied on fungi to gather minerals. Their sperm still had to swim through water to reach the egg, so they stayed close to the ground.'
      ],
      ad: ['Cuticle', 'Tough-walled spores (sporopollenin)', 'Partnerships with fungi', 'Gametophyte-dominant life cycle'],
      ex: [['Marchantia polymorpha', 'common liverwort'], ['Sphagnum', 'peat moss'], ['Polytrichum', 'haircap moss'], ['Anthoceros', 'hornwort']]
    },
    fi: {
      name: 'Maalle nousu: sammalet ja maksasammalet', rail: 'Maalle',
      when: 'noin 470 miljoonaa vuotta sitten', short: '~470 milj.',
      p: [
        'Ensimmäiset maakasvit jättivät jälkeensä pieniä itiöitä ordovikikauden kivilajeihin. Ne olivat pieniä ja matalia ja elivät kosteissa paikoissa, kuten nykyiset sammalet, maksasammalet ja sarvisammalet.',
        'Maalla oli runsaasti valoa ja hiilidioksidia, mutta myös kuivumisen vaara. Varhaisille maakasveille kehittyi vahamainen kutikula, ja kivennäisaineiden saannissa ne turvautuivat sieniin. Siittiöiden piti yhä uida veden läpi munasolun luo, joten kasvit pysyivät lähellä maanpintaa.'
      ],
      ad: ['Kutikula', 'Kestäväseinäiset itiöt (sporopolleniini)', 'Yhteistyö sienten kanssa', 'Gametofyyttivaltainen elinkierto'],
      ex: [['Marchantia polymorpha', 'maksasammal'], ['Sphagnum', 'rahkasammalet'], ['Polytrichum', 'karhunsammalet'], ['Anthoceros', 'sarvisammal']]
    }
  },
  {
    en: {
      name: 'Vascular plants: xylem, phloem, ferns and lycophytes', rail: 'Vascular plants',
      when: '~420 million years ago', short: '~420 million',
      p: [
        'In the Silurian and Devonian periods, some plants gained internal plumbing. Xylem carries water up from the roots, and phloem carries sugars to where they are needed. Cooksonia, only a few centimetres tall, is one of the earliest known vascular plants.',
        'Lignin stiffened the walls of xylem cells, so plants could grow tall. Roots anchored them and reached deeper water. By the Carboniferous, forests of giant lycophytes, horsetails and tree ferns covered wet lowlands, and their buried remains became much of today’s coal.'
      ],
      ad: ['Xylem and phloem', 'Lignin', 'Stomata', 'True roots', 'Leaves'],
      ex: [['Cooksonia', 'early fossil plant'], ['Lycopodium clavatum', 'stag’s-horn clubmoss'], ['Equisetum', 'horsetails'], ['Pteridium aquilinum', 'bracken'], ['Lepidodendron', 'extinct giant lycophyte']]
    },
    fi: {
      name: 'Putkilokasvit: puu- ja nilaosa, saniaiset ja liekokasvit', rail: 'Putkilokasvit',
      when: 'noin 420 miljoonaa vuotta sitten', short: '~420 milj.',
      p: [
        'Siluuri- ja devonikaudella osalle kasveista kehittyi sisäinen putkisto. Puuosa (ksyleemi) kuljettaa vettä juurista ylös, ja nilaosa (floeemi) vie sokereita sinne, missä niitä tarvitaan. Vain muutaman senttimetrin korkuinen Cooksonia on yksi varhaisimmista tunnetuista putkilokasveista.',
        'Ligniini jäykisti puuosan soluseiniä, joten kasvit pystyivät kasvamaan korkeiksi. Juuret ankkuroivat ne ja ulottuivat syvemmälle veteen. Kivihiilikaudella jättimäisten liekokasvien, korteiden ja puusaniaisten metsät peittivät kosteita alankoja, ja niiden hautautuneista jäänteistä syntyi suuri osa nykyisestä kivihiilestä.'
      ],
      ad: ['Puu- ja nilaosa', 'Ligniini', 'Ilmaraot', 'Varsinaiset juuret', 'Lehdet'],
      ex: [['Cooksonia', 'varhainen fossiilikasvi'], ['Lycopodium clavatum', 'katinlieko'], ['Equisetum', 'kortteet'], ['Pteridium aquilinum', 'sananjalka'], ['Lepidodendron', 'sukupuuttoon kuollut jättiläisliekokasvi']]
    }
  },
  {
    en: {
      name: 'Seeds: gymnosperms, conifers and cycads', rail: 'Seeds',
      when: '~370 million years ago', short: '~370 million',
      p: [
        'A seed packs a tiny embryo and a food store inside a protective coat. It can wait for good conditions before it sprouts. Seed plants also make pollen, which the wind carries to the egg, so fertilisation no longer needs water.',
        'The first seed plants appeared in the late Devonian. Conifers followed around 300 million years ago, and gymnosperms (“naked seeds”, not enclosed in a fruit) such as conifers, cycads and ginkgos dominated the age of the dinosaurs. Conifers still cover much of the northern world, including Finland.'
      ],
      ad: ['Seeds', 'Pollen', 'Wood (growth in thickness)', 'Needle leaves with a thick cuticle'],
      ex: [['Pinus sylvestris', 'Scots pine'], ['Picea abies', 'Norway spruce'], ['Ginkgo biloba', 'ginkgo'], ['Cycas revoluta', 'sago palm (a cycad)']],
      note: 'Often rounded to 360 million years. The oldest seed fossils are from the late Devonian, roughly 370–360 million years ago.'
    },
    fi: {
      name: 'Siemenet: paljassiemeniset, havupuut ja kävypalmut', rail: 'Siemenet',
      when: 'noin 370 miljoonaa vuotta sitten', short: '~370 milj.',
      p: [
        'Siemenessä on pieni alkio ja ravintovarasto suojaavan kuoren sisällä. Se voi odottaa sopivia oloja ennen itämistä. Siemenkasvit tuottavat myös siitepölyä, jonka tuuli kuljettaa munasolun luo, joten hedelmöitys ei enää vaadi vettä.',
        'Ensimmäiset siemenkasvit ilmestyivät devonikauden lopulla. Havupuut seurasivat noin 300 miljoonaa vuotta sitten, ja paljassiemeniset (siemen ei ole hedelmän sisällä), kuten havupuut, kävypalmut ja neidonhiuspuut, hallitsivat dinosaurusten aikaa. Havupuut peittävät yhä suuren osan pohjoista maailmaa, myös Suomea.'
      ],
      ad: ['Siemenet', 'Siitepöly', 'Puuaines (paksuuskasvu)', 'Neulaset ja paksu kutikula'],
      ex: [['Pinus sylvestris', 'metsämänty'], ['Picea abies', 'metsäkuusi'], ['Ginkgo biloba', 'neidonhiuspuu'], ['Cycas revoluta', 'japaninkävypalmu']],
      note: 'Ajankohta pyöristetään usein 360 miljoonaan vuoteen. Vanhimmat siemenfossiilit ovat devonikauden lopulta, noin 370–360 miljoonan vuoden takaa.'
    }
  },
  {
    en: {
      name: 'Flowers: angiosperms and their pollinators', rail: 'Flowers',
      when: '~130 million years ago', short: '~130 million',
      p: [
        'Flowering plants (angiosperms) appear in the fossil record in the Early Cretaceous, around 130 million years ago. Their seeds develop inside an ovary, which ripens into a fruit.',
        'Petals, scent and nectar attract insects that carry pollen straight from flower to flower, wasting far less pollen than the wind does. Flowers and pollinators shaped each other over millions of years (coevolution), and fruits recruited animals to spread seeds. Today roughly nine in ten plant species are flowering plants.'
      ],
      ad: ['Flowers', 'Ovary and fruit', 'Double fertilisation', 'Coevolution with pollinators'],
      ex: [['Amborella trichopoda', 'oldest surviving flowering-plant lineage'], ['Nymphaea', 'water lilies'], ['Magnolia', 'magnolias'], ['Archaefructus', 'early fossil flowering plant']],
      note: 'The oldest flower fossils are about 140–130 million years old. DNA studies suggest the group may be older still.'
    },
    fi: {
      name: 'Kukat: koppisiemeniset ja pölyttäjät', rail: 'Kukat',
      when: 'noin 130 miljoonaa vuotta sitten', short: '~130 milj.',
      p: [
        'Kukkakasvit eli koppisiemeniset ilmestyvät fossiiliaineistoon varhaisella liitukaudella, noin 130 miljoonaa vuotta sitten. Niiden siemenet kehittyvät sikiäimen sisällä, ja sikiäin kypsyy hedelmäksi.',
        'Terälehdet, tuoksu ja mesi houkuttelevat hyönteisiä, jotka kuljettavat siitepölyä suoraan kukasta toiseen. Siitepölyä menee hukkaan paljon vähemmän kuin tuulipölytyksessä. Kukat ja pölyttäjät muokkasivat toisiaan miljoonien vuosien ajan (koevoluutio), ja hedelmät saivat eläimet levittämään siemeniä. Nykyään noin yhdeksän kasvilajia kymmenestä on koppisiemenisiä.'
      ],
      ad: ['Kukka', 'Sikiäin ja hedelmä', 'Kaksoishedelmöitys', 'Koevoluutio pölyttäjien kanssa'],
      ex: [['Amborella trichopoda', 'vanhin säilynyt koppisiemenisten kehityslinja'], ['Nymphaea', 'lumpeet'], ['Magnolia', 'magnoliat'], ['Archaefructus', 'varhainen fossiilinen kukkakasvi']],
      note: 'Vanhimmat kukkafossiilit ovat noin 140–130 miljoonaa vuotta vanhoja. DNA-tutkimusten mukaan ryhmä voi olla vielä vanhempi.'
    }
  },
  {
    en: {
      name: 'The rise of grasses and modern ecosystems', rail: 'Grasses',
      when: '~50 to 20 million years ago', short: '~50–20 million',
      p: [
        'Grasses first evolved in the Late Cretaceous, alongside the last dinosaurs, but for a long time they were a minor part of the vegetation. As Earth’s climate cooled and dried from about 50 million years ago, they spread, and by roughly 30–20 million years ago open grasslands covered large areas of several continents.',
        'Grasses grow from the base of the leaf, so grazing or fire rarely kills them. Many later evolved C4 photosynthesis, which works well in heat and drought. Grazing mammals such as horses evolved high-crowned teeth and long legs for open plains: another example of coevolution.'
      ],
      ad: ['Growth from the leaf base', 'Silica in leaves', 'C4 photosynthesis', 'Wind pollination'],
      ex: [['Festuca', 'fescues'], ['Phragmites australis', 'common reed'], ['Bambusa', 'bamboo'], ['Andropogon gerardii', 'big bluestem, a prairie grass']],
      note: 'The oldest grass fossils are from the Late Cretaceous, over 66 million years ago. The ~50 million year mark is when the cooling that helped grasses spread began.'
    },
    fi: {
      name: 'Heinien nousu ja nykyiset ekosysteemit', rail: 'Heinät',
      when: 'noin 50–20 miljoonaa vuotta sitten', short: '~50–20 milj.',
      p: [
        'Heinät kehittyivät jo liitukauden lopulla viimeisten dinosaurusten aikaan, mutta pitkään ne olivat kasvillisuudessa vähäisiä. Kun ilmasto alkoi viiletä ja kuivua noin 50 miljoonaa vuotta sitten, heinät levittäytyivät, ja noin 30–20 miljoonaa vuotta sitten avoimet ruohoalueet peittivät laajoja alueita useilla mantereilla.',
        'Heinät kasvavat lehden tyvestä, joten laidunnus tai tuli tappaa ne harvoin. Monille kehittyi myöhemmin C4-yhteyttäminen, joka toimii hyvin kuumuudessa ja kuivuudessa. Laiduntaville nisäkkäille, kuten hevosille, kehittyi korkeat hampaat ja pitkät jalat avoimille tasangoille. Tämäkin on koevoluutiota.'
      ],
      ad: ['Kasvu lehden tyvestä', 'Piidioksidia lehdissä', 'C4-yhteyttäminen', 'Tuulipölytys'],
      ex: [['Festuca', 'nadat'], ['Phragmites australis', 'järviruoko'], ['Bambusa', 'bambu'], ['Andropogon gerardii', 'preeriaheinä']],
      note: 'Vanhimmat heinäfossiilit ovat liitukauden lopulta, yli 66 miljoonan vuoden takaa. Noin 50 miljoonaa vuotta sitten alkoi viileneminen, joka auttoi heiniä leviämään.'
    }
  },
  {
    en: {
      name: 'Humans and agriculture: domesticating crops', rail: 'Farming',
      when: '~10,000 years ago', short: '~10,000',
      p: [
        'As the last ice age ended, people in several parts of the world began to grow plants instead of only gathering them. In the Fertile Crescent of the Middle East, wheat, barley, peas and lentils were among the first crops, around 10,000 years ago. Rice, maize, potatoes and others were domesticated independently elsewhere.',
        'Farmers sowed seeds from the best plants, and over generations crops changed: bigger grains, seed heads that do not shatter, less bitterness. This is artificial selection, evolution steered by people. Farming made settled villages and cities possible and has reshaped landscapes across the planet.'
      ],
      ad: ['Artificial selection', 'Non-shattering seed heads', 'Larger seeds and fruits', 'Polyploidy (e.g. bread wheat)'],
      ex: [['Triticum aestivum', 'bread wheat'], ['Hordeum vulgare', 'barley'], ['Oryza sativa', 'rice'], ['Zea mays', 'maize, bred from teosinte'], ['Solanum tuberosum', 'potato']]
    },
    fi: {
      name: 'Ihminen ja maanviljely: viljelykasvien synty', rail: 'Maanviljely',
      when: 'noin 10 000 vuotta sitten', short: '~10 000',
      p: [
        'Viimeisen jääkauden päättyessä ihmiset alkoivat useilla alueilla kasvattaa kasveja sen sijaan, että olisivat vain keränneet niitä. Lähi-idän Hedelmällisen puolikuun alueella vehnä, ohra, herne ja linssi olivat ensimmäisiä viljelykasveja noin 10 000 vuotta sitten. Riisi, maissi, peruna ja monet muut otettiin viljelyyn toisistaan riippumatta muualla.',
        'Viljelijät kylvivät parhaiden kasvien siemeniä, ja sukupolvien mittaan kasvit muuttuivat: jyvät suurenivat, tähkät lakkasivat varisemasta ja kitkeryys väheni. Tämä on keinotekoista valintaa, ihmisen ohjaamaa evoluutiota. Maanviljely mahdollisti pysyvät kylät ja kaupungit, ja se on muuttanut maisemia kaikkialla maapallolla.'
      ],
      ad: ['Keinotekoinen valinta', 'Varisemattomat tähkät', 'Suuremmat siemenet ja hedelmät', 'Polyploidia (esim. leipävehnä)'],
      ex: [['Triticum aestivum', 'leipävehnä'], ['Hordeum vulgare', 'ohra'], ['Oryza sativa', 'riisi'], ['Zea mays', 'maissi, jalostettu teosintesta'], ['Solanum tuberosum', 'peruna']]
    }
  }
];

// Photos from Wikimedia Commons: [src, width, height, author, licence, file page, alt EN, alt FI]
const NODES = [
  { stage: 1, side: 'spine', y: 36, en: 'Green algae', fi: 'Viherlevät' },
  { stage: 2, side: 'left', y: 116, en: 'Mosses &|liverworts', fi: 'Sammalet' },
  { stage: 3, side: 'spine', y: 196, en: 'Vascular plants', fi: 'Putkilokasvit' },
  { stage: 3, side: 'left', y: 276, en: 'Ferns &|lycophytes', fi: 'Saniaiset ja|liekokasvit' },
  { stage: 4, side: 'spine', y: 356, en: 'Seed plants', fi: 'Siemenkasvit' },
  { stage: 4, side: 'left', y: 436, en: 'Gymnosperms', fi: 'Paljas-|siemeniset' },
  { stage: 5, side: 'spine', y: 516, en: 'Flowering plants', fi: 'Koppisiemeniset' },
  { stage: 6, side: 'spine', y: 596, en: 'Grasses', fi: 'Heinät' },
  { stage: 7, side: 'spine', y: 676, en: 'Crops', fi: 'Viljelykasvit' }
];

const ICONS = {
  drop: '<path d="M12 3C9 8 6 11 6 15a6 6 0 0 0 12 0c0-4-3-7-6-12z"/>',
  pore: '<ellipse cx="12" cy="12" rx="9" ry="6"/><path d="M7 12c2-2 8-2 10 0M7 12c2 2 8 2 10 0"/>',
  roots: '<path d="M12 3v8M12 11l-5 9M12 11l5 9M12 13v8M9 16l-3 1M15 16l3 1"/>',
  pipes: '<path d="M8 21V4M5 7l3-3 3 3M16 3v17M13 17l3 3 3-3"/>',
  wood: '<path d="M7 21V4M12 21V3M17 21V5M4 21h16"/>',
  seed: '<path d="M12 3c6 4 6 12 0 18-6-6-6-14 0-18zM12 8v9"/>',
  pollen: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="8" r="2"/><circle cx="14" cy="16" r="3.5"/><circle cx="6" cy="17" r="1.5"/>',
  flower: '<circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="6" r="3"/><circle cx="18" cy="12" r="3"/><circle cx="12" cy="18" r="3"/><circle cx="6" cy="12" r="3"/>'
};

const CARDS = [
  { icon: 'drop',
    en: ['Cuticle', 'A waterproof wax coat', 'A thin waxy layer on leaves and stems that slows water loss. Without it, early land plants would have dried out quickly. The downside: it also blocks gas exchange.'],
    fi: ['Kutikula', 'Vedenpitävä vahakerros', 'Lehtiä ja varsia peittävä ohut vahakerros hidastaa veden haihtumista. Ilman sitä varhaiset maakasvit olisivat kuivuneet nopeasti. Haittapuoli: se estää myös kaasujen vaihtoa.'] },
  { icon: 'pore',
    en: ['Stomata', 'Adjustable pores', 'Tiny pores, each opened and closed by two guard cells. Open, they let carbon dioxide in; closed, they save water. They solve the problem the cuticle created.'],
    fi: ['Ilmaraot', 'Säädettävät huokoset', 'Pieniä aukkoja, joita kaksi sulkusolua avaa ja sulkee. Auki ne päästävät hiilidioksidia sisään, kiinni ne säästävät vettä. Ne ratkaisevat kutikulan aiheuttaman ongelman.'] },
  { icon: 'roots',
    en: ['Roots', 'Anchor and pump', 'Roots hold the plant in place and take up water and minerals. Most plants also partner with fungi (mycorrhiza): the fungus supplies minerals and receives sugar.'],
    fi: ['Juuret', 'Ankkuri ja pumppu', 'Juuret kiinnittävät kasvin maahan ja ottavat vettä ja kivennäisiä. Useimmat kasvit elävät myös yhteistyössä sienten kanssa (sienijuuri): sieni antaa kivennäisiä ja saa sokeria.'] },
  { icon: 'pipes',
    en: ['Xylem and phloem', 'Internal plumbing', 'Xylem carries water and minerals up from the roots; phloem carries sugars from the leaves to the rest of the plant. This let vascular plants grow far larger than mosses.'],
    fi: ['Puu- ja nilaosa', 'Kasvin putkisto', 'Puuosa kuljettaa vettä ja kivennäisiä juurista ylös, nilaosa sokereita lehdistä muualle kasviin. Siksi putkilokasvit voivat kasvaa paljon sammalia suuremmiksi.'] },
  { icon: 'wood',
    en: ['Lignin', 'Strength to stand tall', 'A tough polymer that stiffens cell walls. Lignin stops xylem tubes from collapsing and lets trees reach tens of metres. Wood is mostly cellulose and lignin.'],
    fi: ['Ligniini', 'Lujuutta kasvaa korkealle', 'Sitkeä yhdiste, joka jäykistää soluseiniä. Ligniini estää puuosan putkia painumasta kasaan ja mahdollistaa kymmenien metrien korkuiset puut. Puu on pääosin selluloosaa ja ligniiniä.'] },
  { icon: 'seed',
    en: ['Seeds', 'A packed lunch for the embryo', 'A seed holds an embryo, a food store and a protective coat. It can stay dormant for years and germinate when conditions are right.'],
    fi: ['Siemen', 'Eväspaketti alkiolle', 'Siemenessä on alkio, ravintovarasto ja suojaava kuori. Se voi levätä vuosia ja itää, kun olot ovat sopivat.'] },
  { icon: 'pollen',
    en: ['Pollen', 'Fertilisation without water', 'Pollen grains carry the sperm cells by wind or by animals, so fertilisation no longer needs a film of water. Plants could now reproduce in dry places.'],
    fi: ['Siitepöly', 'Hedelmöitys ilman vettä', 'Siitepölyhiukkaset kuljettavat siittiösolut tuulen tai eläinten avulla, joten hedelmöitys ei enää vaadi vettä. Kasvit pystyivät lisääntymään myös kuivilla paikoilla.'] },
  { icon: 'flower',
    en: ['Flowers and fruit', 'Advertising and delivery', 'Flowers attract pollinators with colour, scent and nectar. After fertilisation the ovary becomes a fruit; animals eat it and spread the seeds far away.'],
    fi: ['Kukka ja hedelmä', 'Mainos ja kuljetus', 'Kukka houkuttelee pölyttäjiä värillä, tuoksulla ja medellä. Hedelmöityksen jälkeen sikiäin kehittyy hedelmäksi, jonka eläimet syövät ja levittävät siemenet kauas.'] }
];

// a = index of the correct option
const QUIZ = [
  { a: 1,
    en: ['Which adaptation first helped plants avoid drying out on land?', ['Flowers', 'A waxy cuticle', 'Seeds', 'Grass leaves'], 'The cuticle, a waxy coat, appeared in the earliest land plants about 470 million years ago.'],
    fi: ['Mikä sopeuma auttoi kasveja ensimmäisenä välttämään kuivumisen maalla?', ['Kukat', 'Vahamainen kutikula', 'Siemenet', 'Heinänlehdet'], 'Kutikula, vahamainen pintakerros, kehittyi jo varhaisimmille maakasveille noin 470 miljoonaa vuotta sitten.'] },
  { a: 1,
    en: ['What does xylem transport?', ['Sugars from the leaves', 'Water and minerals from the roots', 'Pollen', 'Oxygen to the roots'], 'Xylem moves water and minerals upward. Phloem is the tissue that moves sugars.'],
    fi: ['Mitä puuosa (ksyleemi) kuljettaa?', ['Sokereita lehdistä', 'Vettä ja kivennäisiä juurista', 'Siitepölyä', 'Happea juuriin'], 'Puuosa kuljettaa vettä ja kivennäisiä ylöspäin. Sokereita kuljettaa nilaosa.'] },
  { a: 2,
    en: ['Which group produced the first seeds?', ['Mosses', 'Ferns', 'Early seed plants, ancestors of gymnosperms', 'Grasses'], 'Seeds appeared around 370 million years ago, in the late Devonian.'],
    fi: ['Mikä ryhmä tuotti ensimmäiset siemenet?', ['Sammalet', 'Saniaiset', 'Varhaiset siemenkasvit, paljassiemenisten esi-isät', 'Heinät'], 'Siemenet kehittyivät noin 370 miljoonaa vuotta sitten devonikauden lopulla.'] },
  { a: 0,
    en: ['Why did many flowers evolve bright colours and nectar?', ['To attract pollinators', 'To scare away herbivores', 'To absorb more light', 'To store water'], 'Flowers and their pollinators shaped each other over time. This is called coevolution.'],
    fi: ['Miksi monille kukille kehittyi kirkkaat värit ja mettä?', ['Houkutellakseen pölyttäjiä', 'Pelotellakseen kasvinsyöjiä', 'Imeäkseen enemmän valoa', 'Varastoidakseen vettä'], 'Kukat ja pölyttäjät muokkasivat toisiaan ajan mittaan. Tätä kutsutaan koevoluutioksi.'] },
  { a: 2,
    en: ['Roughly when did people begin domesticating crops such as wheat and barley?', ['1 million years ago', '100,000 years ago', '10,000 years ago', '1,000 years ago'], 'Farming began around 10,000 years ago in the Fertile Crescent, and independently in other regions.'],
    fi: ['Milloin suunnilleen ihmiset alkoivat ottaa viljelyyn kasveja, kuten vehnää ja ohraa?', ['Miljoona vuotta sitten', '100 000 vuotta sitten', '10 000 vuotta sitten', '1 000 vuotta sitten'], 'Maanviljely alkoi noin 10 000 vuotta sitten Hedelmällisen puolikuun alueella ja toisistaan riippumatta myös muualla.'] }
];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const SVGNS = 'http://www.w3.org/2000/svg';
const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
let lang = 'en';
const t = key => UI[lang][key];

function store(key, val) {
  try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
}

// Seeded random so decorations look the same on every visit
let seed = 3;
const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// Headings: split into words that rise in one after another. Screen readers get the plain text.
function splitText(el) {
  const text = el.textContent.trim();
  el.innerHTML = `<span class="sr-only">${text}</span>` + text.split(/\s+/)
    .map((w, i) => `<span class="w" aria-hidden="true" style="--wi:${i}"><span style="--i:${i}">${w}</span></span>`).join(' ');
}


/* ---------- animated scenes, one per era (drawn in code, coloured by the theme) ---------- */
const R = (a, b) => a + rand() * (b - a);
const f = v => v.toFixed(1);
// wrap: position with an SVG attribute, animate with CSS on an inner group (the two must not share an element)
const at = (x, y, inner, cls = '', style = '') => `<g transform="translate(${f(x)} ${f(y)})"><g class="o0 ${cls}" style="${style}">${inner}</g></g>`;
const anim = (d, dl) => `--d:${f(d)}s;--dl:-${f(dl)}s`;

function sceneSvg(n) {
  seed = 100 + n;
  let s = '';
  if (n === 1) { // primordial water: spirogyra threads and volvox colonies
    for (let k = 0; k < 4; k++) {
      const y = 70 + k * 85; let d = `M -40 ${y}`;
      for (let x = -40; x < 660; x += 50) d += ` q 25 ${k % 2 ? 22 : -22} 50 0`;
      s += `<g class="a-float" style="${anim(R(5, 8), R(0, 6))}"><path class="s-acc" stroke-width="12" d="${d}"/><path class="s-bg" stroke-width="3" stroke-dasharray="4 9" d="${d}"/></g>`;
    }
    for (let k = 0; k < 9; k++) {
      const r = R(16, 46);
      s += at(R(40, 560), R(40, 360), `<g class="a-spin o0" style="--d:${f(R(14, 30))}s"><circle r="${f(r)}" class="f-acc2"/><circle r="${f(r * .78)}" class="s-bg" stroke-width="2" stroke-dasharray="2 5"/><circle cx="${f(r * .3)}" cy="${f(-r * .2)}" r="${f(r * .22)}" class="f-bg"/><circle cx="${f(-r * .3)}" cy="${f(r * .25)}" r="${f(r * .16)}" class="f-bg"/></g>`, 'a-float', anim(R(4, 9), R(0, 8)));
    }
    for (let k = 0; k < 14; k++) s += `<circle class="f-bg a-rise" cx="${f(R(10, 590))}" cy="420" r="${f(R(3, 8))}" style="${anim(R(6, 12), R(0, 12))}"/>`;
  }
  if (n === 2) { // first land: mossy rocks at the shore
    s += `<circle cx="480" cy="90" r="46" class="f-acc2 a-pulse" style="--d:5s"/>`;
    s += `<path class="f-bg" d="M -10 400 L -10 250 Q 60 170 160 210 Q 230 150 330 220 Q 400 200 440 270 L 460 400 Z"/>`;
    for (let k = 0; k < 9; k++) {
      let cush = '';
      for (let j = 0; j < 6; j++) cush += `<circle cx="${f(R(-22, 22))}" cy="${f(R(-12, 4))}" r="${f(R(9, 16))}" class="${j % 2 ? 'f-acc' : 'f-acc2'}"/>`;
      s += at(R(20, 420), R(215, 330), `<g class="a-pulse" style="${anim(R(3, 6), R(0, 5))}">${cush}</g>`, 'a-grow', `--g:${f(k * .12)}s`);
    }
    for (let k = 0; k < 5; k++) {
      const h = R(30, 60);
      s += at(R(60, 400), R(225, 270), `<path class="s-acc2" stroke-width="5" d="M0 0 V ${f(-h)}"/><path class="f-acc" d="M -22 ${f(-h)} Q 0 ${f(-h - 30)} 22 ${f(-h)} Z"/>`, 'a-sway', anim(R(2.5, 4.5), R(0, 4)));
    }
    s += `<g class="a-wave"><path class="f-acc" d="M -120 330 ${'q 30 -18 60 0 t 60 0 '.repeat(14)} V 420 H -120 Z"/></g>`;
    s += `<g class="a-wave" style="--d:6s"><path class="f-acc2" opacity=".6" d="M -120 360 ${'q 30 -14 60 0 t 60 0 '.repeat(14)} V 420 H -120 Z"/></g>`;
  }
  if (n === 3) { // coal swamp: giant lycophytes, tree ferns, a huge dragonfly
    for (let k = 0; k < 4; k++) s += `<ellipse class="f-acc2 a-drift" opacity=".35" cx="${f(R(0, 600))}" cy="${f(R(60, 300))}" rx="${f(R(80, 160))}" ry="${f(R(18, 34))}" style="${anim(R(10, 18), R(0, 10))}"/>`;
    [70, 240, 470].forEach((x, k) => {
      let tree = `<rect x="-13" y="-330" width="26" height="340" rx="10" class="f-bg"/>`;
      for (let y = -310; y < 0; y += 22) tree += `<circle cx="${k % 2 ? 0 : -5}" cy="${y}" r="4" class="f-acc"/><circle cx="${k % 2 ? 7 : 5}" cy="${y + 11}" r="4" class="f-acc"/>`;
      for (let a = -70; a <= 70; a += 20) tree += `<path class="s-bg" stroke-width="7" d="M0 -330 q ${a * .6} -40 ${a * 1.3} -10"/>`;
      s += at(x, 400, tree, 'a-sway', `--d:${f(R(6, 9))}s;--dl:-${f(R(0, 5))}s;--amp:1.5deg`);
    });
    for (let k = 0; k < 4; k++) {
      let frond = `<path class="s-acc" stroke-width="5" d="M0 0 Q 30 -80 90 -120"/>`;
      for (let t = .15; t < 1; t += .12) {
        const x = 90 * t * t + 60 * t * (1 - t), y = -120 * t * t - 160 * t * (1 - t);
        frond += `<ellipse cx="${f(x - 10)}" cy="${f(y - 12)}" rx="16" ry="5" transform="rotate(-50 ${f(x)} ${f(y)})" class="f-acc"/><ellipse cx="${f(x + 12)}" cy="${f(y + 6)}" rx="16" ry="5" transform="rotate(20 ${f(x)} ${f(y)})" class="f-acc"/>`;
      }
      s += at(R(120, 520), 400, `<g transform="scale(${k % 2 ? -1 : 1} 1)">${frond}</g>`, 'a-sway', anim(R(3, 5), R(0, 4)));
    }
    s += `<g class="a-fly" style="offset-path: path('M -60 120 C 150 40 250 220 380 110 S 600 60 680 160');--d:9s"><g transform="rotate(90)"><rect x="-3" y="-28" width="6" height="56" rx="3" class="f-acc2"/><g class="a-flap o0"><ellipse cx="-26" cy="-8" rx="26" ry="7" class="f-bg" opacity=".8"/><ellipse cx="26" cy="-8" rx="26" ry="7" class="f-bg" opacity=".8"/><ellipse cx="-22" cy="6" rx="22" ry="6" class="f-bg" opacity=".8"/><ellipse cx="22" cy="6" rx="22" ry="6" class="f-bg" opacity=".8"/></g></g></g>`;
  }
  if (n === 4) { // seeds: conifer forest, falling cones and spinning seeds
    s += `<circle cx="440" cy="130" r="80" class="f-acc a-pulse" style="--d:6s"/>`;
    [[90, 1.1], [230, .8], [360, 1.25], [520, .9]].forEach(([x, sc], k) => {
      const tree = `<rect x="-8" y="-40" width="16" height="50" class="f-bg"/><path class="${k % 2 ? 'f-acc2' : 'f-bg'}" d="M -70 -40 L 0 -150 L 70 -40 Z M -58 -110 L 0 -210 L 58 -110 Z M -44 -175 L 0 -260 L 44 -175 Z"/>`;
      s += at(x, 400, `<g transform="scale(${sc})">${tree}</g>`, 'a-sway', `--d:${f(R(4, 7))}s;--dl:-${f(R(0, 4))}s;--amp:2deg`);
    });
    for (let k = 0; k < 6; k++) {
      const cone = `<ellipse rx="11" ry="18" class="f-acc2"/><path class="s-bg" stroke-width="2" d="M -10 -6 Q 0 0 10 -6 M -11 4 Q 0 10 11 4 M -8 12 Q 0 17 8 12"/>`;
      s += at(R(30, 570), 0, `<g class="a-spin o0" style="--d:${f(R(3, 6))}s">${cone}</g>`, 'a-fall', anim(R(5, 9), R(0, 9)));
    }
    for (let k = 0; k < 6; k++) s += at(R(30, 570), 0, `<g class="a-spin o0" style="--d:1.2s"><ellipse cx="10" rx="14" ry="4" class="f-acc"/><circle r="4" class="f-bg"/></g>`, 'a-fall', anim(R(6, 10), R(0, 10)));
  }
  if (n === 5) { // flowers and pollinators
    const flower = (r, c1, c2, d) => {
      let p = '';
      for (let k = 0; k < 10; k++) p += `<ellipse cx="0" cy="${f(-r)}" rx="${f(r * .42)}" ry="${f(r * .95)}" transform="rotate(${k * 36})" class="${k % 2 ? c1 : c2}"/>`;
      return `<g class="a-spin o0" style="--d:${d}s">${p}</g><circle r="${f(r * .55)}" class="f-bg a-pulse" style="--d:2.4s"/>`;
    };
    s += `<path class="s-bg" stroke-width="10" d="M 210 400 Q 190 300 220 200"/><path class="s-bg" stroke-width="7" d="M 460 400 Q 480 330 450 270"/>`;
    s += at(220, 190, flower(62, 'f-acc', 'f-acc2', 40));
    s += at(450, 260, flower(36, 'f-acc2', 'f-acc', 28));
    s += at(90, 300, flower(26, 'f-acc', 'f-acc', 22));
    for (let k = 0; k < 16; k++) s += `<circle class="f-acc2 a-float" cx="${f(R(20, 580))}" cy="${f(R(20, 380))}" r="${f(R(2, 5))}" style="${anim(R(3, 6), R(0, 6))}"/>`;
    const bee = `<g transform="rotate(90)"><g class="a-flap o0"><ellipse cx="-12" cy="-14" rx="12" ry="7" class="f-bg" opacity=".75"/><ellipse cx="12" cy="-14" rx="12" ry="7" class="f-bg" opacity=".75"/></g><ellipse rx="11" ry="17" class="f-acc2"/><path class="s-bg" stroke-width="4" d="M -10 -4 H 10 M -10 6 H 10"/></g>`;
    s += `<g class="a-fly" style="offset-path: path('M 220 190 C 330 40 520 120 450 260 S 120 380 90 300 S 120 120 220 190');--d:11s">${bee}</g>`;
    s += `<g class="a-fly" style="offset-path: path('M 450 260 C 600 360 300 380 220 190 S 400 60 450 260');--d:8s;--dl:-3s">${bee}</g>`;
  }
  if (n === 6) { // grasslands: a field of waving blades
    s += `<circle cx="150" cy="120" r="70" class="f-acc2 a-pulse" style="--d:7s"/>`;
    s += `<path class="f-acc" d="M -10 300 Q 150 240 320 290 T 620 270 V 410 H -10 Z"/>`;
    for (let k = 0; k < 3; k++) s += `<g class="a-fly" style="offset-path: path('M -40 ${90 + k * 30} Q 300 ${40 + k * 20} 660 ${110 + k * 25}');--d:${12 + k * 3}s;--dl:-${k * 4}s"><path class="s-bg" stroke-width="3" d="M -8 -4 L 0 2 L 8 -4"/></g>`;
    for (let k = 0; k < 70; k++) {
      const x = R(-10, 610), h = R(60, 170), lean = R(-30, 30);
      s += `<path class="${k % 3 ? 's-bg' : 's-acc2'} a-sway" stroke-width="${f(R(3, 6))}" d="M ${f(x)} 405 Q ${f(x + lean * .3)} ${f(405 - h * .5)} ${f(x + lean)} ${f(405 - h)}" style="${anim(R(1.8, 3.2), R(0, 3))};--amp:${f(R(4, 9))}deg"/>`;
    }
  }
  if (n === 7) { // farming: sunrise over the first fields
    s += `<circle cx="300" cy="230" r="90" class="f-acc2 a-sunrise"/>`;
    for (let k = 0; k < 6; k++) {
      const y0 = 250 + k * 28;
      s += `<path class="${k % 2 ? 'f-acc' : 'f-bg'}" d="M -10 ${y0} L 610 ${y0 - 20} L 610 ${y0 + 10} L -10 ${y0 + 30} Z"/>`;
    }
    s += at(470, 230, `<path class="f-bg" d="M -40 0 L 0 -42 L 40 0 Z"/><rect x="-30" y="0" width="60" height="34" class="f-bg"/><rect x="-8" y="12" width="16" height="22" class="f-acc"/>`);
    for (let k = 0; k < 4; k++) s += `<circle class="f-acc2 a-smoke" cx="478" cy="190" r="${8 + k * 3}" style="${anim(4, k)}"/>`;
    for (let k = 0; k < 16; k++) {
      const x = 15 + k * 38 + R(-8, 8), h = R(120, 190);
      let ear = '';
      for (let j = 0; j < 7; j++) ear += `<ellipse cx="-5" cy="${f(-h + j * 9)}" rx="4" ry="8" transform="rotate(-25 0 ${f(-h + j * 9)})" class="f-acc2"/><ellipse cx="5" cy="${f(-h + j * 9 + 4)}" rx="4" ry="8" transform="rotate(25 0 ${f(-h + j * 9 + 4)})" class="f-acc2"/>`;
      s += at(x, 405, `<path class="s-acc2" stroke-width="3" d="M0 0 V ${f(-h + 50)}"/>${ear}`, 'a-sway', `${anim(R(2.5, 4), R(0, 4))};--amp:4deg`);
    }
  }
  return `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="600" height="400" class="f-ink"/>${s}</svg>`;
}

/* ---------- timeline ---------- */
// Big date per stage: [number, unit]
const BIG = [['1', 'u_bn'], ['470', 'u_m'], ['420', 'u_m'], ['370', 'u_m'], ['130', 'u_m'], ['50', 'u_m'], ['10000', 'u_y']];
const PARTICLES = ['cell', 'spore', 'spore', 'seed', 'pollen', 'blade', 'grain'];

function particlesHtml(kind) {
  let out = '';
  for (let k = 0; k < 14; k++) {
    out += `<i class="pt pt-${kind}" style="--x:${(rand() * 100).toFixed(1)}%;--y:${(rand() * 100).toFixed(1)}%;--s:${(6 + rand() * 18).toFixed(0)}px;--d:${(7 + rand() * 9).toFixed(1)}s;--delay:-${(rand() * 9).toFixed(1)}s;--r:${(rand() * 360).toFixed(0)}deg"></i>`;
  }
  return out;
}

/* AI illustrations: try images/eraN.jpg, .png, .webp. If none loads, the drawn scene stays. */
const ART_EXT = ['jpg', 'png', 'webp', 'jpeg'];
function loadArt() {
  document.querySelectorAll('.art-img').forEach(img => {
    let k = 0;
    const next = () => { if (k < ART_EXT.length) img.src = `images/era${img.dataset.n}.${ART_EXT[k++]}`; };
    img.onerror = next;
    img.onload = () => {
      img.parentElement.classList.add('has-img');
      const c = document.querySelector('.ai-credit'); if (c) c.hidden = false;
    };
    next();
  });
}

function renderTimeline() {
  seed = 3;
  $('#rail').innerHTML = STAGES.map((s, i) => {
    const d = s[lang];
    return `<li><a class="rail-link" href="#stage-${i + 1}" data-stage="${i + 1}"><span class="rail-dot">${i + 1}</span><span class="rail-label">${d.rail}</span><span class="rail-when">${d.short}</span></a></li>`;
  }).join('');
  $('.rail').setAttribute('aria-label', t('rail_label'));

  $('#stages').innerHTML = STAGES.map((s, i) => {
    const d = s[lang], n = i + 1;
    const num = BIG[i][0] === '10000' ? (lang === 'fi' ? '10 000' : '10,000') : BIG[i][0];
    return `<article class="stage reveal" id="stage-${n}" data-stage="${n}" data-theme="t${n}" aria-labelledby="stage-h-${n}">
      <div class="particles" aria-hidden="true">${particlesHtml(PARTICLES[i])}</div>
      <div class="stage-big" aria-hidden="true"><span class="big-num">${num}</span><span class="big-unit">${t(BIG[i][1])}</span></div>
      <figure class="stage-art" aria-hidden="true"><div class="art-blob">${sceneSvg(n)}<img class="art-img" alt="" decoding="async" data-n="${n}"></div></figure>
      <div class="stage-body">
        <p class="stage-when"><span class="stage-num">${t('stage')} ${n}</span> <time>${d.when}</time></p>
        <h3 id="stage-h-${n}">${d.name}</h3>
        ${d.p.map(p => `<p>${p}</p>`).join('')}
        <div class="stage-facts">
          <div class="facts-block"><h4>${t('ad_h')}</h4><ul class="chips">${d.ad.map((a, k) => `<li style="--i:${k}">${a}</li>`).join('')}</ul></div>
          <div class="facts-block"><h4>${t('ex_h')}</h4><ul class="examples">${d.ex.map(e => `<li><i>${e[0]}</i> – ${e[1]}</li>`).join('')}</ul></div>
        </div>
        ${d.note ? `<p class="stage-note">${d.note}</p>` : ''}
      </div>
    </article>`;
  }).join('');
  loadArt();
}

let observers = [];
function observe() {
  observers.forEach(o => o.disconnect());
  observers = [];
  const reveal = $$('.reveal, .split, .section-head, #tree-svg, .cards');
  if (!('IntersectionObserver' in window)) { reveal.forEach(el => el.classList.add('in')); return; }

  const ro = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
  }), { threshold: 0.12 });
  reveal.forEach(el => ro.observe(el));

  // A thin line across the middle of the screen decides the colour theme and the active stage
  const mid = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    document.body.dataset.theme = e.target.dataset.theme;
    if (e.target.classList.contains('stage')) setActive(e.target.dataset.stage);
  }), { rootMargin: '-50% 0px -50% 0px' });
  $$('main [data-theme]').forEach(el => mid.observe(el));
  observers.push(ro, mid);
}

let activeStage = null;
function setActive(n) {
  activeStage = n;
  $$('.stage').forEach(s => s.classList.toggle('is-active', s.dataset.stage === n));
  $$('.rail-link').forEach(a => {
    const on = a.dataset.stage === n;
    a.classList.toggle('is-active', on);
    on ? a.setAttribute('aria-current', 'step') : a.removeAttribute('aria-current');
  });
  $$('#tree-svg .node').forEach(a => a.classList.toggle('is-active', a.dataset.stage === n));
}

/* ---------- tree of life ---------- */
function renderTree() {
  const svg = $('#tree-svg');
  svg.innerHTML = '';
  const SX = 275, LX = 95, W = 160, H = 44;
  const el = (name, attrs, parent = svg) => {
    const n = document.createElementNS(SVGNS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    parent.appendChild(n);
    return n;
  };

  el('path', { class: 'tree-spine', d: `M${SX} 58 V618`, pathLength: 1 });
  el('path', { class: 'tree-spine tree-human', d: `M${SX} 618 V654` });
  NODES.filter(n => n.side === 'left').forEach((n, i) => {
    el('path', { class: 'tree-line', d: `M${SX} ${n.y - 50} C${SX} ${n.y} ${SX - 45} ${n.y} ${LX + W / 2} ${n.y}`, pathLength: 1, style: `--i:${i}` });
  });

  NODES.forEach((n, i) => {
    const x = n.side === 'spine' ? SX : LX;
    const label = n[lang].split('|');
    const a = el('a', { class: 'node', href: `#stage-${n.stage}`, 'data-stage': n.stage, style: `--i:${i}`,
      'aria-label': `${label.join(' ').replace('- ', '')}, ${t('go_to')} ${n.stage}` });
    const g = el('g', { class: 'node-in', style: `transform-origin:${x}px ${n.y}px` }, a);
    el('rect', { x: x - W / 2, y: n.y - H / 2, width: W, height: H, rx: 22 }, g);
    const text = el('text', { x, y: n.y, 'text-anchor': 'middle', 'dominant-baseline': 'middle' }, g);
    label.forEach((line, k) => {
      const ts = el('tspan', { x, dy: k === 0 ? (label.length > 1 ? '-0.55em' : '0') : '1.15em' }, text);
      ts.textContent = line;
    });
  });
  if (activeStage) setActive(activeStage);
}

/* ---------- innovation cards ---------- */
function renderCards() {
  $('#cards').innerHTML = CARDS.map((c, i) => {
    const [title, teaser, body] = c[lang];
    return `<button class="card" type="button" aria-pressed="false" data-i="${i}" style="--i:${i}">
      <span class="card-inner">
        <span class="face front">
          <span class="card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[c.icon]}</svg></span>
          <span class="card-title">${title}</span>
          <span class="card-teaser">${teaser}</span>
          <span class="card-hint">${t('flip')}</span>
        </span>
        <span class="face back" aria-hidden="true">
          <span class="card-title">${title}</span>
          <span class="card-body">${body}</span>
          <span class="card-hint">${t('flip_back')}</span>
        </span>
      </span>
    </button>`;
  }).join('');
}

$('#cards').addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  const on = card.getAttribute('aria-pressed') !== 'true';
  card.setAttribute('aria-pressed', on);
  $('.front', card).setAttribute('aria-hidden', on);
  $('.back', card).setAttribute('aria-hidden', !on);
});

/* ---------- quiz ---------- */
const quiz = { i: 0, score: 0, picked: null };

function renderQuiz(focus) {
  const box = $('#quiz-box');
  if (quiz.i >= QUIZ.length) {
    const tier = quiz.score === QUIZ.length ? 2 : quiz.score >= 3 ? 1 : 0;
    box.innerHTML = `<div class="q-result" tabindex="-1">
      <p class="q-score">${quiz.score}<span>/${QUIZ.length}</span></p>
      <p>${t('res')[tier]}</p>
      <button type="button" class="btn magnetic q-restart">${t('restart')}</button></div>`;
    if (focus) $('.q-result', box).focus();
    if (tier === 2) burst($('.q-score', box), 40);
    return;
  }
  const q = QUIZ[quiz.i];
  const [text, opts, expl] = q[lang];
  const answered = quiz.picked !== null;
  const right = quiz.picked === q.a;
  box.innerHTML = `<div class="q-progress"><span>${t('q_of').replace('{i}', quiz.i + 1).replace('{n}', QUIZ.length)}</span><span class="q-bar"><span style="width:${(quiz.i / QUIZ.length) * 100}%"></span></span></div>
    <h3 class="q-text" tabindex="-1">${text}</h3>
    <ul class="q-options">${opts.map((o, k) => {
      const cls = answered ? (k === q.a ? ' is-correct' : k === quiz.picked ? ' is-wrong' : '') : '';
      return `<li style="--i:${k}"><button type="button" class="q-opt${cls}" data-k="${k}"${answered ? ' disabled' : ''}><span class="q-letter" aria-hidden="true">${'ABCD'[k]}</span>${o}</button></li>`;
    }).join('')}</ul>
    <div class="q-feedback${answered ? (right ? ' ok' : ' no') : ''}" role="status" aria-live="polite">${answered ? (right ? t('correct') : t('wrong') + opts[q.a] + '.') + ' ' + expl : ''}</div>
    ${answered ? `<button type="button" class="btn magnetic q-next">${quiz.i === QUIZ.length - 1 ? t('finish') : t('next')}</button>` : ''}`;
  if (focus === 'next' && answered) $('.q-next', box).focus({ preventScroll: true });
  if (focus === 'question') $('.q-text', box).focus({ preventScroll: true });
}

$('#quiz-box').addEventListener('click', e => {
  const opt = e.target.closest('.q-opt');
  if (opt && quiz.picked === null) {
    quiz.picked = +opt.dataset.k;
    const right = quiz.picked === QUIZ[quiz.i].a;
    if (right) quiz.score++;
    renderQuiz('next');
    const btn = $(`.q-opt[data-k="${quiz.picked}"]`);
    right ? burst(btn, 22) : btn.classList.add('shake');
  } else if (e.target.closest('.q-next')) {
    quiz.i++; quiz.picked = null;
    renderQuiz('question');
  } else if (e.target.closest('.q-restart')) {
    quiz.i = 0; quiz.score = 0; quiz.picked = null;
    renderQuiz('question');
  }
});

// Leaf confetti from an element (correct answers, perfect score)
function burst(el, count) {
  if (REDUCE || !el || !el.animate) return;
  const r = el.getBoundingClientRect();
  const colors = ['#C6FF3D', '#FF2D87', '#FFC21A', '#3DF5FF', '#FF5B1F'];
  for (let k = 0; k < count; k++) {
    const leaf = document.createElement('span');
    leaf.className = 'confetti';
    leaf.style.left = r.left + r.width / 2 + 'px';
    leaf.style.top = r.top + r.height / 2 + 'px';
    leaf.style.background = colors[k % colors.length];
    document.body.appendChild(leaf);
    const a = Math.random() * Math.PI * 2, dist = 80 + Math.random() * 160;
    const dx = Math.cos(a) * dist, dy = Math.sin(a) * dist - 60;
    leaf.animate([
      { transform: 'translate(-50%,-50%) scale(.4) rotate(0deg)', opacity: 1 },
      { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1) rotate(${Math.random() * 540}deg)`, opacity: 1, offset: 0.6 },
      { transform: `translate(calc(-50% + ${dx * 1.1}px), calc(-50% + ${dy + 120}px)) scale(.8) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], { duration: 1100 + Math.random() * 500, easing: 'cubic-bezier(.23,1,.32,1)' }).onfinish = () => leaf.remove();
  }
}

/* ---------- motion: progress bar, parallax, cursor, magnetic buttons, card tilt ---------- */
const bar = $('.progress span');
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    if (REDUCE) return;
    const vh = innerHeight;
    $$('.stage, .hero').forEach(s => {
      const r = s.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) return;
      s.style.setProperty('--p', ((r.top + r.height / 2 - vh / 2) / vh).toFixed(3));
    });
  });
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);

if (FINE && !REDUCE) {
  const cur = $('.cursor');
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  addEventListener('pointermove', e => { x = e.clientX; y = e.clientY; cur.classList.add('on'); });
  document.addEventListener('pointerover', e => cur.classList.toggle('is-hover', !!e.target.closest('a, button, .plant3d')));
  document.addEventListener('pointerleave', () => cur.classList.remove('on'));
  (function loop() {
    cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
    cur.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  })();

  document.addEventListener('pointermove', e => {
    const m = e.target.closest('.magnetic');
    if (m) {
      const r = m.getBoundingClientRect();
      m.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.25}px ${(e.clientY - r.top - r.height / 2) * 0.35}px`;
    }
    const c = e.target.closest('.card');
    if (c) {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 14}deg`);
      c.style.setProperty('--rx', `${((e.clientY - r.top) / r.height - 0.5) * -14}deg`);
    }
  });
  document.addEventListener('pointerout', e => {
    const m = e.target.closest('.magnetic');
    if (m && !m.contains(e.relatedTarget)) m.style.translate = '';
    const c = e.target.closest('.card');
    if (c && !c.contains(e.relatedTarget)) { c.style.removeProperty('--rx'); c.style.removeProperty('--ry'); }
  });
}

/* ---------- language ---------- */
function setLang(next) {
  lang = UI[next] ? next : 'en';
  document.documentElement.lang = lang;
  document.title = t('doc_title');
  $$('[data-i18n]').forEach(n => { n.textContent = t(n.dataset.i18n); });
  $$('[data-i18n-aria]').forEach(n => n.setAttribute('aria-label', t(n.dataset.i18nAria)));
  $$('.split').forEach(splitText);
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  const revealed = new Set($$('.stage.in').map(s => s.id));
  renderTimeline();
  revealed.forEach(id => document.getElementById(id).classList.add('in'));
  renderTree();
  renderCards();
  renderQuiz();
  observe();
  if (activeStage) setActive(activeStage);
  onScroll();
  store('plant-lang', lang);
}

$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

setLang(store('plant-lang') || ((navigator.language || '').toLowerCase().startsWith('fi') ? 'fi' : 'en'));
requestAnimationFrame(() => document.body.classList.add('loaded'));
