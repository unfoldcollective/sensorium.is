---
title: Programme
process:
    markdown: true
    twig: true
---

<h2>Programme</h2>

<section class="programme-grid">
    <div class="programme-grid__day">
        <h3 class="programme-grid__daytitle">
            <span class="programme-grid__daytitlename">Thursday</span>
            <time datetime="2019-05-02">2<sup>nd</sup> May</time>
        </h3>
        <div class="programme-grid__daycontent">
            <div class="programme-block">
                <time class="programme-block__time s-time">16:00 — 18:00</time>
                <h4 class="programme-block__title">Computer Vision Workshop</h4>
                <h5 class="programme-block__subtitle">by Joschua Noble</h5>
                <p class="programme-block__location s-location">Location <strong>detail</strong></p>
                <ul class="programme-block__events programme-events">
                    <li class="programme-events__item">
                        <time class="programme-events__time s-time">10:00 — 12:00</time>
                        <h6 class="programme-events__title">Christian "Mio" Loclaire Annette Mees Joshua Noble</h6>
                    </li>
                    <li class="programme-events__item">
                        <time class="programme-events__time s-time">14:00 — 12:00</time>
                        <h6 class="programme-events__title">Jan Nikolai Nelles TodaysArt presents: Gabey Tjon a Tham Joachim Sauter</h6>
                    </li>
                </ul>
                <ul class="programme-grid__dayactions programme-actions">
                    <li class="programme-actions__item">
                        {% include 'partials/atoms/button.html.twig' with {'button': {
                            'text': 'Tickets',
                            'url': config.site.ticket_url,
                            'newTab': true,
                            'classes': 's-button grow'
                        }} %}
                    </li>
                    <li class="programme-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="programme-grid__day">
        <h3 class="programme-grid__daytitle">
            <span class="programme-grid__daytitlename">Friday</span>
            3<sup>rd</sup> May
        </h3>
        <div class="programme-grid__daycontent">
            <div class="programme-block">
                <time class="programme-block__time s-time">16:00 — 18:00</time>
                <h4 class="programme-block__title">Choreographic Coding Lab</h4>
                <p class="programme-block__location s-location">Location <strong>Specific detail</strong></p>
                <ul class="programme-grid__dayactions programme-actions">
                    <li class="programme-actions__item">
                        <a href="#">More info...</a>
                    </li>
                </ul>
            </div>
            <div class="programme-block">
                <time class="programme-block__time s-time">09:00 — 21:00</time>
                <h4 class="programme-block__title">Installation</h4>
                <p class="programme-block__location s-location">Location <strong>Specific detail</strong></p>
            </div>
        </div>
    </div>
    <div class="programme-grid__day">
        <h3 class="programme-grid__daytitle">
            <span class="programme-grid__daytitlename">Saturday</span>
            4<sup>th</sup> May
        </h3>
    </div>
</section>

