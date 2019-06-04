---
title: Sensorium Map
slug: map
process:
    markdown: true
    twig: true
markdown:
    extra: true
body_classes: sb-site-overflow-x-hidden no-measure fullwidth
cache_enable: false	
---

{% include 'partials/organisms/map.html.twig' %}

<div class="modular-row" markdown="1">

<p class="mb4">Toggle location categories (<span class="ph1 bg-black white fw5">Sensorium venues</span>, recommended <span class="ph1 bg-gold white fw5">cafés</span>, <span class="ph1 bg-green white fw5">restaurants</span> & <span class="ph1 bg-red white fw5">bars</span>) in left sidebar <img class="bg-dark-gray pa1 h2" src="/user/pages/18.locations/icon-googlemaps-sidebar.png" alt="side bar icon"></p>

### Pisztory Palace

<img src="/map/venue-pisztory.jpg" class="w-100 mw6">

Štefánikova 25, Bratislava

[Sensorium Conference](/#speakers_&_artists) <br>
[Installations](/#installations)

### City Stage

<img src="/map/venue-citystage.jpg" class="w-100 mw6">

Lower SNP square, in front of The Old Market

[City Stage Activities](/city-stage)

### Faculty of Arts, Comenius University

<img src="/map/venue-comenius.jpg" class="w-100 mw6">
<div class="f6">Foto: Vladimír Kuric</div>

Gondova 70/2, Bratislava

[Installation: πTon - Cod.Act](/installations/pi-ton)

### Goethe-Institute Bratislava

<img src="/map/venue-goetheinstitut.jpg" class="w-100 mw6">

Panenská 682/33, Bratislava    

[AI for Augmented Creativity Workshop](/workshops/ai-for-augmented-creativity)

### Satelit Gallery

<img src="/map/venue-satelit.jpg" class="w-100 mw6">

Hurbanove kasárne, Kollárovo nám. 10, Bratislava

[Exhibition: Augmented Authorship - Matthew Plummer Fernandez](/news/otvorenie-vystavy-matthew-plummer-fernandez)

### A4

<img src="/map/venue-a4.jpg" class="w-100 mw6">

Karpatská 3089/2, Bratislava

[Sensorium Night Special: EVERYWHEN / Ferienčíková, Júdová, Timpau](/performance/everywhen)
[Sensorium Night: Jonathan Reus - iMac Music](/performance/imac-music)

### Fuga

<img src="/map/venue-fuga.jpg" class="w-100 mw6">

SNP Square 24, Bratislava

[Sensorium Night: Evitceles (Opal Tapes / Seagrave) x Stix / Isama Zing (Mäss) / Luca Kasper / Tea Tralna](/performance/evitceles)

### Hodžovo Square

<img src="/map/venue-hodzovo.jpg" class="w-100 mw6">
<div class="f6">Foto: CoolKoon</div>

Hodžovo námestie, Bratislava

[Installation: The Inflovable Machine - Monica Rikić](/installations/inflovable-machine)

{% include 'partials/atoms/button.html.twig' with {'button': {
    'text': 'Full Festival Programme',
    'url': "/programme",
    'newTab': false,
    'classes': 'bg-white black hover-black f4 fw6 link grow ba bw2 ph3 pv2 mv5 dib'
}} %}

</div>