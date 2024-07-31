---
style: custom-style.css
toc: false
---


# Examples of scrolling with observablehq framework




```js 
const filosofi = FileAttachment("data/cc_filosofi_2020_DEP.csv").csv({typed: true});
```



```js 
// dict of the graphs
// the keys must be the same with data-step inside the scroll-section 

const graphs= {'1': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
                    '2': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
                    '3': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
                    '4': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
                    '5': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
                    '6': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
                    '7': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
                    '8': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot()   
}
```


  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. Nunc sit amet gravida erat, ac ultricies tortor. Nam pretium vel tellus quis scelerisque. Nam quam purus, mattis nec metus placerat, malesuada aliquam est. Nulla congue ex velit, porta volutpat nisl venenatis semper. Nunc et elit varius, gravida lacus vel, venenatis libero. Suspendisse vulputate sapien quam, et eleifend neque dignissim quis. Duis eu interdum ex.

## First scrolling


  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. Nunc sit amet gravida erat, ac ultricies tortor. Nam pretium vel tellus quis scelerisque. Nam quam purus, mattis nec metus placerat, malesuada aliquam est. Nulla congue ex velit, porta volutpat nisl venenatis semper. Nunc et elit varius, gravida lacus vel, venenatis libero. Suspendisse vulputate sapien quam, et eleifend neque dignissim quis. Duis eu interdum ex.


  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. Nunc sit amet gravida erat, ac ultricies tortor. Nam pretium vel tellus quis scelerisque. Nam quam purus, mattis nec metus placerat, malesuada aliquam est. Nulla congue ex velit, porta volutpat nisl venenatis semper. Nunc et elit varius, gravida lacus vel, venenatis libero. Suspendisse vulputate sapien quam, et eleifend neque dignissim quis. Duis eu interdum ex.

<section class="scroll-container">
 

  <div class="scroll-info"></div>



  <div class="scroll-section" data-step="1">
 

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. Nunc sit amet gravida erat, ac ultricies tortor. Nam pretium vel tellus quis scelerisque. Nam quam purus, mattis nec metus placerat, malesuada aliquam est. Nulla congue ex velit, porta volutpat nisl venenatis semper. Nunc et elit varius, gravida lacus vel, venenatis libero. Suspendisse vulputate sapien quam, et eleifend neque dignissim quis. Duis eu interdum ex.
  </div>
  


  <div class="scroll-section" data-step="2">
  
  Morbi venenatis, justo vel tincidunt bibendum, ex libero efficitur leo, sit amet maximus metus tortor in enim. Suspendisse eros ex, convallis ut mattis in, venenatis sed mi. Maecenas hendrerit dui convallis, rutrum elit et, lobortis mi. In in elit rutrum lacus elementum suscipit. Vestibulum lacinia augue eu diam ultrices venenatis. Nunc gravida nulla eget quam elementum feugiat. Duis ac volutpat nulla, sed venenatis urna. Phasellus tincidunt nibh imperdiet nisl vestibulum interdum. Etiam vitae maximus tortor. Mauris efficitur accumsan mauris ac bibendum. Nunc sit amet justo id nibh pretium aliquam. Maecenas libero erat, posuere ut est at, imperdiet ultrices urna.
  
  </div>
  
  <div class="scroll-section" data-step="3">
  
  Aenean consectetur ex dolor, nec semper velit dictum sagittis. Quisque sed turpis imperdiet, tincidunt arcu ut, condimentum lorem. Suspendisse dapibus mauris nec libero laoreet cursus. Phasellus ac dictum risus. Donec varius semper enim a feugiat. Aenean auctor enim sit amet risus facilisis semper. Nullam aliquet sapien vitae sodales posuere. Maecenas dolor nulla, pretium at turpis eget, lobortis gravida sapien. Donec in mi rutrum, condimentum elit in, viverra augue. Vestibulum sed ipsum eget purus dictum congue. Aenean pulvinar ligula sapien. Donec lobortis orci in purus accumsan, nec interdum nisl vehicula. Proin vitae nunc turpis. Aenean metus nibh, varius nec iaculis nec, lobortis a neque. Suspendisse mi elit, commodo et orci id, consectetur fermentum massa. Cras molestie, diam ut bibendum finibus, ex est aliquet eros, nec fringilla risus libero non diam.
  
  </div>
  
  <div class="scroll-section" data-step="4">
  
  Nullam pellentesque malesuada sem ut porta. Duis porta eu sem at tempor. Aliquam erat volutpat. Sed convallis odio ipsum, sed molestie purus efficitur sed. Vestibulum sit amet luctus nibh. Aenean porttitor venenatis pretium. Proin aliquet libero vel ante consectetur viverra. Nulla venenatis elit magna, vel egestas enim euismod vitae.
  
  </div>
