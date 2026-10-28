---
title: About the AggiePromise Project
permalink: /about/
eyebrow: About
lede: >-
  We study how youth with disabilities in North Carolina transition from high school into work,
  and turn what we learn into tools for youth, families, practitioners, and policymakers.
---

<div class="prose" markdown="1">

## Why This Project

For the more than 7 million youth with disabilities, long-term inclusion and integration into society with economic and social self-sufficiency are the hope of these individuals and their families, with competitive integrated employment being the marker of success as defined by social services and policies. However, youth with disabilities are often left out of research. Young people are especially hard to follow over time because their schedules, transportation, and lives change quickly in the years after high school.

As a result, most of what we know about youth with disabilities comes from small interview studies, one-time surveys, or agency records that stop when a case is closed. These sources capture a single moment. But a successful start to working life is better seen as a path over time: whether a young person keeps working, how many hours they get, how their pay grows, and what is happening at home and on the job along the way.

The AggiePromise Project was designed to fill that gap for North Carolina youth ages 18 to 22 who are working or looking for work and have received vocational rehabilitation or community rehabilitation services. By checking in with participants every month and interviewing them every quarter for 18 months, we can see how employment, functioning, and well-being change as young people transition from high school to the workforce.

## What We Are Doing

This is a mixed-methods study with two objectives:

1. **Map employment trajectories.** We follow transition-age youth with disabilities in North Carolina who recently exited high school over an 18-month period to examine how their employment changes over time.
2. **Understand lived experience.** Through in-depth conversations, we learn how youth experience the first months of moving into the workforce.

Together, these strands aim to identify distinct profiles of employment trajectories, the factors that distinguish successful from less successful pathways, and a detailed picture of what the school-to-work transition is like for youth themselves.

## How We Reached Participants

</div>

<figure class="flyer">
  <a href="{{ '/assets/img/about/aggiepromise-recruitment-flyer.jpg' | relative_url }}"><img src="{{ '/assets/img/about/aggiepromise-recruitment-flyer.jpg' | relative_url }}" alt="AggiePromise Project recruitment flyer from N.C. A&amp;T State University. Headline: Youth With Disabilities, The Aggie Promise Project, Promoting Independence and Successful Employment. Participants receive $50 at the end of each quarter and a total of $330 at the end of the study. The study collects data monthly and quarterly for 18 months about work experiences during the school-to-work transition. To participate: 18 to 22 years old, currently employed or seeking employment, and have received services from state vocational rehabilitation or a local community rehabilitation provider. Contact phone 336-285-4944, email Aggiepromise@ncat.edu." loading="lazy"></a>
  <figcaption>The study's recruitment flyer. Select the image to view it full size.</figcaption>
</figure>

<div class="prose" markdown="1">

Recruitment for the AggiePromise study has closed. Thank you to everyone who took part.

## Project Team

</div>

<ul class="people">
  {% for person in site.data.team %}
  <li><strong>{{ person.name }}</strong><span>{{ person.role }}{% if person.affiliation %}<br>{{ person.affiliation }}{% endif %}</span></li>
  {% endfor %}
</ul>

<div class="prose" markdown="1">

## Project Details

</div>

<dl class="facts">
  <dt>Full title</dt><dd>{{ site.project.full_title }}</dd>
  <dt>Funder</dt><dd>{{ site.project.funder }}</dd>
  <dt>Program</dt><dd>{{ site.project.program }}</dd>
  <dt>Grant number</dt><dd>{{ site.project.grant_number }}</dd>
  <dt>Project period</dt><dd>{{ site.project.period }}</dd>
  <dt>Institution</dt><dd>{{ site.project.institution }}</dd>
  <dt>Contact</dt><dd><a href="mailto:{{ site.project.email }}">{{ site.project.email }}</a> · {{ site.project.phone }}</dd>
</dl>

<div class="prose" markdown="1">

The project's record is listed in the [NIDILRR Program Database]({{ site.project.naric_url }}) maintained by the National Rehabilitation Information Center.

</div>
