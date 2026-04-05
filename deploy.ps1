# 1. עדכון ה-GitHub (אוטומטי)
Write-Host "--- Pushing to GitHub... ---" -ForegroundColor Yellow
git add .
git commit -m "Auto-update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push

# 2. בניית האתר (Vite)
Write-Host "--- Building the project... ---" -ForegroundColor Cyan
npm run build

# 3. הגדרות שרת
$KEY_PATH = "C:\Users\DELL\Desktop\MyProjects\aws-key.pem"
$SERVER = "ubuntu@dgazit.tech"

# 4. העלאה ל-AWS
Write-Host "--- Uploading to AWS... ---" -ForegroundColor Cyan
scp -i $KEY_PATH -r dist/* "${SERVER}:/tmp/"

# 5. פריסה בשרת
Write-Host "--- Deploying on Server... ---" -ForegroundColor Cyan
ssh -i $KEY_PATH $SERVER "
    sudo rm -rf /var/www/html/*;
    sudo cp /tmp/index.html /var/www/html/;
    sudo cp -r /tmp/assets /var/www/html/;
    sudo rm -rf /tmp/assets /tmp/index.html;
    sudo systemctl restart nginx
"

Write-Host "--- ALL DONE! GitHub and Website are updated. ---" -ForegroundColor Green