</section>

## Second scrolling 

  Aenean consectetur ex dolor, nec semper velit dictum sagittis. Quisque sed turpis imperdiet, tincidunt arcu ut, condimentum lorem. Suspendisse dapibus mauris nec libero laoreet cursus. Phasellus ac dictum risus. Donec varius semper enim a feugiat. Aenean auctor enim sit amet risus facilisis semper. Nullam aliquet sapien vitae sodales posuere. Maecenas dolor nulla, pretium at turpis eget, lobortis gravida sapien. Donec in mi rutrum, condimentum elit in, viverra augue. Vestibulum sed ipsum eget purus dictum congue. Aenean pulvinar ligula sapien. Donec lobortis orci in purus accumsan, nec interdum nisl vehicula. Proin vitae nunc turpis. Aenean metus nibh, varius nec iaculis nec, lobortis a neque. Suspendisse mi elit, commodo et orci id, consectetur fermentum massa. Cras molestie, diam ut bibendum finibus, ex est aliquet eros, nec fringilla risus libero non diam.


<section class="scroll-container">
  <div class="scroll-info"></div>
  <div class="scroll-section" data-step="5">
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. Nunc sit amet gravida erat, ac ultricies tortor. Nam pretium vel tellus quis scelerisque. Nam quam purus, mattis nec metus placerat, malesuada aliquam est. Nulla congue ex velit, porta volutpat nisl venenatis semper. Nunc et elit varius, gravida lacus vel, venenatis libero. Suspendisse vulputate sapien quam, et eleifend neque dignissim quis. Duis eu interdum ex.
  </div>
  
  <div class="scroll-section" data-step="6">
  
  Morbi venenatis, justo vel tincidunt bibendum, ex libero efficitur leo, sit amet maximus metus tortor in enim. Suspendisse eros ex, convallis ut mattis in, venenatis sed mi. Maecenas hendrerit dui convallis, rutrum elit et, lobortis mi. In in elit rutrum lacus elementum suscipit. Vestibulum lacinia augue eu diam ultrices venenatis. Nunc gravida nulla eget quam elementum feugiat. Duis ac volutpat nulla, sed venenatis urna. Phasellus tincidunt nibh imperdiet nisl vestibulum interdum. Etiam vitae maximus tortor. Mauris efficitur accumsan mauris ac bibendum. Nunc sit amet justo id nibh pretium aliquam. Maecenas libero erat, posuere ut est at, imperdiet ultrices urna.
  
  </div>
  
  <div class="scroll-section" data-step="7">
  
  Aenean consectetur ex dolor, nec semper velit dictum sagittis. Quisque sed turpis imperdiet, tincidunt arcu ut, condimentum lorem. Suspendisse dapibus mauris nec libero laoreet cursus. Phasellus ac dictum risus. Donec varius semper enim a feugiat. Aenean auctor enim sit amet risus facilisis semper. Nullam aliquet sapien vitae sodales posuere. Maecenas dolor nulla, pretium at turpis eget, lobortis gravida sapien. Donec in mi rutrum, condimentum elit in, viverra augue. Vestibulum sed ipsum eget purus dictum congue. Aenean pulvinar ligula sapien. Donec lobortis orci in purus accumsan, nec interdum nisl vehicula. Proin vitae nunc turpis. Aenean metus nibh, varius nec iaculis nec, lobortis a neque. Suspendisse mi elit, commodo et orci id, consectetur fermentum massa. Cras molestie, diam ut bibendum finibus, ex est aliquet eros, nec fringilla risus libero non diam.
  
  </div>
  
  <div class="scroll-section" data-step="8">
  
  Nullam pellentesque malesuada sem ut porta. Duis porta eu sem at tempor. Aliquam erat volutpat. Sed convallis odio ipsum, sed molestie purus efficitur sed. Vestibulum sit amet luctus nibh. Aenean porttitor venenatis pretium. Proin aliquet libero vel ante consectetur viverra. Nulla venenatis elit magna, vel egestas enim euismod vitae.
  
  </div>
</section>

```js 
const scrollcontainers = document.querySelectorAll(".scroll-container");


for (const scrollcontainer of scrollcontainers) {
  
  const info = scrollcontainer.querySelector(".scroll-info");
  const targets = scrollcontainer.querySelectorAll(".scroll-section");
  
  const observer = new IntersectionObserver((entries) => {
  for (const target of Array.from(targets).reverse()) {
    const rect = target.getBoundingClientRect();
    if (rect.top < innerHeight / 2) {
      
      info.innerHTML = ''
      info.appendChild(graphs[target.dataset.step]) 
      return;
    }
  }
  info.className = "scroll-info";
 


}, {
  rootMargin: "-50% 0% -50% 0%"
});


  for (const target of targets) observer.observe(target);}







```



