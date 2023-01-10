### 1. The URL to my deployed GitHub Pages site is:
> <a href="https://blloop.github.io/simple-search" target="_blank">https://blloop.github.io/simple-search</a>

### 2. I used the CrossRef API because...
> ...it connects scholarly research to an open-source api and contains extensive documentation. 
> The amount of functionality in the API is incredible, and learning how to use the API was enjoyable. 

### 3. Other uses for the CrossRef API include:
* Verifying specific named publications have licenses, references, or other attributes. 
This would be done by prompting for a work's DOI number and querying info for that work before
searching for publications matching with the requested verifications and returning that info to the user

* Checking for updated versions of an academic publication. To implement this, an app would ask for
a publication's DOI number or title and publication date and search for publications matching a name with
a later creation date. The app would then return the latest publication returned, if one exists. 

* Calculate the relevance of a publication given its title and a topic name. An app implemented this way would 
search with the given topic name. With the returned list, it would then either compare publications matching 
the given title against other results and produce a score based on comparison or return a raw relevance
score to the user

### 4. Some considerations for making my website mobile-responsive were:
* Making buttons larger for ease of use on smaller screens
* Resize content properly to prevent content from overflowing or being too big / small
* Balancing content size and readability with limited space on smaller screens

### 5. This app could be made more accessible to people with disabilities through:
* Improved organization of data produced to assist screen-readers in reading search results
* Effective contrast selected to avoid affected visibility of select contrasts (i.e. red/green)
* Implementing an option to increase font size on the website

### 6. Future changes I would make to my application would be: 
* Adding a search save functionality so users can refer back to previous searches
* Introduce more search attributes in results, along with filters and sorts by those attributes
* Implementing an option to use other APIs in the same search application
