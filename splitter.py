import os
from PIL import Image

TILE_SIZE = 256
INPUT_DIR = "map_inputs"
OUTPUT_DIR = "tiles"

def pad_image_to_tile_size(img):
    width, height = img.size
    padded_width = ((width + TILE_SIZE - 1) // TILE_SIZE) * TILE_SIZE
    padded_height = ((height + TILE_SIZE - 1) // TILE_SIZE) * TILE_SIZE

    if padded_width == width and padded_height == height:
        return img  # No padding needed

    padded_img = Image.new("RGBA", (padded_width, padded_height), (0, 0, 0, 0))
    padded_img.paste(img, (0, 0))
    return padded_img

def tile_image(img_path, zoom_level):
    img = Image.open(img_path).convert("RGBA")
    img = pad_image_to_tile_size(img)
    width, height = img.size

    tiles_x = width // TILE_SIZE
    tiles_y = height // TILE_SIZE

    for x in range(tiles_x):
        for y in range(tiles_y):
            left = x * TILE_SIZE
            upper = y * TILE_SIZE
            right = left + TILE_SIZE
            lower = upper + TILE_SIZE

            tile = img.crop((left, upper, right, lower))

            output_path = os.path.join(OUTPUT_DIR, str(zoom_level), str(x))
            os.makedirs(output_path, exist_ok=True)
            tile.save(os.path.join(output_path, f"{y}.png"))

    print(f"Tiled zoom level {zoom_level}: {tiles_x}×{tiles_y} tiles")

def main():
    for filename in os.listdir(INPUT_DIR):
        if not filename.endswith(".png"):
            continue
        zoom_str = ''.join(filter(str.isdigit, filename))
        zoom_level = int(zoom_str)
        img_path = os.path.join(INPUT_DIR, filename)
        tile_image(img_path, zoom_level)

if __name__ == "__main__":
    main()