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
    title: 'Gegradeerde Gyroïde Architecturen voor Verbeterde Koellichaamprestaties',
    media: 'Industriële oven',
    mediaImage: 'https://centam.be/wp-content/uploads/2026/05/gyroid_no_background.png',
    excerpt: 'Ruimtelijk ontworpen TPMS-structuur met afnemende celgrootte en een wanddikte van 2 mm voor geoptimaliseerd thermisch en vloeistoftransportgedrag.',
    body: [
      'Ruimtelijk ontworpen TPMS-structuur met afnemende celgrootte en een wanddikte van 2 mm voor geoptimaliseerd thermisch en vloeistoftransportgedrag.',

      'Een gyroïde is een drievoudig periodieke minimale oppervlaktestructuur (TPMS) die wordt gekenmerkt door een continu, vloeiend variërend rooster dat scherpe hoeken elimineert en zeer efficiënte transportverschijnselen mogelijk maakt. In deze studie wordt een gyroïde-gebaseerde architectuur ontworpen met een ruimtelijke gradiënt in celgrootte, waarbij de afmeting van de eenheidscel geleidelijk afneemt van links naar rechts. Deze gecontroleerde variatie introduceert een overeenkomstige gradiënt in porositeit en oppervlaktedichtheid, wat een lokaal afgestemd thermisch en vloeistofstromingsgedrag mogelijk maakt binnen één monolithische structuur. De algehele geometrie is gedefinieerd met een uniforme wanddikte van 2 mm, wat structurele integriteit waarborgt met behoud van een hoge oppervlakte-volumeverhouding, wat essentieel is voor verbeterde warmteoverdracht.',

      'De gegradeerde gyroïde wordt specifiek onderzocht voor koellichaamtoepassingen, waar niet-uniforme thermische belastingen vaak een ruimtelijk geoptimaliseerde koelprestatie vereisen. Grotere cellen aan de linkerzijde bevorderen een lagere stromingsweerstand en een betere vloeistofverdeling, terwijl steeds kleinere cellen naar rechts het oppervlak en het lokale warmte-uitwisselingsvermogen vergroten. Deze combinatie stelt de structuur in staat om drukval en thermische dissipatie-efficiëntie effectiever in balans te brengen dan uniforme roosters.',

      'Dergelijke geconstrueerde materialen zijn bijzonder veelbelovend voor geavanceerde thermische beheersystemen in krachtelektronica, ruimtevaartcomponenten en energiesystemen, waar conventionele vinkoellichamen worden beperkt door geometrische beperkingen. De combinatie van gyroïde-topologie, gegradeerde porositeit en gecontroleerde wanddikte biedt een veelzijdige ontwerpruimte voor het optimaliseren van thermofluïdumprestaties in compacte, hoogefficiënte koeltoepassingen.'
    ],
    meta: [
      { label: 'Sector', value: 'Thermisch Beheer' },
      { label: 'Geometrie', value: 'Gegradeerde gyroïde (TPMS)' },
      { label: 'Wanddikte', value: '2 mm' }
    ]
  }
];
