import json
import re

# Load JSON data from file
with open('src/db/result.json', 'r') as file:
    data = json.load(file)

def clean_brandname(s):
    if not isinstance(s, str):
        return s
    s = re.sub(r'\s+', ' ', s.strip())  # remove extra spaces
    s = s.replace('/', ':')             # replace slashes with colon
    return s

# Apply cleaning to only BrandName field
for item in data:
    item["BrandName"] = clean_brandname(item.get("BrandName"))

# Print result
# print(json.dumps(data, indent=2))
# save cleaned data back to file
with open('src/db/cleanedresult.json', 'w') as file:
    json.dump(data, file, indent=2)