// Hide functions used to hide titles until user enters a date
$("#cryptoTitle").hide();
$("#wsjTitle").hide();
$("#BBCTitle").hide();
$("#article-card").hide();
$("#WSJ-card-section").hide();
$("#BBC-card-section").hide();
$("#sampleCurrencyData").hide();   


// On click function triggered by the user after they enter a date
$("#search-button").on("click", function(event) {
    
    // Formating the userDefinedDate in order to pass it to the APIs
    var userDefinedDate = $("#user-inputed-date").val(); 
    var formatedDate = moment(userDefinedDate).format("YYYY-MM-DD");
    var unixStamp1 = moment(userDefinedDate).format('X');
    var unixStamp2 = moment(userDefinedDate).subtract(1,'d').format('X');
    var unixStamp3 = moment(userDefinedDate).subtract(2,'d').format('X');
    var unixStamp4 = moment(userDefinedDate).subtract(3,'d').format('X');
    var unixStamp5 = moment(userDefinedDate).subtract(4,'d').format('X');

    console.log(userDefinedDate);
    console.log(formatedDate);
    console.log(unixStamp1);
    console.log(unixStamp2);

    var articleCounter = 0;

        event.preventDefault();
        // $(".currencyData").empty();
        // $("#article-card").empty();

        // Call for the newsapi.org data for the Wall Street Journal
        var WSJUrl = 'https://newsapi.org/v2/everything?' +
                   'sources=the-wall-street-journal' +
                   '&q=technology' +
                   '&q=politics' +
                   '&language=en'  +
                   '&from=' + userDefinedDate +
                   '&to=' + userDefinedDate +
                   '&apiKey=2db51c8d6bcc408a8037abcc67512083';

                   console.log(WSJUrl)
        // var overlay = $('#overlay');

        // if(overlay.length < 1) {
        // overlay = $('<div id="overlay" class="overlay-2"><div class="contentWrap"></div></div>').appendTo('body');
        // }

        $.ajax({
            url: WSJUrl,
            method: "GET",
            success: function(response) {
                console.log(response);
                var WSJarticles = response.articles;
                $("#wsjTitle").show();
                $("#article-card").show();
                $("#WSJ-card-section").show();   
                for (var i = 0; i < WSJarticles.length; i++) {
                    var attr = {
                        href: WSJarticles[i].url,
                        target: "_blank",
                    };

                    console.log(WSJarticles);

                // Add to the Article Counter (to make sure we show the right number)
                     // -test
                      articleCounter++;

                      // Create the HTML well (section) and add the article content for each
                      var cardSection = $("<div>");
                      cardSection.addClass("card");
                      cardSection.attr("id", "article-card-" + articleCounter);

                      

                      $("#card-section").append(cardSection);

                      // Confirm that the specific JSON for the article isn't missing any details
                      // If the article has a headline include the headline in the HTML
                      if (WSJarticles[i] !== "null") {
                        $("#article-card-" + articleCounter)
                          .append(
                            "<h4 class='card-title' id='first-card-title'>" +
                            WSJarticles[i].title + "</h4>"
                          )};

                      //   // Log the first article's headline to console
                      //   console.log(NYTData.response.docs[i].headline.main);
                      // }

                      // // If the article has a byline include the headline in the HTML
                      // if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.original) {
                      //   $("#article-well-" + articleCounter)
                      //     .append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>");

                      //   // Log the first article's Author to console.
                      //   console.log(NYTData.response.docs[i].byline.original);
                      // }

                      // // Then display the remaining fields in the HTML (Section Name, Date, URL)
                      // $("#articleWell-" + articleCounter)
                      //   .append("<h5>Section: " + NYTData.response.docs[i].section_name + "</h5>");
                      // $("#articleWell-" + articleCounter)
                      //   .append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>");
                      // $("#articleWell-" + articleCounter)
                      //   .append(
                      //     "<a href='" + NYTData.response.docs[i].web_url + "'>" +
                      //     NYTData.response.docs[i].web_url + "</a>"
                      //   );

                      // // Log the remaining fields to console as well
                      // console.log(NYTData.response.docs[i].pub_date);
                      // console.log(NYTData.response.docs[i].section_name);
                      // console.log(NYTData.response.docs[i].web_url);
                };

                $("#WSJ-card-header-1").empty();
                $("#WSJ-card-title-1").empty();
                $("#WSJ-card-text-1").empty();                                      
                $('#WSJ-card-title-1').append($("<a>").text(WSJarticles[0].title).attr(attr));
                $('#WSJ-card-text-1').append($("<p>").text(WSJarticles[0].description));
                $('#WSJ-card-header-1').append($('<p>').text(WSJarticles[0].publishedAt));
                $("#WSJ-card-header-2").empty();
                $("#WSJ-card-title-2").empty();
                $("#WSJ-card-text-2").empty();                    
                $('#WSJ-card-title-2').append($("<a>").text(WSJarticles[1].title).attr(attr));
                $('#WSJ-card-text-2').append($("<p>").text(WSJarticles[1].description));
                $('#WSJ-card-header-2').append($('<p>').text(WSJarticles[1].publishedAt));
                $("#WSJ-card-header-3").empty();
                $("#WSJ-card-title-3").empty();
                $("#WSJ-card-text-3").empty();                    
                $('#WSJ-card-title-3').append($("<a>").text(WSJarticles[2].title).attr(attr));
                $('#WSJ-card-text-3').append($("<p>").text(WSJarticles[2].description));
                $('#WSJ-card-header-3').append($('<p>').text(WSJarticles[2].publishedAt));
                $("#WSJ-card-header-4").empty();
                $("#WSJ-card-title-4").empty();
                $("#WSJ-card-text-4").empty();                 
                $('#WSJ-card-title-4').append($("<a>").text(WSJarticles[3].title).attr(attr));
                $('#WSJ-card-text-4').append($("<p>").text(WSJarticles[3].description));
                $('#WSJ-card-header-4').append($('<p>').text(WSJarticles[3].publishedAt));                                
                }
        });


        // Call for the newsapi.org data for BBC
        var bbcUrl = 'https://newsapi.org/v2/everything?' +
            'sources=bbc-news' +
            '&q=technology' +
            '&q=politics' +
            '&language=en' +
            '&from=' + userDefinedDate +
            '&to=' + userDefinedDate +
            '&apiKey=cd39a355ca9446cdaf4af8ba9a57c0f6 ';

            console.log(bbcUrl)


        $.ajax({
            url: bbcUrl,
            method: "GET",
            success: function(response) {
                console.log(response);
                var BBCarticles = response.articles;
                $("#bbcTitle").show();
                $("#BBC-card-section").show();
                $("#BBCTitle").show();
                for (var i = 0; i < BBCarticles.length; i++) {
                    var attr = {
                        href: BBCarticles[i].url,
                        target: "_blank",
                    }
                    $('#article-title').append($("<a>").text(BBCarticles[i].title).attr(attr));
                    $('#article-description').append($("<p>").text(BBCarticles[i].description).attr(attr));

                }
                $("#BBC-card-header-1").empty();
                $("#BBc-card-title-1").empty();
                $("#BBC-card-text-1").empty();                                      
                $('#BBC-card-title-1').append($("<a>").text(BBCarticles[0].title).attr(attr));
                $('#BBC-card-text-1').append($("<p>").text(BBCarticles[0].description));
                $('#BBC-card-header-1').append($('<p>').text(BBCarticles[0].publishedAt));
                $("#BBC-card-header-2").empty();
                $("#BBC-card-title-2").empty();
                $("#BBC-card-text-2").empty();                    
                $('#BBC-card-title-2').append($("<a>").text(BBCarticles[1].title).attr(attr));
                $('#BBC-card-text-2').append($("<p>").text(BBCarticles[1].description));
                $('#BBC-card-header-2').append($('<p>').text(BBCarticles[1].publishedAt));
                $("#BBC-card-header-3").empty();
                $("#BBC-card-title-3").empty();
                $("#BBC-card-text-3").empty();                    
                $('#BBC-card-title-3').append($("<a>").text(BBCarticles[2].title).attr(attr));
                $('#BBC-card-text-3').append($("<p>").text(BBCarticles[2].description));
                $('#BBC-card-header-3').append($('<p>').text(BBCarticles[2].publishedAt));
                $("#BBC-card-header-4").empty();
                $("#BBC-card-title-4").empty();
                $("#BBC-card-text-4").empty();                 
                $('#BBC-card-title-4').append($("<a>").text(BBCarticles[3].title).attr(attr));
                $('#BBC-card-text-4').append($("<p>").text(BBCarticles[3].description));
                $('#BBC-card-header-4').append($('<p>').text(BBCarticles[3].publishedAt));                  
            }
        });

       //  // Call for the coindesk API for the bitcoin trade value 
       // var currencyURL = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=' + pastWeekFormatedDate + '&end=' + formatedDate;
       // console.log('url compiled');

       // $.ajax({
       //     url: currencyURL,
       //     method: 'GET',
       //     success: function(response) {
       //         $('#sampleCurrencyData').html(JSON.stringify(response));
       //         console.log('currency api code ran');
       //         console.log(response);
       //         $('#cryptoTitle').append('Bitcoin Pricing Data' + userDefinedDate);
       //         $('#cryptoTitle').show();           
       //     }
       // })

       //  // Call for the cyptocompare API for the bitcoin trade value 
        // var currencyURL =  'https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' 
        // + unixStamp1 
        // + unixStamp2 
        // + unixStamp3 
        // + unixStamp4 
        // + unixStamp5;
        // $("#cryptoTitle").empty();
        // $("#sampleCurrencyData").empty();
        //   $.ajax({
        //       url: currencyURL,
        //       method: 'GET',
        //       success: function(response) {
        //           console.log('currency api code ran');
        //           console.log(response);
        //           $('#cryptoTitle').append('Bitcoin Pricing Data' + userDefinedDate);
        //           $('#cryptoTitle').show();
        //           var pricingData = response.BTC.USD;
        //           console.log(pricingData);
        //           $('#sampleCurrencyData').append('$' + pricingData);         
        //       }
        //   })

           var currencyURL =  'https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' 
        + unixStamp1 

          $.ajax({
              url: currencyURL,
              method: 'GET',
              success: function(response) {
                  console.log('currency api code ran');
                  console.log(response);
                  $('#cryptoTitle').append(userDefinedDate);
                  $('#cryptoTitle').show();
                  var pricingData = response.BTC.USD;
                  console.log(pricingData);
                  $('#sampleCurrencyData').append('$' + pricingData);         
              }
          })

       //  // Second call for the cyptocompare API for the bitcoin trade value 
        var currencyURL =  'https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' 
        + unixStamp2 

          $.ajax({
              url: currencyURL,
              method: 'GET',
              success: function(response) {
                  console.log('currency api code ran');
                  console.log(response);
                  $('#cryptoTitle').show();
                  var pricingData = response.BTC.USD;
                  console.log(pricingData);
                  $('#sampleCurrencyData').append('$' + pricingData);         
              }
          })

        //  // Third call for the cyptocompare API for the bitcoin trade value 
        var currencyURL =  'https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' 
        + unixStamp3 

          $.ajax({
              url: currencyURL,
              method: 'GET',
              success: function(response) {
                  console.log('currency api code ran');
                  console.log(response);
                  $('#cryptoTitle').show();
                  var pricingData = response.BTC.USD;
                  console.log(pricingData);
                  $('#sampleCurrencyData').append('$' + pricingData);         
              }
          })

        //  // Fourth call for the cyptocompare API for the bitcoin trade value 
        var currencyURL =  'https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' 
        + unixStamp4 

          $.ajax({
              url: currencyURL,
              method: 'GET',
              success: function(response) {
                  console.log('currency api code ran');
                  console.log(response);
                  $('#cryptoTitle').show();
                  var pricingData = response.BTC.USD;
                  console.log(pricingData);
                  $('#sampleCurrencyData').append('$' + pricingData);         
              }
          })

        //  // Third call for the cyptocompare API for the bitcoin trade value 
        var currencyURL =  'https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' 
        + unixStamp5 

          $.ajax({
              url: currencyURL,
              method: 'GET',
              success: function(response) {
                  console.log('currency api code ran');
                  console.log(response);
                  $('#cryptoTitle').show();
                  var pricingData = response.BTC.USD;
                  console.log(pricingData);
                  $('#sampleCurrencyData').append('$' + pricingData);         
              }
          })

          var popCanvas = document.getElementById("bitcoinChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var popData = {
  datasets: [{
    label: ['Price of Bitcoin'],
    data: [{
      x: 100,
      y: 0,
      r: 10
    }, {
      x: 60,
      y: 30,
      r: 20
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 80,
      y: 80,
      r: 50
    }, {
      x: 20,
      y: 30,
      r: 25
    }, {
      x: 0,
      y: 100,
      r: 5
    }],
    backgroundColor: "#FF9966"
  }]
};

var bubbleChart = new Chart(popCanvas, {
  type: 'bubble',
  data: popData,
});

});

//         // Chart.js script that loads the Bitcoin chart
//         var ctx = document.getElementById('bitcoinChart').getContext('2d');
//         var chart = new Chart(ctx, {
//             // The type of chart we want to create
//             type: 'line',
//             xAxisID: "Date",
//             yAxisID: "Price",

//             // The bitcoin data for our dataset
//             data: {
//                 labels: ["Morning", "Afternoon", "Evening"],
//                 datasets: [{
//                     label: "Bitcoin Price",
//                     borderColor: 'rgb(0, 206, 209)',
//                     data: [100, 200, 300],

//                 }]
//             },

//             // Chart configuration options
//             options: {}
//         });

// });