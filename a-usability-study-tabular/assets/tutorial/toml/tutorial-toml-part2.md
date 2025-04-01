### Tables Structure

**Tables**
Tables are defined using square brackets <strong style="color:green;">[]</strong> and create hierarchical structures. In TOML, two identical table names are not allowed.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/toml/toml_table.png" width="600px" height="auto">
<br>

Array of tables <strong style="color:green;">[[array]]</strong> is used to define a list of objects (tables). Each [[array]] entry represents a separate table inside an array.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/toml/toml_arrays2.png" width="600px" height="auto">
<br>

**Inline Tables**
Inline tables use <strong style="color:green;">{}</strong> and are suitable for simple objects.
###### <u>Correct Example</u> 
   <img src="./assets/tutorial/toml/toml_intable.png" width="600px" height="auto">
<br>

### Support Comments
In TOML, comments start with <strong style="color:green;">#</strong>.

### Full TOML Example
   <img src="./assets/tutorial/toml/toml_example.png" width="600px" height="auto">
<br>

Tip: In TOML, indentation is primarily used to enhance readability, but it does not affect the parsing logic since TOML does not rely on indentation to define hierarchical structures.

-------------------------------
## Exercise
Let's do a quick exercise: take a look at the following data. Which ones are correctly written in TOML?
<img src="./assets/tutorial/toml/toml_quiz_2.png" width="900px" height="auto">