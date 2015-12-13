# Simple AngularJS LinkedIn Authentication Controller

## Preamble
Spent far too long looking for 'out of the box' solutions. They either don't work or are bloated as hell, so I created a nice simple controller for authenticating your AngularJS app with LinkedIn.

## Instructions
It really couldn't be simpler:

1. Copy the `LinkedinCtrl` controller from `LinkedinCtrl.js` into your app.
2. On your templates include the Linkedin controller like so `<div ng-controller="LinkedinLogin">...</div>`.
3. To login execute the `login()` function.
4. To make requests execute the `getData([])` function, passing an array of parameters you would like returned.

Example usage is included in: 
 - `LinkedinCtrl.js` for the controller.
 - `app.js` for your routing.
 - `login.html` for your login page.
 - `authorised.html` for an 'internal' page making a request to the LinkedIn API for details.

I'll try to get a full working example that you can checkout and use up asap.

Certain bits will need modifying to your requirments, but they should be easy and obvious. If they're not, then give me a shout and I'll endeavour to get back to you.
