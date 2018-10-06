rm dist.zip
embark build
cp config.xml dist/config.xml
cp icon.png dist/icon.png
cd dist
zip -r dist.zip .
cd ..
mv dist/dist.zip ./dist.zip
