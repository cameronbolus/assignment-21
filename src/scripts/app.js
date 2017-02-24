//https://openapi.etsy.com/v2/listings/active.js?api_key=w02bjkqarn1wzl1lv3byfs7b

import $ from 'jquery'
import Backbone from 'backbone'
import {EtsyProductCollection} from './_models.js'
import {EtsySingleProductCollection} from './_models.js'
import {MultiEtsyView} from './_views.js'
import {SingleEtsyView} from './_views.js'
import {EtsySearchCollection} from './_models.js'
import {EtsySearchView} from './_views.js'

//
// var productSearch = document.querySelector('.search-button')
//
// productSearch.addEventListener('click', function(event){
//   var searchbarPlacement = document.querySelector('.searchbar')
//   var searchBarValue = searchbarPlacement.value
//     console.log(searchBarValue)
//     window.location.hash = searchBarValue
// })

const AppRouter = Backbone.Router.extend({
  initialize: function(){
    console.log('routing!!!!!')
    let searchViewInstance = new EtsySearchView
    Backbone.history.start()
  },

  routes : {
    '' : 'showHomePageProductList',
    'details/:listing_id' : 'showProductDetails',
    'keywords/:keywords' : 'showSearchProducts'
  },

  showSearchProducts: function(inputKeyword){
    let searchProducts = new EtsySearchCollection(inputKeyword)

    searchProducts.fetch().then(function(serverRes){
      console.log(serverRes)
      let etsyProductArray = serverRes.results
      let viewInstance = new MultiEtsyView()

      viewInstance.render(etsyProductArray)
    })
  },

  showHomePageProductList: function(){

    let productCollection = new EtsyProductCollection()
    productCollection.fetch().then(function(serverRes){
      let etsyProductArray = serverRes.results
      let viewInstance = new MultiEtsyView()

      viewInstance.render(etsyProductArray)
    })
  },

  showProductDetails: function(shopID){
    let singleProductDetails = new EtsySingleProductCollection(shopID)
    singleProductDetails.fetch().then(function(serverRes){
      let etsyProductObj = serverRes.results[0]
      let viewInstance = new SingleEtsyView()
      viewInstance.render(etsyProductObj)
    })
  }

})

// window.addEventListener('hashchange', AppRouter )

const myEtsyApp = new AppRouter
