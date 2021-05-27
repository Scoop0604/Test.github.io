
mapboxgl.accessToken = 'pk.eyJ1IjoieXVnZXdhbmciLCJhIjoiY2trNWQ3dG1nMDlzcTJ2bW0wczQ2a3RmYiJ9.EEnVWM_3gLV8fBJkpXR0tw';


//add description to each station
var geojson = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.435, 39.9422]
      },
      'properties': {
        'title': '<h3>DongZhiMen Station</h3><p>located near some shopping malls and many places visitors like to go to.</p>'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.462, 39.9084]
      },
      'properties': {
        'title': '<h3>GuoMao Station</h3><p>a very famous shopping mall with many companies around</p>'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.375, 39.9073]
      },
      'properties': {
        'title': '<h3>XiDan Station</h3><p>located near many shopping malls, especially popular among young people</p>'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.436,39.9086]
      },
      'properties': {
        'title': '<h3>ianGuoMen Station</h3>J<p>near many famous shopping centres, lot of companies around</p>'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.3536, 39.9415]
      },
      'properties': {
        'title': '<h3>XiZhiMen Station</h3><p>near some zoos and places for people to hang out</p>'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.428,39.8457]
      },
      'properties': {
        'title': '<h3>SongJiaZhuang Station</h3><p>one of largest transportation junction for people who live in nearby cities</p>'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.318,39.976]
      },
      'properties': {
        'title': '<h3>HaiDianHuangZhuang Station</h3><p>near many famous universities and junior schools</p>'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.357, 39.9072]
      },
      'properties': {
        'title': '<h3>FuXingMen Station</h3><p>centre of Beijing, near many historial landmarks</p>'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.306, 40.0531]
      },
      'properties': {
        'title': '<h3>XiErQi Station</h3><p>a large transportation junction</p>'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [116.374, 39.8998]
      },
      'properties': {
        'title': '<h3>XuanWuMen Statio</h3><p>centre of Beijing, near many historial landmarks</p>'
      }
    },

    
  ]
};

var map_v = new mapboxgl.Map({
      container: 'map_v', // container id
      style: 'mapbox://styles/yugewang/ckoip7ylw0sxr18t4c9jru2w6', // Put your mapbox style ID here
      center: [116.340,39.913], // starting position [lng, lat]
      zoom: 10.8 // starting zoom
  });   
  

// add markers to map
geojson.features.forEach(function (marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add it to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          '<h3>' +
            marker.properties.title +
            '</h3><p>' 
        )
    )
    .addTo(map_v);
}); 

map_v.on('load', function () {
///////////////////////////////////////////////////////////house price by levels
map_v.addLayer({
id: 'house_price_1',
type: 'circle',

source: {
type: 'vector',
url: 'mapbox://yugewang.0ftoows5'
},
'source-layer': 'r1-9zkvts',
paint: {
'circle-radius': {
'base': 4.5,
'stops': [
   [12, 4.5],
   [22, 180]
]},
"circle-color": {
"property": "unitPrice",
"type":"exponential",
"stops": [
[30000, '#6ceb23'],
      [60000, '#ebe3a2'],
      [90000, '#e28229'],
      [120000, '#f02a10'],
      [150000, '#ad4039'],
],

},
'circle-opacity': 0
},
});
///////////////////////////////////////////////////////////
map_v.addLayer({
id: 'house_price_2',
type: 'circle',

source: {
type: 'vector',
url: 'mapbox://yugewang.bw4vj07o'
},
'source-layer': 'r2-2rxn43',
paint: {
'circle-radius': {
'base': 4.5,
'stops': [
   [12, 4.5],
   [22, 180]
]},
"circle-color": {
"property": "unitPrice",
"type":"exponential",
"stops": [
[30000, '#6ceb23'],
      [60000, '#ebe3a2'],
      [90000, '#e28229'],
      [120000, '#f02a10'],
      [150000, '#ad4039'],
],

},
'circle-opacity': 0
},
});


///////////////////////////////////////////////////////////
map_v.addLayer({
id: 'house_price_3',
type: 'circle',

source: {
type: 'vector',
url: 'mapbox://yugewang.8wuq56al'
},
'source-layer': 'r3-ct059u',
paint: {
'circle-radius': {
'base': 4.5,
'stops': [
   [12, 4.5],
   [22, 180]
]},
"circle-color": {
"property": "unitPrice",
"type":"exponential",
"stops": [
[30000, '#6ceb23'],
      [60000, '#ebe3a2'],
      [90000, '#e28229'],
      [120000, '#f02a10'],
      [150000, '#ad4039'],
],

},
'circle-opacity': 0
},
});
///////////////////////////////////////////////////////////
map_v.addLayer({
id: 'house_price_4',
type: 'circle',

source: {
type: 'vector',
url: 'mapbox://yugewang.cqbz0cda'
},
'source-layer': 'r4-2iij6t',
paint: {
'circle-radius': {
'base': 4.5,
'stops': [
   [12, 4.5],
   [22, 180]
]},
"circle-color": {
"property": "unitPrice",
"type":"exponential",
"stops": [
[30000, '#6ceb23'],
      [60000, '#ebe3a2'],
      [90000, '#e28229'],
      [120000, '#f02a10'],
      [150000, '#ad4039'],
],

},
'circle-opacity': 0
},
});

///////////////////////////////////////////////////////////


  map_v.addLayer({
id: 'house_price_5',
type: 'circle',

source: {
  type: 'vector',
  url: 'mapbox://yugewang.bthlaulh'
},
'source-layer': 'beijing-6532w7',
paint: {
  'circle-radius': {
     'base': 4.5,
     'stops': [
         [12, 4.5],
         [22, 180]
      ]},
      "circle-color": {
  "property": "unitPrice",
  "type":"exponential",
  "stops": [
      [30000, '#6ceb23'],
      [60000, '#ebe3a2'],
      [90000, '#e28229'],
      [120000, '#f02a10'],
      [150000, '#ad4039'],

  ]
  ,

},
      'circle-opacity': 0
      
    },


});

});

