```js 
import {scrolling} from'./components/scrolling.js'  
scrolling(graphs)
```

# Examples of scrolling with observablehq framework

```js 
// ici on positionne l'ensemble des graphiques
const graphs= {'1': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
               '2': Plot.barY([9, 4, 8, 1, 11, 3, 4, 2, 7, 5]).plot(),
               '3': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
               '4': Plot.barY([1, 2, 4, 8, 16, 8, 4, 2, 1, 0]).plot(),
               '5': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
               '6': Plot.barY([1, 2, 4, 8, 16, 8, 4, 2, 1, 0]).plot(),
               '7': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
               '8': Plot.barY([0.5, 1.5, 0.5, 0, -0.5, -1.5, -0.5, 0, 0.5, 1.5]).plot()   
}
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. 

## First scrolling


  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. 


  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. 


::: scroll-container 

~~~ scroll-section 1
   Pellentesque rhoncus a urna ut tincidunt. Nunc sit amet gravida erat, ac ultricies tortor. Nam pretium vel tellus quis scelerisque. Nam quam purus, mattis nec metus placerat, malesuada aliquam est. Nulla congue ex velit, porta volutpat nisl venenatis semper. Nunc et elit varius, gravida lacus vel, venenatis libero. Suspendisse vulputate sapien quam, et eleifend neque dignissim quis. Duis eu interdum ex.
~~~ 

~~~ scroll-section 2
  Duis ac volutpat nulla, sed venenatis urna. Phasellus tincidunt nibh imperdiet nisl vestibulum interdum. Etiam vitae maximus tortor. Mauris efficitur accumsan mauris ac bibendum. Nunc sit amet justo id nibh pretium aliquam. Maecenas libero erat, posuere ut est at, imperdiet ultrices urna.
~~~ 

~~~ scroll-section 2
 Donec lobortis orci in purus accumsan, nec interdum nisl vehicula. Proin vitae nunc turpis. Aenean metus nibh, varius nec iaculis nec, lobortis a neque. Suspendisse mi elit, commodo et orci id, consectetur fermentum massa. Cras molestie, diam ut bibendum finibus, ex est aliquet eros, nec fringilla risus libero non diam.
~~~  


~~~ scroll-section 3
 Donec lobortis orci in purus accumsan, nec interdum nisl vehicula. Proin vitae nunc turpis. Aenean metus nibh, varius nec iaculis nec, lobortis a neque. Suspendisse mi elit, commodo et orci id, consectetur fermentum massa. Cras molestie, diam ut bibendum finibus, ex est aliquet eros, nec fringilla risus libero non diam.
~~~
  
~~~ scroll-section 4
  Nullam pellentesque malesuada sem ut porta. Duis porta eu sem at tempor. Aliquam erat volutpat. Sed convallis odio ipsum, sed molestie purus efficitur sed. Vestibulum sit amet luctus nibh. Aenean porttitor venenatis pretium. Proin aliquet libero vel ante consectetur viverra. Nulla venenatis elit magna, vel egestas enim euismod vitae.
~~~

:::

## Second scrolling 

Donec lobortis orci in purus accumsan, nec interdum nisl vehicula. Proin vitae nunc turpis. Aenean metus nibh, varius nec iaculis nec, lobortis a neque. Suspendisse mi elit, commodo et orci id, consectetur fermentum massa. Cras molestie, diam ut bibendum finibus, ex est aliquet eros, nec fringilla risus libero non diam.

::: scroll-container 

~~~ scroll-section 5
   Pellentesque rhoncus a urna ut tincidunt. Nunc sit amet gravida erat, ac ultricies tortor. Nam pretium vel tellus quis scelerisque. Nam quam purus, mattis nec metus placerat, malesuada aliquam est. Nulla congue ex velit, porta volutpat nisl venenatis semper. Nunc et elit varius, gravida lacus vel, venenatis libero. Suspendisse vulputate sapien quam, et eleifend neque dignissim quis. Duis eu interdum ex.
~~~ 

~~~ scroll-section 6
  Duis ac volutpat nulla, sed venenatis urna. Phasellus tincidunt nibh imperdiet nisl vestibulum interdum. Etiam vitae maximus tortor. Mauris efficitur accumsan mauris ac bibendum. Nunc sit amet justo id nibh pretium aliquam. Maecenas libero erat, posuere ut est at, imperdiet ultrices urna.
~~~ 
  
~~~ scroll-section 7
 Donec lobortis orci in purus accumsan, nec interdum nisl vehicula. Proin vitae nunc turpis. Aenean metus nibh, varius nec iaculis nec, lobortis a neque. Suspendisse mi elit, commodo et orci id, consectetur fermentum massa. Cras molestie, diam ut bibendum finibus, ex est aliquet eros, nec fringilla risus libero non diam.
~~~
  
~~~ scroll-section 8
  Nullam pellentesque malesuada sem ut porta. Duis porta eu sem at tempor. Aliquam erat volutpat. Sed convallis odio ipsum, sed molestie purus efficitur sed. Vestibulum sit amet luctus nibh. Aenean porttitor venenatis pretium. Proin aliquet libero vel ante consectetur viverra. Nulla venenatis elit magna, vel egestas enim euismod vitae.
~~~

:::

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. 


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. 



