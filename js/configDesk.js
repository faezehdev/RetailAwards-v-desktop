let searchIconH = document.querySelector('.headerSearchIcon')
let searchPop = document.querySelector('.SearchBox-popup')
let closeSearchH = document.querySelector('.SearchBox-popup .CloseSearch')
searchIconH.addEventListener('click',()=>{
    searchPop.classList.add('OpenSearch')
})
closeSearchH.addEventListener('click',()=>{
    searchPop.classList.remove('OpenSearch')
})


const lenis = new Lenis()


function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
let wrapp = document.querySelector('#searchContainer')
  scrollbar = Scrollbar.init(wrapp);

  (function () {
    'use strict';
  
    var controls = {
      input: document.querySelector('[search="input"]'),
      items: document.querySelectorAll('[search="item"]'),
      noResults: document.querySelector('[search="noResults"]'),
      clear: document.querySelector('[search="clear"]'),
      indexedItems: [],
      hasControls: function() {
        return this.input != undefined && this.items != undefined
      }
    }
    controls.noResults.setAttribute('hidden', '');
    // checks for required search components
    if (!controls.hasControls()) return;
  
    // shows/hides no results message
    function toggleNoResultsMessage(searchTerm) {
      // checks if any items are open
      var hasResults = Array.prototype.filter.call(controls.items, function (item) {
        return item.hasAttribute('open');
      })
  
      if (hasResults.length && searchTerm.length > 1) {
        // hide no results message if items are open
        controls.noResults.setAttribute('hidden', '');
      } else if (searchTerm.length > 1) {
        // show no results message
        controls.noResults.removeAttribute('hidden');
        Array.prototype.forEach.call(controls.items, function (item) {
          item.setAttribute('hidden', '')
        })
        return;
      } else {
        // hide no results message
        controls.noResults.setAttribute('hidden', '');
      }
    }
  
    // searches and highlights
    function searchAndHighlight() {
      Array.prototype.forEach.call(controls.items, function (item) {
        item.innerHTML = item.innerHTML.replace(/<mark>([^<]+)<\/mark>/gi, '$1');
      });
  
      var searchTerm = event.target.value.trim().toLowerCase();
  
      if (searchTerm.length > 1) {
        controls.indexedItems.forEach(function (item, i) {
          if (controls.indexedItems[i].indexOf(searchTerm) != -1) {
            controls.items[i].setAttribute('open', true);
            controls.items[i].removeAttribute('hidden'); // removes hidden attribute when deleteing
            controls.items[i].innerHTML = controls.items[i].innerHTML.replace(new RegExp(searchTerm + '(?!([^<]+)?>)', 'gi'), '<mark>$&</mark>');
          } else {
            controls.items[i].removeAttribute('open');
            controls.items[i].setAttribute('hidden', '');
          }
        });
        controls.clear.removeAttribute('hidden');
      } else {
        Array.prototype.forEach.call(controls.items, function (item) {
          item.removeAttribute('open');
          item.removeAttribute('hidden');
        });
        controls.clear.setAttribute('hidden', '');
      }
 
      toggleNoResultsMessage(searchTerm);

    }
  

    // sanitize search result matches
    Array.prototype.forEach.call(controls.items, function (item) {
      controls.indexedItems.push(item.textContent.replace(/\s{2,}/g, ' ').toLowerCase());
    });
    
    controls.input.addEventListener('keydown', function(event) {
      // prevent submit on enter
      if (event.keyCode === 13) 
      {
        event.preventDefault();
        return false;
      }
    })
  
    // input keyup
    controls.input.addEventListener('keyup', function(event) {
      searchAndHighlight();
    });
  
    // clear button click
    controls.clear.addEventListener('click', function() {
      event.target.setAttribute('hidden', '');
      toggleNoResultsMessage('');
      searchAndHighlight();
      controls.input.focus();
    })

  })();