//Event listener for layer switch
document.getElementById("one").addEventListener("click", function(){
map_v.setPaintProperty('house_price_1','circle-opacity',0.95);
map_v.setPaintProperty('house_price_2','circle-opacity',0);
map_v.setPaintProperty('house_price_3','circle-opacity',0);
map_v.setPaintProperty('house_price_4','circle-opacity',0);
map_v.setPaintProperty('house_price_5','circle-opacity',0);
});

document.getElementById("two").addEventListener("click", function(){
map_v.setPaintProperty('house_price_1','circle-opacity',0);
map_v.setPaintProperty('house_price_2','circle-opacity',0.95);
map_v.setPaintProperty('house_price_3','circle-opacity',0);
map_v.setPaintProperty('house_price_4','circle-opacity',0);
map_v.setPaintProperty('house_price_5','circle-opacity',0);
});

document.getElementById("three").addEventListener("click", function(){
map_v.setPaintProperty('house_price_1','circle-opacity',0);
map_v.setPaintProperty('house_price_2','circle-opacity',0);
map_v.setPaintProperty('house_price_3','circle-opacity',0.95);
map_v.setPaintProperty('house_price_4','circle-opacity',0);
map_v.setPaintProperty('house_price_5','circle-opacity',0);
});

document.getElementById("four").addEventListener("click", function(){
map_v.setPaintProperty('house_price_1','circle-opacity',0);
map_v.setPaintProperty('house_price_2','circle-opacity',0);
map_v.setPaintProperty('house_price_3','circle-opacity',0);
map_v.setPaintProperty('house_price_4','circle-opacity',0.95);
map_v.setPaintProperty('house_price_5','circle-opacity',0);
});

document.getElementById("five").addEventListener("click", function(){
map_v.setPaintProperty('house_price_1','circle-opacity',0);
map_v.setPaintProperty('house_price_2','circle-opacity',0);
map_v.setPaintProperty('house_price_3','circle-opacity',0);
map_v.setPaintProperty('house_price_4','circle-opacity',0);
map_v.setPaintProperty('house_price_5','circle-opacity',1);
});

var chapters = { 
'overview': {
bearing: 0,
center: [116.340,39.913],
zoom: 11,
pitch: 0
},
//HDHZ
'HDHZ': {
bearing: -26.50,
center: [116.318,39.976],
zoom: 12,
pitch: 30
},
'SJZ': {//SJZ
duration: 6000,
center: [116.428,39.8457],
bearing: -26.50,
zoom: 12,
pitch: 30
},
'XWM': { //XWM
bearing: -26.50,
center: [116.374, 39.8998],
zoom: 12,
speed: 0.6,
pitch: 30
},


};

// On every scroll event, check which element is on screen
window.onscroll = function () {
var chapterNames = Object.keys(chapters);
for (var i = 0; i < chapterNames.length; i++) {
var chapterName = chapterNames[i];
if (isElementOnScreen(chapterName)) {
setActiveChapter(chapterName);
break;
}
}
};

var activeChapterName = 'overview';
function setActiveChapter(chapterName) {
if (chapterName === activeChapterName) return;

map_v.flyTo(chapters[chapterName]);

document.getElementById(chapterName).setAttribute('class', 'active');
document.getElementById(activeChapterName).setAttribute('class', '');

activeChapterName = chapterName;
}

function isElementOnScreen(id) {
var element = document.getElementById(id);
var bounds = element.getBoundingClientRect();
return bounds.top < window.innerHeight && bounds.bottom > 0;
}

////////////////zingchart
var HDHZ = [122, 80,46];
var SJZ = [61, 62, 76];
var XWM = [102, 101, 153];
var JGM = [128, 100, 72];

var myConfig = {
type: 'bar',
"background-color":"#FEFCFF",  
plot: {
 animation:{
   effect: 4,
   method: 0,
speed: 500,
 sequence: 1,
 placement:"middle",
}
},
"scale-x": { 
values:["1.5km","5.0km", "district"]},
plotarea:{
  margin: "dynamic"
},
scaleY: {
values: '0:150:15'
},
series: [
{
values: null,
"background-color":"#ccc"  
}
]
};

zingchart.render({
id: 'myChart',
data: myConfig,
height: 250,
width: 230,
opacity: 0.5
});

var select = document.querySelector('select[name="chart-selector"]');
// Add event listener to fire on selection
select.addEventListener('change', function() {
if (event.target.value == 'HDHZ') {
zingchart.exec('myChart', 'setseriesvalues', {
plotindex: 0,
values: HDHZ
});} 
else if (event.target.value == 'SJZ') {
zingchart.exec('myChart', 'setseriesvalues', {
plotindex: 0,
values: SJZ
});} 
else if (event.target.value == 'XWM') {
zingchart.exec('myChart', 'setseriesvalues', {
plotindex: 0,
values: XWM
});} 
else if (event.target.value == 'JGM') {
zingchart.exec('myChart', 'setseriesvalues', {
plotindex: 0,
values: JGM
});} 

else {
alert('Please Select An Option');
}
});