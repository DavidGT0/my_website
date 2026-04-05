# 1. בדיקה ועדכון GitHub
Write-Host "--- Checking for changes... ---" -ForegroundColor Yellow
$changes = git status --porcelain
if ($changes) {
    git add .
    git commit -m "Auto-update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git push
    Write-Host "--- GitHub Updated! ---" -ForegroundColor Green
} else {
    Write-Host "--- No changes to push to GitHub. ---" -ForegroundColor Gray
}

# 2. בניית האתר
Write-Host "--- Building the project... ---" -ForegroundColor Cyan
npm run build

# 3. הגדרות שרת
$KEY_PATH = "C:\Users\DELL\Desktop\MyProjects\aws-key.pem"
$SERVER = "ubuntu@dgazit.tech"

# 4. העלאה ל-AWS (מעלים את התיקייה בשלמותה בלי כוכבית)
Write-Host "--- Uploading to AWS... ---" -ForegroundColor Cyan
scp -i $KEY_PATH -r dist "${SERVER}:/tmp/"

# 5. פריסה בשרת
Write-Host "--- Deploying on Server... ---" -ForegroundColor Cyan
ssh -i $KEY_PATH $SERVER "
    sudo rm -rf /var/www/html/*;
    sudo cp -r /tmp/dist/* /var/www/html/;
    sudo chown -R www-data:www-data /var/www/html/;
    sudo rm -rf /tmp/dist;
    sudo systemctl restart nginx
"

Write-Host "--- ALL DONE! ---" -ForegroundColor Green