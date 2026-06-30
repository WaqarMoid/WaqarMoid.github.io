$env:GITHUB_TOKEN=""
git init
git config user.name "WaqarMoid"
git config user.email "waqarmoid23@iitk.ac.in"
git add .
git commit -m "Initial commit for portfolio"

# Try to create the repo
gh repo create WaqarMoid.github.io --public -y --source . --remote origin --push
if ($LASTEXITCODE -ne 0) {
    Write-Host "Repo might already exist. Trying to push to it directly..."
    git remote add origin https://github.com/WaqarMoid/WaqarMoid.github.io.git
    git branch -M main
    git push -u origin main --force
}
