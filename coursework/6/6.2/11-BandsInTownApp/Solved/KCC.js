
  function kccSkuSearch(sku) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "http://kcc-epim-proxy-dev.us-e1.cloudhub.io/query?SKU=123";
    // var queryURL = "http://kcc-epim-proxy-dev.us-e1.cloudhub.io/query?SKU" + sku +"";

    $.ajax({
      url: queryURL,
      method: "GET",
      async: true,
      crossDomain: true,
      headers: {
        client_id: 'c343c8e7ac1c462cb0f9c215daa0e4f5',
        client_secret: '74342f65b2B54de49ca730d7A25B8323'
    },
    contentType: 'application/json; charset=utf-8',
    }).done(function(response) {

      // Printing the entire object to console
      console.log(response);

      // Constructing HTML containing the artist information
      var skuName = $("<h1>").text(response.name); // response.ReferecedBy.AMAZON_PRODUCT_TITLE
      var skuURL = $("<a>").attr("href", response.url).append(skuName);
      var skuImage = $("<img>").attr("src", response.thumb_url); // response.ReferecedBy.PRIMARY_IMAGE_ASSET_URL
      var skuSaleStatus = $("<h2>").text(response.tracker_count + " fans tracking this artist"); // response.ReferecedBy.SALES_DIST_STATUS
      var skuDescription = $("<h2>").text(response.upcoming_event_count + " upcoming events");  // response.ReferecedBy.DESCRIPTION
      var skuPrice = $("<a>").attr("href", response.url).text("See Tour Dates"); //response.ReferecedBy.GENERAL_FLOOR_PRICE

      // Empty the contents of the artist-div, append the new artist content
      $("#sku-div").empty();
      $("#sku-div").append(skuName, skuImage, skuSaleStatus, skuDescription, skuPrice);
    });
  }

  // Event handler for user clicking the SKU input button
  $("#sku-input").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the SKU 
    var inputSku = $("#sku-input").val().trim();

    // Running the kccSkuSearch function (passing in the SKU as an argument)
    kccSkuSearch(inputSku);
  });
