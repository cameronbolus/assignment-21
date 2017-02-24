import Backbone from 'backbone'

export const MultiEtsyView = Backbone.View.extend({
  el: '.items-catalog',

  events: {
    "click .thumbnail" : "handleThumbnailClick",
  },

  handleThumbnailClick: function(evt){
    console.log('click')
    let clickedProduct = evt.currentTarget
    window.location.hash = `details/${clickedProduct.dataset.pid}`


  },

  _productTemplate: function(etsyModel){
    // console.log('look here', etsyModel)
    // console.log("hey this is it -->>>",etsyModel.Images)
    // if(etsyModel.Images[0].url_fullxfull === 'undefinded'){
    //   etsyModel.Images[0].url_fullxfull = ''
    // }


    let newStrng = etsyModel.map(function(model){
      if(typeof model.title === 'undefined'){
        return ''
      }
      let titleDisplay = model.title.slice(0,50)

      if(titleDisplay.length >= 40){
        titleDisplay += '...'
      }

      return `
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail" data-pid="${model.listing_id}">
              <img src="${model.Images[0].url_170x135}" >
              <div class="caption">
                <h5>${titleDisplay}</h5>
                <div class="shopname-and-price">
                  <div class="shopname"><h5>${model.Shop.shop_name}</h5></div>
                  <div class="price">$${model.price}</div>
                </div>
              </div>
            </div>
          </div>
      `
    }).join('')

    return newStrng


  },

  render: function(etsyModel){
    this.el.innerHTML = this._productTemplate(etsyModel)
  }
})

export const SingleEtsyView = Backbone.View.extend({
  el: '.items-catalog',

    _singleProductTemplate: function(model){
      console.log(model)

        return `
            <div class="pic-and-desc-container">
              <div class="main-item-pic">
                <img src="${model.Images[0].url_fullxfull}">
              </div>
              <div class="description">
                <div><h3>${model.title}</h3></div>
                <br>
                <br>
                <div class="price-askquestions">
                  <div><h4>$${model.price}</h4></div>
                  <div class="question-button">Ask a question</div>
                </div>
                <br>
                <br>
                <br>
                <br>
                <div class="add-button">Add to cart</div>
                <br>
                <div class="buy-button">Buy it now</div>
              </div>
            </div>
            <div class="product-description">
              <p>$${model.description}</p>
            </div>
        `
    },
  render: function(model){
    this.el.innerHTML = this._singleProductTemplate(model)
  }
})

export const EtsySearchView = Backbone.View.extend({
  el: '.header',

  events: {
    "submit .logo-searchbar" : "handleSearchClick",
  },

  handleSearchClick: function(evt){
    console.log('woerkking')
    evt.preventDefault()
    let inputVal = evt.target[0].value
    console.log('val', evt)
    console.log(inputVal)
    // let clickedProduct = evt.currentTarget
    window.location.hash = `keywords/${inputVal}`
    evt.target.reset()
  },


})
