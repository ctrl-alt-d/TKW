from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from testQ import Q

driver = webdriver.Chrome()
driver.get("https://ctrl-alt-d.github.io/TKW/")
wait = WebDriverWait(driver, 10)
fake_click = lambda: driver.find_element_by_tag_name("body").click()
# nivell negre
element = wait.until( EC.visibility_of_element_located((By.ID, "modal-level")) )
element = wait.until(EC.element_to_be_clickable((By.ID, "level-5")))
fake_click()
element.click()

# espero codi video
element = wait.until( EC.presence_of_element_located((By.ID, "video-codi")) )
fake_click()
current = next( q for q in Q if q["video"]==element.text )

# clico la resposta
for r in current["tecnica"].upper().split():
    element = next( e for e in driver.find_elements_by_class_name("opcio") if e.text == r )
    element.click()
    _ = wait.until( EC.text_to_be_present_in_element( (By.ID, "my-answer"), r ) )

# click text
fake_click()
driver.find_element_by_id("test").click()

# click Bravo
element = wait.until( EC.visibility_of_element_located((By.ID, "ok-button")) )
fake_click()
element.click()

driver.close()