/* 
  АНИМАЦИЯ ПРИ СКРОЛЛЕ
  когда ты доскролишь до элемента с классом data-anim-on-scroll,
  ему добавиться класс _animate, к котрому можно привезываться, 
  уже есть примеры ._bottom_opacity, ._top_opacity что
*/

function anim_on_scroll() {
   const animItems = document.querySelectorAll("[data-anim-on-scroll]");
   if (animItems.length > 0) {
      window.addEventListener("scroll", animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
               animItem.classList.add("_animate");
            }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }

      setTimeout(() => {
         animOnScroll();
      }, 300);
   }
}

function animation_attribute() {
   /* data-delay */
   const delayElements = document.querySelectorAll("[data-delay]");
   delayElements.forEach((el) => {
      if (el.getAttribute("data-delay")) {
         el.style.transitionDelay = el.getAttribute("data-delay") + "s";
         el.style.animationDelay = el.getAttribute("data-delay") + "s";
      }
   });
   /* data-duration */
   const durationElements = document.querySelectorAll("[data-duration]");
   durationElements.forEach((el) => {
      if (el.getAttribute("data-duration")) {
         el.style.transitionDuration = el.getAttribute("data-duration") + "s";
         el.style.animationDuration = el.getAttribute("data-duration") + "s";
      }
   });
}

function wave_text() {
   const animatedTexts = document.querySelectorAll("[data-animation-letters]");
   animatedTexts.forEach((animatedText) => {
      let delay = animatedText.getAttribute("data-delay");
      const delayTimeInMs = delay ? +delay * 1000 : 0;
      let customeDuration = animatedText.getAttribute("data-duration");
      const duration = customeDuration ? customeDuration : 0.05;

      const text = animatedText.textContent.trim();
      animatedText.textContent = "";

      setTimeout(() => {
         for (let i = 0; i < text.length; i++) {
            let letter = document.createElement("span");
            if (text[i] === " ") {
               letter.innerHTML = "&nbsp;";
            } else {
               letter.textContent = text[i];
               letter.style.animationDelay = `${i * duration}s`;
            }
            animatedText.appendChild(letter);
         }

         animatedText.style.opacity = 1;
      }, delayTimeInMs);
   });
}

function typing_text() {
   const typingTexts = document.querySelectorAll("[data-typing-text]");

   typingTexts.forEach((element) => {
      let delay = element.getAttribute("data-delay");
      let duration = element.getAttribute("data-duration");
      const delayTimeInMs = delay ? +delay * 1000 : 0;
      const durationForType = duration ? +duration : 1.25;
      const textEl = element.querySelector("._typing-animation__text");
      const cursor = element.querySelector("._typing-animation__cursor");
      const text = textEl.textContent.trim();
      textEl.textContent = "";
      setTimeout(() => {
         let index = 0;
         let line = "";

         function type() {
            const character = text[index];
            if (character === "\n" || textEl.clientWidth < textEl.scrollWidth) {
               textEl.innerHTML = `${line}`;
            }

            line += character;
            textEl.innerHTML = `${line}`;
            index++;

            if (index === text.length) {
               cursor.classList.add("none");
               return;
            }

            setTimeout(type, Math.floor(Math.random() * durationForType) + 25);
         }

         setTimeout(type, Math.floor(Math.random() * durationForType) + 25);
      }, delayTimeInMs);
   });
}

/* COUNT ANIMATION */
function digitsCountersInit(digitsCountersItems) {
   let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
   if (digitsCounters.length) {
      digitsCounters.forEach((digitsCounter) => {
         digitsCountersAnimate(digitsCounter);
      });
   }
}

function digitsCountersAnimate(digitsCounter) {
   let startTimestamp = null;
   const duration = parseInt(digitsCounter.dataset.duration) ? parseInt(digitsCounter.dataset.duration * 1000) : 1000;
   const dataCount = digitsCounter.dataset.count;
   const endValue = dataCount ? dataCount.replace(/\s/g, "") : digitsCounter.innerHTML.replace(/\s/g, "");
   const spaceIndex = dataCount ? dataCount.indexOf(" ") : -1;
   const separator = digitsCounter.dataset.thousandsSeparator || " ";

   const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * parseInt(endValue));
      digitsCounter.innerHTML = numberWithSeparator(currentCount.toString(), separator);
      if (progress < 1) {
         window.requestAnimationFrame(step);
      } else {
         digitsCounter.innerHTML = numberWithSeparator(parseInt(endValue).toString(), separator);
      }
   };

   window.requestAnimationFrame(step);
}

function numberWithSeparator(x, separator) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

const options = {
   threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         const targetElement = entry.target;
         const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
         if (digitsCountersItems.length) {
            digitsCountersInit(digitsCountersItems);
         } else {
            digitsCountersAnimate(targetElement);
         }
         observer.unobserve(targetElement);
      }
   });
}, options);

const digitsCountersItems = document.querySelectorAll("[data-digits-counter]");
if (digitsCountersItems.length) {
   digitsCountersItems.forEach((item) => {
      observer.observe(item);
   });
}

anim_on_scroll();
animation_attribute();
