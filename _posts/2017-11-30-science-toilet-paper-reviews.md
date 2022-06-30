---
title: Let's science the sh*t out of Toilet Paper Reviews 
description: Thousands of toilet paper reviews analyzed scientifically to determine the best quality products.
header: Let's science the sh*t out of Toilet Paper Reviews
duration: 7 minutes read
ogimage: img/tp-ogimage.png
---

<img src="img/tp-header.png" />

Toilet papers. A trivial household item, but touches us in our everyday lives. Amazon.com lists over 50 brands of Toilet Papers. With over 9000 product listings, how exactly does one pick the right toilet paper - hopefully in a quantified, scientific way?

Let us look at the possible methods of evaluation:
* Physical / Mechanical tests
* Surveys
* Reviews

### Physical / Mechanical Tests
These often involve analyzing the physical characteristics of TP using tests such as the following:
* Water absorption test
* Paper strength using mechanical puncturing device
* Tearing tests

<img src="img/instron.jpg">
<div align="center" class="fs-08"><i><small> Instron - an electomechanical tension / compression device (Image credit: https://instron.us) </small></i></div>


&nbsp;

The good part about such types of evaluations is that they can be completely objective. The tests (if conducted properly) can provide objective and precise measurements. 

The issue with this kind of evaluation, though, is that it is often impossible to arrive at tests that can grade each and every aspect of a product or incorporate actual consumer experiences - for example. what kind of a test can be used to quantify "comfort" ? 

### Surveys
A possible solution to the above problem, is to perhaps involve the consumers in the grading process - after all who better to measure the product than the end users of the product itself!

Surveys work great if designed right. However, designing the right survey to incite unbiased responses can be challenging due to factors like [Response Bias](https://en.wikipedia.org/wiki/Response_bias). Even if we were to be able to come up with a questionnaire that records participants true responses across all aspects of the product, keeping it updated over time can get challenging. 

### Reviews
Reviews are informative nuggets of free text and are already available for most products that are sold on the internet. They are the voice of the consumers in a public forum. 

> " People often talk about the things they care about "

... and the same is true for online reviews. 

By itself, a single review represents an individual's experience - but these become even more interesting when we start to look at repeated patterns across many reviews.

What if we could use this information to scientifically come up with conclusions about the product?

Using Neural Networks + Natural Language Processing, it is possible to extract the topics and sentiment, enabling us to quantify objective metrics for the product.

Now let's try and analyze TP reviews from Amazon.com.

After crawling Amazon.com to gather reviews, we need to preprocess the data to address the following issues:
* Unverified reviews - These are reviews by people who have not bought the product from the marketplace. Since there is no evidence that these buyers are genuine, we do not consider them.
* Old reviews - Consumer expectations and products change over time. Keeping this in mind, we remove reviews that are more than a couple of years old.
* Review spam - many brands and sellers create "fake" reviews or incentivize reviewers by giving away free samples of their products. This results in significant biases creeping into the review data of a product. We can mitigate this using outlier detection on the reviewer history to identify products that have significant spammy reviews.
* Product variants - Some websites like Amazon group reviews of a bunch of products into the same listing - thankfully, Amazon does provide a (somewhat hidden - "show only this format") option to filter the reviews by variant.
* Too few reviews - it is difficult to draw meaningful conclusions based on a small number of reviews, hence for this blog post, we discard products with fewer than 200 reviews.

After the above clean ups, we end up with 29574 reviews across 274 products (only considering upto 1000 most recent reviews for each product). 

We can now cluster the review sentences to extract the most spoken about topics in the reviews. Following are the recurring topics that start to emerge:


<table>
  <td>
    TOPIC CLUSTERS
  </td>
  <td>
    SAMPLE PHRASES
  </td>
  <tr class="fc-light">
    <td>Overall</td>
    <td><i>"the product was great", "did the job"</i> ...</td>
  </tr>
  <tr class="fc-light">
    <td>Marketplace / Delivery &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td><i>"was delivered on time", "doorstep delivery"</i> ...</td>
  </tr>
  <tr>
    <td>Paper Quality</td>
    <td><i>"strong", "durable", "doesn't tear"</i> ...</td>
  </tr>
  <tr>
    <td>Comfort</td>
    <td><i>"soft", "cushy", "softest TP out there", "little ruff on the bum"</i> ...</td>
  </tr>
  <tr>
    <td>Value For Money</td>
    <td><i>"worth the price", "bargain", "rip off"</i> ...</td>
  </tr>
  <tr>
    <td>Lasts Long</td>
    <td><i>"lasts forever", "ran out in a day", "larger than expected"</i> ...</td>
  </tr>
  <tr>
    <td>Cleaning</td>
    <td><i>"squeaky clean bum", "leaves quite a bit of fuzz behind"</i> ...</td>
  </tr>
  <tr>
    <td>Clogging</td>
    <td><i>"clogs the sewer line", "gentle on the plumbing", "had to use the plunger"</i> ...</td>
  </tr>
  <tr>
    <td>Dispenser</td>
    <td><i>"barely fit my holder", "might not fit in your dispenser"</i> ...</td>
  </tr>
  <tr class="fc-light">
    <td>Gag Gift</td>
    <td><i>"gag gift for my roommate", "gift as a prank"</i> ...</td>
  </tr>
  <tr class="fc-light">
    <td>Eco-Friendly</td>
    <td><i>"environmentally friendly", "made of recycled paper"</i> ...</td>
  </tr>
  <tr class="fc-light">
    <td>Travel</td>
    <td><i>"carry in your purse or pocket", "great for travel"</i> ...</td>
  </tr>
  <tr class="fc-light">
    <td>Perfumed TPs</td>
    <td><i>"smell is so strong", "smell soooooo good"</i> ...</td>
  </tr>
</table>

&nbsp;


For the purpose of this exercise, we will not consider the top two topics in the above list - reason being that the "Overall Product" statements are too generic, loosely used and volume-wise dominates every other topic, and the "Marketplace / Delivery" topic is not directly related to the product. We discard the (bottom four) low volume clusters as well.

Let's look at the final set of clusters with their volume distribution:

<div class="show-only-small" align="center">
  <iframe width="314" height="194" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=1811714180&amp;format=interactive"></iframe>
</div>

<div class="show-only-large" align="center">
  <iframe width="575.4219664768625" height="355.4349555051674" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=1061894387&amp;format=interactive"></iframe>
</div>



All the cluster sentences are then passed through our custom sentiment classifier to arrive at the positive and negative polarity. This gives us a topic-wise polarity of the products. We can now start to compare topics across products to arrive at an overall product ranking.

The <span class="fw-400">best</span> products, according to our analysis are (<a href="https://www.amazon.com//dp/B00YMVI5DC">#1</a>, <a href="https://www.amazon.com//dp/B00XSFLOCC"> #2</a>):

[//]: # (Best 2 - Overall)

<div class="show-only-small">
  <div align="center">
    <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=699489827&amp;format=interactive"></iframe>
  </div>
  
  <div align="center">
    <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=291609438&amp;format=interactive"></iframe>
  </div>
  
  
</div>

<div class="show-only-large">
  <div class="parent">
    <div align="center" style="width:50%">
      <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=699489827&amp;format=interactive"></iframe>
    </div>
    
    <div align="center" style="width:50%">
      <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=291609438&amp;format=interactive"></iframe>
    </div>
  </div>
</div>

... and the <span class="fw-400">worst</span> products on our list are (<a href="https://www.amazon.com//dp/B01GTNVWYO">#243</a>, <a href="https://www.amazon.com//dp/B01B4N9Y6C"> #242</a>):

[//]: # (Worst 2 - Overall)

<div class="show-only-small">
  <div align="center">
    <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=1405553136&amp;format=interactive"></iframe>

  </div>
  
  <div align="center">
    <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=151801927&amp;format=interactive"></iframe>
  </div>
  
  
</div>
<div class="show-only-large">
  <div class="parent">
    <div align="center" style="width:50%">
      <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=1405553136&amp;format=interactive"></iframe>
    </div>
    
    <div align="center" style="width:50%">
      <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=151801927&amp;format=interactive"></iframe>
    </div>
  </div>
</div>


Note that <span class="fw-400">we not only have a ranking, but also a justification</span> - for example the worst product is a Tubeless TP, which seems to have a lot of holder / dispenser related compaints.

We can even sort by any topic and pick the topic-wise best products, for example the best TPs for preventing <span class="fw-400">clogging</span> are (<a href="https://www.amazon.com//dp/B00ZTJ25XW">Clog #1</a>, <a href="https://www.amazon.com//dp/B01BT3U312">Clog #2</a>):


[//]: # (Best 2 - Clog)

<div class="show-only-small">
  <div align="center">
    <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=883957297&amp;format=interactive"></iframe>
  </div>
  
  <div align="center">
    <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=1522105939&amp;format=interactive"></iframe>
  </div>
  
  
</div>

<div class="show-only-large">
  <div class="parent">
    <div align="center" style="width:50%">
      <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=883957297&amp;format=interactive"></iframe>
    </div>
    
    <div align="center" style="width:50%">
      <iframe width="289.11044270195214" height="369" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT5hb9t8AfkVUi_PRbPJYwLk7JCTr6JbWvr4b2Zo0q4Cllw-73chBJw5rg46gjwA5yrfaH1XHWrTGtl/pubchart?oid=1522105939&amp;format=interactive"></iframe>
    </div>
  </div>
</div>

Why stop at just toilet papers?

We at [The<span class="fw-400">Review</span>Index.com](https://thereviewindex.com) believe that similar techniques can be used for analyzing all kinds of reviews - which is why we've just launched a tool that creates spam filtered review summaries for any Amazon.com electronic / gadget / appliance.

You can try it out here:

[https://thereviewindex.com](https://thereviewindex.com)

&nbsp;


<img src="img/shopping.jpg">



