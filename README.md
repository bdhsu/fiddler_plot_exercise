## Technology

Built using [React](https://github.com/facebook/react) with [react-router](https://github.com/ReactTraining/react-router) for routing and [Victory](https://formidable.com/open-source/victory/docs/) for charting.

## Goals for this exercise  

Design and implement an interface for plotting loan data. Allow the user to save plots in a dashboard.

## Assignment Summary

* How much time did you spend on the assignment?

About 6 hours.

* If you used a plotting library, why did you choose it?

I chose [Victory](https://formidable.com/open-source/victory/docs/) as my charting library because it’s built natively in React (which makes sense since I’m building this in React), has a good declarative api, has good out of the box defaults so doesn’t require a ton of customization, responsive by nature, and pretty easy to use.

For this case there aren’t too many points to be plotted, so Victory being vector based and resolution independent is fine. In other cases with thousands of points, I would use a canvas based charting library that’s resolution dependent. If I wanted a solution that was far more customizable and powerful, I would use D3.

* What do you like about your implementation?

I like that my implementation is pretty simple and doesn’t use tools that are too overkill for this specific case.

* If you were to restart, what would you change about your implementation?

My current implementation uses the App component as the single source of truth for shared state since the only shared state is an array to store pairs of columns.

If I had more time, I would likely use Redux to handle state more cleanly and also because given a more powerful state management solution, it would be easier to add new functionality that would need to alter state frequently like editing existing plots or adding multiple dashboards.

* If you were given more time, how would you test your project?

Given more time I would test across multiple different devices, browsers, screen sizes, operating systems. Currently this is only tested for Chrome on macOS.

## Usage

Run `npm install` -> installs dependencies

Run `npm start` -> initializes dev server

**It's recommended to build for production for the best performance**

Run `npm build` -> builds app for production

Run `serve -s build` -> starts a static server so you can open in your browser.
