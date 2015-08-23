Scrape Goat
---

> API for scraping urls with css selectors

### API

##### GET /?url=[url]&selector=[selector]

Returns JSON response containing

* __status__ - the reponse status code
* __results__ - the scraped html or values
* __url__ - the requested url
* __selector__ - the requested selector

### Example

```shell
curl "http://localhost:3000/?url=http://www.nytimes.com/&selector=h2.story-heading%20a"
```

```js
{
  status: 200,
  results: [
    "3 Americans Recount Attack on High-Speed Train to France",
    "3 Who Stopped Attack Were Boyhood Friends",
    "Profile Emerges of Suspect",
    "Ohio Bill Would Ban Abortion if Down Syndrome Is Reason",
    "As Polls and Fans Speak, Trump Shows Staying Power",
    "Biden, Considering White House Bid, Meets With Warren",
    ...
  ],
  url: "http://www.nytimes.com/",
  selector: "h2.story-heading a"
}
```

Live [demo](http://scrape-goat.mybluemix.net/?url=https://news.ycombinator.com&selector=.title%20a) for my h8rs.

![sick goat pic](cool-goat.jpg)

### License

MIT
