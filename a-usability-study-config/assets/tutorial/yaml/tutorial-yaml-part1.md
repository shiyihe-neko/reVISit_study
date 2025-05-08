## YAML Basic Syntax Tutorial
YAML (**YAML Ain't Markup Language**) is a human-readable, lightweight data serialization format primarily used for configuration files and data exchange. It is concise, easy to read, and easier to manually edit compared to JSON.

Let’s begin with the basics of its syntax!
<br><br>

### Basic Structure
**Key-Value Pairs**
Each key-value pair is separated by a colon <strong style="color:green;">:</strong>, with a space after the colon.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/yaml/yaml_KVPairs.png" width="600px" height="auto">
<br>

### Data Type
**Strings**
Strings can be written directly without quotes.
Use quotes(Single or double) if the string contains special characters, colons, or newlines. Or use quotes if you want to ensure the number is interpreted as a string.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/yaml/yaml_Strings.png" width="600px" height="auto">
<br>

**Arrays**
Array items are prefixed with <strong style="color:green;">-</strong>, one item per line.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/yaml/yaml_Arrays.png" width="600px" height="auto">
<br>

**Objects**
Use indentation to represent nested objects.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/yaml/yaml_Objects.png" width="600px" height="auto">
<br>

**Booleans and Null**
Booleans are represented using <strong style="color:green;">true</strong>/<strong style="color:green;">false</strong> or <strong style="color:green;">yes</strong>/<strong style="color:green;">no</strong>.
Null values are represented using <strong style="color:green;">null</strong> or <strong style="color:green;">~</strong>.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/yaml/yaml_Booleans.png" width="600px" height="auto">
<br>

-------------------------------
## Exercise
Let's do a quick exercise: take a look at the following data. Which ones are correctly written in YAML?
<img src="./assets/tutorial/yaml/yaml_quiz_1.png" width="1200px" height="auto">