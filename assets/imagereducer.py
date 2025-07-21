import os
from PIL import Image

# === CONFIGURATION ===
MAX_WIDTH = 1024
MAX_FILESIZE_KB = 500
SUPPORTED_FORMATS = (".jpg", ".jpeg", ".png")
INPUT_FOLDER = "C:/Users/brooklyn/thundra.gov/public/assets/compressed_images"  # Change to your target directory
OUTPUT_FOLDER = "C:/Users/brooklyn/thundra.gov/public/assets/compressed_images/2"
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

def compress_image(input_path, output_path):
    img = Image.open(input_path)

    # Resize if wider than max
    if img.width > MAX_WIDTH:
        new_height = int((MAX_WIDTH / img.width) * img.height)
        img = img.resize((MAX_WIDTH, new_height), Image.LANCZOS)

    # Save progressively lower quality until under target size
    quality = 95
    while quality > 10:
        img.save(output_path, optimize=True, quality=quality)
        size_kb = os.path.getsize(output_path) / 1024
        if size_kb <= MAX_FILESIZE_KB:
            break
        quality -= 5

    if quality <= 10:
        print(f"WARNING: Couldn't compress {os.path.basename(input_path)} under {MAX_FILESIZE_KB}KB")

def process_images():
    for filename in os.listdir(INPUT_FOLDER):
        if not filename.lower().endswith(SUPPORTED_FORMATS):
            continue

        full_path = os.path.join(INPUT_FOLDER, filename)
        size_kb = os.path.getsize(full_path) / 1024

        if size_kb <= MAX_FILESIZE_KB:
            continue

        output_path = os.path.join(OUTPUT_FOLDER, filename)
        print(f"Compressing {filename} ({int(size_kb)}KB)...")
        compress_image(full_path, output_path)

if __name__ == "__main__":
    process_images()