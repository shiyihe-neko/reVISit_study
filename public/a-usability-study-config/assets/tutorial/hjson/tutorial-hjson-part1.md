## HJSON Basic Syntax Tutorial
HJSON (**Human JSON**) is a human-friendly version of JSON. Don’t worry—no prior knowledge of JSON is required for the following study. This is just background information.

Let’s begin with the basics of its syntax!
<br><br>

### Basic Structure
HJSON consists of **key-value** pairs and **data types**, and it primarily has two structures:
- **Object**: Denoted with curly braces <strong style="color:green;">{}</strong>, it contains an unordered collection of key-value pairs.
- **Array**: Denoted with square brackets <strong style="color:green;">[]</strong>, it contains an ordered list of values.

HJSON supports nested objects and arrays, enabling the construction of complex data structures.

###### <u>Correct Example</u> 
   <img src="./assets/tutorial/hjson/hjson_example.png" width="450px" height="auto">
<br>

**Key-Value Pairs**
- Keys and values are separated by a colon <strong style="color:green;">:</strong>.
- Key-value pairs are separated by commas <strong style="color:green;">,</strong>. However, missing comma is allowed in HJSON.
- In HJSON, object names can be specified without quotes.keys do not require quotes. Also, you can specify strings without quotes.(In this case only one value per line and no commas are allowed.)

###### <u>Correct Example</u> 
   <img src="./assets/tutorial/hjson/hjson_KVPairs.png" width="450px" height="auto">
<br>

**Data Types**

Strings can **omit quotes** unless they contain special characters.
**Multi-line strings** are written with indentation, avoiding escape characters.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/hjson/hjson_Flexible.png" width="450px" height="auto">
<br>

**Number**: Includes **integers** and **floating-point numbers**, but leading zeros and hexadecimal formats are not supported unless they are enclosed in quotes.
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
Let's do a quick exercise: take a look at the following data. Which ones are correctly written in HJSON?
<img src="./assets/tutorial/hjson/hjson_quiz_1.png" width="900px" height="auto">

