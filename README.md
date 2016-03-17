# Indiana Joan
PostCSS tools for your next exciting adventure.

![Indiana Joan](https://raw.githubusercontent.com/DocWatson/indiana-joan/master/logo/joan.png)

## What is this?
There are some really cool PostCSS tools out there. Joan is a module that pulls
together a few existing libraries to make CSS a breeze. Essentially, Joan is a
curator of some of the most useful PostCSS tools (in my opinion)

### Joan's Toolkit
Major thanks to these great libraries (they did all the hard work!):

* [CSS Next]() - adds future css features in for use today. Favorites of mine
include nesting, variable properties/selectors, and custom-named media queries.
* [Rucksack]() - lots of neat little features like shorthand positioning and
native `clear: fix`.
* [Lost]() - a really nice grid system based on calc (or flexbox)

## Installation and Usage

### Gulp
From the command line: `npm install gulp gulp-postcss indiana-joan`

```
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

```
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

## Contributing, Thanks, and Other Notes
Contributors are welcome to open pull requests with new features, stability/code
improvements, and tests.

Special thanks to the creators and contributors of the libraries mentioned above.

I call her Indiana Joan because 2 of the 3 tools I really liked were explorer
related.
