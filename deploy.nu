cd helper_websites
firebase deploy
cd ..

git pull origin main

vite build

git add .
git commit -m "Untitled"
git push