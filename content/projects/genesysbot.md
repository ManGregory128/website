---
title: "Genesys Student Discount Bot"
date: 2023-10-01
description: "CSU22013 Contribution"
image: "images/genesysBotPage.jpg"
---

A Digital Bot flow developed in [Genesys Cloud](https://www.genesys.com/genesys-cloud) using [Architect](https://help.mypurecloud.com/articles/about-architect/), alongside a RESTful API the bot calls to which scrapes and returns student deals from Unidays to the bot. Developed for Trinity College Dublin's [CSU22013](https://teaching.scss.tcd.ie/module/csu22013-software-engineering-project-i/) Software Engineering Project I.

![image](/images/genesysBotPage.jpg)

This project's workload has been split across our ten team members. I worked on creating a Java-based RESTful API using [Spring Boot](https://spring.io/projects/spring-boot) and integrating the funtionality needed to return both web-scraped discounts and Trinity College Student Society-exclusive discounts my team gathered and stored in a SQL Database. Additionally, I used Docker to containerise the built executable and publishd it on my 'homelab' for testing. The API was successfully integrated with the bot other team members developed.

This project was my first experience working with a medium-sized team and a CI/CD pipeline and has given me fundamental insight on how software in the industry is developed. Check out Genesys at [www.genesys.com](https://www.genesys.com).