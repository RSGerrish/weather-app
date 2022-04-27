# weather-app
Weather App to practice promises, async functions and using an API

Final Thoughts - 
I am very please with how this has turned out so far. While my design/pallette choices are questionable at best, I tackled every aspect of this assignment and used the API ALMOST purely as it was supposed to be. Just to explain, I made a bunch of my own conversion functions, I found all of my own icons, and I made a filter function that would determine which icon to display based on the current weather condition. It turns out the API not only provides the conversions, it also contains a weather.id that will point to an icon that open weather provides. I discovered all of these things after I had worked out my own solution so I stuck with my way in the end. In the future I will be a bit more conscious of what the API is capable of before wasting time on problems that already have solutions.

Things that could be improved:
- Force standard locations in search bar
- Sunrise and Sunset times break once a location outside of the current timezone is displayed. I found the timezone property which shifts the UTC time to match the current timezone, however I wasn't getting results that I expected and ultimately put this issue on the backburner.