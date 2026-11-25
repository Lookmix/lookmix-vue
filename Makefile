chromium:
	chromium-browser --disable-web-security --user-data-dir=/home/vinicius/chromium

chromium-flatpak:
	flatpak run org.chromium.Chromium --disable-web-security --user-data-dir=/home/vinicius/chromium