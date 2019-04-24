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

# Write extracted convini information into JSON file
filename = "conviniData20190424.csv"
f = open(filename, "w")

headers = "name, address\n"

f.write(headers)


for container in containers:
    linkContainer = container.findAll("a", {"target": "_blank"})
    eachConviniUrl = "http://wc.m47.jp/" + linkContainer[0]["href"]
    eachClient = uReq(eachConviniUrl)
    page_html2 = eachClient.read()
    page_soup2 = soup(page_html2, "html.parser")
    conviniInfoTableData = page_soup2.find_all(
        "table", {"class": "table_data"})[0].find_all("td")
    print("each convini name:" + conviniInfoTableData[0].text)
    print("each convini address:" + conviniInfoTableData[2].text)
