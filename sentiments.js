function getTweetSentiments(tweet) {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var properties = PropertiesService.getScriptProperties()
    var apiKey = properties.getProperty('OPENAI_API_KEY');
    var url = 'https://api.openai.com/v1/completions';
    var model = 'text-davinci-003';
    var max_tokens = 60
    var stop = '.'
    var row = 1;
    
  // Generate Tweet Sentiment
    data.forEach(function (tweet, index) {
      if(row == 1) {
        row++;
        return;
      }
      var prompt = `Classify the sentiment in this tweet: ${tweet}. Return Positive, Negative or Neutral classifications`;
      var options = {
        'method': 'post',
        'contentType': 'application/json',
        'headers': {
          'Authorization': 'Bearer ' + apiKey
        },
        'payload': JSON.stringify({
          'prompt': prompt,
          'temperature': 0,
          'model': model,
          'max_tokens': max_tokens,
          'stop': stop
        })
      };
      var response = UrlFetchApp.fetch(url, options);
      var json = response.getContentText();
      var responseData = JSON.parse(json);
      var sentiment = responseData.choices[0].text;
      sheet.getRange(row, 2).setValue(sentiment);
      row++
    });
  }