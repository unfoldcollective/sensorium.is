---
title: Talking Computer Vision and Designer Complicity with Joshua Noble
slug: interview-joshua-noble
date: 25/04/2018
taxonomy:
    category:
        - blog
process:
    twig: true
---

<span class="f4">
    During this year’s Sensorium Festival Joshua Noble will be joining us from San Francisco to give a talk and lead [a workshop on Computer Vision for Mixed Reality](https://sensorium.is/workshops/computer-vision). We sat down with Joshua to talk about his fascination for Computer Vision, its wider implications for society and the complicity he feels as a designer working with technological systems.
</span>

PvK:<br>
At Sensorium Festival, you’ll be teaching a 2-day workshop on Computer Vision. What makes Computer Vision such an interesting technique to you as a designer?

JN:<br>
Computer Vision is a particularly challenging field for a couple of reasons. There is the question of what is vision, which asks us deep questions about what it means to be human. Sight and visual confirmation of something is one of the most inarguable verifications. When I see something in front of me it is very difficult for my brain to not think: “this is real”. And when I see something, and you see something, and we both agree that we see the same thing, it's one of the most fundamental verifications of shared reality and shared intelligence. To confer that same agreement with a machine is one of the most visceral sorts of encounters with an inanimate intelligence. Even though the mechanism by which it does this is radically different than mine, it is one of them most challenging ways of thinking about an external intelligence.

Also, the origin of seeing machines is almost exclusively military. The things that machines want to see throughout history have typically been military targets. Even the library that I'm going to be using in the workshop - [openCV](https://opencv.org/) - has its origins in the United States military. And when you look at the things that are built into it, it’s “what are things that are moving quickly?”, “How do I track things through space?”, “How do you identify people?”. So it doesn’t take long to see the roots of it.

Pvk:<br>
It seems like you’re hinting at a kind of complicity that comes from working with a certain technology. As a designer, is this a struggle you are confronted with more often?

JN:<br>
I think anyone working with technology of any kind should ask themselves this same question. In ‘The Bracket’, which was a critical design prototype I made, you wore an ankle bracelet that knew your yearly income and gave you a very mild shock when you wandered into an area in the United States where the median income was five thousand dollars more or less than your own. One of the things I tried to do in creating the project was to make it sound attractive, to try to pitch it like “this is the thing that you’d actually want”. Because I think it's a little disingenuous to just say “Facebook is bad” or “Google is bad” or “Apple is bad”. Of course there's bad things to all of these, but at the same time they absolutely fascinate us and we're all complicit in enabling what is undesirable in all of these things.

<figure>
    <img src="/user/pages/04.news/interview-joshua-noble/joshua_noble-bracket.png" alt="The Bracket" title="The Bracket">
    <figcaption class="f6">Joshua Noble’s ‘Bracket’ applies a short sharp shock when its user is in a geographic region with a median income $5000 more or less than their own. <a href="http://thefactoryfactory.com/portfolio/bracket">thefactoryfactory.com/portfolio/bracket</a></figcaption>
</figure>

I like framing myself as a designer because I think it's interesting to ask those kinds of questions. Almost all of my favorite artists are in this space where there is no clear distinction between the artwork and the rest of the world. And so I think anyone making technological work is a little bit complicit in anything. It's important to be explicit about that and it's important to discuss it. Because these are the tools that make modern life work the way it works and they enable the conversations that we have and the sorts of structures that we can build into our lives.

PvK:<br>
What do you think are useful ways to encourage awareness and understanding of our involvement in such systems that are at the same time fascinating and deeply technological?

JN:<br>
I think one of the things that's important about a lot of these kinds of tools is to be able to play with them. I think that open-sourcing is wonderful to be able to look through the source code and repurpose implementations but there's also just the ability to see how something works by using it. That's where you get the sort of tacit understanding of what it's doing. 

One of my favorite projects ever is Adam Harvey's [CV Dazzle](https://cvdazzle.com/), which comes from him being able to see how Haar Cascade-based face detection works and realizing that all you need is something that breaks the lines of eye, nose and mouth to defeat this algorithm and sneak around it. Without the ability to point the camera at lots of different things, I don't know if he would have been able to do that project, but because this software and implementation are more widely available, he could start to imagine ways to defeat and subvert it.

<figure>
    <img src="/user/pages/04.news/interview-joshua-noble/adam_harvey-cvdazzle-look5.jpg" alt="CV Dazzle" title="CV Dazzle">
    <figcaption class="f6">CV Dazzle explores how fashion can be used as camouflage from face-detection technology, the first step in automated face recognition. <a href="https://cvdazzle.com/">cvdazzle.com</a></figcaption>
</figure>

PvK:<br>
What can people expect from your workshop at Sensorium?

My goal is to make Computer Vision as approachable as possible for anyone interested in working with images, in the sense of both vision and space. To me the real power of Computer Vision has always been enabling a program to understand, to a certain degree, what's around us.

In [the workshop](https://sensorium.is/workshops/computer-vision) we're going to talk about techniques for detecting different kinds of objects and doing image replacement on live streams of video. We’ll look at how those techniques are used in augmented reality devices that are available right now as well as the more social and philosophical implications of mixed to an augmented reality.

I've specifically selected a programming environment and a toolset that's built for designers and artists and people without a strong software engineering background. Because I think it's good to know what the surveillance camera on the street corners sees. I think it's interesting to understand what a car that drives itself sees around it. And I think the understandings and the subversions that are going to be the most important for us in the future will come as much from people who have more of an art, design or political background than purely a technological or engineering background.

{% include 'partials/atoms/button.html.twig' with {'button': {
    'text': 'Get Workshop Tickets',
    'url': config.site.ticket_url,
    'newTab': true,
    'classes': 'bg-white black hover-black f4 fw6 link grow ba bw2 ph3 pv2 mv2 dib'
}} %}