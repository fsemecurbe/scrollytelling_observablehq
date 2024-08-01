import MarkdownItContainer from "markdown-it-container";

export default {
  title: "Scrollytelling",

  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  root: "src",

  markdownIt: (md) =>
    md
      .use(MarkdownItContainer, "card") // ::: card
      .use(MarkdownItContainer, "tip") // ::: tip
      .use(MarkdownItContainer, "warning") // ::: warning
      .use(MarkdownItContainer, 'scroll-container', {

        render: function (tokens, idx) {
          var m = tokens[idx].info.trim().match(/^scroll-container\s+(.*)$/);
          if (tokens[idx].nesting === 1) {
            return '<section class="scroll-container">\n <div class="scroll-info"></div>\n';
          } else {
            return '</section>\n';
          }
        }
    
    })
    .use(MarkdownItContainer, 'scroll-section', {

      render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^scroll-section\s+(.*)$/);
        if (tokens[idx].nesting === 1) {
          return '<div class="scroll-section" data-step='+ md.utils.escapeHtml(m[1]) + '>\n ';
        } else {
          return '</div>\n';
        }
      }
  
  })





};