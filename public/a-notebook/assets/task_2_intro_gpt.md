# Task 2：Wrangling Used Cars Dataset

You are a data analyst at a used car trading platform, and you need to prepare a dataset to train a "Car Value Retention Model" for various manufacturers. The raw data is currently too messy for the pipeline. Please clean it using the assigned tool.

In this task, you will clean the provided dataset using the assigned tool. Your goal is to prepare a dataset in which all fields relevant to the analysis are clean, consistent, and ready for modeling. Please select appropriate wrangling strategies and correct abnormal values where necessary.


## Your Goal:

**Standardize Data Types**: Identify the columns valuable for building the model and ensure they are assigned the correct data types. For instance, ensure numerical values are consistently numeric and descriptive labels are categorical.

**Clean Anomalies**: Identify and resolve data quality issues such as null values, type mismatches, outliers, or any other inconsistencies. Please apply reasonable strategies to correct these abnormalities. 

**Remove irrelevant columns**: To ensure that the cleaned dataset is suitable for modeling, you should remove any columns that are not informative or appropriate for the predictive task. For example, long free-text descriptive fields or identifiers that do not contribute meaningful features are generally not useful for modeling and should be excluded.

## Notifications:

**Be Conservative**: Avoid aggressive data records deletion. Crucially, ensure that no manufacturer is completely removed from the dataset. If the data is messy, try to salvage the record by imputing values based on reasonable logic. Only delete rows if the data is unrecoverable or irrelevant.

**Context Matters**: Exercise caution when flagging outliers. A value that appears to be a global outlier may be normal within its specific subgroup. For example, a price of $250,000 might be an error for a "Ford," but perfectly valid for a "Ferrari."


## Estimated Time

Approximately 15 – 25 minutes. But there is no strict time limit for this task, work at your own pace and submit your results once you feel the task is complete. Please do your best to wrangle the data and identify any anomalies. Remember that your goal is to produce a clean dataset that is suitable for modeling.

## Tutorial of Submission (Same as the one in Task 1)
<iframe 
    src="https://drive.google.com/file/d/1O-2O-s6ywZTk1XpLpQt7Qe99PMtYN3Ku/preview" 
    width="1200" 
    height="700" 
    allow="autoplay">
</iframe>

<br><br>

## Important Tips Before You Proceed

### Connect to the VNC Server

1.Click "Connect" and enter the VNC Passcode(You can find it in the sidebar)

<img src="./colorexplorer/assets/tutorial/novnc.png" width="60%">
<br>

2.Click the toolbar, then click the button labeled A. Select the last option to send "Ctrl + Alt + Del", and then enter the Server PIN (which can also be found in the sidebar).

<img src="./colorexplorer/assets/tutorial/vnc.png" width="30%">
<br>

3.Please do not attempt to access any other applications on the server we provided. You may only use the ChatGPT window available on this server. If you need external resources (such as Google searches), please use your own web browser.

4.Please ensure that you save the cleaned dataset from ChatGPT correctly as demonstrated. For example, once you are satisfied with the results provided by ChatGPT, you may use a prompt such as: “Please return the cleaned version of this CSV file for downloading.”

5.Please make sure you open the correct file as required. For Task 1, use "game.csv", and for Task 2, use "car.csv".

6.Please open a new chat to demonstrate Task 2, and do not delete any chat history created during the study.

<b style="color:Red;">Any violation of the above instructions, or failure to complete the study as required, will result in the study being considered incomplete, and NO COMPENSATION will be provided.</b>

<br><br>
Click **"I understand"** to proceed to the task page. You can review these task instructions at any time by clicking the blue "Help" button in the upper-right corner after leaving this page. Please remember that this is a **Think-Aloud** study. You are required to verbalize your thoughts, including any questions, confusions while using the tool, or decisions you make while completing the task.