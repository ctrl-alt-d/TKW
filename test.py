from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from testQ import Q

driver = webdriver.Chrome()
driver.get("https://ctrl-alt-d.github.io/TKW/")
wait = WebDriverWait(driver, 10)

# nivell negre
element = wait.until( EC.presence_of_element_located((By.ID, "level-5")) )
driver.find_element_by_id("level-5").click()

# espero codi video
element = wait.until( EC.presence_of_element_located((By.ID, "video-codi")) )
current = next( q for q in Q if q["video"]==element.text )

# clico la resposta
for r in current["tecnica"].split():
    element = next( e for e in driver.find_elements_by_class_name("opcio") if e.text == r )
    element.click()
    wait.until( EC.text_to_be_present_in_element( (By.ID, "my-answer"), r ) )

# click text
driver.find_element_by_id("test").click()

driver.close()