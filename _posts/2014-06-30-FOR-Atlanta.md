---
layout: notes
title: FOR Atlanta
author: Laura Lindeman
category: clientwork
image: //s3.amazonaws.com/ninelabs.com/FOR-Atlanta.png
client:
  name: FOR Atlanta
  platform: Bootstrap on GitHub Pages
  services: Visual Design, Front End Development
  url: http://foratlanta.github.io/
  quote-person: Matt Malament 
  quote-person-title: Deputy Director
  quote: We loved working with Nine Labs! They took the time to really understand what we needed and then worked diligently to make it happen. They transformed the way we're able to display data.
---
FOR (Focus on Results) Atlanta is a division of the Mayor's office of the City of Atlanta. They identify and track performance metrics across city departments and use the analysis of that data to improve the efficiency and effectiveness of various city services. 

## The Situation
Charged with aggregating metrics from across the city, [FOR Atlanta](http://www.atlantaga.gov/index.aspx?page=133) has historically delivered its data and analyses in a yearly paper report. This would be delivered to the Mayor and then distributed to other city departments and to the public. It was scanned and displayed online as a PDF.

This approach was clunky and outdated, and it required a lot of inefficient work. The team at FOR Atlanta wanted a way to generate charts from their data on demand. As they entered new data points, they wanted to be able to push a button and have results displaying the updated information.

The city has had a mission to open up more of their data to the public, and they hoped having a dynamic system would move them toward that goal.

## The Solution
We built a system that generates charts on the fly. Instead of having to go through the long, arduous process of sending files to a printer, scanning the report, and distributing it by hand, city employees can now simply upload CSV files into the system we built, and the entire website regenerates itself automatically. 

City officials have complete control over what data sets are compared to each other through the system's configuration files, and we worked with the communications department of the City of Atlanta to determine the precise wording and labels for all of the site's elements. 

We used the city's official color scheme when designing the site, which is built on [Jekyll](http://jekyllrb.com/) and hosted on [GitHub Pages](https://github.com/foratlanta/foratlanta.github.io). For the charts, we pulled in [D3JS](http://d3js.org/), a JavaScript library for manipulating documents based on data.

## The Outcome
GitHub has a [large collection of open data](https://government.github.com/), so, by hosting this project on [GitHub Pages](https://pages.github.com/), the City of Atlanta joins a larger movement toward open data in city governments. The city never tried to hide data from the public, they simply didn't know the best way to get it to the public. That problem is solved now. 

The system is easy to use and didn't require a major change in workflow for anyone involved. Employees can still do all of the data entry and manipulation in Excel as they're used to and then simply export the information as a CSV file to pull into the GitHub repo. Then, through the website, anyone can access data about whatever aspect of the municipal government they're interested in. The data is clearly displayed on the front end and easy to update in the database.

We'll be working with the city on a Phase Two of this project, so keep an eye out!
