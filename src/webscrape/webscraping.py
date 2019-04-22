from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

myUrl = 'http://wc.m47.jp/pref13-cat2.html'

# opening up page, grabbing the HTML
uClient = uReq(myUrl)
page_html = uClient.read()
uClient.close()
