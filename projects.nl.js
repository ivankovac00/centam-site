'use strict';

/* =============================================================
   CENTAM — Projectgegevens (Nederlandse versie)
   -------------------------------------------------------------
   Nederlandse vertaling van projects.js. Zelfde structuur en
   dezelfde `id` waarden, zodat project.html?id=<id> naar het
   juiste project verwijst in beide taalversies. Voeg een nieuw
   project toe in projects.js EN hier, met identieke `id`.
   ============================================================= */
const projects = [
  {
    id: 'graded-gyroid-heat-sink',
    category: 'Thermisch Beheer',
    title: 'Gegradeerde Gyroïde Architecturen voor Verbeterde Koelprestaties',
    media: 'Industriële oven',
    mediaImage: '/assets/gyroid_no_background.png',
    excerpt: 'Ruimtelijk ontworpen TPMS-structuur met afnemende celgrootte en een wanddikte van 2 mm voor geoptimaliseerd thermisch en vloeistoftransportgedrag.',
    body: [
      'Ruimtelijk ontworpen TPMS-structuur met afnemende celgrootte en een wanddikte van 2 mm voor geoptimaliseerd thermisch en vloeistoftransportgedrag.',

      'Een gyroïde is een Triply Periodic Minimal Surface (TPMS) die wordt gekenmerkt door een continu, vloeiend variërend rooster dat scherpe hoeken elimineert en zeer efficiënte warmteoverdracht mogelijk maakt. In deze studie wordt een gyroïde-gebaseerde architectuur ontworpen met een ruimtelijke gradiënt in celgrootte, waarbij de afmeting van de eenheidscel geleidelijk afneemt van links naar rechts. Deze gecontroleerde variatie zorgt voor een overeenkomstige gradiënt in (macro)porositeit en oppervlaktedichtheid. Dit maakt een lokaal afgestemd thermisch en vloeistofstromingsgedrag mogelijk binnen één monolithische structuur. De geometrie wordt gekenmerkt door een uniforme wanddikte van 2 mm, wat structurele integriteit waarborgt met behoud van een hoge oppervlakte-volumeverhouding, essentieel voor een verbeterde warmteoverdracht.',

      'De gegradeerde gyroïde wordt specifiek onderzocht voor koeltoepassingen, waar niet-uniforme thermische belastingen vaak een ruimtelijk geoptimaliseerde oplossing vereisen. Grotere cellen aan de linkerzijde bevorderen een lagere stromingsweerstand en een betere vloeistofverdeling, terwijl steeds kleiner wordende cellen naar rechts het oppervlak en de lokale warmteoverdracht vergroten. Deze combinatie stelt de structuur in staat om drukval en thermische efficiëntie effectiever in balans te brengen dan uniforme roosters.',

      'Dergelijke ontworpen materialen zijn bijzonder veelbelovend voor geavanceerde thermische managementsystemen in power electronics, ruimtevaartcomponenten en energiesystemen, waar conventionele (vin) koellichamen tegen hun beperkingen aanlopen. De combinatie van gyroïde-topologie, gegradeerde porositeit en gecontroleerde wanddikte biedt een veelzijdige ontwerpruimte voor het optimaliseren van thermische managementsystemen in compacte, hoogefficiënte koeltoepassingen.'
    ],
    meta: [
      { label: 'Sector', value: 'Thermisch Beheer' },
      { label: 'Geometrie', value: 'Gegradeerde gyroïde (TPMS)' },
      { label: 'Wanddikte', value: '2 mm' }
    ]
  }
];
