from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

myUrl = 'http://wc.m47.jp/pref13-cat2.html'

# opening up page, grabbing the HTML
uClient = uReq(myUrl)
page_html = uClient.read()
uClient.close()

# Parsing HTML
page_soup = soup(page_html, "html.parser")

# grab each convinience store
containers = page_soup.findAll("div", {"class": "pickupListText"})

for container in containers
linkContainer = container.findAll("a", {"target": "_blank"})
eachConviniUrl = linkConainer[0]["href"]
