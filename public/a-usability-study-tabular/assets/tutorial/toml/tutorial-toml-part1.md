## TOML Basic Syntax Tutorial
TOML (**Tom's Obvious, Minimal Language**) is a simple, easy-to-read, and easy-to-write configuration file format. It is designed to be human-friendly and easy to parse, making it ideal for configuration files.

Let’s begin with the basics of its syntax!
<br><br>


### Basic Structure
**Key-Value Pairs**
Key-value pairs are separated by an equals sign =; keys are on the left, and values are on the right.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/toml/toml_KVPairs.png" width="600px" height="auto">
<br>


**Data Types**
- **Basic strings**: are enclosed in double quotes <strong style="color:green;">""</strong>.
- **Multi-line strings** use triple double quotes <strong style="color:green;">"""</strong> for multiple lines.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/toml/toml_strings.png" width="600px" height="auto">
<br>

- **Numbers and Booleans**: supports integers, floating-point numbers, and booleans.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/toml/toml_numbers.png" width="600px" height="auto">
<br>

- **Arrays**: Arrays are defined using square brackets <strong style="color:green;">[]</strong>, with items separated by commas <strong style="color:green;">,</strong>. A terminating comma (also called trailing comma) is not permitted after the last key/value pair in an inline table.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/toml/toml_arrays.png" width="600px" height="auto">
<br>

- **Dates and Times**: TOML explicitly supports time and date formats based on the **RFC 3339** standard.
- Date (Full Date)
   Format: <strong style="color:green;">YYYY-MM-DD</strong>
- Local Date-Time (No Time Zone)
   Format: <strong style="color:green;">YYYY-MM-DDTHH:MM:SS</strong>
- Date-Time with Time Zone
   Format:
   <strong style="color:green;">YYYY-MM-DDTHH:MM:SSZ</strong> (UTC time, where Z indicates the zero offset).
   <strong style="color:green;">YYYY-MM-DDTHH:MM:SS±HH:MM</strong> (Time offset).
- Time Only (Local Time)
   Format: <strong style="color:green;">HH:MM:SS</strong>
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/toml/toml_date.png" width="600px" height="auto">
<br>


-------------------------------
## Exercise
Let's do a quick exercise: take a look at the following data. Which ones are correctly written in TOML?
<img src="./assets/tutorial/toml/toml_quiz_1.png" width="900px" height="auto">