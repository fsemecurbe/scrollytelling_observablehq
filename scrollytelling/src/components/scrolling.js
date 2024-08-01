export function scrolling(graphs) {
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
  }





