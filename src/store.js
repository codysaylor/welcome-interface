import es6Promise from 'es6-promise';
es6Promise.polyfill();
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    inputs: [{val: ''}, {val: ''}, {val: ''}, {val: ''}],
    code: '',
    comp: 'app-input',
    codeFull: false,
    error: false,
    reps: [
      {
        code: '1111',
        name: 'Ashley Campbell',
        phone: '(740) 753-9100 x2112',
        email: 'ashley.campbell@lehighoutfitters.com',
        image: 'http://info.rockybrands.com/rs/018-APH-439/images/bdr-campbell-ashley.jpg'
      },
      {
        code: '2222',
        name: 'Becky Reynolds',
        phone: '(740) 753-9100 x2090',
        email: 'rebecca.reynolds@lehighoutfitters.com',
        image: 'http://info.rockybrands.com/rs/018-APH-439/images/reynolds.jpg'
      },
      {
        code: '3333',
        name: 'Ashley Felts',
        phone: '(740) 753-9100 x2064',
        email: 'ashley.felts@lehighoutfitters.com',
        image: 'http://info.rockybrands.com/rs/018-APH-439/images/bdr-felts-ashley.jpg'
      },
      {
        code: '4444',
        name: 'David Tokie',
        phone: '(740) 753-9100 x2159',
        email: 'david.tokie@LehighOutfitters.com',
        image: 'http://d1jdomzv2hp689.cloudfront.net/document/data/118_1099doc.jpg'
      },
      {
        code: '5555',
        name: 'Colleen Binkley',
        phone: '(740) 753-9100 x2121',
        email: 'colleen.binkley@lehighoutfitters.com',
        image: 'http://info.rockybrands.com/rs/018-APH-439/images/binkley.jpg'
      }
    ],
    lead: {
      name: 'John'
    }
  }
});
