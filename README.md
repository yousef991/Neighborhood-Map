## Website Performance Optimization portfolio project
I've optimized a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.
And below it's what I did with this project.

####  Optimization of Mobile Portfolio Page (index.html) by PageSpeed Insights:
* follow the steps explained below to use Ngrok to Test a Local Site on PageSpeed Insights :
1- go to https://www.python.org/downloads/ and download python and install it <br>
2-go to https://ngrok.com/download and place the downloaded file in your project folder <br>
3-open gitbash or the command line and navigate to the project folder directory <br>
4-type in this command to start a live server for your project : # On Mac and Linux: python -m SimpleHTTPServer 8080 <br>
5- now if you open localhost:8080 you should see your website <br>
6-open the ngrok file after placing it in the project directory and type in the following: if you are using mac then cd to project file and type ./ngrok http 8080 <br>
7- It will then give you a live link that you can use and paste in pagespeed insights to checkout how your optimization is working <br>

after that i've optimized all images and index.html 


#### Optimization of Cam's Pizzeria: pizza.html
-  I was looking for possible optimizations of JavaScript, Layout and Paint
execution (The Critical Rendering Path: HTML -> CSSOM <- JavaScript -> Render Tree
-> Layout -> Paint). <br>
- write "requestAnimationFrame" method to tell the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
<br>


## Measured Results

1. Mobile Portfolio Page (index.html): <br>
* 91% Speed on Mobile <br>
* 93% Speed on Desktop

2. Cam's Pizzeria (views/pizza.html, views/js/main.js): <br>
* scrolling is under 60 frames per second <br>
* the time to resize a pizza is less than 5ms <br>

=> https://developers.google.com/speed/pagespeed/insights/


### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance") <br>
* [Optimizing CSS](http://www.cssdrive.com/index.php/main/csscompressor/ "") <br>
* [Optimizing JavaScript](https://closure-compiler.appspot.com/home "javascript") <br>
* [Google Font API](https://css-tricks.com/snippets/css/basics-of-google-font-api/ "") <br>
* <a href="https://tinypng.com/">Optimize images</a>

### Resources
- <a href="https://discussions.udacity.com/">Udacity Discussion Forum </a> <br>
- <a href="https://stackoverflow.com/">stackoverflow </a> <br>
- <a href="https://discussions.udacity.com/">1:1 session with a mentor</a> <br>




