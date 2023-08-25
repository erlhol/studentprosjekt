import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin  # Import urljoin for constructing absolute URLs
import json

def crawl_pages(current_url):
    json_list = []

    while current_url:
        response = requests.get(current_url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            
            crawl_courses(soup,current_url,json_list)
            next_link = soup.find('a', "vrtx-next")
            if next_link:
                current_url = next_link['href']
            else:
                current_url = None
        else:
            print(f"Failed to fetch {current_url}")
    
    with open('courses.json', 'w', encoding='utf-8') as f:
        json.dump(json_list, f, ensure_ascii=False, indent=4)

def crawl_courses(soup,url,json_list):
    # Find all <a> elements within <td> elements with class 'vrtx-course-description-name'
    links = soup.select('td.vrtx-course-description-name a')
    for link in links:
        crawl_course(link,url,json_list)
            
        print("-" * 30)  # Print a separator between pages

def crawl_course(link,url,json_list):
    translations = {
    "Nivå": "level",
    "Level": "level",

    "Studiepoeng": "credits",
    "Credits": "credits",

    "Undervisning": "teaching" ,
    "Teaching": "teaching",

    "Eksamen": "examination", 
    "Examination": "examination",

    "Undervisningsspråk" : "teachingLanguage",
    "Teaching language": "teachingLanguage",
    }

    relative_path = link.get('href')
    absolute_url = urljoin(url, relative_path)  # Construct absolute URL
    print("Scraping:", absolute_url)
            
    page_response = requests.get(absolute_url)
    if page_response.status_code == 200:
        page_soup = BeautifulSoup(page_response.text, 'html.parser')

        fact_dict = dict()

        courseInfoTitle = page_soup.title.string.split("–")
        subjectCode = courseInfoTitle[0].strip()
        subjectName = courseInfoTitle[1].strip()
        fact_dict["subjectCode"] = subjectCode
        fact_dict["subjectName"] = subjectName
        fact_dict["activites"] = []

        # Find all divs with class 'vrtx-distach-bottom vrtx-facts'
        facts_divs = page_soup.find_all('div', id='vrtx-additional-content')
        fact_div = facts_divs[0]
        
        if fact_div:
            dt = [x.text.strip() for x in fact_div.find_all('dt')]
            dd = [x.text.strip() for x in fact_div.find_all('dd')]

            myList = list(zip(dt, dd))
            
            for each in myList:
                if each[0] in translations:
                    translation = translations[each[0]]
                    fact_dict[translation] = each[-1]
            
        else:
            print("Facts not found.")

        course_content_header = page_soup.find('h2', {'id': 'course_content'})
        if course_content_header:
            first_p_after_header = course_content_header.find_next('p')
            # Print the text content of the <p> element
            if first_p_after_header:
                fact_dict["description"] = first_p_after_header.get_text()
                json_list.append(fact_dict)
            else:
                print("No <p> element found after the header with id 'learning_outcomes'.")

def crawl_calendar_info():
    # First: select the first link, that is the most recent semester
    # Then: follow link to "Timeplan / schedule"
    # Last: Crawl the page for all the "forelesninger"
    pass

if __name__ == '__main__':
    start_url = 'https://www.uio.no/studier/emner/alle/?filter.semester=h23'
    crawl_pages(start_url)