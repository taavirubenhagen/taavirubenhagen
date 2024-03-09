cd helper_websites
firebase deploy
cd ..

git pull origin main

git add .
git commit -m "Untitled"
git push

vite build