import uuid
import xml.dom.minidom
import re
from BeautifulSoup import BeautifulSoup, Comment
 

def get_text_nodes(soup):
    return soup(text=lambda text:not isinstance(text, Comment))

def is_real_text_node(textNode):
    return not textNode.findParent('style') 

def get_the_soup(input):
    return BeautifulSoup(input, convertEntities=["xml", "html"])
     
from cm.utils.cache import memoize, dj_memoize
@dj_memoize
def spannify(input):
    """ 
    wrap textNodes in spans 
    """
    
    input = re.sub("\s*$","",input)
        
    soup = get_the_soup(input)
    
    textNodes = get_text_nodes(soup)
    textNodes_content = []
    
    span_starts = {}
    for i in xrange(len(textNodes)):
        textNode = textNodes[i]
        if is_real_text_node(textNode) :
            textNode.replaceWith('<span id="sv_' + str(i) + '" class="c-s"><span id="sv-' + str(i) + '" class="c-count-0 c-c">' + textNode.string + '</span></span>')
            span_starts[i] = len(''.join(textNodes_content))
            textNodes_content.append(textNode.string)
    output = unicode(soup)
         
    textualized = ''.join(textNodes_content)
    return output, textualized, span_starts
