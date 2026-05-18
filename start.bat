@echo off
echo Iniciando servidor local para permitir a rolagem do video...
start http://localhost:8000
"C:\Users\Usuario\AppData\Local\Programs\Python\Python311\python.exe" -m http.server 8000
