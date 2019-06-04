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

Toggle location categories (<span class="ph1 bg-black white fw5">Sensorium venues</span>, recommended <span class="ph1 bg-gold white fw5">cafés</span>, <span class="ph1 bg-green white fw5">restaurants</span> & <span class="ph1 bg-red white fw5">bars</span>) in left sidebar <img class="bg-dark-gray pa1 h2" src="/user/pages/18.locations/icon-googlemaps-sidebar.png" alt="side bar icon">

{% include 'partials/atoms/button.html.twig' with {'button': {
    'text': 'Full Festival Programme',
    'url': "/programme",
    'newTab': false,
    'classes': 'bg-white black hover-black f4 fw6 link grow ba bw2 ph3 pv2 mv4 dib'
}} %}

### Sensorium Conference & Installations

Pisztory Palace, Štefánikova 25, 811 05 Bratislava

[All Conference Speakers](/#speakers_&_artists) <br>
[All Installations](/#installations)

### City Stage

Lower SNP square, in front of The Old Market

[All City Stage Activities](/city-stage)

### πTon Installation

Faculty of Arts, Comenius University, Gondova 70/2, 811 02 Staré Mesto

[More info about πTon installation](/installations/pi-ton)

### Workshop: AI for Augmented Creativity

Goethe-Institute Bratislava, Panenská 682/33, 814 82 Bratislava    

[More info about AI for Augmented Creativity Workshop](/workshops/ai-for-augmented-creativity)

</div>

