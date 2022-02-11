rd public /s /q
if exist public rd /s /q public
cd scores

npm --no-git-tag-version version patch & ionic build --aot --prod