<h1 align="center">
  Astronomy Picture of the Day
</h1>

A responsive react web app that uses the NASA api to display the astronomy picture of the day (APOD) in a visually appealing and user-friendly interface. This application fetches the latest APOD from the NASA api and uses efficient data caching to optimize performance and limit fetch requests. The web app also displays detailed information for each photo on an interactive modal overlay.<br/><br/>
You can view the deployed build at <a href="https://acelowder-nasa.netlify.app/">https://acelowder-nasa.netlify.app/</a>

&nbsp;

<a href="https://acelowder-nasa.netlify.app/"><img src="example.gif" width="1280"></a>

<div align="right">

[![Netlify Status](https://api.netlify.com/api/v1/badges/afaa9a29-6f3e-49bd-ab9d-df7dad86885c/deploy-status)](https://acelowder-nasa.netlify.app/)

</div>

## Future Plans

If I have time to come back to this project, I plan to add the following features:

- **Archive**: Allow the user to view previous pictures of the day from local storage (to reduce api calls).
- **Image Panning**: Pan around the image based on the mouse location.
- **Format Description**: Format the description in the modal to split the long wall of text into paragraphs with indents.

&nbsp;

## Reflections

I had a lot of fun styling this project and getting the api calls to work efficiently. I usually restrict components from loading through ternary operators, but discovered that I could dynamically add or remove classes to animate components. If I were to redo this project, I would create the components with dynamic class styling in mind from the start.
