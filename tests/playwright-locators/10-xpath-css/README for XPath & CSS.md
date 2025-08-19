# XPath & CSS Selectors – Quick Recap

## 🔹 XPath Selectors
XPath is used to navigate through the structure of XML/HTML documents.

### Common Types
1. **Relative XPath** (starts from a property, preferred)
   ```xpath
   //tag[@attribute='value']
   //input[@id='username']


### Absolute XPath (starts from root, not recommended)

/html/body/div[1]/div/div[2]/input


### AND / OR in XPath

### Absolute XPath (starts from root, not recommended)

/html/body/div[1]/div/div[2]/input


### AND / OR in XPath

//input[@id='username' and @type='text']
//button[@id='login' or @name='submit']


### Parent → Child

//div[@class='form-group']/input


### Ancestor

//span[text()='Password']//ancestor::form


 ### Sibling

//label[text()='Email']//following-sibling::input


### Preceding Sibling

//input[@id='password']//preceding-sibling::label

🔹 CSS Selectors

### CSS selectors are faster and simpler than XPath.

### Common Types

### 1) By ID

#username


#### By Class

.btn-primary


#### By Attribute

input[type="password"]


#### Descendant Selector

form input


#### Nth-child

ul li:nth-child(2)


#### Pseudo-class

input:focus
div:not(.hidden)


✅ Use CSS when possible (faster & readable), XPath when advanced traversal needed.


---

---

