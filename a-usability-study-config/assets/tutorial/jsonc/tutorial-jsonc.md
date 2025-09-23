## JSONC Basic Syntax Tutorial

JSONC (**JSON with Comments**) is a format based on JSON but with some small features and more lenient parsing behaviors. Don’t worry—no prior knowledge of JSON is required for the following study. This is just background information.

Let’s begin with the basics of its syntax!
<br><br>

### Basic Structure
JSONC consists of **key-value** pairs and **data types**, and it primarily has two structures:
- **Object**: Denoted with curly braces <strong style="color:green;">{}</strong>, it contains an unordered collection of key-value pairs.
- **Array**: Denoted with square brackets <strong style="color:green;">[]</strong>, it contains an ordered list of values.

JSONC supports nested objects and arrays, enabling the construction of complex data structures.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_nested.png" width="600px" height="auto">
<br>

**Key-Value Pairs**
- Keys and values are separated by a colon <strong style="color:green;">:</strong>.
- Keys must be strings and must be enclosed in double quotes <strong style="color:green;">""</strong>.
- Key-value pairs are separated by commas <strong style="color:green;">,</strong>.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_KVPair.png" width="600px" height="auto">
<br>

**Data Types**
**String**: Strings must be enclosed in double quotes <strong style="color:green;">""</strong>.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_string.png" width="600px" height="auto">

**Number**: Includes **integers** and **floating-point numbers**, but leading zeros and hexadecimal formats are not supported.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_number.png" width="600px" height="auto">

**Boolean**: The values can be <strong style="color:green;">true</strong> or <strong style="color:green;">false</strong>.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_boolean.png" width="600px" height="auto">

**Null**: Represented by <strong style="color:green;">null</strong> for empty or unknown values.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_null.png" width="600px" height="auto">


### Format Requirements

<!-- **Support for Trailing Commas**
JSONC allows **trailing commas** <strong style="color:green;">,</strong> after the last element in objects and arrays.

###### <u>Correct Example</u> 
   <img src="./assets/tutorial/jsonc/jsonc_commas.png" width="600px" height="auto">
 -->

**Support for Comments**

**JSONC** allows comments to be added in JSONC files, including **single-line comments** and **multi-line comments**.
- **Single-line comments**: Use <strong style="color:green;">//</strong>.
- **Multi-line comments**: Use <strong style="color:green;">/* */</strong> to wrap comments.

###### <u>Correct Example</u> 
   <img src="./assets/tutorial/jsonc/jsonc_comments.png" width="600px" height="auto">
<br>