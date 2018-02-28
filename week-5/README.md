# Week 5

## Monday

### Homework

* **[homework-simple](homework-simple)**. A simple implementation of this week's homework.
* **[homework-advanced](homework-advanced)**. Combing the input events into a single function handler.

### Design Research and User Stories

Design cannot exist in a vacuum. A design must account for the needs and sensibilities of its user. It must respond to, build upon, and sometimes reject the vocabulary or methodologies of its predecessors.

Yet, as Bob Dylan said, _“to live outside the law, you must be honest.”_ In other words, as a designer, you are free to break existing rules and paradigms. But you must be aware of those rules and break them with purpose.

In some cases, you will find that your predecessors’ decisions were ideal or inevitable. In other cases, you will find that these decisions were made in relation to constraints that need not constrain your work. In either case, it is important to take the time to learn and think critically about the work of your predecessors, competitors and kindred spirits.

In the introduction to his book, Operating Manual for Spaceship Earth, the visionary designer, Buckminster Fuller, said:

_"If you are in a shipwreck and all the boats are gone, a piano top buoyant enough to keep you afloat that comes along makes a fortuitous life preserver. But this is not to say that the best way to design a life preserver is in the form of a piano top. I think that we are clinging to a great many piano tops in accepting yesterday’s fortuitous contrivings as constituting the only means for solving a given problem."_

It is important to research the history and current landscape of the design areas with which your project engages. Try to understand this history in terms of the constraints your predecessors faced and look for opportunities to liberate us from “piano tops.”

No tool has ever been so unconstrained as the computer. It’s capabilities are limited only by logic, development time and the imagination of the person using it. These constraints, particularly time constraints, are considerable. But they are not insurmountable.

Here are a few exercises to help you getting started.

#### 1. Drawing the core vision

You have come up with an idea, and now you're ready to execute. The aim of this exercise is to draw the thing that makes your UI unique – the core functionality. Keep in mind that this is not a product roadmap, and you will often spend a lot of time defining the feature set in user stories afterwards. This is simply a way to quickly sketch the rough outline of your idea, so you don’t lose sight of this while researching competitors / assumptions. Spend 20-30 minutes drawing the most important functionality of your project by focusing on the operations that the user will perform in the user interface. This has to be done in a maximum of 5 pages, which is deliberately constrained to force you to focus on the most important functionality.

#### 2. Competitor Research

It is important to look at your project in the context of its predecessors and competitors. Below, you will find a list of questions to guide this research.

**Context:**

* Who has this sort of design problem or uses tools in this domain?
* What other tools do they use in their work?
* What industries do they work in?
* What did they study in school?
* What technical or domain-specific vocabularies do they use?

**Historic and Contemporary Landscape:**

* What tools already exist in this space? (Please address both digital tools and their physical or analog predecessors, if any)
* When were they first introduced?
* Are they still in the market?
* Who is their target user?
* What features do they include?
* What platforms do they support?
* What tools are they built on top of?
* Are they commercial or open-source?
* What are their greatest strengths and weaknesses?
* Which of these weaknesses are the most challenging to overcome and which are the least?

**Assumptions:**

Make a list of assumptions about this design space and its necessary or essential elements. With collaborators, discuss your points of view, assumptions and premises. Some questions you might consider include:

* Which assumptions seem universal or inescapable?
* Which seem contextual, cultural, temporary or like "piano tops?"
* What tests, prototypes or experiments might help you to further investigate your assumptions?
* What were the unique elements of your perspective on this design area?
* What tests, prototypes or experiments could you produce to showcase a unique element of your perspective?

### User Stories

Once you have done your design research, and your assumptions about your product may or may not have changed, it is time to plan for the actual interface. Rather than free styling or copying competitors, you will build out user stories that guide your development process.

Every type of software has a user, and by defining the functionality from the user’s perspective, the you make sure that they focus on things that make an impact. User stories are human-centered, not technology-centered. Here’s one definition from Wikipedia:

_“A user story captures the "who", "what" and "why" of a requirement in a simple, concise way, often limited in detail by what can be hand-written on a small paper note card. A user story encapsulates the action of one function making it possible for software developers to create a vertical slice of their work.”_

There’s a few important things to note in this quote. First of all, a user story should be constrained to a single piece of functionality, and ideally describe only the users intend, not the ‘look’ of the feature. It should be narrow enough so it can be implemented in days or weeks. If a single story is too broad or vague, it is often broken into several stories. As an example, take the user story below:

* _As a user, I can use my calendar_

This can be broken down into several smaller stories that are easier to implement.

* _As a registered user, when I navigate to my calendar, I see the default week-view of my appointments._
* _As a registered user, when I click the “Day” button, I see the day-view of my appointments._
* _As a registered user, when I click the “Month” button, I see the month-view of my appointments._

In the beginning of a project, the team will often meet to define the user stories of the MVP – minimum viable product – which is the absolute minimum feature set that can be tested on the user. This list is then sorted by priority, and the most important user stories are tackled first. Some teams like to use story points to indicate the difficulty of a task. These are arbitrary measures (like 1,2,4,8,16) – not time estimates – that can help teams know how much talent to devote to a specific story. These are also helpful to know whether a user story should be broken up into several stories, which is often done for stories with story points of 8 and 16.

Once user stories have been written (these are not set in stone and can change as the software is being developed), a team will adopt an iterative development process where individuals are assigned to user stories with very short feedback loops to show the work to the rest of team. This often happens in the form of daily standup meeting, where team members briefly talk about what they did yesterday, what they’re going to work on today, and what problems/hindrances they need to solve before implementing the user story. It’s called a standup meeting because these meetings are short and supposed to be over before participants get tired from standing. Team members can use these meetings to change user stories on the fly, reassign team members to needed stories, and generally change their approach as better solutions arrive.

### In-Class Exercise: Research and user stories

Spend the rest of the class on competitor research and user stories.

### Assignment for Wednesday

This week, you will start working on your midterm projects. The midterm project is to build a small address book interface. At the minimum, it needs to be able to:

* Display a list of 10 contacts with name, address, phone number, and email address.
* Search the list by entering a search query into a text input
* Sort the list ascending and descending based on names
* Filter the list by country (Pressing "China" will show only contact living in China)

For Wednesday, post a short competitor analysis on the documentation blog. Which address book apps exist? What do they do well? What could be improved? Also, post a prioritized list of user stories (important ones first) in the same blog post. These will be close to the midterm functionality requirements above, but might include extra functionality based on your unique approach. Remember that you need to be able to do this in two weeks.

The midterms are due on Wednesday the 14th of March.

## Wednesday

### Problems with Homework?

### Display Techniques

Today we will look at four techniques that are quite useful when developing user interfaces in React. Some of these you will use in your midterm project.

* **[sort](sort)**. Sort a list of items
* **[filter](filter)**. Filter a list of items
* **[search](search)**. Search a list of items
* **[add](add)**. Add a new item to a list of items

### Assignment for Monday

Implement the first and most important user story for your midterm. This includes both functionality and design.
