# Task 1: Wrangling Game Rating Dataset

You are a data analyst at a gaming media outlet, and you need to analyze how User Scores have trended by Genre since the year 2000. The raw data is currently too messy for the pipeline. Please clean it using the assigned tool.

In this task, you will clean the provided dataset using the assigned tool. Your goal is to prepare a dataset in which all fields relevant to the analysis are clean, consistent, and ready for computing annual average scores. Please select appropriate wrangling strategies and correct abnormal values where necessary.

## Your Goal:

**Filter**: You are only interested in the modern era. Please exclude any records released prior to 2000.

**Standardize**: Ensure **'User_Score'** is numeric and ready for aggregation.

**Quality Control**: We need a high-quality dataset. Trends will be invisible if the data contains abnormalities such as missing values, type errors, unreasonable outliers, or any other inconsistencies. So please choose reasonable strategies to deal with those abnormalities.

## Notification:

**Be Conservative**: Do not aggressively delete rows. If data is messy, try to save the record by imputing values based on reasonable logic. Only delete rows if the data is unrecoverable.

**Context Matters**: Be careful when flagging outliers. A value that looks strange globally might be normal within its specific subgroup. Think of housing prices as an example: a price that is an outlier for the whole country might be normal for a city like New York. Verifying anomalies within their groups before removing them is valuable.

## Estimated Time
Please try to complete this task **within 10 minutes**. Do your best, but avoid spending more than 10 minutes on it. 


## Tutorial of Submission <b style="color:Red;">(Please make sure you watch this video carefully)</b>
<iframe 
    src="https://drive.google.com/file/d/1cIcfu1JNy6Pl6lfjURFUh4umEQnffoj7/preview" 
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

3.Please do not attempt to access any other applications on the server we provided. You may only use the Excel window available on this server. If you need external resources (such as Google searches), please use your own web browser.

4.Please make sure you save the cleaned dataset from Excel exactly as demonstrated. If the cleaned file is not saved in the required way, your submission will be considered incomplete.

5.Please ensure that you are working on the correct dataset. Use game.csv for Task 1 and car.csv for Task 2. If you work on the wrong file, your submission will be considered incomplete.

<b style="color:Red;">Any violation of the above instructions, or failure to complete the study as required, will result in the study being considered incomplete, and NO COMPENSATION will be provided.</b>


<br><br>
Click **"I understand"** to proceed to the task page. You can review these task instructions at any time by clicking the blue "Help" button in the upper-right corner after leaving this page. Once you enter the next page, the timing begins. Please remember that this is a **Think-Aloud** study. You are required to verbalize your thoughts, including any questions, confusion while using the tool, or decisions you make while completing the task.