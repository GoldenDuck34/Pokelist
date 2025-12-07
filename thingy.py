import json

# Load JSON
with open("plza.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Process entries
for key, value in data.items():
    if isinstance(value, str) and "180px" in value:
        # Remove everything after the last "/"
        if "/" in value:
            data[key] = value.rsplit("/", 1)[0]
        else:
            data[key] = value  # fallback if weird format

# Save JSON back
with open("plza.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print("Done!")
