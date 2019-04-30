---
title: Programme
process:
    markdown: true
    twig: true
published: true
---

<h2>Programme</h2>

<section class="programme-grid">
    <div class="programme-grid__day">
        <h3 class="programme-grid__daytitle">
            <span class="programme-grid__daytitlename">Friday</span>
            <time datetime="2019-06-07">7<sup>th</sup> June</time>
        </h3>
        <div class="programme-grid__daycontent">
            <div class="programme-block">
                <time class="programme-block__time s-time">15:30 — 17:30</time>
                <h4 class="programme-block__title">Augmented Attention Lab Public Showcase </h4>
                <p class="programme-block__location s-location">Location <strong>Pistori Palace</strong></p>
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">16:00 — 18:00</time>
                <h4 class="programme-block__title">Sensorium talks</h4>
                <!-- <h5 class="programme-block__subtitle">by Joschua Noble</h5> -->
                <p class="programme-block__location s-location">Location <strong>Pistori Palace</strong></p>
                <ul class="programme-block__events programme-events">
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Registration, Drinks & Networking</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Festival Opening</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Chris Csíkszentmihályi</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Stefanie Posavec</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Drinks & Networking</h6>
                    </li>
                    <!-- <li class="programme-events__item">
                        <time class="programme-events__time s-time">14:00 — 12:00</time>
                        <h6 class="programme-events__title">Jan Nikolai Nelles TodaysArt presents: Gabey Tjon a Tham Joachim Sauter</h6>
                    </li> -->
                </ul>
                <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        {% include 'partials/atoms/button.html.twig' with {'button': {
                            'text': 'Tickets',
                            'url': config.site.ticket_url,
                            'newTab': true,
                            'classes': 's-button grow'
                        }} %}
                    </li>
                    <!-- <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li> -->
                </ul>
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">20:00 — 20:30</time>
                <h4 class="programme-block__title">πton Performance&nbsp;1</h4>
                <!-- <p class="programme-block__location s-location">Location <strong>Pistori Palace</strong></p> -->
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">21:00 — 01:00</time>
                <h4 class="programme-block__title">Sensorium Night</h4>
                <h5 class="programme-block__subtitle">Jonathan Reus: iMac Music</h5>
                <p class="programme-block__location s-location">Location <strong>A4</strong></p>
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
    <div class="programme-grid__day">
        <h3 class="programme-grid__daytitle">
            <span class="programme-grid__daytitlename">Saturday</span>
            <time datetime="2019-06-08">8<sup>th</sup> June</time>
        </h3>
        <div class="programme-grid__daycontent">
            <div class="programme-block">
                <time class="programme-block__time s-time">09:00 — 20:00</time>
                <h4 class="programme-block__title">Sensorium talks</h4>
                <!-- <h5 class="programme-block__subtitle">by Joschua Noble</h5> -->
                <p class="programme-block__location s-location">Location <strong>Pistori Palace</strong></p>
                <ul class="programme-block__events programme-events">
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Ján Pernecký</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Jonathan Reus & Sissel Marie Tonn</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Panel Discussion</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Cristóbal Valenzuela</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Danica Pišteková</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Elliot Woods (Kimchi & Chips)</h6>
                    </li>
                    <li class="programme-events__item">
                        <!-- <time class="programme-events__time s-time">10:00 — 12:00</time> -->
                        <h6 class="programme-events__title">Drinks & Networking</h6>
                    </li>
                    <!-- <li class="programme-events__item">
                        <time class="programme-events__time s-time">14:00 — 12:00</time>
                        <h6 class="programme-events__title">Jan Nikolai Nelles TodaysArt presents: Gabey Tjon a Tham Joachim Sauter</h6>
                    </li> -->
                </ul>
                <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        {% include 'partials/atoms/button.html.twig' with {'button': {
                            'text': 'Tickets',
                            'url': config.site.ticket_url,
                            'newTab': true,
                            'classes': 's-button grow'
                        }} %}
                    </li>
                    <!-- <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li> -->
                </ul>
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">11:00 — 20:00</time>
                <h4 class="programme-block__title">City Stage</h4>
                <h5 class="programme-block__subtitle">Discussions, interactive talks, workshops</h5>
                <p class="programme-block__location s-location">Location <strong>SNP Square</strong></p>
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">13:30 — 14:30</time>
                <h4 class="programme-block__title">Industry Meetup with Lunch </h4>
                <h5 class="programme-block__subtitle">(Pro Passes only)</h5>
                <p class="programme-block__location s-location">Location <strong>Pistori Palace 1st floor</strong></p>
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">11:00 — 11:30</time>
                <h4 class="programme-block__title">πton Performance&nbsp;2</h4>
                <!-- <p class="programme-block__location s-location">Location <strong>Pistori Palace</strong></p> -->
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">11:00 — 11:30</time>
                <h4 class="programme-block__title">πton Performance&nbsp;3</h4>
                <!-- <p class="programme-block__location s-location">Location <strong>Pistori Palace</strong></p> -->
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">22:00 — 04:00</time>
                <h4 class="programme-block__title">Sensorium Night</h4>
                <h5 class="programme-block__subtitle">Evitceles (Opal Tapes / Seagrave / UK) x Stix - Live A/V</h5>
                <!-- <p class="programme-block__location s-location">Location <strong>A4</strong></p> -->
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
            <!-- <div class="programme-block">
                <time class="programme-block__time s-time">16:00 — 21:00</time>
                <h4 class="programme-block__title">Installation</h4>
                <p class="programme-block__location s-location">Location <strong>Specific detail</strong></p>
            </div> -->
        </div>
    </div>
    <div class="programme-grid__day">
        <h3 class="programme-grid__daytitle">
            <span class="programme-grid__daytitlename">Sunday</span>
            <time datetime="2019-06-09">9<sup>th</sup> June</time>
        </h3>
        <div class="programme-grid__daycontent">
            <div class="programme-block">
                <time class="programme-block__time s-time">11:00 — 18:00</time>
                <h4 class="programme-block__title">City Stage</h4>
                <h5 class="programme-block__subtitle">Discussions, interactive talks, workshops</h5>
                <p class="programme-block__location s-location">Location <strong>SNP Square</strong></p>
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">10:00 — 18:00</time>
                <h4 class="programme-block__title">Workshop: AI for Augmented Creativity</h4>
                <h5 class="programme-block__subtitle">by Cris Valenzuela</h5>
                <p class="programme-block__location s-location">Location <strong>Goethe-Institute Bratislava</strong></p>
                <!-- <ul class="programme-block__events programme-events">
                    <li class="programme-events__item">
                        <time class="programme-events__time s-time">10:00 — 12:00</time>
                        <h6 class="programme-events__title">Christian "Mio" Loclaire Annette Mees Joshua Noble</h6>
                    </li>
                    <li class="programme-events__item">
                        <time class="programme-events__time s-time">14:00 — 12:00</time>
                        <h6 class="programme-events__title">Jan Nikolai Nelles TodaysArt presents: Gabey Tjon a Tham Joachim Sauter</h6>
                    </li>
                </ul> -->
                <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        {% include 'partials/atoms/button.html.twig' with {'button': {
                            'text': 'Tickets',
                            'url': config.site.ticket_url,
                            'newTab': true,
                            'classes': 's-button grow'
                        }} %}
                    </li>
                    <!-- <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li> -->
                </ul>
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">11:00 — 11:30</time>
                <h4 class="programme-block__title">πton Performance&nbsp;4</h4>
                <!-- <p class="programme-block__location s-location">Location <strong>Pistori Palace</strong></p> -->
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">11:00 — 11:30</time>
                <h4 class="programme-block__title">πton Performance&nbsp;5</h4>
                <!-- <h5 class="programme-block__subtitle">by Cris Valenzuela</h5> -->
                <!-- <p class="programme-block__location s-location">Location <strong>Pistori Palace</strong></p> -->
                <!-- <ul class="programme-grid__dayactions s-actions">
                    <li class="s-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</section>