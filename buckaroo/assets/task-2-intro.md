# 🍓 Task 2 — Detect and Fix Abnormalities in Food Nutrition Data

## 🧭 Background
In this task, you will work with a USDA Food Nutrition dataset. Each record represents a cspecific food item, with its category (`Category`), description (`Description`), and several key nutritional attributes such as calories, protein, carbohydrates, fat, and vitamins.

However, the dataset contains various issues introduced during aggregation and data entry:
- Some **food categories are inconsistent or fragmented** (e.g., `"BEEF"`, `"Beef"`, `"beef meat"` all refer to the same group).  
- Some categories have **too few samples** to be statistically meaningful.  
- Numeric columns include **missing, extreme, or invalid values**.  
- Certain numeric attributes contain **non-numeric or text-based errors**.

Your task is to perform **comprehensive cleaning** while preserving as much data as possible.

---

## 🧩 Task Instructions

### 1. Ensure Group Completeness
- Each food **category (`Category`) must contain at least 100 valid records** after cleaning.  
- If a category does not meet this threshold, choose an appropriate **merging strategy**:  
  - Combine categories that represent the same concept (e.g., `"Beef"` + `"BEEF"` → `"Beef"`).  
  - Merge similar small groups (e.g., `"TURTLE"`, `"FROG LEGS"`, `"SNAIL"` → `"Exotic Meats"`).  
  - Only delete a group if merging or imputation is clearly impossible.

### 2. Detect and Repair Anomalies
Handle **outliers** and **missing values** carefully — aim to **preserve the dataset’s structure and variability** rather than simply dropping rows.

Possible strategies include (but are not limited to):
- **Group-level mean imputation:**  
  Replace extreme or missing numeric values with the mean (or median) of the *same group* rather than the global average.  
- **Inter-group interpolation:**  
  If a group has too little data to compute a reliable mean, use the mean from a similar group (e.g., other meats or vegetables).  
- **Type conversion:**  
  Convert textual numeric data (e.g., `"12k"`) into valid numbers where possible.  
- **Outlier replacement:**  
  When a numeric value is clearly unrealistic compared to others in the same group, or falls outside the range of **mean ± 2 × standard deviation**, replace it with the group’s mean or median.

⚠️ Avoid deleting data unless absolutely necessary — prioritize transformations that preserve shape and meaning.

---

## ⏱️ Estimated Time

Approximately 15 – 25 minutes. But there is no time limit for this task—do your best and submit it once you feel it is complete.

---

## ✅ Success Criteria

| Criterion | Description |
|------------|--------------|
| **Group Completeness** | All categories have ≥ 100 valid records |
| **Type Consistency** | All numeric fields converted to numeric types |
| **Naming Consistency** | Duplicate or similar category names unified |
| **Outlier Repair** | Extreme or missing values corrected appropriately |


Click **"I understand"** to proceed to the task page. You can review these task instructions at any time by clicking the Help button in the upper-right corner after leaving this page.