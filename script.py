import os
import json

# Create the main project structure
project_structure = {
    "celebrity-portrait-prompts": {
        "index.html": "",
        "style.css": "",
        "script.js": "",
        "data": {
            "celebrities.json": "",
            "styles.json": "",
            "themes.json": ""
        },
        "assets": {
            "icons": {}
        }
    }
}

print("Creating Celebrity Portrait Prompts App...")
print("Project structure planned:")
for folder, contents in project_structure.items():
    print(f"📁 {folder}/")
    if isinstance(contents, dict):
        for file in contents:
            if isinstance(contents[file], dict):
                print(f"  📁 {file}/")
                for subfile in contents[file]:
                    print(f"    📄 {subfile}")
            else:
                print(f"  📄 {file}")