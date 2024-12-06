# Unexpected Route Behavior with Query Parameters in React Router Dom v6

This repository demonstrates an uncommon bug in React Router Dom v6 related to unexpected behavior when navigating between routes with query parameters.  The bug manifests as rendering issues or unexpected behavior when transitioning from a route with query parameters to a route without, or vice versa.

## Bug Description

The issue arises when transitioning from a route with query parameters to another route.  The component associated with the new route may not render correctly or may exhibit unexpected behavior. This might include missing data, incorrect state, or rendering errors.  The bug is inconsistent and does not appear in all situations.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Navigate between routes with and without query parameters to observe the unexpected behavior.

## Solution

The solution involves ensuring proper cleanup or handling of query parameters during route transitions. Refer to `bugSolution.js` for the implemented fix.
