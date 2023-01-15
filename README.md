# Tweet Sentiment Analysis using GPT-3 and Google Sheets

This code demonstrates how to use GPT-3 from OpenAI to classify the sentiment of tweets using Google Sheets and the OpenAI API.

## Getting Started
- Create a new project in Google Sheets and copy the code to the script editor.
- Create a sheet with a header row and one column for the tweets and another for the sentiment classification.
- In the script editor, go to File > Project Properties > Script Properties and add the key 'OPENAI_API_KEY' and paste your OpenAI API key as the value.
- Run the function getTweetSentiments(tweet) to classify the sentiment of tweets in the sheet.
## Function Descriptions
### getTweetSentiments(tweet)
This function takes tweets from the active sheet and prompts the OpenAI API to classify the sentiment of the tweets. It then writes the sentiment classification to the corresponding row in the sheet.

### getProductDescriptions()
This function takes product data from the active sheet and prompts the OpenAI API to generate a description of the product. It then writes the product description to the corresponding row in the sheet.

## Note
This code only uses the OpenAI's text-davinci-003 model, you can change the model to any other model you have access to by changing the model variable.

## Dependencies
Google Sheets API
OpenAI API
UrlFetchApp
PropertiesService
