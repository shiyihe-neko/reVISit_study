## JSON Basic Syntax Tutorial
JSON (JavaScript Object Notation) is a lightweight format for data exchange. It's easy for humans to read and write, and straightforward for machines to parse and generate. Let’s begin with the basics of its syntax!
<br><br>

### Basic Structure
JSON consists of **key-value** pairs and **data types**, and it primarily has two structures:
- **Object**: Denoted with curly braces <strong style="color:green;">{}</strong>, it contains an unordered collection of key-value pairs.
- **Array**: Denoted with square brackets <strong style="color:green;">[]</strong>, it contains an ordered list of values.

JSON supports nested objects and arrays, enabling the construction of complex data structures.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_nested.png" width="450px" height="auto">
<br>

**Key-Value Pairs**
- Keys and values are separated by a colon <strong style="color:green;">:</strong>.
- Keys must be strings and must be enclosed in double quotes <strong style="color:green;">""</strong>.
- Key-value pairs are separated by commas <strong style="color:green;">,</strong>.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_KVPair.png" width="450px" height="auto">
<br>

**Data Types**
**String**: Strings must be enclosed in double quotes <strong style="color:green;">""</strong>.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_string.png" width="450px" height="auto">

**Number**: Includes **integers** and **floating-point numbers**, but leading zeros and hexadecimal formats are not supported.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_number.png" width="450px" height="auto">

**Boolean**: The values can be <strong style="color:green;">true</strong> or <strong style="color:green;">false</strong>.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_boolean.png" width="450px" height="auto">

**Null**: Represented by <strong style="color:green;">null</strong> for empty or unknown values.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_null.png" width="450px" height="auto">

-------------------------------
## Exercise
Let's do a quick exercise: take a look at the following data. Which ones are correctly written in JSON?
<img src="./assets/tutorial/json/json_quiz_1.png" width="900px" height="auto">

