export const getImage = (name) => {
  const found = imagesAddress.find((image) => image.name === name);
  return found ? found.image : null;
};

export const imagesAddress = [
  {
    name: 'angular',
    image: require(`../assets/restaurants/angular.jpg`),
  },
  {
    name: 'esthers',
    image: require(`../assets/restaurants/esthers.jpg`),
  },
  {
    name: 'babythai',
    image: require(`../assets/restaurants/babythai.jpg`),
  },
  {
    name: 'bateaurouge',
    image: require(`../assets/restaurants/bateaurouge.jpg`),
  },
  {
    name: 'beans',
    image: require(`../assets/restaurants/beans.jpg`),
  },
  {
    name: 'beijing',
    image: require(`../assets/restaurants/beijing.jpg`),
  },
  {
    name: 'bhangra',
    image: require(`../assets/restaurants/bhangra.jpg`),
  },
  {
    name: 'burgerama',
    image: require(`../assets/restaurants/burgerama.jpg`),
  },
  {
    name: 'cancun',
    image: require(`../assets/restaurants/cancun.jpg`),
  },
  {
    name: 'carthage',
    image: require(`../assets/restaurants/carthage.jpg`),
  },
  {
    name: 'currygalore',
    image: require(`../assets/restaurants/currygalore.jpg`),
  },
  {
    name: 'curryup',
    image: require(`../assets/restaurants/curryup.jpg`),
  },
  {
    name: 'czechpoint',
    image: require(`../assets/restaurants/czechpoint.jpg`),
  },
  {
    name: 'dragon',
    image: require(`../assets/restaurants/dragon.jpg`),
  },
  {
    name: 'flavia',
    image: require(`../assets/restaurants/flavia.jpg`),
  },
  {
    name: 'jeeves',
    image: require(`../assets/restaurants/jeeves.jpg`),
  },
  {
    name: 'khartoum',
    image: require(`../assets/restaurants/khartoum.jpg`),
  },
  {
    name: 'kohlhaus',
    image: require(`../assets/restaurants/babythai.jpg`),
  },
  {
    name: 'littlepigs',
    image: require(`../assets/restaurants/babythai.jpg`),
  },
  {
    name: 'littleprague',
    image: require(`../assets/restaurants/littleprague.jpg`),
  },
  {
    name: 'luigis',
    image: require(`../assets/restaurants/luigis.jpg`),
  },
  {
    name: 'naansequitur',
    image: require(`../assets/restaurants/naansequitur.jpg`),
  },
  {
    name: 'north',
    image: require(`../assets/restaurants/north.jpg`),
  },
  {
    name: 'pedros',
    image: require(`../assets/restaurants/pedros.jpg`),
  },
  {
    name: 'pizza76',
    image: require(`../assets/restaurants/pizza76.jpg`),
  },
  {
    name: 'robatayaki',
    image: require(`../assets/restaurants/robatayaki.jpg`),
  },
  {
    name: 'sakura',
    image: require(`../assets/restaurants/sakura.jpg`),
  },
  {
    name: 'sallys',
    image: require(`../assets/restaurants/sallys.jpg`),
  },
  {
    name: 'satay',
    image: require(`../assets/restaurants/satay.jpg`),
  },
  {
    name: 'saucy',
    image: require(`../assets/restaurants/saucy.jpg`),
  },
  {
    name: 'shandong',
    image: require(`../assets/restaurants/shandong.jpg`),
  },
  {
    name: 'speisewagen',
    image: require(`../assets/restaurants/speisewagen.jpg`),
  },
  {
    name: 'superwonton',
    image: require(`../assets/restaurants/superwonton.jpg`),
  },
  {
    name: 'taqueria',
    image: require(`../assets/restaurants/taqueria.jpg`),
  },
  {
    name: 'thick',
    image: require(`../assets/restaurants/thick.jpg`),
  },
  {
    name: 'tofuparadise',
    image: require(`../assets/restaurants/tofuparadise.jpg`),
  },
  {
    name: 'wheninrome',
    image: require(`../assets/restaurants/wheninrome.jpg`),
  },
  {
    name: 'babythai',
    image: require(`../assets/restaurants/babythai.jpg`),
  },
  {
    name: 'wholetamale',
    image: require(`../assets/restaurants/wholetamale.jpg`),
  },
  {
    name: 'zardoz',
    image: require(`../assets/restaurants/zardoz.jpg`),
  },
];
