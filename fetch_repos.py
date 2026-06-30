import urllib.request
import json

url = "https://api.github.com/users/WaqarMoid/repos?per_page=100"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        for repo in data:
            homepage = repo.get('homepage')
            if homepage and str(homepage).strip():
                print(f"Repo: {repo['name']} - URL: {homepage}")
except Exception as e:
    print("Error:", e)
