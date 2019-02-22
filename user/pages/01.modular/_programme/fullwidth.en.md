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