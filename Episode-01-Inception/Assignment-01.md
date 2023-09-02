# _Episode-01-Inception_

## Q. What is `Emmet`?

Ans: `Emmet` is a free add-on for your text editor. It allows us to `type shortcuts` that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time. Also relying on Emmet's auto completion means fewer typos and missing tags, leading to more robust and valid files.

## Q. Difference between a Library and Framework?

Ans: A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.

## Q. What is `CDN`? Why do we use it?
Ans: A `content delivery network (CDN)` is a network of interconnected servers that speeds up webpage loading for data-heavy applications. CDN can stand for `content delivery network` or `content distribution network.` When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.

A CDN improves efficiency by introducing `intermediary servers` between the client and the website server. These CDN servers manage some of the client-server communications. They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications.


## Q. Why is React known as React?
Ans: React is called React because it is a library that `reacts to changes in data` and updates the user interface accordingly. It was originally developed by Facebook and was released as an `open-source project` in 2013. The name "React" reflects its purpose of reacting to changes in data and rendering the appropriate changes in the user interface.


## Q. What is cross-origin in the script tag?
Ans: `CORS`stands for `Cross-Origin Resource Sharing`, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q. What is the difference between React and ReactDOM?
Ans: `React` is a `open-source JS library.` to develop UI (User Interface) on web application or site. Its fully component base.
`React DOM` is the glue between `React and the DOM.` When we want to show our react component on DOM we need to use this `ReactDOM.render();` from React Dom.


## Q. What is the difference between react.development.js and react.production.js files via CDN?
Ans: In `production mode,` `compression and minification` of Javascript and other resources happens to reduce size of the code which is not the case when it comes to `development mode.` Performance will be much faster in `production mode` when compared to `development mode.``Development build` is several times (maybe 3-5x) `slower` than the `production build`.


## Q. What are async and defer?
Ans: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```