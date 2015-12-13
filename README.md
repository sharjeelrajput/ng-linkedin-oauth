# Simple AngularJS LinkedIn Authentication Controller

I spent far too long looking for 'out of the box' solutions. They either don't work or are bloated as hell, so I created a nice simple (less than 80 lines) controller for authenticating users of your AngularJS app with LinkedIn and making authenticated requests to the LinkedIn API.

## Instructions
It really couldn't be simpler:

1. Copy the `LinkedinCtrl` controller from `LinkedinCtrl.js` into your app.
2. On your templates include the LinkedIn controller like so `<div ng-controller="LinkedinLogin">...</div>`.
3. To login a user execute the `login()` function.
4. To make requests execute the `getData([])` function, passing an array of parameters you would like returned.

## Examples

### Login a user
    <div ng-controller="LinkedinLogin">
      <h1>LinkedIn Login</h1>
      <button ng-click="login()">
        Connect with LinkedIn
      </button>
    </div>

### Make a request
    <div ng-controller="LinkedinLogin" data-ng-init="getData(['first-name', 'last-name', 'headline', 'location', 'summary', 'picture-url'])">
      <h1>Authorised</h1>
      <ul>
        <li>First name: {{ data.firstName }}</li>
        <li>Last name: {{ data.lastName }}</li>
        <li>Headline: {{ data.headline }}</li>
        <li>Location: {{ data.location.name }}</li>
        <li>Summary: {{ data.summary }}</li>
        <li>Picture URL: {{ data.pictureUrl }}</li>
      </ul>
    </div>


Example usage is included in:
 - `examples/app.js` for your routing.
 - `examples/login.html` for your login page.
 - `examples/authorised.html` for an 'internal' page making a request to the LinkedIn API for details.

Certain bits will need modifying to your requirements, but they should be easy and obvious. If they're not, then give me a shout and I'll endeavour to get back to you.
