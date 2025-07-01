import os

# Recorre todos los archivos en el directorio actual
for filename in os.listdir('.'):
    # Ignora directorios (opcional)
    if os.path.isfile(filename):
        upper_filename = filename.upper()
        if filename != upper_filename:
            os.rename(filename, upper_filename)
            print(f'Renamed: {filename} -> {upper_filename}')
