```js 
import {scrolling} from'./components/scrolling.js'  
scrolling(graphs)
```

# Examples of scrolling with observablehq framework


```js 
// graphique initial
function Likert(responses) {
  const map = new Map(responses);
  return {
    order: Array.from(map.keys()),
    offset(I, X1, X2, Z) {
      for (const stacks of I) {
        for (const stack of stacks) {
          const k = d3.sum(stack, (i) => (X2[i] - X1[i]) * (1 - map.get(Z[i]))) / 2;
          for (const i of stack) {
            X1[i] -= k;
            X2[i] -= k;
          }
        }
      }
    }
  };
}

const survey = FileAttachment("data/survey.json").json()

const likert = Likert([
  ["Strongly Disagree", -1],
  ["Disagree", -1],
  ["Neutral", 0],
  ["Agree", 1],
  ["Strongly Agree", 1]
])

```



```js 
//ici je construit mon graph echart
const echart1 = html`<div style="width: ${width}px; height:400px;"></div>`

const myChart = echarts.init(echart1);
myChart.setOption({
  title: {
    text: 'Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]

})


```




```js 
// ici on positionne l'ensemble des graphiques
const graphs= {'graphiqueinitial': Plot.plot({x: {tickFormat: Math.abs},color: {domain: likert.order, scheme: "RdBu", legend: true},  marks: [Plot.barX(survey, Plot.groupZ({x: "count"}, {fy: "Question", fill: "Response", ...likert})), Plot.ruleX([0]) ]}), 
               'premiergraphique': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
               '2': Plot.barY([9, 4, 8, 1, 11, 3, 4, 2, 7, 5]).plot(),
               '3': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
               '4': Plot.barY([1, 2, 4, 8, 16, 8, 4, 2, 1, 0]).plot(),
               '5': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
               '6': Plot.barY([1, 2, 4, 8, 16, 8, 4, 2, 1, 0]).plot(),
               '7': Plot.dot({ length: 100 }, { x: Math.random, y: Math.random }).plot(),
               '8': Plot.barY([0.5, 1.5, 0.5, 0, -0.5, -1.5, -0.5, 0, 0.5, 1.5]).plot(),
               'test_svg': await FileAttachment("images/carte.svg").image({style: `width: ${width/2}px;`}),
               'test_echart':  echart1,
}
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. 




## First scrolling


  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. 


  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin consequat leo ac vestibulum. Aenean eget turpis in arcu pharetra viverra non eget erat. Donec scelerisque dui eu sapien tempor tincidunt. Ut a ante luctus, efficitur tellus at, feugiat arcu. Vestibulum eget turpis faucibus, fringilla urna non, dapibus metus. Sed sollicitudin vehicula cursus. Pellentesque rhoncus a urna ut tincidunt. 


::: scroll-container 

~~~ scroll-section premiergraphique
   Pellentesque rhoncus a urna ut tincidunt. Nunc sit amet gravida erat, ac ultricies tortor. Nam pretium vel tellus quis scelerisque. Nam quam purus, mattis nec metus placerat, malesuada aliquam est. Nulla congue ex velit, porta volutpat nisl venenatis semper. Nunc et elit varius, gravida lacus vel, venenatis libero. Suspendisse vulputate sapien quam, et eleifend neque dignissim quis. Duis eu interdum ex.
~~~ 

~~~ scroll-section 2
  Duis ac volutpat nulla, sed venenatis urna. Phasellus tincidunt nibh imperdiet nisl vestibulum interdum. Etiam vitae maximus tortor. Mauris efficitur accumsan mauris ac bibendum. Nunc sit amet justo id nibh pretium aliquam. Maecenas libero erat, posuere ut est at, imperdiet ultrices urna.
~~~ 

~~~ scroll-section 2
 Je commente deux fois le même graphique
~~~  


~~~ scroll-section test_svg
 Ici j'ai rajouté une image svg. 
~~~
  
~~~ scroll-section 4
  Nullam pellentesque malesuada sem ut porta. Duis porta eu sem at tempor. Aliquam erat volutpat. Sed convallis odio ipsum, sed molestie purus efficitur sed. Vestibulum sit amet luctus nibh. Aenean porttitor venenatis pretium. Proin aliquet libero vel ante consectetur viverra. Nulla venenatis elit magna, vel egestas enim euismod vitae.
~~~

~~~ scroll-section test_echart
  Ici, j'ajoute un graphique ECharts. 
~~~

:::

## Second scrolling 

Donec lobortis orci in purus accumsan, nec interdum nisl vehicula. Proin vitae nunc turpis. Aenean metus nibh, varius nec iaculis nec, lobortis a neque. Suspendisse mi elit, commodo et orci id, consectetur fermentum massa. Cras molestie, diam ut bibendum finibus, ex est aliquet eros, nec fringilla risus libero non diam.

::: scroll-container 

~~~ scroll-section graphiqueinitial
   Ici j'ai rajouté un très joli graphique réalisé avec observable plot
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



