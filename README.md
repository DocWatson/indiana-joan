# Indiana Joan
PostCSS tools for your next exciting adventure.

![Indiana Joan](https://raw.githubusercontent.com/DocWatson/indiana-joan/master/logo/joan.png)

## What is this?
There are some really cool PostCSS tools out there. Joan is a module that pulls
together a few existing libraries to make CSS a breeze. Essentially, Joan is a
curator of some of the most useful PostCSS tools (in my opinion)

### Joan's Toolkit
Major thanks to these great libraries (they did all the hard work!):

* [CSS Next](http://cssnext.io/) - adds future css features in for use today. Favorites of mine
include nesting, variable properties/selectors, and custom-named media queries.
* [Rucksack](https://simplaio.github.io/rucksack/) - lots of neat little features like shorthand positioning and
native `clear: fix`.
* [Lost](https://github.com/peterramsing/lost) - a really nice grid system based on calc (or flexbox)

## Installation and Usage

### Gulp
From the command line: `npm install gulp gulp-postcss indiana-joan`

```javascript
// sample Gulpfile.js

var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function(){
  return (
    gulp.src('./src/*.css')
    .pipe(postcss([
      require('indiana-joan')()
    ]))
    .pipe(gulp.dest('./dest'))
  )
});

gulp.task('default', ['css']);
```

### Grunt
From the command line: `npm install grunt grunt-postcss indiana-joan`

```javascript
// sample Gruntfile.js

module.exports = function(grunt){
  grunt.initConfig({
    postcss: {
      options: {
        processors: [
          require('indiana-joan')()
        ]
      },
      dist: {
        src: './src/*.css',
        dest: './dest/style.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['postcss']);
};

```

### Adventuring With Joan

Here's an example of CSS you can write:

```css
/* ./src/example.css */
:root{
  --brandPrimary: #FF000099; /* HEXA format (cssnext) */
}

body {
  font-size: responsive; /* responsive font-size (rucksack)*/
  color: var(--brandPrimary); /* CSS variables (cssnext) */
}

header {
  & .logo { /* nested selectors (cssnext) */
    position: relative 10px 10px;
  }
}

section {
  lost-center: 980px;

  & div {
    lost-column: 1/3; /* calc-based grid (lost) */
  }
}
```

The above becomes:

```css
/* ./dest/example.css */
body {
  font-size: calc(12px + 9 * ((100vw - 420px) / 860));
  color: rgba(255, 0, 0, 0.6);
}

@media screen and (min-width: 1280px) {

  body {
    font-size: 21px;
  }
}

@media screen and (max-width: 420px) {

  body {
    font-size: 12px;
  }
}

section {
  *zoom: 1;
  max-width: 980px;
  margin-left: auto;
  margin-right: auto
}

section:before {
  content: '';
  display: table;
}

section:after {
  content: '';
  display: table;
  clear: both;
}

section div {
  width: calc(99.99% * 1/3 - (30px - 30px * 1/3));
}

section div:nth-child(1n) {
  float: left;
  margin-right: 30px;
  clear: none;
}

section div:last-child {
  margin-right: 0;
}

section div:nth-child(3n) {
  margin-right: 0;
  float: right;
}

section div:nth-child(3n + 1) {
  clear: left;
}

section .logo {
  position: relative;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
}


```

## Contributing, Thanks, and Other Notes
Contributors are welcome to open pull requests with new features, stability/code
improvements, and tests.

Special thanks to the creators and contributors of the libraries mentioned above.

I call her Indiana Joan because 2 of the 3 tools I really liked were explorer
related.
