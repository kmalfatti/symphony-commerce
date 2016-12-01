
var products;
$(document).ready(function() {
    $.ajax({
        url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js',
        dataType: 'json',
        success: function(data){
            console.log(data)
        },
        error: function(err){
            console.log('error: ', err)
            $('.products').append(
                '<h3>Error</h3>',
                '<p>Sorry, something went wrong while processing your request.</p>',
                '<p>Please try again later.</p>'
                ).show('slow')
        }
    }).done(function(data){
      $('#pageTitle').append(data.pageTitle)
      $('#extraInfo').append(data.extraInfo)
      products = data.products
      products.forEach(function(item){
        $('.products').append('<tr><td class="name">'+item.name + '<img src=https:' + item.mainImage.ref + '><td class="price">$' + (item.defaultPriceInCents/100).toFixed(2) + '</td>' + '<td class="quantity"><div class="plus-minus"><button class="minus" onClick=subtract.call(this)>-</button><button class="plus" onClick=add.call(this)>+</button></div><p> 0 </p><button>Add to cart</button></td></tr>')
      })
    })
  })


function subtract(){
  var count = Number($(this).parent().next().text())
  if (count>0){
    $(this).parent().next().text(count-1)
  }
}

function add(){
  var count = Number($(this).parent().next().text())
  $(this).parent().next().text(count+1)
}

function sort(){
  if ($('select').val()==('name')){
    var sorted = []
    products.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;})
    $('.products').empty()
    products.forEach(function(item){
        $('.products').append('<tr><td class="name">'+item.name + '<img src=https:' + item.mainImage.ref + '><td class="price">$' + (item.defaultPriceInCents/100).toFixed(2) + '</td>' + '<td class="quantity"><div class="plus-minus"><button class="minus" onClick=subtract.call(this)>-</button><button class="plus" onClick=add.call(this)>+</button></div><p> 0 </p><button>Add to cart</button></td></tr>')
    })
  }
  if ($('select').val()==('price')){
    products.sort(function(a, b) {
      return a.defaultPriceInCents - b.defaultPriceInCents;
    });
    $('.products').empty()
    products.forEach(function(item){
        $('.products').append('<tr><td class="name">'+item.name + '<img src=https:' + item.mainImage.ref + '><td class="price">$' + (item.defaultPriceInCents/100).toFixed(2) + '</td>' + '<td class="quantity"><div class="plus-minus"><button class="minus" onClick=subtract.call(this)>-</button><button class="plus" onClick=add.call(this)>+</button></div><p> 0 </p><button>Add to cart</button></td></tr>')
    })
  }
  if ($('select').val()==('date')){
    products.sort(function(a, b) {
      return a.createdAt - b.createdAt;
    });
    $('.products').empty()
    products.forEach(function(item){
        $('.products').append('<tr><td class="name">'+item.name + '<img src=https:' + item.mainImage.ref + '><td class="price">$' + (item.defaultPriceInCents/100).toFixed(2) + '</td>' + '<td class="quantity"><div class="plus-minus"><button class="minus" onClick=subtract.call(this)>-</button><button class="plus" onClick=add.call(this)>+</button></div><p> 0 </p><button>Add to cart</button></td></tr>')
    })
  }
}