<section class="fullwidth cf w-100 tl tc-ns mt4-ns">
    <div class="mw24rem dib v-top w-100 w-30-ns">
        <article class="pa3 bgi-radialgrad tl b--black bw2">
            <div>
                <h3 class="f2 f1-ns lh-title ma0 break-word">
                    Installations
                </h3>
                <h4 class="tr f3 f2-ns ma0 mt2 mt0-ns">
                    Thurs 3 May 16.00&nbsp;-&nbsp;20.00<br>
                    Fri 4 May 16.00&nbsp;-&nbsp;20.00<br>
                    Sat 5 May 10.00&nbsp;-&nbsp;19.00<br>
                </h4>
                <h5 class="tr f4 f3-ns ma0">
                    3-4 May free public entry<br>
                    5 May for conference attendees only<br>
                </h5>
                <h5 class="tr f4 f3-ns ma0">
                    <a href="https://goo.gl/maps/RXjCi49tvoo">Pisztory Palace</a>
                </h5>
            </div>
            <div class="dt w-100 mt1 f6 f5-l">
              <div class="dtc">
                <span class="mv0 b"><a href="#installations">more info ...</a></span>
              </div>
              <div class="dtc tr">
                <span class="mv0 bg-white pa1 b">Open to public</span>
              </div>
            </div>
        </article>
        <article class="pa3 bgi-radialgrad tl b--black bw2">
            <div>
                <h3 class="f2 f1-ns lh-title ma0 break-word">
                    Choreographic Coding Lab Presents
                </h3>
                <h4 class="tr f3 f2-ns ma0 mt2 mt0-ns">
                    Fri 04 May
                </h4>
                <h5 class="tr f4 f3-ns ma0">
                    18:00 - 19:30
                </h5>
                <h5 class="tr f4 f3-ns ma0">
                    <a href="https://goo.gl/maps/RXjCi49tvoo">Pisztory Palace</a> Main hall
                </h5>
            </div>
            <div class="dt w-100 mt1 f6 f5-l">
              <div class="dtc">
                <span class="mv0 b"><a href="/workshops/cclx">more info ...</a></span>
              </div>
              <div class="dtc tr">
                <span class="mv0 bg-white pa1 b">Open to public</span>
              </div>
            </div>
        </article>
        <article class="pa3 bgi-radialgrad tl b--black bw2">
            <div class="lh-title">
                <h3 class="f2 f1-ns ma0">
                    Computer Vision Workshop
                </h3>
                <h4 class="f3 f2-ns ma0">
                    by Joschua Noble
                </h4>
                <h4 class="tr f3 f2-ns ma0 mt2 mt0-ns">
                    Thurs 3 - Fri 4 May
                </h4>
                <div class="dt w-100 mt1 f6 f5-l">
                    <div class="dtc">
                        <span class="mv0 b">
                            <a href="/workshops/computer-vision">more info ...</a>
                        </span>
                    </div>
                    <div class="dtc tr">
                        {% include 'partials/atoms/button.html.twig' with {'button': {
                            'text': 'Tickets',
                            'url': config.site.ticket_url,
                            'newTab': true,
                            'classes': 'bg-white black hover-black f4 fw6 link grow ba bw2 ph3 ph2-m pv2 mv2 dib'
                        }} %}
                    </div>
                </div>
            </div>
        </article>
    </div>
    <div class="mw24rem dib v-top w-100 w-34-ns">
        <article class="mh-1-ns relative top--2-ns pa3 mv2 bgi-radialgrad tl b--black bw2">
            <div>
                <h3 class="f1 lh-title ma0 f4rem">
                    Conference
                </h3>
                <div class="tr">
                    <h4 class="f3 f2-ns ma0 mt2 mt0-ns">
                        Sat 5 May
                    </h4>
                    <h5 class="f4 f3-ns ma0">
                        09:30 - 19:30
                    </h5>
                    <h5 class="f4 f3-ns ma0">
                        <a href="https://goo.gl/maps/RXjCi49tvoo">Pisztory Palace</a> Main hall
                    </h5>
                </div>
            </div>
            <div class="f4 f3-l fw6 mt5 mt2-ns">
                <ul class="list pa0 mb0 mt3">
                    <li>Christian "Mio" Loclaire</li>
                    <li>Annette Mees</li>
                    <li>Joshua Noble</li>
                    <li>Jessica In</li>
                    <li>Panel Discussion</li>
                    <li>Andrej Boleslavsky</li>
                    <li>Jan Nikolai Nelles</li>
                    <li class="lh-title"><span class="db">TodaysArt presents:</span>Gabey Tjon a Tham</li>
                    <li>Joachim Sauter</li>                
                </ul>
                <div class="dt w-100 mt1 f6 f5-l">
                    <div class="dtc">
                        <span class="mv0 b"><a class="" href="/programme">see detailed schedule ...</a></span>
                    </div>
                    <div class="dtc tr">
                        {% include 'partials/atoms/button.html.twig' with {'button': {
                            'text': 'Tickets',
                            'url': config.site.ticket_url,
                            'newTab': true,
                            'classes': 'bg-white black hover-black f4 fw6 link grow ba bw2 ph3 ph2-m pv2 mv2 dib'
                        }} %}
                    </div>
                </div>
            </div>
        </article>
    </div>
    <div class="mw24rem dib w-100 w-30-ns">
        <article class="pa3 bgi-radialgrad tl b--black bw2">
            <div class="lh-title">
                <h3 class="f2 f1-ns ma0">
                    Opening & Lanark Artefax & Tomáš Prištiak
                </h3>
                <h4 class="f3 f2-ns ma0">
                    Performance
                </h4>
                <div class="tr">
                    <h4 class="f3 f2-ns ma0 mt2 mt0-ns">
                        Fri 4 May
                    </h4>
                    <h5 class="f4 f3-ns ma0">
                        21:00 - 00:00
                    </h5>
                    <h5 class="f4 f3-ns ma0">
                        <a href="http://www.a4.sk/">A4</a>
                    </h5>
                </div>
                <div class="dt w-100 mt1 f6 f5-l">
                    <div class="dtc">
                    </div>
                    <div class="dtc tr">
                        {% include 'partials/atoms/button.html.twig' with {'button': {
                            'text': 'Tickets',
                            'url': config.site.ticket_url,
                            'newTab': true,
                            'classes': 'bg-white black hover-black f4 fw6 link grow ba bw2 ph3 pv2 mv2 dib'
                        }} %}
                    </div>
                </div>
            </div>
            <div class="dt mt1 f6 f5-l">
              <div class="dtc">
              </div>
            </div>
        </article>
        <article class="pa3 bgi-radialgrad tl b--black bw2">
            <div class="lh-title">
                <h3 class="f2 f1-ns ma0">
                    Club night: Music for your plants & more
                </h3>
                <h4 class="f3 f2-ns ma0">
                    Performance
                </h4>
                <div class="tr">
                    <h4 class="f3 f2-ns ma0 mt2 mt0-ns">
                        Sat 5 May
                    </h4>
                    <h5 class="f4 f3-ns ma0">
                        22:00 - 04:00
                    </h5>
                    <h5 class="f4 f3-ns ma0">
                        Fuga
                    </h5>
                </div>
                <div class="dt w-100 mt1 f6 f5-l">
                    <div class="dtc">
                        <span class="mv0 b">
                        </span>
                    </div>
                    <div class="dtc tr">
                        {% include 'partials/atoms/button.html.twig' with {'button': {
                            'text': 'Tickets',
                            'url': config.site.ticket_url,
                            'newTab': true,
                            'classes': 'bg-white black hover-black f4 fw6 link grow ba bw2 ph3 pv2 mv2 dib'
                        }} %}
                    </div>
                </div>
            </div>
            <div class="dt mt1 f6 f5-l">
              <div class="dtc">
              </div>
            </div>
        </article>
    </div>
</section>