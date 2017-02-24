import Backbone from 'backbone'


export const EtsyProductModel = Backbone.Model.extend({

})

export const EtsyProductCollection = Backbone.Collection.extend({
  initialize: function(){

  },

  parse: function(rawServerRes){
    return rawServerRes.results
  },

  url: 'https://openapi.etsy.com/v2/listings/active.js?&includes=Images,Shop&api_key=w02bjkqarn1wzl1lv3byfs7b&callback=?',

  model: EtsyProductModel
})



export const EtsySingleProductModel = Backbone.Model.extend({

})

export const EtsySingleProductCollection = Backbone.Collection.extend({
  initialize: function(shopID){
    this.url = `https://openapi.etsy.com/v2/listings/${shopID}.js?&includes=Images,Shop&api_key=w02bjkqarn1wzl1lv3byfs7b&callback=?`
  },

  parse: function(rawServerRes){
    return rawServerRes.results
  },

  url: 'https://openapi.etsy.com/v2/listings/active.js?&includes=Images,Shop&api_key=w02bjkqarn1wzl1lv3byfs7b&callback=?',

  model: EtsyProductModel
})



export const EtsySearchModel = Backbone.Model.extend({

})

export const EtsySearchCollection = Backbone.Collection.extend({
  initialize: function(inputKeyword){
    console.log(inputKeyword, 'search val')
    // this.url = `https://openapi.etsy.com/v2/listings/.js?&includes=Images,Shop&api_key=w02bjkqarn1wzl1lv3byfs7b&keywords=${inputKeyword}&callback=?`
    this.url = ` https://openapi.etsy.com/v2/listings/active.js?&includes=Images,Shop&api_key=aavnvygu0h5r52qes74x9zvo&keywords=${inputKeyword}&callback=?`
  },

  parse: function(rawServerRes){
    return rawServerRes.results
  },

  url: 'https://openapi.etsy.com/v2/listings/active.js?&includes=Images,Shop&api_key=w02bjkqarn1wzl1lv3byfs7b&callback=?',

  model: EtsyProductModel
})

// url: 'https://openapi.etsy.com/v2/listings/active.js?&includes=Images,Shop&api_key=w02bjkqarn1wzl1lv3byfs7b&callback=?&listing_id=${shopID}'
