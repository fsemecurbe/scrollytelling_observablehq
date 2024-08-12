import MarkdownItContainer from "markdown-it-container";

export default {
  title: "Scrollytelling",

  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  root: "src",
  
  toc: {show: false},
  style: "custom-style.css" ,


  markdownIt: (md) =>
    md.use(MarkdownItContainer, 'scroll-container', {

        render: function (tokens, idx) {
          var m = tokens[idx].info.trim().match(/^scroll-container\s+(.*)$/);
          if (tokens[idx].nesting === 1) {
            return '<section class="scroll-container">\n <div class="scroll-info"></div>\n <section class="scrolling">\n';
          } else {
            return '</section>\n </section>\n';
          }
        }
    
    })
    .use(MarkdownItContainer, 'scroll-section', {

      render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^scroll-section\s+(.*)$/);
        if (tokens[idx].nesting === 1) {
          return '<div class="scroll-section" data-step='+ md.utils.escapeHtml(m[1]) + '>\n <span  class="inner">\n';
        } else {
          return '\n</span>\n</div>\n';
        }

      },
      marker : '~'
  
  })








};
