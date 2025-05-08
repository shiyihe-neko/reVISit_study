## JSON5 Basic Syntax Tutorial
JSON5 is an extension of standard JSON, designed to improve JSON's readability and usability. JSON5 retains most of JSON's core features but adds flexibility, such as support for comments, single quotes, and trailing commas. Don’t worry—no prior knowledge of JSON is required for the following study. This is just background information.

Let’s begin with the basics of its syntax!
<br><br>

### Basic Structure
JSON5 consists of **key-value** pairs and **data types**, and it primarily has two structures:
- **Object**: Denoted with curly braces <strong style="color:green;">{}</strong>, it contains an unordered collection of key-value pairs.
- **Array**: Denoted with square brackets <strong style="color:green;">[]</strong>, it contains an ordered list of values.

JSON5 supports nested objects and arrays, enabling the construction of complex data structures.

###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_nested.png" width="600px" height="auto">
<br>

**Key-Value Pairs**
- Keys and values are separated by a colon <strong style="color:green;">:</strong>.
- JSON5 allows both double quotes and unquoted keys if they are valid identifiers (e.g., letters, numbers, and underscores).
- Key-value pairs are separated by commas <strong style="color:green;">,</strong>.

###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_KVPair.png" width="600px" height="auto">
<br>
   <img src="./assets/tutorial/json5/json5_unquote.png" width="600px" height="auto">
<br>



**Data Types**
**String**: Strings can be enclosed in singel quote or double quotes <strong style="color:green;">""</strong>.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json5/json5_strings.png" width="600px" height="auto">

**Number**: JSON5 supports **integers** and **floating-point numbers** and many additional number formats:
- **Hexadecimal numbers**: Example: <strong style="color:green;">0xFF</strong>
- **Leading decimals**: Example: <strong style="color:green;">.5</strong>
- **Trailing decimals**: Example: <strong style="color:green;">5.</strong>
- **Positive numbers with** <strong style="color:green;">+</strong> **sign**: Example: <strong style="color:green;">+25</strong>
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_number.png" width="600px" height="auto">
   <img src="./assets/tutorial/json5/json5_number.png" width="600px" height="auto">
<br>

**Boolean**: The values can be <strong style="color:green;">true</strong> or <strong style="color:green;">false</strong>.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_boolean.png" width="600px" height="auto">

**Null**: Represented by <strong style="color:green;">null</strong> for empty or unknown values.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json/json_null.png" width="600px" height="auto">

### Format Requirements

**Support for Comments**
JSON5 allows comments, which JSON does not.
Single-Line Comments use  <strong style="color:green;">//</strong>
Multi-Line Comments use  <strong style="color:green;">/* */</strong>
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json5/json5_comments.png" width="600px" height="auto">
<br>


**Support for Trailing Commas**
JSON5 allows a trailing comma <strong style="color:green;">,</strong> after the last element in objects and arrays.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/json5/json5_commas.png" width="600px" height="auto">
<br>